<script lang="ts">
	import Tiltcard from '$lib/tiltcard.svelte';

	export let src: string;
</script>

<Tiltcard size="w-5/6 h-5/6">
	<img
		alt="projectimg"
		{src}
		class=" w-full h-full slide-in-elliptic-left-bck shadow-xl rounded-3xl border-[8px] border-white border-opacity-30"
	/>
</Tiltcard>

<style>
	@-webkit-keyframes slide-in-elliptic-left-bck {
		0% {
			-webkit-transform: translateX(-800px) rotateY(-30deg) scale(6.5);
			transform: translateX(-800px) rotateY(-30deg) scale(6.5);
			-webkit-transform-origin: 200% 50%;
			transform-origin: 200% 50%;
			opacity: 0;
		}
		100% {
			-webkit-transform: translateX(0) rotateY(0) scale(1);
			transform: translateX(0) rotateY(0) scale(1);
			-webkit-transform-origin: -600px 50%;
			transform-origin: -600px 50%;
			opacity: 1;
		}
	}
	@keyframes slide-in-elliptic-left-bck {
		0% {
			-webkit-transform: translateX(-800px) rotateY(-30deg) scale(6.5);
			transform: translateX(-800px) rotateY(-30deg) scale(6.5);
			-webkit-transform-origin: 200% 50%;
			transform-origin: 200% 50%;
			opacity: 0;
		}
		100% {
			-webkit-transform: translateX(0) rotateY(0) scale(1);
			transform: translateX(0) rotateY(0) scale(1);
			-webkit-transform-origin: -600px 50%;
			transform-origin: -600px 50%;
			opacity: 1;
		}
	}

	.slide-in-elliptic-left-bck {
		-webkit-animation: slide-in-elliptic-left-bck 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s
			both;
		animation: slide-in-elliptic-left-bck 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s both;
	}
</style>
