<script lang="ts">
	// Your selected Skeleton theme:
	import '@skeletonlabs/skeleton/themes/theme-vintage.css';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';

	// enable skeleton popups
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

	import { AppShell } from '@skeletonlabs/skeleton';
	import Header from '$lib/header.svelte';
</script>

<svelte:head>
	<title>MicroScript</title>
	<meta
		name="description"
		content="Unlock your business potential with MicroScript LLC's top-notch web design services. Transform your online presence today. Learn more now!"
	/>
</svelte:head>

<AppShell>
	<svelte:fragment slot="header"><Header /></svelte:fragment>
	<slot />
</AppShell>
