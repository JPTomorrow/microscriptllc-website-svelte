import { tursoClient } from '$lib/server/turso';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const db = tursoClient();
	const blogPosts = await db.query.blogPosts.findMany({
		columns: {
			id: true,
			headline: true,
			shortDescription: true,
			createdAt: true
		}
	});

	if (blogPosts !== undefined) {
		return { blogPosts };
	}

	return { blogPosts: [] };
};
