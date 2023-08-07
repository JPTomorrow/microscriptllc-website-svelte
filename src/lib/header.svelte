<script lang="ts">
	import { ArrowUpBar, Menu2 } from 'tabler-icons-svelte';
	import { Drawer, LightSwitch } from '@skeletonlabs/skeleton';
	import { env } from '$env/dynamic/public';
	import { drawerStore } from '@skeletonlabs/skeleton';

	// Open the drawer:
	function drawerOpen(): void {
		drawerStore.open();
	}
</script>

<div class="fixed hidden md:flex w-screen bg-transparent justify-between p-5">
	<div class="flex items-center">
		<ArrowUpBar class="align-middle mr-5" />
		<a href="/"><strong class="text-3xl">{env.PUBLIC_BRAND_NAME}</strong></a>
	</div>
	<div class="flex items-center">
		<LightSwitch />
	</div>
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
