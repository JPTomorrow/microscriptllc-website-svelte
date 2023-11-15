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

	const createdAt = new Date(0);
	createdAt.setUTCSeconds(post.createdAt);
	let imageBase64: string;
	onMount(async () => {
		imageBase64 = await fetch(post.imgUrl, { method: 'GET' }).then((r) => r.text());
	});
</script>

<Seo
	title={post.headline}
	description="a tech blog post about {post.headline}"
	type="WebPage"
	isArticle
	publishedTime={createdAt}
/>

<div in:fade|global={{ duration: 200 }} class="animated-space-bg">
	<div bind:this={outer} class="page-inner-scroll-container pt-[85px]">
		<TitleSpaced headerText="Justin talks about tech" />
		<article class="post-1">
			<div class="relative w-full h-[300px]">
				<img
					class="w-full h-full object-cover rounded-t-2xl"
					src="data:image/jpeg;base64,{imageBase64}"
					alt="Blog Post Art"
				/>
				<div
					class="absolute-centered w-5/6 text-center drop-shadow-xl border-y-[2px] border-x-[10px] p-5 bg-black bg-opacity-25"
				>
					{@html post.headline}
				</div>
			</div>
			<p class="text-sm lg:text-xl ml-5 mb-5 font-thin">
				Posted On: <Time timestamp={createdAt.toLocaleDateString()} />
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
	article :global(h1) {
		@apply text-2xl lg:text-5xl my-2 font-bold text-primary-200;
	}
	article :global(h2) {
		@apply text-xl lg:text-2xl mb-2 mt-5 font-light;
	}
	article :global(p) {
		@apply text-base lg:text-lg my-2 font-thin;
	}

	.post-1 {
		@apply flex flex-col items-start text-left 
		w-full h-fit 
		bg-black backdrop-blur-sm bg-opacity-25
		px-5 lg:px-48 py-5;
	}
</style>
