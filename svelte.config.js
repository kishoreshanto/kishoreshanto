import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	compilerOptions: {
		runes: true
	},

	kit: {
		adapter: adapter(),

		// Service worker for caching and offline support
		serviceWorker: {
			register: false // Disable for now, can be enabled later
		},

		// Content Security Policy for better security
		csp: {
			mode: 'auto',
			directives: {
				'script-src': ['self'],
				'style-src': ['self', 'unsafe-inline', 'fonts.googleapis.com'],
				'font-src': ['self', 'fonts.gstatic.com'],
				'connect-src': ['self', 'router.huggingface.co', 'vitals.vercel-insights.com']
			}
		}
	}
};

export default config;
