import { tursoClient } from '$lib/server/turso';
import type { RequestHandler } from '@sveltejs/kit';
import { blogPosts } from '../../../../../drizzle/schema';

export const POST: RequestHandler = async ({ request }) => {
	const db = tursoClient();
	const body = await request.json();
	const postToAdd = body['blogPost'];
	await db.insert(blogPosts).values({
		headline: postToAdd.headline,
		shortDescription: postToAdd.shortDescription,
		body: postToAdd.body,
		imgUrl: postToAdd.imgUrl
	});

	return new Response(JSON.stringify({ success: true }), {
		status: 200
	});
};
