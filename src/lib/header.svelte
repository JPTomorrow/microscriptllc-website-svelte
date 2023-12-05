<script lang="ts">
	import { Menu2, X } from 'tabler-icons-svelte';
	import { slide } from 'svelte/transition';
	import { onMount } from 'svelte';

	import Github from '$lib/github.svelte';
	import Logo from '$lib/logo.svelte';
	import Navlinks from '$lib/navlinks.svelte';
	import { scrollYStore } from '$lib/scrollstore';
	import Linkedin from '$lib/linkedin.svelte';
	import FooterInfo from '$lib/footer-info.svelte';

	let playAnim = false;

	onMount(() => {
		playAnim = true;
	});
</script>

<!-- <h1 class="absolute">{$scrollYStore}</h1> -->
{#if $scrollYStore <= 0}
	<nav
		out:slide={{ axis: 'y', duration: 200 }}
		class="fixed hidden lg:flex w-screen bg-transparent justify-between p-5 z-20"
	>
		{#if playAnim}
			<Logo />
			<div class="flex h-full items-center justify-between gap-7">
				<Navlinks />
				<div
					in:slide|global={{ delay: 0, axis: 'x', duration: 600 }}
					class="flex gap-3 items-center justify-between"
				>
					<Linkedin />
					<Github />
				</div>
			</div>
		{/if}
	</nav>
{/if}
<div
	class="fixed lg:hidden flex w-full justify-between items-center p-5 px-5 bg-black bg-opacity-30 backdrop-blur-sm z-20"
>
	<Logo />
	<label for="my-drawer" class="drawer-button"
		><Menu2
			class="rounded-md p-1 border-[1px] bg-secondary bg-opacity-60 hover:bg-primary hover:bg-opacity-60"
			size="32"
			strokeWidth="2"
		/></label
	>
</div>

<div class="drawer z-30">
	<input id="my-drawer" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content" />
	<div class="drawer-side">
		<label for="my-drawer" aria-label="close sidebar" class="drawer-overlay" />
		<div class="hidescroll flex flex-col gap-5 bg-base-100 p-5 h-full overflow-y-auto">
			<div class="flex w-full justify-between items-center gap-5">
				<Logo />
			</div>
			<FooterInfo />
		</div>
	</div>
</div>

<style>
	.hidescroll {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}
</style>
