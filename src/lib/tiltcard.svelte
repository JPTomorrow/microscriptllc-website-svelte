<script lang="ts">
	import tilt from './tilt.js';
	export let size: string;
	let reverse = true;
</script>

<div class={size} use:tilt={{ scale: 1.005, max: 2, reverse }}>
	<slot />
</div>

<!-- <button on:click={() => reverse = !reverse}>
	toggle tilt direction
</button> -->

<style>
	:global(body) {
		justify-content: center;
		align-content: center;
	}
	* {
		margin: 0;
	}
	div {
		justify-content: center;
		align-content: center;
		text-align: center;
	}
</style>
