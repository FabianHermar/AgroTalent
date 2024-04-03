import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			fontFamily: {
				GilroyRegular: 'GilroyRegular, system-ui, sans-serif',
				GilroyMedium: 'GilroyMedium, system-ui, sans-serif',
				GilroySemibold: 'GilroySemibold, system-ui, sans-serif',
				GilroyBold: 'GilroyBold, system-ui, sans-serif'
			},
			colors: {
				'green-pea': {
					'50': '#f1f8f3',
					'100': '#ddeee0',
					'200': '#bdddc5',
					'300': '#91c4a1',
					'400': '#62a579',
					'500': '#41885b',
					'600': '#2f6c47',
					'700': '#2a6041',
					'800': '#204530',
					'900': '#1b3928',
					'950': '#0e2017'
				}
			}
		}
	},
	plugins: []
}
export default config
