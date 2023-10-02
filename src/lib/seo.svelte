<script lang="ts">
	import { PUBLIC_BRAND_NAME } from '$env/static/public';
	import { page } from '$app/stores';
	export let title: string;
	export let description: string;
	export let type: string;

	$: url = $page.url.href;
</script>

<svelte:head>
	<title>{title} | {PUBLIC_BRAND_NAME}</title>
	<meta
		name="keywords"
		content="Software Engineer, Software Developer, Web Development, Web Developer, Web Designer, Web Engineer, OpenAI, ai, ai consulting, photography, image generation, SEO"
	/>
	<meta
		name="description"
		content="{description +
			'. '}Unlock your business potential with MicroScript LLC's top-notch web design services. Transform your online presence today. Learn more now!"
	/>
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
