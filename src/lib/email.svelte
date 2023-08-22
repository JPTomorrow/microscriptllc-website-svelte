<script>
	import { Body, Button, Hr, Html, Text } from 'svelte-email';

	export let name = 'World';
</script>

<Html lang="en">
	<Body>
		<Text>
			Hello, {name}!
		</Text>
		<Hr />
		<Button href="https://svelte.dev">Visit Svelte</Button>
	</Body>
</Html>
