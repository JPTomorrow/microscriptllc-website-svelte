import { PRIVATE_OPENAI_API_KEY } from '$env/static/private';
import { OpenAIStream } from 'ai';
import { OpenAI } from 'openai';
import type { ChatCompletionMessage, ChatCompletionCreateParams } from 'openai/resources/chat';

export const openai = new OpenAI({
	apiKey: PRIVATE_OPENAI_API_KEY
});

export async function getMessage(msgs: ChatCompletionMessage[]) {
	const systemPrompt: ChatCompletionMessage = {
		role: 'system',
		content: `Assume the role of a helpdesk assistant for \
		MicroScript, the web development company that you work at. \
		Your named GAIA.You should reply how a helpdesk assistant \
		would. Don't be overly polite. Don't apologize.Be more \
		casual in your language.`
	};

	let all_msgs = [systemPrompt, ...msgs];
	const response = await openai.chat.completions.create({
		model: 'gpt-4',
		stream: true,
		messages: all_msgs
	});

	const stream = OpenAIStream(response);
	return stream;
}
