import { openai } from './gpt';

export async function generateBlogPost() {
	// const functions = [
	// 	{
	// 		name: 'get_current_weather',
	// 		description: 'Get the current weather in a given location',
	// 		parameters: {
	// 			type: 'object',
	// 			properties: {
	// 				location: {
	// 					type: 'string',
	// 					description: 'The city and state, e.g. San Francisco, CA'
	// 				},
	// 				unit: { type: 'string', enum: ['celsius', 'fahrenheit'] }
	// 			},
	// 			required: ['location']
	// 		}
	// 	}
	// ];

	const response = await openai.chat.completions.create({
		model: 'gpt-4',
		messages: [
			{
				role: 'system',
				content:
					'You are a professional web developer who is writing a blog.You write 4 paragraph opinion pieces with no titles or subtitles. No code as well.'
			},
			{ role: 'user', content: 'Write a blog posst for the ?' }
			// { role: 'assistant', content: 'The Los Angeles Dodgers won the World Series in 2020.' },
			// { role: 'user', content: 'Where was it played?' }
		]
	});

	return response.choices[0];
}
