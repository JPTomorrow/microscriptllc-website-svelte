<script lang="ts">
	import Footer from '$lib/footer.svelte';
	import { setScrollY } from '$lib/scrollstore';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { ArrowRightRhombus } from 'tabler-icons-svelte';

	// capture scroll to hide header
	let outer: HTMLDivElement;
	onMount(() => {
		setScrollY(outer.scrollTop);
		outer.addEventListener('scroll', (_) => {
			setScrollY(outer.scrollTop);
		});
	});
</script>

<div in:fade|global={{ duration: 200 }} class="animated-space-bg">
	<div bind:this={outer} class="page-inner-scroll-container pt-32">
		<!-- Header -->
		<div class="flex flex-col items-center w-full gap-5">
			<h1>Pricing & Plans</h1>
			<div class="h-[1px] w-2/3 md:w-1/6 bg-primary" />
			<p class="header-p">
				We offer client-tailored solutions ranging<br class="hidden md:block" /> from simple static websites
				to more complex web applications.
			</p>
		</div>

		<!-- Standard Business Website -->
		<div
			class="flex flex-col-reverse md:flex-row w-full bg-secondary/20 border-y-[1px] border-primary/50 backdrop-blur-sm mt-12 px-5 md:px-16 py-10"
		>
			<div class="flex flex-col gap-5 md:w-1/2">
				<h2 class="text-accent/70">Standard Business Website</h2>
				<p class="ml-3 text-base md:text-xl">
					Many businesses that are just starting out do not have the money, or the time or expertise
					to make a website that fits their needs. We aim to offer a solution to this problem by
					providing our web development services to make a quality website with a quick turnaround
					time, and the best part is it won't cost you an arm and a leg!
				</p>
				<h3 class="text-accent/70">How we do it!</h3>
				<ul class="ml-5 text-base md:text-xl font-medium list-disc flex flex-col gap-5">
					<li>
						A generous monthly pricing model that is pay-as-you-go. $0 up-front cost. $150 per
						month.
					</li>
					<li>
						Our goal is to deliver your website within 2 weeks. We will work with you to resolve any
						unexpected delays that crop up for one reason or another.
					</li>
					<li>
						We will work with you over the phone, through email, and through video confrencing apps
						to maintain a clear line of communication and to generate content for your website.
					</li>
					<li>
						We use a set of website templates that are designed for a variety of business types. <a
							href="#website-templates"
							class="link link-hover link-accent">Check them out below!</a
						>
					</li>
					<li>
						6 month contract with a cancelation fee of 2 months ($300). After the contract term
						expires you may cancel for free at anytime.
					</li>
				</ul>
				<a href="/contact?standardQuote=true" class="btn1 gap-2 mt-3"
					>Get In Touch With Us <ArrowRightRhombus /></a
				>
			</div>
			<div class="md:w-1/2 flex flex-col items-center gap-16 justify-center m-10 md:m-0">
				<div class="hidden md:flex gap-10">
					<h1 class="h1-animate text-accent font-extrabold drop-shadow-2xl">$0</h1>
					<h1 class="h1-animate-alt text-accent font-extrabold">Down</h1>
				</div>
				<div class="flex items-center justify-center w-full">
					<img
						src="/images/astronaut-laptop.webp"
						class="astronaut-laptop"
						alt="astronaut-laptop"
						loading="lazy"
						decoding="async"
					/>
					<img
						src="/images/astronaut.webp"
						class="astronaut"
						alt="astronaut"
						loading="lazy"
						decoding="async"
					/>
				</div>
				<div class="hidden md:flex gap-8">
					<h1 class="h1-animate text-accent font-extrabold drop-shadow-2xl">$150</h1>
					<h1 class="h1-animate-alt text-accent font-extrabold drop-shadow-2xl">/</h1>
					<h1 class="h1-animate-alt2 text-accent font-extrabold drop-shadow-2xl">month</h1>
				</div>
			</div>
		</div>
		<Footer class="hidden md:flex" />
	</div>
</div>

<style lang="postcss">
	h1 {
		@apply text-4xl md:text-6xl text-center font-normal uppercase;
	}

	h2 {
		@apply text-xl md:text-3xl font-semibold;
	}
	h3 {
		@apply text-lg md:text-2xl font-semibold;
	}
	.header-p {
		@apply w-11/12 md:w-3/4 text-base md:text-2xl font-light text-center;
	}

	@keyframes float1 {
		0% {
			transform: translatey(0px) rotate(-5deg);
		}
		50% {
			transform: translatey(-20px) rotate(-10deg);
		}
		100% {
			transform: translatey(0px) rotate(-5deg);
		}
	}

	@keyframes float2 {
		0% {
			transform: translatey(0px) rotate(-10deg);
		}
		50% {
			transform: translatey(-20px) rotate(-0deg);
		}
		100% {
			transform: translatey(0px) rotate(-10deg);
		}
	}

	.astronaut {
		width: 150px;
		animation: float1 4s ease-in-out infinite;
	}
	.astronaut-laptop {
		width: 100px;
		transform: rotate(-10deg);
		animation: float2 4s ease-in-out infinite 1s;
	}

	@media screen(md) {
		.astronaut {
			width: 220px;
		}
		.astronaut-laptop {
			width: 175px;
		}
	}
	@media screen(lg) {
		.astronaut {
			width: 300px;
		}
		.astronaut-laptop {
			width: 200px;
		}
	}

	@keyframes h1float {
		0% {
			transform: translatey(0px) rotate(-5deg);
		}
		50% {
			transform: translatey(-20px) rotate(5deg);
		}
		100% {
			transform: translatey(0px) rotate(-5deg);
		}
	}

	.h1-animate {
		animation: h1float 4s ease-in-out infinite;
	}
	.h1-animate-alt {
		animation: h1float 3s ease-in-out infinite;
	}
	.h1-animate-alt2 {
		animation: h1float 4s ease-in-out infinite alternate-reverse;
	}
</style>
