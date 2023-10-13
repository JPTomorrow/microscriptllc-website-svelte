import { tursoClient } from '$lib/server/turso';
import type { RequestHandler } from '@sveltejs/kit';
import { blogPosts } from '../../../../../drizzle/schema';
import { eq } from 'drizzle-orm';
import { del } from '@vercel/blob';
import { BLOB_READ_WRITE_TOKEN } from '$env/static/private';

export const POST: RequestHandler = async ({ request }) => {
	const db = tursoClient();
	const body = await request.json();
	const id = body['postId'] as number;
	const imgUrl = await db.query.blogPosts
		.findFirst({
			where: eq(blogPosts.id, id),
			columns: {
				imgUrl: true
			}
		})
		.then((post) => post!.imgUrl);
	await del(imgUrl, { token: BLOB_READ_WRITE_TOKEN });
	await db.delete(blogPosts).where(eq(blogPosts.id, id));

	return new Response(JSON.stringify({ success: true }), {
		status: 200
	});
};
