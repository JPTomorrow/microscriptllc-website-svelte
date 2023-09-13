<script lang="ts">
	import { setScrollY } from '$lib/scrollstore';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

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
		<div class="w-3/4 px-10">
			<h1 class="uppercase mb-2 !text-6xl font-light underline">Privacy Policy</h1>
			<p class="uppercase mb-5 !text-sm">Last updated: 9/13/2023</p>

			<h2 class="">Introduction</h2>
			<p class="	">Last updated: 9/13/2023</p>

			<a href="/" class="btn1">Go Back</a>
		</div>
	</div>
</div>

<style lang="postcss">
	h2,
	p {
		@apply text-lg;
	}
</style>
