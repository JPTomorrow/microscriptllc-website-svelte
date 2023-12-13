import { formBlogPostSlug } from '$lib/scripts/blog';
import { tursoClient } from '$lib/server/turso';
import type { RequestHandler } from '@sveltejs/kit';

const pages: string[] = ['blog', 'contact', 'pricing', 'services']; //list of pages as a string ex. ["about", "blog", "contact"]
const site = 'https://www.microscriptllc.com';

export const GET: RequestHandler = async () => {
	const db = tursoClient();
	const posts = await db.query.blogPosts.findMany({
		columns: {
			id: true,
			headline: true,
			createdAt: true
		}
	});

	const body = sitemap(posts, pages);
	const response = new Response(body);
	response.headers.set('Cache-Control', 'max-age=0, s-maxage=3600');
	response.headers.set('Content-Type', 'application/xml');
	return response;
};

const sitemap = (
	posts: { id: number; headline: string; createdAt: number }[],
	pages: string[]
) => `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
  xmlns:xhtml="https://www.w3.org/1999/xhtml"
  xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
>
  <url>
    <loc>${site}</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  ${pages
		.map(
			(page) => `
  <url>
    <loc>${site}/${page}</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  `
		)
		.join('')}
    ${posts
			.map((post) => {
				const cr = new Date(0);
				cr.setUTCSeconds(post.createdAt);

				return `
    <url>
      <loc>${site}/blog/${formBlogPostSlug(post.headline, post.id)}</loc>
      <changefreq>weekly</changefreq>
      <lastmod>${`${cr.getFullYear()}-${cr.getMonth() < 10 ? '0' : ''}${cr.getMonth()}-${
				cr.getDate() < 10 ? '0' : ''
			}${cr.getDate()}`}</lastmod>
      <priority>0.3</priority>
    </url>
    `;
			})
			.join('')}
</urlset>`;
