<!-- YOU DO NOT NEED TO CHANGE THIS FILE -->

<script lang="ts">
    import data from "$lib/data.json";

    const items: string[] | undefined = data.titles;
</script>

{#if items}
    <h1 class="select-none mt-4 font-display text-2xl font-semibold dark:text-white text-black font-mono">
        <span class="text-sky-900 dark:text-sky-600">{items[0]}</span>
        and
        <span class="text-sky-900 dark:text-sky-600">{items[1]}</span>
    </h1>
{:else}
    <h1 class="select-none mt-4 font-display font-semibold dark:text-white text-black font-mono">
        <span class="text-red-600">ERROR: No title provided</span>
    </h1>
{/if}