<script lang="ts">
	import Tiltcard from '$lib/tiltcard.svelte';
	import Flipin from '$lib/effects/flipin.svelte';
	import { setShowModal } from '$lib/modalStore';
	import json from '$lib/work-projects.json';

	const projects: WorkProject[] = json.projects;
	const work = [...'WORK'];
</script>

<div class="flex w-7/8 justify-between border-y-[1px] border-secondary-500 px-80 py-3 mt-5">
	{#each work as c, i (i)}
		<p class="text-7xl font-thin">{c}</p>
	{/each}
</div>

<div
	class="transparent-gradient-fade w-7/8 snap-x scroll-px-5 snap-mandatory scroll-smooth flex gap-8 overflow-x-auto px-10 py-10"
>
	{#each projects as currentProject, i (i)}
		<Tiltcard size="snap-center shrink-0 h-80 aspect-video">
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
		</Tiltcard>
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
