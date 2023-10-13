import type { RequestHandler } from '@sveltejs/kit';
import { openai } from '$lib/server/gpt';
import type { ChatCompletionMessage } from 'openai/resources/chat/completions';
import { put } from '@vercel/blob';
import { PRIVATE_BLOB_READ_WRITE_TOKEN } from '$env/static/private';

export const POST: RequestHandler = async ({ request }) => {
	// const db = tursoClient();
	const body = await request.json();
	const subject = body['articleSubject'] as string;

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
			content: `Write a blog article about the following topic: ${subject}
			
			The format should be as follows, replace anything inside of braces ( [] ), do not include the headline:
			

			<h2>[PARAGRAPH HEADING 1]</h2>
			<p>[PARAGRAPH 1]</p>
			<h2>[PARAGRAPH HEADING 2]</h2>
			<p>[PARAGRAPH 2]</p>
			<h2>[PARAGRAPH HEADING 3]</h2>
			<p>[PARAGRAPH 3]</p>
			<h2>[PARAGRAPH HEADING 4]</h2>
			<p>[PARAGRAPH 1]</p>
			<h2>[PARAGRAPH HEADING 5]</h2>
			<p>[PARAGRAPH 5]</p>`
		}
	];

	const bodyResponse = await openai.chat.completions.create({
		model: 'gpt-4',
		messages: msgs,
		max_tokens: 2000,
		n: 1
	});
	const bodyText = bodyResponse.choices[0].message.content;

	msgs.push(bodyResponse.choices[0].message);
	msgs.push({
		role: 'user',
		content: `Write a less that 10 word headline for the \
		article you just wrote. Avoid bombastic and hyperbole \
		headlines. Use the following format:
		
		<h1>[HEADLINE]</h1>`
	});

	const headlineResponse = await openai.chat.completions.create({
		model: 'gpt-4',
		messages: msgs,
		max_tokens: 50,
		n: 1
	});
	const headlineText = headlineResponse.choices[0].message.content;

	const imgResponse = await openai.images.generate({
		prompt: `Digital art of alien flora using a vibrant color palette and unusual shapes, no text`,
		n: 1,
		size: '1024x1024',
		response_format: 'b64_json'
	});
	const image_data = imgResponse.data[0];
	const { url } = await put(
		`blog_posts/${image_data.b64_json!.slice(0, 25)}}`,
		image_data.b64_json!,
		{
			access: 'public',
			token: PRIVATE_BLOB_READ_WRITE_TOKEN,
			contentType: 'image/jpeg'
		}
	);

	return new Response(
		JSON.stringify({
			headline: headlineText,
			imgUrl: url,
			body: bodyText
		}),
		{
			status: 200
		}
	);
};
