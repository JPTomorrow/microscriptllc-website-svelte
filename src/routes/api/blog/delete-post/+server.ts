import { tursoClient } from '$lib/server/turso';
import type { RequestHandler } from '@sveltejs/kit';
import { blogPosts } from '../../../../../drizzle/schema';
import { eq } from 'drizzle-orm';

export const POST: RequestHandler = async ({ request }) => {
	const db = tursoClient();
	const body = await request.json();
	const id = body['postId'] as number;
	await db.delete(blogPosts).where(eq(blogPosts.id, id));

	return new Response(JSON.stringify({ success: true }), {
		status: 200
	});
};
