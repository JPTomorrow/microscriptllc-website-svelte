<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let clazz: string = '';
	export { clazz as class };

	const taglines = [
		'The Future of Web Design is Here',
		'Crafting Digital Experiences',
		'Transforming Clicks Into Customers',
		'The Web, Simplified'
	];

	const day = new Date().getDay();
	function cbooseTaglineByDay() {
		const l = taglines.length - 1;
		const idx = day % l;
		return taglines[idx];
	}
	let currentTagLine = '';
	let animate = false;
	onMount(() => {
		currentTagLine = cbooseTaglineByDay();
		animate = true;
	});
</script>

<div class="min-h-full flex flex-col items-center lg:items-start {clazz}">
	{#key animate}
		<div in:fade|global class="header min-h-[50px]">
			<h1>{currentTagLine}</h1>
		</div>
	{/key}
	<div class="divider w-full" />
	<div class="divider w-[98%] mt-1" />
	<div class="lg:pl-2 lg:pr-10 my-4">
		<slot name="content" />
	</div>
	<div class="divider w-3/4" />
	<div class="w-3/4 flex justify-center lg:justify-start gap-5 mt-7">
		<slot name="buttons" />
	</div>
</div>

<style lang="postcss">
	.divider {
		@apply h-[1px] bg-secondary-500;
	}

	.header {
		@apply text-3xl text-center lg:text-left font-normal lg:text-5xl lg:font-thin mb-5;
	}
</style>
