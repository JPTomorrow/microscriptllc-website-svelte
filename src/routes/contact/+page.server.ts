import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => {
	const standardQuote = url.searchParams.get('standardQuote') === 'true';
	const eCommerceQuote = url.searchParams.get('eCommerceQuote') === 'true';
	const aiIntegrationQuote = url.searchParams.get('aiIntegrationQuote') === 'true';

	return { standardQuote, eCommerceQuote, aiIntegrationQuote };
};
