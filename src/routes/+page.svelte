<script lang="ts">
	import Particles from '$lib/particles.svelte';
	import { onMount } from 'svelte';
	import { setScrollY } from '$lib/scrollstore';
	import { fade } from 'svelte/transition';
	import Inneraccentborder from '$lib/inneraccentborder.svelte';
	import Projectscrollcontainer from '$lib/projectscrollcontainer.svelte';
	import Contactuscard from '$lib/contactuscard.svelte';
	import Footer from '$lib/footer.svelte';
	import Projectmodal from '$lib/projectmodal.svelte';
	import { ArrowRightRhombus } from 'tabler-icons-svelte';

	// capture scroll to hide header
	let outer: HTMLDivElement;
	onMount(() => {
		outer.addEventListener('scroll', (_) => {
			setScrollY(outer.scrollTop);
		});
	});
</script>

<div
	in:fade|global={{ duration: 200 }}
	class="animate-bg bg-space-stars bg-cover w-screen h-screen bg-no-repeat"
>
	<div
		bind:this={outer}
		class="flex flex-col w-screen h-screen justify-start items-center overflow-y-scroll scroll-smooth"
	>
		<!-- Landing Banner -->
		<div class="flex gap-5 mt-[110px] py-20 backdrop-blur-sm custom-card">
			<div class="w-7/12">
				<Inneraccentborder header="Today's Vision, Tomorrow's Web">
					<h1 class="text-3xl font-thin leading-snug">
						As you set sail on your online voyage, consider us your steadfast co-pilots. At
						MicroScript, we offer more than just web development; we provide a full spectrum of
						digital services and advanced features.
					</h1>
				</Inneraccentborder>
				<div class="w-3/4 flex justify-start gap-5 mt-7">
					<a class="btn1" href="/projects">
						<p class="text-sm uppercase mr-3">Our Process</p>
						<ArrowRightRhombus />
					</a>
					<a class="btn1" href="/projects">
						<p class="text-sm uppercase mr-3">Get in Touch with us</p>
						<ArrowRightRhombus />
					</a>
				</div>
			</div>
			<div class="relative w-5/12 m-10">
				<img src="/images/about-pic.webp" alt="Utah" />
				<div class="-z-10 absolute top-0 left-0 bg-red-300 w-full h-full" />
			</div>
		</div>

		<!-- Work -->
		<div class="custom-card flex flex-col justify-center">
			<Projectscrollcontainer />
		</div>

		<!-- Contact -->
		<div class="backdrop-blur-sm custom-card py-32">
			<Contactuscard />
		</div>
		<Footer />
		<Particles />
		<Projectmodal />
	</div>
</div>

<style lang="postcss">
	.custom-card {
		@apply relative z-[2] px-10 w-full h-fit bg-black bg-opacity-5;
	}
</style>
