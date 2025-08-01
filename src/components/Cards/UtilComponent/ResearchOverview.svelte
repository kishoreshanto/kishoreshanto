<script lang="ts">
    interface Props {
        card_overview: string;
    }

    let { card_overview }: Props = $props();

</script>

<div class="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-lg p-4 border border-indigo-200 dark:border-indigo-800">
    <div class="flex items-start space-x-3">
        <div class="flex-shrink-0 mt-1">
            <svg class="w-4 h-4 text-indigo-600 dark:text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clip-rule="evenodd"/>
            </svg>
        </div>
        <div>
            <p class="text-sm font-medium text-indigo-800 dark:text-indigo-200 mb-1">Research Overview</p>
            <p class="text-sm text-indigo-700 dark:text-indigo-300 leading-relaxed">
                {card_overview}
            </p>
        </div>
    </div>
</div>