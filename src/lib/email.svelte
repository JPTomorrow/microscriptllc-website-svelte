<script lang="ts">
	import { Body, Button, Hr, Html, Text } from 'svelte-email';

	export let name = 'N/A';
	export let email = 'connect@microscriptllc.com';
	export let msg = 'message was not filled out...';
	export let standardQuote: boolean;
	export let eCommerceQuote: boolean;
	export let aiIntegrationQuote: boolean;
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
			REASONS: {standardQuote ? 'Standard Business Website ($0 down $150 per month)' : ''}, {eCommerceQuote
				? 'eCommerce Integration'
				: ''}, {aiIntegrationQuote ? 'AI Integration' : ''}
		</Text>
		<Text>
			MESSAGE: {msg}
		</Text>
	</Body>
</Html>
