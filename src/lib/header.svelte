<script lang="ts">
	import { Menu2 } from 'tabler-icons-svelte';
	import { Drawer, LightSwitch } from '@skeletonlabs/skeleton';
	import { env } from '$env/dynamic/public';
	import { drawerStore } from '@skeletonlabs/skeleton';
	import NavLinks from '$lib/navlinks.svelte';
	import Github from '$lib/github.svelte';
	import { slide } from 'svelte/transition';
	import { onMount } from 'svelte';

	let playAnim = false;

	onMount(() => {
		playAnim = true;
	});

	// Open the drawer:
	function drawerOpen(): void {
		drawerStore.open();
	}
</script>

<div class="fixed hidden md:flex w-screen bg-transparent justify-between p-5">
	{#if playAnim}
		<a href="/" class="flex h-full items-center transition-transform hover:scale-105">
			<img
				in:slide|global={{ delay: 0, axis: 'x', duration: 600 }}
				alt="logo"
				src="/images/logo.png"
				class="w-[40px] align-middle mr-5"
			/>
			<p class="text-3xl font-thin">{env.PUBLIC_BRAND_NAME}</p>
		</a>
		<div class="flex h-full items-center justify-between gap-8">
			<NavLinks />
			<div
				in:slide|global={{ delay: 0, axis: 'x', duration: 600 }}
				class="flex gap-8 items-center justify-between"
			>
				<Github />
				<LightSwitch class="border-[1px] rounded" />
			</div>
		</div>
	{/if}
</div>

<div class="fixed md:hidden flex w-full justify-between items-center p-5 bg-transparent">
	<button class="flex items-center" on:click={drawerOpen}>
		<Menu2
			class="rounded-md p-1 border-[1px] hover:bg-primary-300 hover:bg-opacity-60"
			size="32"
			strokeWidth="2"
		/>
	</button>
</div>

<Drawer position="bottom">
	<p>Hello Skeleton</p>
</Drawer>
