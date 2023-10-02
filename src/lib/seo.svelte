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
		content="cannabis, cannnabis dispensary, buy cannabis online, weed, smoke, shop online, ecommerce, ai, ai bud tender, ai budtender, cannabis consulting"
	/>
	<meta
		name="description"
		content="{description +
			'. '}Discover a unique cannabis shopping experience at {PUBLIC_BRAND_NAME}, your friendly neighborhood dispensary. Offering both human and AI budtender consultations to cater to your preferences, along with a seamless online shopping platform. Explore our diverse range of quality cannabis products and get personalized recommendations effortlessly. Your journey towards finding the perfect blend starts here at {PUBLIC_BRAND_NAME}."
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
