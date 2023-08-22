<script>
	import { enhance } from '$app/forms';

	function valEmail(e) {
		console.log(e.target.value);
		var emailRegEx =
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return emailRegEx.test(String(e.target.value).toLowerCase());
	}
	let isValid = false;

	function sub() {
		if (!isValid) {
			return;
		}
	}
</script>

<div class="flex flex-col w-screen h-screen justify-center items-center">
	<form
		class="flex flex-col gap-5 items-start w-1/3"
		method="POST"
		on:submit|preventDefault={sub}
		use:enhance
		action="/contact/email"
	>
		<h1 class="text-2xl">Contact Us</h1>
		<input class="input custom-input" type="text" placeholder="Name" name="name" />
		{#if !isValid}
			<h1 class="text-error-300">* Not a valid email.</h1>
		{/if}
		<input
			on:input={(e) => valEmail(e)}
			class="input custom-input"
			type="text"
			placeholder="Email"
			name="email"
		/>
		<textarea class="textarea p-4 rounded-lg" rows="4" placeholder="Message" name="msg" />
		<button class="btn variant-outline-primary rounded-full" type="submit">Submit</button>
	</form>
</div>

<style lang="postcss">
	.custom-input {
		@apply rounded-full p-2 px-4;
	}
</style>
