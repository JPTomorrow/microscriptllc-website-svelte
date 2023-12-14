<script lang="ts">
	import '../app.css';
	// vercel analytics
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	inject({ mode: dev ? 'development' : 'production' });

	import Header from '$lib/header.svelte';
</script>

<div class="">
	<Header />
	<slot />
</div>
