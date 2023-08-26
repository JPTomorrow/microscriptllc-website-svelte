<script lang="ts">
	import { enhance } from '$app/forms';
	import { draw, fade, scale, blur } from 'svelte/transition';
	import { Avatar, popup, type PopupSettings } from '@skeletonlabs/skeleton';
	import Trackintext from '$lib/effects/trackintext.svelte';
	import { onMount } from 'svelte';

	function valEmail(e: string) {
		var emailRegEx =
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return emailRegEx.test(String(e).toLowerCase());
	}
	let email: string = '';
	let showEmailError = false;

	function sub() {
		const isValid = valEmail(email);
		if (!isValid) {
			showEmailError = email !== '';
			return;
		}
		animateSend();
	}

	let isSending = false;
	const pathColor = 'rgb(255, 235, 189)';
	const fillColor = 'rgb(255, 235, 189, 0)';

	function animateSend() {
		isSending = true;
		setTimeout(() => {
			isSending = false;
		}, 2000);
	}

	const popupHover: PopupSettings = {
		event: 'hover',
		target: 'contactAddInfo',
		placement: 'right'
	};

	const emailHover: PopupSettings = {
		event: 'hover',
		target: 'emailInfo',
		placement: 'right'
	};

	const justinName = [...'Justin Morrow'];
	const justinTitle = [...'Co-Founder / CTO'];
	const thomasName = [...'Thomas Bender'];
	const thomasTitle = [...'Co-Founder / PRO'];

	function getFadeTimings(word: string[], delay: number): number[] {
		const halfway = word.length / 2;
		const delayInc = delay / halfway;

		return word.map((_, i) =>
			i < halfway ? delayInc * (word.length - i + 1) : delayInc * (i + 1)
		);
	}

	const justinNameTimings = getFadeTimings(justinName, 500);
	const justinTitleTimings = getFadeTimings(justinTitle, 500);
	const thomasNameTimings = getFadeTimings(thomasName, 500);
	const thomasTitleTimings = getFadeTimings(thomasTitle, 500);

	// required to make animations play on load
	let visible = false;
	onMount(() => {
		visible = true;
	});
</script>

