<script lang="ts">
	import Flipin from '$lib/effects/flipin.svelte';
	import { setShowModal } from '$lib/modalStore';
	import json from '$lib/work-projects.json';
	import TitleSpaced from '$lib/title-spaced.svelte';

	const projects: WorkProject[] = json.projects;
</script>

<TitleSpaced headerText="Work" />

<div
	class="transparent-gradient-fade w-full snap-x scroll-px-5 snap-mandatory scroll-smooth flex gap-8 overflow-x-auto py-10"
>
	{#each projects as currentProject, i (i)}
		<div class="snap-center shrink-0 h-40 md:h-60 lg:h-80 aspect-video">
			<Flipin delay={i * 0.1}>
				<button
					class="flex w-full h-full flex-col border-y-[3px] border-secondary-500 border-double rounded-xl transition-transform hover:scale-105 duration-75 shadow-xl"
					on:click={() => {
						setShowModal(currentProject);
					}}
				>
					<img alt="pimg" class="w-full h-full rounded-xl object-cover" src={currentProject.img} />
					<div
						class="transparent-gradient-fade absolute-centered bg-black bg-opacity-80 w-full h-fit py-5 border-y-[2px] border-secondary-600"
					>
						<p class="text-3xl font-thin px-5">{currentProject.name}</p>
					</div>
				</button>
			</Flipin>
		</div>
	{/each}
</div>

<style lang="postcss">
	.transparent-gradient-fade {
		--mask: linear-gradient(
				to right,
				rgba(0, 0, 0, 0.5) 0,
				rgba(0, 0, 0, 1) 5%,
				rgba(0, 0, 0, 1) 95%,
				rgba(0, 0, 0, 0.5) 100%
			)
			100% 50% / 100% 100% repeat-x;

		-webkit-mask: var(--mask);
		mask: var(--mask);
	}
</style>
