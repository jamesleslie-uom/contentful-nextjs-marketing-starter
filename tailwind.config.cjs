/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
	safelist: ['rounded-t-lg', 'line-clamp-1', 'line-clamp-2', 'line-clamp-3', 'line-clamp-4', 'line-clamp-5', 'line-clamp-6', 'line-clamp-7', 'line-clamp-8', 'line-clamp-9'],
	theme: {
		extend: {
			boxShadow: {
				dark: '2px 2px 10px 10px rgba(0, 0, 0, 0.06)',
			},
			fontFamily: {
				sans: ['Inter', ...defaultTheme.fontFamily.sans],
			},
			spacing: {
				container: '1200px',
			},

			lineClamp: {
				7: '7',
				8: '8',
				9: '9',
				10: '10',
				11: '11',
				12: '12',
				13: '13',
				14: '14',
			},
			transitionProperty: {
				height: 'height',
			},
			screens: {
				'3xl': '1740px',
				'4xl': '2250px',
			},
			maxWidth: {
				container: '80rem',
				'half-container': '40rem',
				content: '48rem',
			},
			outline: {
				'blue-1': '1px solid #1D4ED8',
				blue: '2px solid #1D4ED8',
			},
			colors: {
				'uom-navy-dark': '#0F396B',
				'sh-dark-blue': '#004576',
				'sh-light-blue': '#C2E5FF',
				'sh-green': '#008a00',
				green: {
					900: '#142A1D',
					800: '#244D36',
					700: '#34704E',
					600: '#459266',
					500: '#59B17F',
					400: '#7CC19A',
					300: '#9ED2B5',
					200: '#C1E2CF',
					100: '#E4F2EA',
					50: '#F5FAF7',
				},
				teal: {
					900: '#0D2328',
					800: '#19444F',
					700: '#256576',
					600: '#32869C',
					500: '#3FA7C2',
					400: '#66B9CE',
					300: '#8CCADB',
					200: '#B3DCE7',
					100: '#DAEEF3',
					50: '#EDF7F9',
				},
				'uom-navy': {
					900: '#094183',
					800: '#00538F',
					700: '#005FA3',
					600: '#006BB8',
					500: '#0077CC',
					400: '#33AAFF',
					300: '#70C3FF',
					200: '#99D5FF',
					100: '#C2E5FF',
					50: '#EBF7FF',
				},
			},
		},
		listStyleType: {
			none: 'none',
			disc: 'disc',
			decimal: 'decimal',
			square: 'square',
			roman: 'upper-roman',
		},
	},
	variants: {},
	plugins: [require('@tailwindcss/forms'), require('@tailwindcss/line-clamp'), require('@tailwindcss/typography'), require('@headlessui/tailwindcss')],
}
