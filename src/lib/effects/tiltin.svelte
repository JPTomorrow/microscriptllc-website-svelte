<!-- this css animation tilts the div into view 
with a slight bend -->

<div class="tilt-in-tl">
	<slot />
</div>

<style>
	.tilt-in-tl {
		-webkit-animation: tilt-in-tl 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
		animation: tilt-in-tl 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
	}

	@-webkit-keyframes tilt-in-tl {
		0% {
			-webkit-transform: rotateY(35deg) rotateX(20deg) translate(-250px, -250px) skew(12deg, 15deg);
			transform: rotateY(35deg) rotateX(20deg) translate(-250px, -250px) skew(12deg, 15deg);
			opacity: 0;
		}
		100% {
			-webkit-transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
			transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
			opacity: 1;
		}
	}
	@keyframes tilt-in-tl {
		0% {
			-webkit-transform: rotateY(35deg) rotateX(20deg) translate(-250px, -250px) skew(12deg, 15deg);
			transform: rotateY(35deg) rotateX(20deg) translate(-250px, -250px) skew(12deg, 15deg);
			opacity: 0;
		}
		100% {
			-webkit-transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
			transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
			opacity: 1;
		}
	}
</style>
