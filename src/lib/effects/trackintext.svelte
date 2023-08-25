<div class="tracking-in-contract">
	<slot />
</div>

<style>
	.tracking-in-contract {
		-webkit-animation: tracking-in-contract 0.8s cubic-bezier(0.215, 0.61, 0.355, 1) both;
		animation: tracking-in-contract 0.8s cubic-bezier(0.215, 0.61, 0.355, 1) both;
	}

	@-webkit-keyframes tracking-in-contract {
		0% {
			letter-spacing: 1em;
			opacity: 0;
		}
		40% {
			opacity: 0.6;
		}
		100% {
			letter-spacing: normal;
			opacity: 1;
		}
	}
	@keyframes tracking-in-contract {
		0% {
			letter-spacing: 1em;
			opacity: 0;
		}
		40% {
			opacity: 0.6;
		}
		100% {
			letter-spacing: normal;
			opacity: 1;
		}
	}
</style>
