/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			backgroundImage: {
				'space-stars': "url('/images/space-stars.webp')"
			},
			colors: {
				'color-primary': 'hsl(var(--p))'
			}
		}
	},
	daisyui: {
		themes: [
			{
				jade: {
					primary: '#d0bfad',
					secondary: '#4a6551',
					accent: '#f0aa5f',
					neutral: '#0369a1',
					'base-100': '#26211d',
					info: '#a8a29e',
					success: '#22c55e',
					warning: '#eab308',
					error: '#ef4444'
				}
			}
		]
	},

	plugins: [require('daisyui')]
};

module.exports = config;
