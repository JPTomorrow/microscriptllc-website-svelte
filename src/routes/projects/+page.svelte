<script lang="ts">
	import FlickerText from '$lib/effects/flickertext.svelte';
	import ProjectImage from '$lib/projectimage.svelte';
	import { fade } from 'svelte/transition';
	import { setScrollY } from '$lib/scrollstore';
	import { onMount } from 'svelte';

	const projects: WorkProject[] = [
		{
			name: 'BOM Generator',
			img: '/images/bom-generator.webp',
			description: 'A thing I did for Marathon',
			bullet_points: ['A random bullet point', 'A random bullet point', 'A random bullet point']
		},
		{
			name: 'BOM Generator 2',
			img: '/images/bom-generator.webp',
			description: 'A thing I did for Marathon',
			bullet_points: ['A random bullet point', 'A random bullet point', 'A random bullet point']
		},
		{
			name: 'BOM Generator 3',
			img: '/images/bom-generator.webp',
			description: 'A thing I did for Marathon',
			bullet_points: ['A random bullet point', 'A random bullet point', 'A random bullet point']
		}
	];

	let outer: HTMLDivElement;
	onMount(() => {
		outer.addEventListener('scroll', (e) => {
			setScrollY(outer.scrollTop);
		});
	});
</script>

<div
	bind:this={outer}
	in:fade|global={{ duration: 200 }}
	class="md:flex flex-col w-screen h-screen justify-start items-center px-[30px] md:px-[50px] py-[8%] gap-20 overflow-y-scroll"
>
	{#each projects as currentProject, i (i)}
		<div class="md:flex w-full h-full justify-center items-center gap-20">
			<div class="flex h-full w-full justify-center items-start">
				<ProjectImage src={currentProject.img} />
			</div>
			<div class="flex flex-col gap-5 w-full h-full justify-start">
				<FlickerText class="text-4xl font-bold underline ring-offset-5">
					{currentProject.name}
				</FlickerText>
				<!-- <h1 class="flicker ">Project 1</h1>
			<p class="flicker text-2xl font-thin text-secondary-200">
				Some example text with for the time being.
			</p>
			<h1 class="flicker text-3xl text-primary-400 font-semibold">Sub Heading</h1> -->
			</div>
		</div>
	{/each}
</div>
