<!-- This css effect slides in from the left while doing an elliptic loop. 
works best with images -->
<div class="slide-in-elliptic-left-bck">
	<slot />
</div>

<style>
	@-webkit-keyframes slide-in-elliptic-left-bck {
		0% {
			-webkit-transform: translateX(-800px) rotateY(-30deg) scale(1.5);
			transform: translateX(-800px) rotateY(-30deg) scale(1.5);
			-webkit-transform-origin: 200% 50%;
			transform-origin: 200% 50%;
			opacity: 0;
		}
		50% {
			-webkit-transform: scale(6.5);
			transform: scale(6.5);
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
			-webkit-transform: translateX(-800px) rotateY(-30deg) scale(1.5);
			transform: translateX(-800px) rotateY(-30deg) scale(1.5);
			-webkit-transform-origin: 200% 50%;
			transform-origin: 200% 50%;
			opacity: 0;
		}
		20% {
			-webkit-transform: scale(1.5);
			transform: scale(1.5);
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
