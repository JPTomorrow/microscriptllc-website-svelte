import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => {
	const isQuote = url.searchParams.get('quote') === 'true';

	return { isQuote };
};
