<script lang="ts">
	import LandingBanner from '$lib/landingbanner.svelte';
	import { fade } from 'svelte/transition';
</script>

<div in:fade|global out:fade|global class="animate-bg bg-space-stars bg-cover">
	<div class="flex h-screen justify-center items-center">
		<LandingBanner />
	</div>
</div>
