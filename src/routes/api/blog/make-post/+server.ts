import { tursoClient } from '$lib/server/turso';
import type { RequestHandler } from '@sveltejs/kit';
import { openai } from '$lib/server/gpt';
import type { ChatCompletionMessage } from 'openai/resources/chat/completions';

export const POST: RequestHandler = async ({ request }) => {
	// const db = tursoClient();
	const body = await request.json();
	const subject = body['articleSubject'] as string;

	const systemPrompt: ChatCompletionMessage = {
		role: 'system',
		content: `Assume the role of a web developer who is writing \
        tech articles for a blog. Don't write a headline or title, not even a placeholder.
        
        Write your article response in html format only the innermost <h1> <h2> and <p> tags.`
	};

	const msgs: ChatCompletionMessage[] = [
		systemPrompt,
		{ role: 'user', content: `Write a blog article about ${subject}` }
	];

	const bodyResponse = await openai.chat.completions.create({
		model: 'gpt-4',
		messages: msgs,
		max_tokens: 3000
	});
	const bodyText = bodyResponse.choices[0].message.content;

	const headline_msgs: ChatCompletionMessage[] = [
		systemPrompt,
		{
			role: 'user',
			content: `Write a headline for the following article: 
        ${bodyText}`
		}
	];

	const headlineResponse = await openai.chat.completions.create({
		model: 'gpt-4',
		messages: headline_msgs,
		max_tokens: 150
	});
	const headlineText = headlineResponse.choices[0].message.content;

	return new Response(
		JSON.stringify({
			headline: headlineText,
			body: bodyText
		}),
		{
			status: 200
		}
	);
};
