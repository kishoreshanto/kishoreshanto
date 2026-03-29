import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { visualizer } from 'rollup-plugin-visualizer';
import compression from 'vite-plugin-compression';

export default defineConfig({
	plugins: [
		sveltekit(),
		tailwindcss(),

		// Compression plugin for gzip/brotli
		compression({
			algorithm: 'gzip',
			ext: '.gz',
			threshold: 1024, // Only compress files larger than 1KB
			deleteOriginFile: false
		}),

		// Brotli compression (better than gzip)
		compression({
			algorithm: 'brotliCompress',
			ext: '.br',
			threshold: 1024,
			deleteOriginFile: false
		}),

		// Bundle analyzer - generates stats.html
		visualizer({
			filename: './dist/stats.html',
			open: false,
			gzipSize: true,
			brotliSize: true,
			template: 'treemap' // Options: 'treemap', 'sunburst', 'network'
		})
	],

	build: {
		// CSS optimization
		cssCodeSplit: true,
		cssMinify: 'esbuild',

		// Enable sourcemaps for debugging (disable in production)
		sourcemap: false,

		// Rollup options for better optimization
		rollupOptions: {
			output: {
				// Separate chunks for better caching
				manualChunks: {
					// Vendor chunk for external dependencies: svelte, @vercel/speed-insights/sveltekit
					// vendor: ['svelte', '@vercel/speed-insights/sveltekit']
					vendor: ['svelte']

				}
			}
		},

		// Enable minification
		minify: 'esbuild',

		// Target modern browsers for better optimization
		target: 'es2020',

		// Reduce chunk size warning limit
		chunkSizeWarningLimit: 1000
	},

	// CSS preprocessing optimization
	css: {
		devSourcemap: true,
		// CSS code splitting
		preprocessorOptions: {}
	},

	// Optimize dependencies
	optimizeDeps: {
		include: ['@vercel/speed-insights/sveltekit'],
		// Force pre-bundling of these dependencies
		force: false
	},

	// Server configuration for development
	server: {
		// Preload modules
		warmup: {
			clientFiles: ['./src/routes/+layout.svelte', './src/routes/+page.svelte']
		}
	}
});
