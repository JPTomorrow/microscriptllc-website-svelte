<script lang="ts">
	import AiUi from '$lib/ai-ui.svelte';
	import Footer from '$lib/footer.svelte';
	import { setScrollY } from '$lib/scrollstore';
	import Seo from '$lib/seo.svelte';
	import TitleSpaced from '$lib/title-spaced.svelte';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import Time from 'svelte-time';

	export let data;
	const post = data.post!;

	// capture scroll to hide header
	let outer: HTMLDivElement;
	onMount(() => {
		setScrollY(outer.scrollTop);
		outer.addEventListener('scroll', (_) => {
			setScrollY(outer.scrollTop);
		});
	});

	const createdAt = new Date(post.createdAt);
</script>

<Seo
	title="Justins Talks About Tech - Blog Article"
	description={post.headline}
	type="WebPage"
	isArticle
	publishedTime={createdAt}
/>

<div in:fade|global={{ duration: 200 }} class="animated-space-bg">
	<div bind:this={outer} class="page-inner-scroll-container pt-[85px]">
		<TitleSpaced headerText="Justin talks about tech" />
		<article class="post-1">
			<h1 class="w-11/12">
				{post.headline}
			</h1>
			<p class="text-sm lg:text-xl ml-5 mb-5 font-thin">
				Posted On: <Time timestamp={createdAt} />
			</p>

			<p class="text-lg lg:text-xl mb-2 font-thin text-primary-50">
				{@html post.body}
			</p>
			<a href="/blog" class="btn1 mt-5">Back</a>
		</article>
		<Footer class="hidden lg:flex" />
	</div>
</div>

<AiUi />

<style lang="postcss">
	.post-1 {
		@apply flex flex-col items-start text-left 
		w-full h-fit 
		bg-black backdrop-blur-sm bg-opacity-25
		px-5 lg:px-64 py-5;
	}
</style>
