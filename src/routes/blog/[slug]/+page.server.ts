import type { PageServerLoad } from '../$types';
import { tursoClient } from '$lib/server/turso';
import { blogPosts } from '../../../../drizzle/schema';
import { eq } from 'drizzle-orm';
import { getIdFromBlogPostSlug } from '$lib/scripts/blog';

export const load: PageServerLoad = async ({ params }) => {
	const db = tursoClient();
	const s = params.slug;
	const id = getIdFromBlogPostSlug(s);
	if (!id) {
		throw new Error('Invalid product slug');
	}
	const post = await db.query.blogPosts.findFirst({
		where: eq(blogPosts.id, id),
		columns: {
			shortDescription: false
		}
	});
	return { post };
};
