import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	build: {
		target: 'esnext',
		minify: 'terser',
		terserOptions: {
			compress: {
				drop_console: true,
				drop_debugger: true,
				pure_funcs: ['console.log']
			}
		},
		rollupOptions: {
			output: {
				manualChunks: {
					'vendor': ['svelte', '@sveltejs/kit'],
					'modals': [
						'src/components/modals/EEGModal.svelte',
						'src/components/modals/GarmentDefectResearchModal.svelte',
						'src/components/modals/GBDTSVMModal.svelte',
						'src/components/modals/PasswordCrackResearchModal.svelte',
						'src/components/modals/UniversityUIUModal.svelte',
						'src/components/modals/VADModal.svelte'
					],
					'cards': [
						'src/components/Cards/EEGResearch.svelte',
						'src/components/Cards/UniversityUIU.svelte',
						'src/components/Cards/PasswordCrackResearch.svelte',
						'src/components/Cards/VADResearch.svelte',
						'src/components/Cards/GBDTSVMResearch.svelte',
						'src/components/Cards/GarmentDefectResearch.svelte'
					]
				}
			}
		},
		chunkSizeWarningLimit: 1000
	},
	optimizeDeps: {
		include: ['@vercel/speed-insights/sveltekit']
	},
	ssr: {
		noExternal: ['@vercel/speed-insights']
	},
	server: {
		hmr: {
			overlay: false
		}
	}
});
