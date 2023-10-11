import type { PageServerLoad } from '../$types';
import { tursoClient } from '$lib/server/turso';
import { blogPosts } from '../../../../drizzle/schema';
import { eq } from 'drizzle-orm';

export const load: PageServerLoad = async ({ params }) => {
	const db = tursoClient();
	const post = await db.query.blogPosts.findFirst({
		where: eq(blogPosts.id, params.id),
		columns: {
			shortDescription: false
		}
	});
	return { post };
};
