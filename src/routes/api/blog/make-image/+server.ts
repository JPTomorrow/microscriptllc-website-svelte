import type { RequestHandler } from '@sveltejs/kit';
import { openai } from '$lib/server/gpt';
import { put } from '@vercel/blob';
import { BLOB_READ_WRITE_TOKEN } from '$env/static/private';

export const POST: RequestHandler = async ({ request }) => {
	const body = await request.json();
	const imgSubject = body['imgSubject'] as string;

	const imgResponse = await openai.images.generate({
		prompt: `${imgSubject}, no text`,
		n: 1,
		size: '512x512',
		response_format: 'b64_json'
	});
	const image_data = imgResponse.data[0];
	const { url } = await put(
		`blog_posts/${image_data.b64_json!.slice(0, 25)}}`,
		image_data.b64_json!,
		{
			access: 'public',
			token: BLOB_READ_WRITE_TOKEN,
			contentType: 'image/jpeg'
		}
	);

	return new Response(
		JSON.stringify({
			imgUrl: url
		}),
		{
			status: 200
		}
	);
};
