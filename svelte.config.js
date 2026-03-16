import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		alias: {
			// refer to the components directory using $component
			$component: 'src/components'
		},

		// Service worker for caching and offline support
		serviceWorker: {
			register: true // Disable for now, can be enabled later
		},

		// Content Security Policy for better security
		csp: {
			mode: 'auto',
			directives: {
				'script-src': ['self'],
				'style-src': ['self', 'unsafe-inline', 'fonts.googleapis.com'],
				'font-src': ['self', 'fonts.gstatic.com'],
				'connect-src': ['self', 'vitals.vercel-insights.com']
			}
		}
	}
};

export default config;
