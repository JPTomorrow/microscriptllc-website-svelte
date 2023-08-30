<script lang="ts">
	import LandingBanner from '$lib/landingbanner.svelte';
	import Particles from '$lib/particles.svelte';
	import Tiltcard from '$lib/tiltcard.svelte';
	import { onMount } from 'svelte';
	import { setScrollY } from '$lib/scrollstore';
	import { fade } from 'svelte/transition';
	import Inneraccentborder from '$lib/inneraccentborder.svelte';
	import Projectscrollcontainer from '$lib/projectscrollcontainer.svelte';
	import Contactuscard from '$lib/contactuscard.svelte';

	// capture scroll to hide header
	let outer: HTMLDivElement;
	onMount(() => {
		outer.addEventListener('scroll', (e) => {
			setScrollY(outer.scrollTop);
		});
	});
</script>

<div
	in:fade|global={{ duration: 200 }}
	class="animate-bg bg-space-stars bg-cover w-screen h-screen bg-no-repeat"
>
	<div
		bind:this={outer}
		class="flex flex-col w-screen h-screen justify-start items-center overflow-y-scroll"
	>
		<!-- <Tiltcard size="flex w-[500px] h-[500px] items-center justify-center">
			<LandingBanner />
		</Tiltcard> -->

		<!-- Landing Banner -->
		<div class="mt-[110px] py-20 backdrop-blur-sm custom-card">
			<Inneraccentborder class="w-1/2">
				<h1 class="text-4xl font-medium">
					A boutique creative agency that understands the digital world is continually evolving and
					your brand cannot become idle.
				</h1>
			</Inneraccentborder>
		</div>

		<!-- Work -->
		<div class="custom-card flex justify-center">
			<Projectscrollcontainer />
		</div>

		<!-- Contact -->
		<div class="backdrop-blur-sm custom-card py-32">
			<Contactuscard />
		</div>
		<Particles />
	</div>
</div>

<style lang="postcss">
	.custom-card {
		@apply relative z-20 px-10 w-full h-fit bg-black bg-opacity-5;
	}
</style>
