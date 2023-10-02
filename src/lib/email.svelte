<script>
	import { Body, Button, Hr, Html, Text } from 'svelte-email';

	export let name = 'N/A';
	export let email = 'connect@microscriptllc.com';
	export let msg = 'message was not filled out...';
</script>

<Html lang="en">
	<Body>
		<Text>
			NAME: {name},
		</Text>
		<Text>
			EMAIL: {email},
		</Text>
		<Text>
			MESSAGE: {msg}
		</Text>
	</Body>
</Html>
