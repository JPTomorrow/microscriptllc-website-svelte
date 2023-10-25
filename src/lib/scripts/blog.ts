// this will be used to make a proper url slug for a blog post
export const formBlogPostSlug = (post_name: string, post_id: Number = -1): string => {
	// strip out all non-alphanumeric characters
	const nameStripped = post_name
		.replaceAll('<h1>', '')
		.replaceAll('</h1>', '')
		.replace(/[^a-zA-Z0-9\s]/g, '')
		.split(' ')
		.filter((_, i) => i <= 3)
		.join(' ')
		.replaceAll(' ', '-')
		.toLowerCase();
	if (post_id == -1) return `${nameStripped}`;
	return `${nameStripped}-${post_id}`;
};

export const getIdFromBlogPostSlug = (slug: string) => {
	const end = slug.split('/').pop();
	if (!end) return;
	const id = parseInt(end.split('-').pop() as string);
	if (isNaN(id)) return;
	return id;
};
