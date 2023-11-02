import type { RequestHandler } from '@sveltejs/kit';
import { openai } from '$lib/server/gpt';
import type { ChatCompletionMessage } from 'openai/resources/chat/completions';

export const POST: RequestHandler = async ({ request }) => {
	const body = await request.json();
	const paragraphs = body['articleParagraphs'] as string;
	let articleSubject = body['articleSubject'] as string;
	let paragraphSubject = body['paragraphSubject'] as string;

	// implement logic to go fetch an article and paragraph subject from the db
	if (!articleSubject) {
		articleSubject = 'View Transitions API';
	}

	// implement logic to go fetch an article and paragraph subject from the db
	if (!paragraphSubject) {
		paragraphSubject = 'How View Transitions Work';
	}
	// implement logic to go fetch an article and paragraph subject from the db

	const systemPrompt: ChatCompletionMessage = {
		role: 'system',
		content: `Imagine you are a senior content writer in a \
		content production team. Your responsibility is crafting \
		blog articles that are search engine friendly. The articles should be \
		easy to understand. You focus on writing opinion piece articles about \
		using new technologies in the web development industry. Your articles \
		should have the tone of a senior web developer.`
	};

	const msgs: ChatCompletionMessage[] = [
		systemPrompt,
		{
			role: 'user',
			content: `${
				paragraphs === ''
					? `Write one introductory paragraph to start off a blog article about the following subject: 
			
			${articleSubject}
			`
					: `Write the next paragraph for the following blog article:
					
					${`${articleSubject}\n\n${paragraphs}`}
					
					`
			} 
			The subject of the paragraph should be about ${paragraphSubject}
			
			You should only write a paragraph header followed by \
			one paragraph and optionally, one example block of code \
			if it helps form a clearer understanding of the paragraph. \
			The header, paragraph and optional code should be \ 
			separated by the text !!!SPLIT!!! on a new line. \
			Only include the code example if I ask for it in  \
			the subject. reply only in markdown. don't label any of the sections like the paragraph header. Markdown the paragraph header with ## heading.`
		}
	];

	const bodyResponse = await openai.chat.completions.create({
		model: 'gpt-4',
		messages: msgs,
		max_tokens: 2000,
		n: 1
	});

	const msg = bodyResponse.choices[0].message.content as string;
	const [headerText, contentText, code] = msg.split('!!!SPLIT!!!');
	return new Response(
		JSON.stringify({
			header: headerText,
			content: contentText,
			codeExample: code ? code : ''
		}),
		{
			status: 200
		}
	);
};
