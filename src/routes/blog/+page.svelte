<script lang="ts">
	import Footer from '$lib/footer.svelte';
	import { setScrollY } from '$lib/scrollstore';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	interface BlogPost {
		name: string;
		headline: string;
		body: string;
	}

	const blogposts = [];

	// capture scroll to hide header
	let outer: HTMLDivElement;
	onMount(() => {
		setScrollY(outer.scrollTop);
		outer.addEventListener('scroll', (_) => {
			setScrollY(outer.scrollTop);
		});
	});
</script>

<div in:fade|global={{ duration: 200 }} class="">
	<div bind:this={outer} class="page-inner-scroll-container pt-[85px]">
		<h1 class="uppercase mb-5 text-2xl">Justin Dreams of Electric Sheep</h1>
		<a href="/" class="btn1">Go Back</a>
	</div>
	<Footer class="hidden lg:flex" />
</div>

<style lang="postcss">
	.post-1 {
	}
	.post-2 {
	}
</style>
