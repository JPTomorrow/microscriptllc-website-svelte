<script lang="ts">
	import { onMount } from 'svelte';
	import { loadSlim } from 'tsparticles-slim'; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.
	let ParticlesComponent: any;

	onMount(async () => {
		const module = await import('svelte-particles');

		ParticlesComponent = module.default;
	});

	// let particlesUrl = 'http://foo.bar/particles.json'; // placeholder, replace it with a real url

	let particlesConfig = {
		fpsLimit: 60,
		background: {
			color: 'transparent'
		},
		interactivity: {
			events: {
				onClick: { enable: true, mode: 'push' },
				onHover: {
					enable: true,
					mode: 'repulse',
					parallax: { enable: true, force: 80, smooth: 10 }
				},
				resize: true
			},
			modes: {
				push: { quantity: 10 },
				repulse: { distance: 70, duration: 1 }
			}
		},
		particles: {
			color: {
				value: ['#00ffae']
			},
			move: {
				direction: 'none',
				enable: true,
				outModes: 'out',
				random: false,
				speed: 0.5,
				straight: false
			},
			number: {
				density: {
					enable: true,
					area: 800
				},
				value: 120
			},
			opacity: {
				animation: {
					enable: true,
					speed: 0.05,
					sync: true,
					startValue: 'max'
				},
				value: {
					min: 0.5,
					max: 0.8
				}
			},
			shape: {
				type: 'circle'
			},
			size: {
				value: { min: 0.5, max: 1.5 }
			}
		}
	};

	let onParticlesLoaded = (event: any) => {
		const particlesContainer = event.detail.particles;
		// console.log('particles loaded');
	};

	let particlesInit = async (engine: any) => {
		await loadSlim(engine);
	};
</script>

<svelte:component
	this={ParticlesComponent}
	id="tsparticles"
	class="foo bar"
	style=""
	options={particlesConfig}
	on:particlesLoaded={onParticlesLoaded}
	{particlesInit}
/>
<!-- <slot name="contents" /> -->

<!-- or -->

<!-- <svelte:component
	this={ParticlesComponent}
	id="tsparticles"
	class="foo bar"
	style=""
	url={particlesUrl}
	on:particlesLoaded={onParticlesLoaded}
	{particlesInit}
/> -->
