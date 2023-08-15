<script lang="ts">
	import Tiltcard from '$lib/tiltcard.svelte';
	import Slideinellipticleft from '$lib/effects/slideinellipticleft.svelte';

	export let src: string;
</script>

<Tiltcard size="w-full h-full">
	<Slideinellipticleft>
		<img
			alt="projectimg"
			{src}
			class=" w-full h-full shadow-xl rounded-3xl border-[8px] border-white border-opacity-30"
		/>
	</Slideinellipticleft>
</Tiltcard>
