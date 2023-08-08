<script lang="ts">
	import LandingBanner from '$lib/landingbanner.svelte';
	import { fade } from 'svelte/transition';
</script>

<div in:fade|global out:fade|global class="bg-space-stars bg-cover h-screen">
	<div class="flex h-screen justify-center items-center">
		<LandingBanner />
	</div>
</div>
