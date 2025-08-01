<script lang="ts">
    interface Props {
        tags: string[];
    }

    let { tags }: Props = $props();

</script>

        <!-- Research Tags -->
<div class="space-y-2">
    <p class="text-xs font-medium text-zinc-600 dark:text-zinc-400 uppercase tracking-wide">Research Focus Areas</p>
    <div class="flex flex-wrap gap-2">
        {#each tags as tag}
                <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-orange-200/70 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300"> {tag} </span>
        {/each}

    </div>
</div>