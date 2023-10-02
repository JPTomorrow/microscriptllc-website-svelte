<script lang="ts">
	// vercel analytics
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	inject({ mode: dev ? 'development' : 'production' });

	// Your selected Skeleton theme:
	import '@skeletonlabs/skeleton/themes/theme-vintage.css';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';

	// enable skeleton popups
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import { Toast, storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

	import { AppShell } from '@skeletonlabs/skeleton';
	import Header from '$lib/header.svelte';
</script>

<AppShell>
	<svelte:fragment slot="header"><Header /></svelte:fragment>
	<slot />
	<Toast />
</AppShell>
