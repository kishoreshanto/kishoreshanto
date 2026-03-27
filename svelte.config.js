import adapter from '@sveltejs/adapter-vercel';
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

		// Content Security Policy for better security
		csp: {
			mode: 'auto',
			directives: {
				'default-src': ['none'],
				'script-src': ['self'],
				'style-src': ['self', 'unsafe-inline', 'fonts.googleapis.com'],
				'font-src': ['self', 'fonts.gstatic.com'],
				'img-src': [
					'self', 
					'i.ibb.co.com',
					// 'o83dp4hmlwk6umh0.public.blob.vercel-storage.com',
				],
				'connect-src': ['self', 'vitals.vercel-insights.com'],
				'object-src': ['none'],
				'base-uri': ['self'],
				'frame-ancestors': ['none'],
				'form-action': ['self']
			}
		}
	}
};

export default config;
