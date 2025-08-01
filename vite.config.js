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
					// Vendor chunk for external dependencies
					vendor: ['svelte']
				},
				
				// Optimize chunk file names for better caching
				chunkFileNames: (chunkInfo) => {
					// Use content hash for better caching
					return `chunks/[name]-[hash].js`;
				},
				
				// Optimize asset file names
				assetFileNames: (assetInfo) => {
					if (!assetInfo.name) return 'assets/[name]-[hash][extname]';
					
					const info = assetInfo.name.split('.');
					const ext = info[info.length - 1];
					if (/\.(css)$/.test(assetInfo.name)) {
						return `css/[name]-[hash].${ext}`;
					}
					if (/\.(png|jpg|jpeg|gif|svg|ico|webp)$/.test(assetInfo.name)) {
						return `images/[name]-[hash].${ext}`;
					}
					return `assets/[name]-[hash].${ext}`;
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
		include: ['marked', '@vercel/speed-insights/sveltekit'],
		// Force pre-bundling of these dependencies
		force: false
	},
	
	// Server configuration for development
	server: {
		// Enable HTTP/2 for development
		https: false,
		// Preload modules
		warmup: {
			clientFiles: ['./src/routes/+layout.svelte', './src/routes/+page.svelte']
		}
	}
});
