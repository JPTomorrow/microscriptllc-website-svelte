<script lang="ts">
	import { PUBLIC_BRAND_NAME } from '$env/static/public';
	import { page } from '$app/stores';

	export let title: string;
	export let description: string;
	export let type: string;

	export let image: { url: string; alt: string } = {
		url: '/images/seo/seo-big.webp',
		alt: `${PUBLIC_BRAND_NAME}`
	};
	export let squareImage: { url: string; alt: string } = {
		url: '/images/seo/seo-small.webp',
		alt: `${PUBLIC_BRAND_NAME}`
	};
	export let isArticle = false;
	export let publishedTime: Date = new Date();

	$: url = $page.url.href;
	const metaDescription = `${
		description + '. '
	}Unlock your business potential with MicroScript LLC's top-notch web design services as well as exciting new AI integrations. Transform your online presence today. Learn more now!`;
</script>

<svelte:head>
	<title>{title} | {PUBLIC_BRAND_NAME}</title>
	<meta
		name="keywords"
		content="Software Engineer, Software Developer, Web Development, Web Developer, Web Designer, Web Engineer, OpenAI, ai, ai consulting, photography, image generation, SEO"
	/>
	<meta name="description" content={metaDescription} />

	<meta name="og:title" content={PUBLIC_BRAND_NAME} />
	<meta name="og:url" content={url} />
	<meta name="og:type" content={isArticle ? 'article' : 'website'} />
	<meta name="og:title" content="{title} | {PUBLIC_BRAND_NAME}" />
	<meta name="og:description" content={metaDescription} />

	<meta property="og:image" content={image.url} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="627" />
	<meta property="og:image:alt" content={image.alt} />

	<meta property="og:image" content={squareImage.url} />
	<meta property="og:image:width" content="400" />
	<meta property="og:image:height" content="400" />
	<meta property="og:image:alt" content={image.alt} />

	{#if isArticle}
		<meta name="article:author" content="https://www.linkedin.com/in/morrowjustin/" />
		<meta name="article:published_time" content={publishedTime.toISOString().split('T')[0]} />
	{/if}

	{@html `<script type="application/ld+json">
                {
                    "@context": "https://schema.org",
                    "@type": "${type}",
					"name": "${title}",
                    "description": "${description}",
                    "url": "${url}"
                }
            </script>`}
</svelte:head>
