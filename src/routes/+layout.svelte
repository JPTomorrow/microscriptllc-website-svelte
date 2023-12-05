<script lang="ts">
	// vercel analytics
	import '../app.css';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	inject({ mode: dev ? 'development' : 'production' });

	import Header from '$lib/header.svelte';
	import GoogleAds from '$lib/google-ads.svelte';
</script>

<GoogleAds />

<div class="">
	<Header />
	<slot />
</div>
