<script lang="ts">
	import { onMount } from 'svelte';
	import { setScrollY } from '$lib/scrollstore';
	import { fade } from 'svelte/transition';
	import Inneraccentborder from '$lib/inneraccentborder.svelte';
	import Projectscrollcontainer from '$lib/projectscrollcontainer.svelte';
	import Contactuscard from '$lib/contactuscard.svelte';
	import Footer from '$lib/footer.svelte';
	import Projectmodal from '$lib/projectmodal.svelte';
	import { ArrowRightRhombus, BrandZoom, Phone, Users } from 'tabler-icons-svelte';
	import BannerImage from '$lib/banner-image.svelte';
	import ServiceCard from '$lib/service-card.svelte';

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
	<div bind:this={outer} class="page-inner-scroll-container pt-[85px]">
		<!-- Landing Banner -->
		<div class="flex gap-5 backdrop-blur-sm custom-card items-center px-5 lg:px-10 py-5">
			<div class="flex flex-col items-center lg:block lg:items-start w-full lg:min-w-[750px]">
				<Inneraccentborder>
					<h1 slot="header">Today's Vision, Tomorrow's Web</h1>
					<h1
						slot="content"
						class="text-xl lg:text-2xl text-center lg:text-left font-thin leading-snug"
					>
						As you set sail on your online voyage, consider us your steadfast co-pilots. At
						MicroScript, we offer more than just web development; we provide a full spectrum of
						digital services and advanced features.
					</h1>
				</Inneraccentborder>
				<div class="w-3/4 flex justify-center lg:justify-start gap-5 mt-7">
					<!-- Disabled till I can make the processes section -->
					<!-- <a class="btn1" href="/projects">
						<p class="text-sm uppercase mr-3">Our Process</p>
						<ArrowRightRhombus />
					</a> -->
					<a class="btn1" href="#contact">
						<p class="text-sm uppercase mr-3">Get in Touch</p>
						<ArrowRightRhombus />
					</a>
				</div>
			</div>
			<BannerImage />
		</div>

		<!-- Company Services Offered -->
		<div class="flex flex-col gap-5 w-full items-center justify-center px-3 md:px-10 my-12">
			<h1
				class="text-3xl md:text-5xl lg:text-7xl font-normal lg:font-thin border-b-[1px] border-primary-100 mt-5 pb-1 lg:pb-3 lg:px-5"
			>
				Company Services
			</h1>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-20 w-full lg:px-5 my-10">
				<!-- (REWRITE BLURB) -->
				<ServiceCard>
					<h1 slot="header">Web development</h1>
					<p slot="content">
						We handle everything from complicated e-commerce websites down to simple company
						information websites. There is no project too large or small for our team of designers
						and coders.
					</p>
				</ServiceCard>
				<!-- (REWRITE BLURB) -->
				<ServiceCard>
					<h1 slot="header">UI / UX Design</h1>
					<p slot="content">
						Our websites are modern and responsive. This means you get a great website at a great
						price for desktops and mobile platforms.
					</p>
				</ServiceCard>
				<!-- (REWRITE BLURB) -->
				<ServiceCard>
					<h1 slot="header">Image Generation</h1>
					<p slot="content">
						Need a photographer? We are happy to offer professional photography services to capture
						great images for your website and general marketing materials.
					</p>
				</ServiceCard>
				<!-- (REWRITE BLURB) -->
				<ServiceCard>
					<h1 slot="header">Digital Strategy</h1>
					<p slot="content">
						Search engine optimization or SEO is the lifeblood of our online marketing campaigns.
						From the ground up, we can help your business achieve new levels of success by appealing
						to new customers and getting more clicks online.
					</p>
				</ServiceCard>
				<!-- (REWRITE BLURB) -->
				<ServiceCard>
					<h1 slot="header">mobile / Responsive Design</h1>
					<p slot="content">
						The majority of online visitors are mobile users. As such our website load fast and are
						designed to be easy to navigate and use on phones and tablets. Ask about responsive web
						design today.
					</p>
				</ServiceCard>
				<ServiceCard>
					<h1 slot="header">AI Integrations</h1>
					<p slot="content">
						We offer AI driven services powered by OpenAI technologies. Need someone to handle
						customer support but don't have the money to hire a person? We can tailor an AI
						assistant to help users who visit your website.
					</p>
				</ServiceCard>
			</div>
		</div>

		<!-- Client Meetings Blurb -->
		<div
			class="relative block md:flex custom-card items-center justify-start gap-28 backdrop-blur-sm my-12 px-3 md:px-10"
		>
			<div class="w-full md:w-1/2 py-16 lg:py-32 lg:ml-12">
				<h1 class="text-center md:text-left text-4xl font-semibold uppercase">
					Meetings are Important!
				</h1>
				<p class="text-center md:text-left mt-3 md:ml-5">
					We strive for an excellent communication experience with our clients. Keeping a client
					informed is paramount to delivering a quality website. Our team is glad to meet you,
					either in person or over web conference to discuss estimates, design critiques, and SEO
					reports.
				</p>
			</div>
			<div
				class="grid grid-cols-3 grid-rows-2 gap-0 w-fit mx-auto min-w-fit max-h-[400px] pb-20 md:py-0"
			>
				<div class="meetings-icon col-start-2 row-start-1 md:translate-y-5">
					<Phone class="-rotate-45" strokeWidth="1" size="90" />
				</div>
				<div class="meetings-icon row-start-2 col-start-1 md:translate-x-5">
					<BrandZoom class="-rotate-45" strokeWidth="1" size="90" />
				</div>
				<div class="meetings-icon row-start-2 col-start-3 md:-translate-x-5">
					<Users class="-rotate-45" strokeWidth="1" size="90" />
				</div>
			</div>
			<div
				class="absolute top-0 left-0 flex w-full h-full bg-secondary-500 meetings-shape-cutout z-[-1] backdrop-blur-sm opacity-25"
			/>
		</div>

		<!-- Work -->
		<div class="custom-card flex flex-col justify-center px-5 md:px-10">
			<Projectscrollcontainer />
		</div>

		<!-- Contact -->
		<div id="contact" class="backdrop-blur-sm custom-card py-16 md:py-32 px-10">
			<Contactuscard />
		</div>
		<Footer class="hidden md:flex" />
		<Projectmodal />
	</div>
</div>

<style lang="postcss">
	.custom-card {
		@apply relative z-[2] w-full h-fit bg-black bg-opacity-5;
	}

	.meetings-shape-cutout {
		clip-path: polygon(0% 0%, 100% 0%, 50% 100%, 0% 100%);
	}

	.meetings-icon {
		@apply flex justify-center items-center 
		bg-primary-300 text-secondary-800 rotate-45 
		w-[70px] h-[70px] md:w-[130px] md:h-[130px] 
		shadow-xl 
		border-[5px] border-primary-400
		transition-transform duration-700
		hover:rotate-[405deg];
	}
</style>
