<script lang="ts">
	import { PUBLIC_BRAND_NAME } from '$env/static/public';
	import Footer from '$lib/footer.svelte';
	import { setScrollY } from '$lib/scrollstore';
	import Seo from '$lib/seo.svelte';
	import TitleSpaced from '$lib/title-spaced.svelte';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	export let data;
	const posts = data.blogPosts;

	// capture scroll to hide header
	let outer: HTMLDivElement;
	onMount(() => {
		setScrollY(outer.scrollTop);
		outer.addEventListener('scroll', (_) => {
			setScrollY(outer.scrollTop);
		});
	});

	function cvtTimestamp(createdAt: number) {
		const date = new Date(0);
		date.setUTCSeconds(createdAt);
		return date.toLocaleDateString();
	}

	let collapsed = true;
</script>

<Seo
	title="Blog"
	description="The blog page. Random thoughts by Justin Morrow, the co-founder of {PUBLIC_BRAND_NAME}."
	type="WebPage"
/>

<div in:fade|global={{ duration: 200 }} class="animated-space-bg">
	<div bind:this={outer} class="page-inner-scroll-container pt-[85px]">
		<TitleSpaced headerText="Justin talks about tech" />
		{#each posts as post, i (i)}
			<div class="post-{(i % 2) + 1}">
				<h2 class="text-xl lg:text-5xl mb-2 font-normal lg:font-thin w-11/12">
					{post.headline}
				</h2>
				<p class="text-sm lg:text-xl ml-5 mb-5 font-thin">
					Posted On: {cvtTimestamp(post.createdAt)}
				</p>

				<p
					class="text-lg lg:text-xl mb-2 font-thin text-primary-50 {collapsed
						? 'line-clamp-3 lg:line-clamp-4'
						: ''}"
				>
					{#each post.body.replaceAll('\\n', 'AF12PVr5').split('AF12PVr5') as paragraph}
						{paragraph}
						<br />
					{/each}
				</p>
				<button
					on:click={() => {
						collapsed = !collapsed;
					}}
					class="btn1 mt-5">{collapsed ? 'Read More' : '^'}</button
				>
			</div>
		{/each}
		<Footer class="hidden lg:flex" />
	</div>
</div>

<style lang="postcss">
	.post-1 {
		@apply flex flex-col items-start text-left 
		w-full h-fit 
		bg-black backdrop-blur-sm bg-opacity-25
		px-5 lg:px-64 py-5;
	}
	.post-2 {
		@apply flex flex-col items-start text-left 
		w-full h-fit bg-transparent
		px-5 lg:px-64 py-5;
	}
</style>
