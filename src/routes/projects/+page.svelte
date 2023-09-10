<script lang="ts">
	import ProjectImage from '$lib/projectimage.svelte';

	import { fade } from 'svelte/transition';
	import { setScrollY } from '$lib/scrollstore';
	import { onMount } from 'svelte';
	import Tiltcard from '$lib/tiltcard.svelte';
	import Flipin from '$lib/effects/flipin.svelte';
	import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';
	import json from '$lib/work-projects.json';

	const projects: WorkProject[] = json.projects;

	let outer: HTMLDivElement;
	onMount(() => {
		outer.addEventListener('scroll', (_) => {
			setScrollY(outer.scrollTop);
		});
	});

	let selectedGroup = 0;
</script>

<div
	bind:this={outer}
	in:fade|global={{ duration: 200 }}
	class="flex flex-col w-screen h-screen items-center overflow-y-scroll"
>
	<RadioGroup class="mt-[100px] mb-[5%]">
		<RadioItem bind:group={selectedGroup} name="justify" value={1}>Professional</RadioItem>
		<RadioItem bind:group={selectedGroup} name="justify" value={0}>Personal</RadioItem>
	</RadioGroup>
	<div
		class="grid grid-cols-2 md:grid-cols-3 gap-10 h-full w-full px-[30px] md:px-[80px] mb-[150px]"
	>
		{#if selectedGroup == 0}
			{#each projects as currentProject, i (i)}
				<Tiltcard size="w-full h-full">
					<Flipin delay={i * 0.1}>
						<div
							class="flex h-full flex-col border-[1px] border-t-[10px] border-primary-300 rounded-xl"
						>
							<ProjectImage src={currentProject.img} />
							<div class="flex flex-col w-full h-full text-left p-5">
								<h1 class="text-2xl">{currentProject.name}</h1>
								<h2>{currentProject.description}</h2>
								<div class="flex flex-grow items-end flex-wrap gap-3 mt-3">
									{#each currentProject.skills as s, i (i)}
										<span class="badge variant-filled rounded-full">{s}</span>
									{/each}
								</div>
							</div>
						</div>
					</Flipin>
				</Tiltcard>
			{/each}
		{/if}
	</div>
	<!-- <Particles /> -->
</div>
