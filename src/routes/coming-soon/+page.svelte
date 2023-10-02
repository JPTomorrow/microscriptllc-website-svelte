<script lang="ts">
	import Seo from '$lib/seo.svelte';
	import { fade } from 'svelte/transition';
</script>

<Seo title="Coming Soon" description="A coming soon page." type="WebPage" />

<div
	in:fade|global={{ duration: 200 }}
	class="flex flex-col w-screen h-screen justify-center items-center"
>
	<h1 class="uppercase mb-5 text-2xl">Coming Soon!</h1>
	<a href="/" class="btn1">Go Back</a>
</div>
