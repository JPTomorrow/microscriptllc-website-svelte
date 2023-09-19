<script lang="ts">
	import Footer from '$lib/footer.svelte';
	import { setScrollY } from '$lib/scrollstore';
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
</script>

<div in:fade|global={{ duration: 200 }} class="animated-space-bg">
	<div bind:this={outer} class="page-inner-scroll-container pt-[85px]">
		<TitleSpaced headerText="Justin talks about tech" />
		{#each posts as post, i (i)}
			<div class="post-{(i % 2) + 1}">
				<h2 class="text-2xl mb-2">{post.headline}</h2>
				<p class="text-sm text-gray-500">{post.createdAt}</p>
				<p class="mb-2">{post.body}</p>
			</div>
		{/each}
		<a href="/" class="btn1">Go Back</a>
		<Footer class="hidden lg:flex" />
	</div>
</div>

<style lang="postcss">
	.post-1 {
		@apply flex flex-col items-start text-left 
		w-full h-fit 
		bg-black backdrop-blur-sm bg-opacity-25;
	}
	.post-2 {
		@apply w-full h-fit  bg-transparent;
	}
</style>
