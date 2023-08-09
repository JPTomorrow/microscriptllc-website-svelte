<script lang="ts">
	import tilt from './tilt.js';

	let reverse = true;
</script>

<div use:tilt={{ scale: 1.005, max: 2, reverse }}>
	<slot />
</div>

<!-- <button on:click={() => reverse = !reverse}>
	toggle tilt direction
</button> -->

<style>
	:global(body) {
		justify-content: center;
		align-content: center;
		grid-gap: 20px;
	}
	* {
		margin: 0;
	}
	div {
		height: 200px;
		width: 200px;

		display: grid;
		justify-content: center;
		align-content: center;
		text-align: center;
	}
</style>
