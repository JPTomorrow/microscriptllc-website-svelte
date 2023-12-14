<script lang="ts">
	import { blur } from 'svelte/transition';
	import { Robot, Send } from 'tabler-icons-svelte';
	import Trackintext from '$lib/effects/trackintext.svelte';
	import { useChat } from 'ai/svelte';
	import Time from 'svelte-time';
	import type { ChatCompletionMessage } from 'openai/resources/chat';

	let { messages, input, handleSubmit } = useChat();
	let showAI = false;
	const toggleAI = () => {
		showAI = !showAI;
	};

	// this works for a loading placeholder
	let loading = false;
	$: if ($messages.length > 0) {
		if ($messages[$messages.length - 1].role === 'user') {
			loading = true;
		} else {
			loading = false;
		}
	}

	// scroll to bottom of ai feed whem
	// messagees are added or removed
	let scrollFeed: HTMLDivElement;
	function scrollToBottom() {
		setTimeout(function () {
			scrollFeed.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
		}, 100);
	}

	$: if ($messages.length) {
		scrollToBottom();
	}

	const preMessage: ChatCompletionMessage = {
		role: 'assistant',
		content: `GAIA (Guided AI Assistant) offers a taste of MicroScript's \
		artificial intelligence integrations.
		
		Whether you have questions about our past projects, our \
		team, our expertise, or any services offered by \
		MicroScript, GAIA is here to assist.`
	};
</script>

{#key showAI}
	{#if showAI}
		<div transition:blur|global class="card container">
			<div class="w-full flex justify-between py-3 px-5 border-b-[1px]">
				<div class="flex gap-3 items-center justify-center">
					<img
						alt="logo"
						src="/images/logo/logo_128.webp"
						width="50px"
						class="w-[30px] md:w-[50px] self-center"
					/>
					<Trackintext>
						<h1 class="text-xl md:text-2xl font-semibold">GAIA</h1>
					</Trackintext>
				</div>
				<button on:click={toggleAI} class="">X</button>
			</div>
			<div class="feed">
				{#each [preMessage, ...$messages] as m, i (i)}
					<div
						transition:blur|global
						class="feed-msg whitespace-pre-line {m.role === 'assistant' ? 'ai' : 'you'}"
					>
						<h1 class="uppercase font-semibold text-xl">
							{m.role === 'assistant' ? 'GAIA' : 'you'}
						</h1>
						<p class="ml-2">- <Time class="text-sm" relative timestamp={new Date()} /></p>
						<p class="text-sm whitespace-pre-line pt-2">
							{@html m.content}
						</p>
					</div>
				{/each}
				{#if loading}
					<div in:blur|global={{ delay: 400 }} class="feed-msg whitespace-pre-line ai">
						<h1 class="uppercase font-semibold text-xl text-primary">GAIA</h1>
						<div class="flex gap-2 text-lg whitespace-pre-wrap pt-2 font-bold">
							<p class="animate-[bounce_1s_infinite_0ms]">.</p>
							<p class="animate-[bounce_1s_infinite_100ms]">.</p>
							<p class="animate-[bounce_1s_infinite_200ms]">.</p>
						</div>
					</div>
				{/if}
				<div bind:this={scrollFeed} />
			</div>
			<form on:submit|preventDefault={handleSubmit} class="relative w-full mt-auto">
				<input
					class="input input-bordered input-secondary rounded-full w-full !pr-12"
					type="text"
					bind:value={$input}
				/>
				<button type="submit"
					><Send class="absolute top-3 text-secondary right-5 rotate-45" size="23" /></button
				>
			</form>
			<p class="mb-2 text-xs font-thin">Powered by OpenAI technologies.</p>
		</div>
	{:else}
		<button
			on:click={toggleAI}
			in:blur|global
			name="toggle AI"
			class="btn1 fixed top-[90%] right-[4%] lg:right-[2%] bg-secondary !p-2 !px-3 !z-[1]"
		>
			<Robot />
		</button>
	{/if}
{/key}

<style lang="postcss">
	.container {
		@apply w-full md:w-[400px] h-full max-h-screen flex flex-col gap-3 
		items-center justify-start px-3 md:px-5 
		 bg-base-100
		fixed top-[0%] right-[0%] z-50 
		!rounded-none md:!rounded-tl-lg md:!rounded-bl-lg;
	}
	.feed {
		@apply flex flex-col gap-2 w-full overflow-y-scroll scroll-smooth rounded-2xl;
	}

	.you {
		@apply border-[2px] border-primary;
	}

	.ai {
		@apply border-[2px] border-secondary;
	}

	.feed-msg {
		@apply bg-primary text-base-100 rounded-xl px-3 py-3 font-semibold;
	}
</style>
