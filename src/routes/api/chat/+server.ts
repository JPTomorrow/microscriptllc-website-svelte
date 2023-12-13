import { getMessage } from '$lib/server/gpt';
import type { RequestHandler } from '@sveltejs/kit';
import { StreamingTextResponse } from 'ai';
import type { ChatCompletionMessage } from 'openai/resources/chat/index.js';

export const POST: RequestHandler = async ({ request }) => {
	const body = await request.json();
	const msgs = body['messages'] as ChatCompletionMessage[];
	const stream = await getMessage(msgs);
	return new StreamingTextResponse(stream);
};
