/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
				mono: ['JetBrains Mono', 'monospace'],
			},
			colors: {
				bg: '#0A0A0A',
				surface: '#111111',
				'surface-secondary': '#171717',
				border: '#1E1E1E',
				'border-hover': '#2A2A2A',
				text: '#F5F5F5',
				'text-secondary': '#A1A1AA',
				'text-tertiary': '#52525B',
				accent: '#4DA3FF',
				'accent-hover': '#3B8AE0',
			},
			borderRadius: {
				DEFAULT: '12px',
			},
			fontSize: {
				'display': ['clamp(3rem, 8vw, 6rem)', { lineHeight: '1.05', letterSpacing: '-0.04em', fontWeight: '700' }],
				'heading': ['clamp(2rem, 5vw, 3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.03em', fontWeight: '600' }],
				'subheading': ['1.5rem', { lineHeight: '1.3', letterSpacing: '-0.02em', fontWeight: '600' }],
				'body-lg': ['1.125rem', { lineHeight: '1.7', fontWeight: '400' }],
				'meta': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0.05em', fontWeight: '500' }],
				'label': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.1em', fontWeight: '500' }],
			},
			transitionTimingFunction: {
				'apple': 'cubic-bezier(0.16, 1, 0.3, 1)',
			},
			animation: {
				'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
			},
			keyframes: {
				fadeIn: {
					from: { opacity: '0', transform: 'translateY(20px)' },
					to: { opacity: '1', transform: 'translateY(0)' },
				},
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};