<div class="flex">
	<div class="flex w-full flex-col justify-center items-center">
		{#if visible}
			<div in:scale|global={{ delay: 50, duration: 600 }}>
				<Avatar
					src="/images/profile.webp"
					width="w-[150px]"
					rounded="rounded-full"
					class="border-[2px] border-primary-200 shadow-md shadow-secondary-800 mb-3 transform transition-transform duration-150"
				/>
			</div>
			<div class="flex flex-col">
				<div class="flex items-center justify-center">
					{#each justinName as char, i (i)}
						<p in:blur|global={{ delay: 0 + justinNameTimings[i], duration: 800 }} class="text-3xl">
							{char}
							{#if char == ' '}
								&nbsp;
							{/if}
						</p>
					{/each}
				</div>
				<div class="flex items-center justify-center">
					{#each justinTitle as char, i (i)}
						<p in:blur|global={{ delay: 0 + justinTitleTimings[i], duration: 800 }} class="text-xl">
							{char}
							{#if char == ' '}
								&nbsp;
							{/if}
						</p>
					{/each}
				</div>
			</div>
		{/if}
	</div>

	<div
		in:fade={{ duration: 200 }}
		class="flex flex-col w-screen h-screen justify-center items-center"
	>
		{#if isSending}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				version="1.1"
				width="512"
				height="512"
				viewBox="0 0 256 256"
				xml:space="preserve"
			>
				<defs />

				<g transform="translate(32.807305370685654 32.807305370685654) scale(2.12 2.12)">
					<path
						d="M 82.127 71.258 H 26.728 c -4.341 0 -7.873 -3.532 -7.873 -7.873 v -10.16 c 0 -0.828 0.671 -1.5 1.5 -1.5 s 1.5 0.672 1.5 1.5 v 10.16 c 0 2.687 2.186 4.873 4.873 4.873 h 55.399 c 2.687 0 4.873 -2.187 4.873 -4.873 v -36.77 c 0 -2.687 -2.187 -4.873 -4.873 -4.873 H 26.728 c -2.687 0 -4.873 2.186 -4.873 4.873 v 10.038 c 0 0.829 -0.671 1.5 -1.5 1.5 s -1.5 -0.671 -1.5 -1.5 V 26.615 c 0 -4.341 3.532 -7.873 7.873 -7.873 h 55.399 c 4.341 0 7.873 3.532 7.873 7.873 v 36.77 C 90 67.726 86.468 71.258 82.127 71.258 z"
						stroke-linecap="round"
						fill={fillColor}
						stroke={pathColor}
						stroke-width={0.5}
						in:draw={{ duration: 1400 }}
					/>
					<path
						d="M 63.732 45 l 16.726 -15.344 c 0.61 -0.56 0.651 -1.509 0.092 -2.12 c -0.56 -0.61 -1.508 -0.65 -2.119 -0.091 L 54.427 49.466 L 30.425 27.445 c -0.611 -0.559 -1.559 -0.519 -2.12 0.091 c -0.56 0.61 -0.519 1.56 0.091 2.12 L 45.122 45 L 28.396 60.345 c -0.61 0.561 -0.651 1.509 -0.091 2.119 c 0.296 0.323 0.7 0.486 1.106 0.486 c 0.362 0 0.726 -0.131 1.014 -0.395 l 16.916 -15.52 l 6.072 5.571 c 0.286 0.263 0.65 0.395 1.014 0.395 s 0.728 -0.132 1.014 -0.395 l 6.073 -5.571 l 16.917 15.52 c 0.288 0.264 0.651 0.395 1.014 0.395 c 0.405 0 0.81 -0.163 1.105 -0.486 c 0.56 -0.61 0.519 -1.559 -0.092 -2.119 L 63.732 45 z"
						stroke-linecap="round"
						fill={fillColor}
						stroke={pathColor}
						stroke-width={0.5}
						in:draw={{ duration: 1400 }}
					/>
					<path
						d="M 25.423 46.5 H 7.539 c -0.829 0 -1.5 -0.671 -1.5 -1.5 s 0.671 -1.5 1.5 -1.5 h 17.885 c 0.829 0 1.5 0.671 1.5 1.5 S 26.252 46.5 25.423 46.5 z"
						stroke-linecap="round"
						fill={fillColor}
						stroke={pathColor}
						stroke-width={0.5}
						in:draw={{ duration: 1400 }}
					/>
					<path
						d="M 12.497 36.016 H 1.5 c -0.829 0 -1.5 -0.671 -1.5 -1.5 s 0.671 -1.5 1.5 -1.5 h 10.997 c 0.829 0 1.5 0.671 1.5 1.5 S 13.326 36.016 12.497 36.016 z"
						stroke-linecap="round"
						fill={fillColor}
						stroke={pathColor}
						stroke-width={0.5}
						in:draw={{ duration: 1400 }}
					/>
					<path
						d="M 12.497 56.984 H 4.394 c -0.829 0 -1.5 -0.672 -1.5 -1.5 s 0.671 -1.5 1.5 -1.5 h 8.104 c 0.829 0 1.5 0.672 1.5 1.5 S 13.326 56.984 12.497 56.984 z"
						stroke-linecap="round"
						fill={fillColor}
						stroke={pathColor}
						stroke-width={0.5}
						in:draw={{ duration: 1400 }}
					/>
				</g>
			</svg>
		{:else}
			<form
				class="flex flex-col gap-5 items-start w-full"
				method="POST"
				on:submit|preventDefault={sub}
				use:enhance
				action="/contact/email"
				in:fade={{ duration: 800 }}
			>
				<!-- <Rollintext text="Contact Us" /> -->
				<Trackintext>
					<h1 class="text-2xl">Contact Us</h1>
				</Trackintext>
				<input class="input custom-input custom-focus" type="text" placeholder="Name" name="name" />
				<input
					bind:value={email}
					class="input custom-input custom-focus"
					type="text"
					placeholder="Email"
					name="email"
					use:popup={emailHover}
				/>
				<textarea
					class="textarea p-4 rounded-lg custom-focus"
					rows="4"
					placeholder="Message"
					name="msg"
					use:popup={popupHover}
				/>
				{#if showEmailError}
					<h1 class="text-error-500">*not a valid email</h1>
				{/if}
				<div class="flex items-center gap-3">
					<button class="btn variant-outline-secondary rounded-full" type="submit">Submit</button>
				</div>
			</form>
		{/if}
	</div>
	<div class="flex w-full flex-col justify-center items-center">
		{#if visible}
			<div in:scale|global={{ delay: 50, duration: 600 }}>
				<Avatar
					src="/images/thomas.png"
					width="w-[150px]"
					rounded="rounded-full"
					class="border-[2px] border-primary-200 shadow-md shadow-secondary-800 mb-3 transform transition-transform duration-300"
				/>
			</div>
			<div class="flex flex-col">
				<div class="flex items-center justify-center">
					{#each thomasName as char, i (i)}
						<p in:blur|global={{ delay: 0 + thomasNameTimings[i], duration: 800 }} class="text-3xl">
							{char}
							{#if char == ' '}
								&nbsp;
							{/if}
						</p>
					{/each}
				</div>
				<div class="flex items-center justify-center">
					{#each thomasTitle as char, i (i)}
						<p in:blur|global={{ delay: 0 + thomasTitleTimings[i], duration: 800 }} class="text-xl">
							{char}
							{#if char == ' '}
								&nbsp;
							{/if}
						</p>
					{/each}
				</div>
			</div>
		{/if}
	</div>
</div>

<div class="card mt-3 p-4 variant-outline-secondary" data-popup="contactAddInfo">
	<p class="text-md"><strong>Helpful Info:</strong></p>
	<ul class="text-sm">
		<li>You Phone #</li>
		<li>Your business name if applicable</li>
		<li>A rough description of what you are looking to have designed</li>
	</ul>
	<div class="arrow variant-filled-secondary" />
</div>

<div class="card mt-3 p-4 variant-outline-secondary" data-popup="emailInfo">
	<p class="text-md"><strong>Email Format:</strong></p>
	<p class="text-sm">email@domain.com</p>
	<div class="arrow variant-filled-secondary" />
</div>

<style lang="postcss">
	.custom-focus {
		@apply outline-none;
	}

	.custom-input {
		@apply rounded-full p-2 px-4 border-[1px];
	}
</style>
