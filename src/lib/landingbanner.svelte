<script lang="ts">
	import { onMount } from 'svelte';
	import { blur } from 'svelte/transition';
	import { ArrowRightRhombus } from 'tabler-icons-svelte';

	const quote_lines = [
		[...'Knowledge must continually be renewed...'],
		[...'It resembles a statue of marble...'],
		[...'threatened by the shifting sands']
	];

	function getFadeTimings(word: string[], delay: number): number[] {
		const halfway = word.length / 2;
		const delayInc = delay / halfway;

		return word.map((_, i) =>
			i < halfway ? delayInc * (word.length - i + 1) : delayInc * (i + 1)
		);
	}

	const quoteTimings = [
		getFadeTimings(quote_lines[0], 500),
		getFadeTimings(quote_lines[1], 500),
		getFadeTimings(quote_lines[2], 500)
	];
	// required to make animations play on load
	let visible = false;
	onMount(() => {
		visible = true;
	});
</script>

<div class="w-fit text-center font-thin bg-transparent">
	{#if visible}
		<div
			in:blur|global={{ delay: 1000, duration: 800 }}
			class="flex-col my-5 justify-center items-center"
		>
			<h1 class="text-2xl">We design and implement feature rich</h1>
			<h1 class="text-4xl text-secondary-400">
				<div class="transition-all duration-150 hover:text-secondary-100 hover:scale-110">
					<a href="/">
						<strong class="hover:underline">Websites</strong>
						and
						<strong class="hover:underline">Web Apps</strong>
					</a>
				</div>
			</h1>
		</div>
		<div class="flex flex-col items-center">
			{#each quote_lines as quote, timing_idx}
				<div class="flex">
					{#each quote as char, i (i)}
						<p
							in:blur|global={{
								delay: 500 * (timing_idx + 1) + quoteTimings[timing_idx][i],
								duration: 800
							}}
							class="text-xl"
						>
							{char}
							{#if char == ' '}
								&nbsp;
							{/if}
						</p>
					{/each}
				</div>
			{/each}
		</div>

		<div
			in:blur|global={{ delay: 3000, duration: 400 }}
			class="flex items-center justify-center mt-5"
		>
			<a
				class="flex w-fit items-center justify-center border-[1px] border-primary-50 rounded-full px-5 py-2 hover:bg-primary-200 hover:bg-opacity-30 transition-all duration-75 hover:scale-105 dark:text-primary-50 dark:hover:text-white"
				href="/projects"
			>
				<p class="text-sm uppercase mr-3">See our work</p>
				<ArrowRightRhombus />
			</a>
		</div>
	{/if}
</div>
