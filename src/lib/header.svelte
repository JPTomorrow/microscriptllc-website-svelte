<script lang="ts">
	import { Menu2, Phone, X } from 'tabler-icons-svelte';
	import { fade, slide } from 'svelte/transition';
	import { onMount } from 'svelte';

	import Github from '$lib/github.svelte';
	import Logo from '$lib/logo.svelte';
	import Navlinks from '$lib/navlinks.svelte';
	import { scrollYStore } from '$lib/scrollstore';
	import Linkedin from '$lib/linkedin.svelte';
	import FooterInfo from '$lib/footer-info.svelte';
	import { page } from '$app/stores';
	import { afterNavigate } from '$app/navigation';

	let playAnim = false;
	let bgBlur = '';

	afterNavigate(() => {
		bgBlur = $page.url.pathname === '/' ? 'backdrop-blur-sm !bg-base-100/75 shadow-2xl' : '';
	});

	onMount(() => {
		playAnim = true;
		if ($page.url.pathname === '/') {
			bgBlur = 'backdrop-blur-sm !bg-base-100/75 shadow-2xl';
		}
	});
</script>

{#if $scrollYStore <= 0}
	<nav
		transition:slide={{ axis: 'y', duration: 200 }}
		class="fixed hidden lg:flex w-screen bg-transparent justify-between p-5 z-20 {bgBlur}"
	>
		{#if playAnim}
			<Logo />
			<div class="flex h-full items-center justify-between gap-7">
				<Navlinks />
				<div
					in:fade|global={{ delay: 0, duration: 600 }}
					class="flex gap-5 items-center justify-between"
				>
					<a href="tel:3854200435" class="nav-link flex gap-2 whitespace-nowrap">
						<Phone />
						<h1>(385) 420-0435</h1>
					</a>
					<a class="btn1 whitespace-nowrap" href="/contact">Get a Quite</a>
				</div>
			</div>
		{/if}
	</nav>
{/if}
<nav
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
</nav>

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
