<script lang="ts">
	import ProjectImage from '$lib/projectimage.svelte';
	import Tiltcard from '$lib/tiltcard.svelte';
	import { fade } from 'svelte/transition';
</script>

<div
	in:fade|global={{ duration: 200 }}
	class="flex w-screen h-screen justify-center items-center gap-5"
>
	<div class="flex h-full w-full justify-center items-start pt-[8%]">
		<ProjectImage src="/images/bom-generator.webp" />
	</div>
	<div class="flex flex-col gap-5 w-full h-full justify-start py-[8%] px-5">
		<h1 class="flicker text-4xl font-bold underline ring-offset-5">Project 1</h1>
		<p class="flicker text-2xl font-thin text-secondary-200">
			Some example text with for the time being.
		</p>
		<h1 class="flicker text-3xl text-primary-400 font-semibold">Sub Heading</h1>
	</div>
</div>

<style>
	.flicker {
		background: -webkit-gradient(
				linear,
				left top,
				right top,
				from(#e6e6e6),
				to(#1d1c1c),
				color-stop(0.8, #ffffff)
			)
			no-repeat;
		background: gradient(linear, left top, right top, from(#222), to(#222), color-stop(0.8, #fff))
			no-repeat;
		background-size: 50px 100%;
		-webkit-background-clip: text;
		background-clip: text;
		animation: flick 1.5s ease-in-out 5s infinite;
	}
	@keyframes flick {
		0% {
			background-position: top left;
		}
		100% {
			background-position: top right;
		}
	}
</style>
