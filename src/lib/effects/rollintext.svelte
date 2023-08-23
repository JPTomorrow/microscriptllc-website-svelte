<script lang="ts">
	export let text: string;
</script>

<div class="flex">
	{#each text as c, i (i)}
		<div class="roll-in-blurred-left w-full h-full" style={`animation-delay: ${i * 0.1}s`}>
			{#if c != ' '}
				<p class="text-xl">{c}</p>
			{:else}
				<p class="text-xl">&nbsp;</p>
			{/if}
		</div>
	{/each}
</div>

<style>
	.roll-in-blurred-left {
		-webkit-animation: roll-in-blurred-left 0.65s cubic-bezier(0.23, 1, 0.32, 1) both;
		animation: roll-in-blurred-left 0.65s cubic-bezier(0.23, 1, 0.32, 1) both;
	}
	@-webkit-keyframes roll-in-blurred-left {
		0% {
			-webkit-transform: translateX(-1000px) rotate(-720deg);
			transform: translateX(-1000px) rotate(-720deg);
			-webkit-filter: blur(50px);
			filter: blur(50px);
			opacity: 0;
		}
		100% {
			-webkit-transform: translateX(0) rotate(0deg);
			transform: translateX(0) rotate(0deg);
			-webkit-filter: blur(0);
			filter: blur(0);
			opacity: 1;
		}
	}
	@keyframes roll-in-blurred-left {
		0% {
			-webkit-transform: translateX(-1000px) rotate(-720deg);
			transform: translateX(-1000px) rotate(-720deg);
			-webkit-filter: blur(50px);
			filter: blur(50px);
			opacity: 0;
		}
		100% {
			-webkit-transform: translateX(0) rotate(0deg);
			transform: translateX(0) rotate(0deg);
			-webkit-filter: blur(0);
			filter: blur(0);
			opacity: 1;
		}
	}
</style>
