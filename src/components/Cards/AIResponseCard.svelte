<script lang="ts">
	import Card from "../Card.svelte";
	import { marked } from 'marked';
	
	interface Props {
		question: string;
		answer: string;
		isLoading?: boolean;
		onaskAnother?: () => void;
	}

	let { question, answer, isLoading = false, onaskAnother }: Props = $props();

	// Parse markdown to HTML using Svelte 5 runes
	const parsedAnswer = $derived(marked(answer || '', {
		breaks: true, // Convert line breaks to <br>
		gfm: true,    // Enable GitHub Flavored Markdown
	}));
</script>

<section class="scroll-mt-16 focus-visible:outline-none ">
	<div class="mx-auto max-w-7xl px-6 lg:flex lg:px-8 ">
		<div class="lg:ml-96 lg:flex lg:w-full lg:justify-end lg:pl-32 ">
			<div class="bg-gradient-to-l from-blue-100/60 to-purple-100/90 mx-auto max-w-lg rounded-xl border-zinc-300  p-4 drop-shadow-xl backdrop-blur-md transition-transform duration-300 dark:border-zinc-700 dark:bg-zinc-800/30 lg:mx-0 lg:w-0 lg:max-w-xl lg:flex-auto">
				<div class="space-y-4 ">
		<!-- AI Badge -->
		<div class="flex items-center gap-3 mb-6 select-none">
			<div class="animate-pulse bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-2">
				<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
					<path d="M12 1L9 9l-8 3 8 3 3 8 3-8 8-3-8-3-3-8z" fill="currentColor" stroke="none"/>
					<circle cx="12" cy="12" r="2" fill="currentColor" stroke="none"/>
				</svg>
			</div>
            <div class="flex flex-col gap-0.5">
                <span class="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    AI Response
                </span>
                <span class="text-xs font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Generative AI can make mistakes, always verify information.
                </span>
            </div>

		</div>

		<!-- Answer -->
		<div class="mb-6">
			
			{#if isLoading}
				<!-- Loading Animation -->
				<div class="flex items-center gap-3 p-4">
					<div class="flex gap-1">
						<div class="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style="animation-delay: 0ms"></div>
						<div class="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style="animation-delay: 150ms"></div>
						<div class="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style="animation-delay: 300ms"></div>
					</div>
					<span class="text-gray-600 dark:text-gray-400">
						Thinking...
					</span>
				</div>
			{:else}
				<div class="prose prose-gray dark:prose-invert max-w-none">
					<div class="text-gray-800 dark:text-gray-200 leading-relaxed">
						{@html parsedAnswer}
					</div>
				</div>
			{/if}
		</div>

	</div>
			</div>
		</div>
	</div>
</section>
	