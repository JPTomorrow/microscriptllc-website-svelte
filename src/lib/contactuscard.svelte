<script lang="ts">
	import { enhance } from '$app/forms';
	import { onMount } from 'svelte';
	import { draw, fade } from 'svelte/transition';

	interface formError {
		msg: string;
	}

	let err = {
		msg: ''
	} as formError;

	let clazz = 'w-full';
	export { clazz as class };
	export let headerText = 'Contact Us';

	function valEmail(e: string) {
		var emailRegEx =
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		const passed = emailRegEx.test(String(e).toLowerCase());
		if (!passed) {
			console.log('Not a valid email!');
		}
		return passed;
	}

	let name: string = '';
	let email: string = '';

	export let standardQuote: boolean = false;
	export let eCommerceQuote: boolean = false;
	export let aiIntegrationQuote: boolean = false;
	let message: string = '';

	function sub() {
		const isValid = valEmail(email);
		err.msg = '';
		if (name === '') {
			err.msg = 'Please provide a name';
			return;
		}
		if (!isValid) {
			err.msg = 'Not a valid email address';
			return;
		}
		if (message === '') {
			err.msg = 'Please provide a message';
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
</script>

<div in:fade={{ duration: 200 }} class="{clazz} flex flex-col justify-center items-center">
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
			in:fade={{ duration: 800 }}
			class="flex flex-col gap-5 items-start w-full"
			method="POST"
			use:enhance
			action="/api/contact/email"
			on:submit|preventDefault={() => sub()}
			name="microscript-contact-form"
		>
			<h1 class="text-2xl md:text-3xl">{headerText}</h1>
			{#if err.msg !== ''}
				<div class="text-error">
					<span>*{err.msg}</span>
				</div>
			{/if}
			<input
				bind:value={name}
				class="input input-secondary input-ghost w-full"
				type="text"
				placeholder="Name"
				name="name"
			/>
			<input
				bind:value={email}
				class="input input-secondary input-ghost w-full"
				type="text"
				placeholder="Email"
				name="email"
			/>
			<h1>Reasons for contact:</h1>
			<div class="flex flex-col">
				<label class="label gap-5 cursor-pointer w-fit">
					<input
						bind:checked={standardQuote}
						class="checkbox checkbox-primary"
						type="checkbox"
						name="standardQuote"
					/>
					<span class="text-primary label-text text-base"
						>Standard Business Website ($0 down $150 per month)</span
					>
				</label>
				<label class="label gap-5 cursor-pointer w-fit">
					<input
						bind:checked={eCommerceQuote}
						class="checkbox checkbox-primary"
						type="checkbox"
						name="eCommerceQuote"
					/>
					<span class="text-primary label-text text-base">eCommerce Integration</span>
				</label>
				<label class="label gap-5 cursor-pointer w-fit">
					<input
						bind:checked={aiIntegrationQuote}
						class="checkbox checkbox-primary"
						type="checkbox"
						name="aiIntegrationQuote"
					/>
					<span class="text-primary label-text text-base">AI Integration</span>
				</label>
			</div>
			<textarea
				bind:value={message}
				class="textarea textarea-ghost textarea-secondary w-full"
				rows="4"
				placeholder="Message"
				name="msg"
			/>
			<div class="flex items-center gap-3">
				<button
					class="btn1"
					on:click={() => window.gtag_report_conversion(window.location)}
					type="submit"
					>Submit
				</button>
			</div>
		</form>
	{/if}
</div>
