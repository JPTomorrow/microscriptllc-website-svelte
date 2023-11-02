import type { RequestHandler } from '@sveltejs/kit';
import { openai } from '$lib/server/gpt';
import type { ChatCompletionMessage } from 'openai/resources/chat/completions';

export const POST: RequestHandler = async ({ request }) => {
	const body = await request.json();
	const articleSubject = body['articleSubject'] as string;
	const paragraphs = body['articleParagraphs'] as string;

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
			content: `Write a less that 10 word headline for a tech blog article. \
			The subject of the blog is ${articleSubject}. \
			Here is the full article for you to take into consideration when making your headline: 

			${paragraphs}
			
			Avoid bombastic and hyperbole headlines.`
		}
	];

	const headlineResponse = await openai.chat.completions.create({
		model: 'gpt-4',
		messages: msgs,
		max_tokens: 50,
		n: 1
	});
	const headlineText = headlineResponse.choices[0].message.content;

	return new Response(
		JSON.stringify({
			headline: headlineText
		}),
		{
			status: 200
		}
	);
};
