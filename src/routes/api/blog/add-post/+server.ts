import { tursoClient } from '$lib/server/turso';
import type { RequestHandler } from '@sveltejs/kit';
import { blogPosts } from '../../../../../drizzle/schema';

export const POST: RequestHandler = async ({ request }) => {
	const db = tursoClient();
	const body = await request.json();
	const postToAdd = body['blogPost'] as typeof blogPosts.$inferInsert;
	await db.insert(blogPosts).values({
		headline: postToAdd.headline,
		shortDescription: postToAdd.shortDescription,
		body: postToAdd.body
	});

	return new Response(JSON.stringify({ success: true }), {
		status: 200
	});
};
