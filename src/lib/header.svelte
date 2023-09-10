<script lang="ts">
	import { Menu2 } from 'tabler-icons-svelte';
	import { Drawer, LightSwitch } from '@skeletonlabs/skeleton';
	import { drawerStore } from '@skeletonlabs/skeleton';
	import Github from '$lib/github.svelte';
	import Logo from '$lib/logo.svelte';
	import { slide } from 'svelte/transition';
	import { onMount } from 'svelte';
	import Navlinks from '$lib/navlinks.svelte';
	import { scrollYStore } from '$lib/scrollstore';
	import Linkedin from './linkedin.svelte';

	let playAnim = false;

	onMount(() => {
		playAnim = true;
	});

	// Open the drawer:
	function drawerOpen(): void {
		drawerStore.open();
	}
</script>

<!-- <h1 class="absolute">{$scrollYStore}</h1> -->
{#if $scrollYStore <= 0}
	<div
		out:slide={{ axis: 'y', duration: 200 }}
		class="fixed hidden md:flex w-screen bg-transparent justify-between p-5"
	>
		{#if playAnim}
			<Logo />
			<div class="flex h-full items-center justify-between gap-7">
				<!-- <NavLinks /> -->
				<div
					in:slide|global={{ delay: 0, axis: 'x', duration: 600 }}
					class="flex gap-3 items-center justify-between"
				>
					<Linkedin />
					<Github />
					<div class="border-[1px] border-primary-200 rounded-full p-[2px]">
						<LightSwitch rounded="rounded-full" />
					</div>
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
{/if}

<Drawer position="bottom">
	<div class="w-full flex flex-col items-center justify-center p-5 gap-5">
		<div class="flex w-1/2 justify-between items-center gap-5">
			<Logo />
			<div class="h-fit border-[1px] border-primary-200 rounded-full p-[2px]">
				<LightSwitch rounded="rounded-full" />
			</div>
		</div>
		<!-- <Navlinks /> -->
	</div>
</Drawer>
