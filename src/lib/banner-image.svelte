<script lang="ts">
	import { slide } from 'svelte/transition';
</script>

<div in:slide|global class="relative aspect-[1.49]">
	<img src="/images/about-pic.webp" width="100%" class="utah-img-clip" alt="Utah" />
</div>

<style lang="postcss">
	.utah-img-clip {
		clip-path: polygon(2% 0%, 100% 0%, 100% 100%, 2% 100%, 10% 50%);
		box-sizing: border-box;
		@apply border-[1px] border-r-[10px] border-secondary-600 rounded-t-md rounded-b-md;
	}
</style>
