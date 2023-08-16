<script lang="ts">
	export let delay: number = 0;
</script>

<div class="flip-in-diag-1-bl w-full h-full" style={`animation-delay: ${delay}s`}>
	<slot />
</div>

<style>
	.flip-in-diag-1-bl {
		-webkit-animation: flip-in-diag-1-bl 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
		animation: flip-in-diag-1-bl 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
	}

	@-webkit-keyframes flip-in-diag-1-bl {
		0% {
			-webkit-transform: rotate3d(1, 1, 0, 80deg);
			transform: rotate3d(1, 1, 0, 80deg);
			opacity: 0;
		}
		100% {
			-webkit-transform: rotate3d(1, 1, 0, 0deg);
			transform: rotate3d(1, 1, 0, 0deg);
			opacity: 1;
		}
	}
	@keyframes flip-in-diag-1-bl {
		0% {
			-webkit-transform: rotate3d(1, 1, 0, 80deg);
			transform: rotate3d(1, 1, 0, 80deg);
			opacity: 0;
		}
		100% {
			-webkit-transform: rotate3d(1, 1, 0, 0deg);
			transform: rotate3d(1, 1, 0, 0deg);
			opacity: 1;
		}
	}
</style>
