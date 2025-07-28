<script lang="ts">
	import Card from "../Card.svelte";
	
	interface Props {
		question: string;
		answer: string;
		isLoading?: boolean;
		onaskAnother?: () => void;
	}

	let { question, answer, isLoading = false, onaskAnother }: Props = $props();
</script>

{#snippet cardContent()}
	<div class="space-y-4 ">
		<!-- AI Badge -->
		<div class="flex items-center gap-3 mb-6 ">
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
						{@html answer.replace(/\n/g, '<br>')}
					</div>
				</div>
			{/if}
		</div>

	</div>
{/snippet}

<Card date="AI Response" onshowmodal={undefined}>
	{@render cardContent()}
</Card>
