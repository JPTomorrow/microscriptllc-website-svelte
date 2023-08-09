<script lang="ts">
	import LandingBanner from '$lib/landingbanner.svelte';
	import Particles from '$lib/particles.svelte';
	import Tiltcard from '$lib/tiltcard.svelte';
	import { fade } from 'svelte/transition';
</script>

<div
	in:fade|global
	out:fade|global
	class="animate-bg bg-space-stars bg-cover w-screen h-screen bg-no-repeat"
>
	<div class="flex w-full h-screen justify-center items-center">
		<Tiltcard>
			<LandingBanner />
		</Tiltcard>
		<Particles />
	</div>
</div>
