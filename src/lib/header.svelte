<script lang="ts">
	import { AppBar, Avatar, popup, type PopupSettings } from '@skeletonlabs/skeleton';
	import { Menu2, Settings, ArrowUpBar } from 'tabler-icons-svelte';
	import { drawerStore } from '@skeletonlabs/skeleton';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import { env } from '$env/dynamic/public';

	function drawerOpen(): void {
		drawerStore.open({});
	}

	const userMenuPopup: PopupSettings = {
		event: 'click',
		target: 'userMenuPopup',
		placement: 'bottom'
	};

	const settingsMenuPopup: PopupSettings = {
		event: 'click',
		target: 'settingsMenuPopup',
		placement: 'bottom'
	};
</script>

<AppBar class="shadow-lg">
	<svelte:fragment slot="lead">
		<button
			on:click={drawerOpen}
			class="lg:hidden p-[2px] mr-3 border-[1px] rounded-md align-middle"
		>
			<Menu2 size={20} />
		</button>
		<ArrowUpBar class="align-middle mr-5" />
		<a href="/"><strong class="text-3xl">{env.PUBLIC_BRAND_NAME}</strong></a>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<LightSwitch />
		<button class="btn p-0 hover:variant-soft rounded-full" use:popup={settingsMenuPopup}
			><Settings strokeWidth={1} size={36} />
		</button>
		<button class="btn p-0" use:popup={userMenuPopup}>
			<Avatar
				class="mx-auto"
				src="https://source.unsplash.com/YOErFW8AfkI/128x128"
				width="w-10"
				rounded="rounded-full"
			/>
		</button>
	</svelte:fragment>

	<!-- User Menu -->
	<div class="card popup-card" data-popup="userMenuPopup">
		<h1 class="my-2">User Menu</h1>
		<!-- probably make links to routes here -->
		<a class="w-full btn variant-soft" href="/user/profile">Profile</a>
	</div>

	<!-- Settings Menu -->
	<div class="card popup-card" data-popup="settingsMenuPopup">
		<div><p>Settings Menu</p></div>
	</div>
</AppBar>
