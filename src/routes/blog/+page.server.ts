import { tursoClient } from '$lib/server/turso';
import { fail, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const db = tursoClient();
	const blogPosts = db.query.blogPosts.findMany({
		columns: {
			id: true,
			headline: true,
			shortDescription: true,
			createdAt: true
		}
	});

	if (blogPosts !== undefined) {
		return {
			streamed: {
				blogPosts: blogPosts
			}
		};
	}

	return { blogPosts: [] };
};

export const actions: Actions = {
	generateParagraph: async ({ request }) => {
		const formData = await request.formData();
		const username = formData.get('username');

		if (typeof username !== 'string' || username.length < 4 || username.length > 31) {
			return fail(400, {
				message: 'Invalid username'
			});
		}

		return;
	},
	generateHeadline: async ({ request }) => {},
	generateImage: async ({ request }) => {
		const formData = await request.formData();
	},
	deletePost: async ({ request }) => {}
};
