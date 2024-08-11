<!-- YOU DO NOT NEED TO CHANGE THIS FILE -->

<script lang="ts">
    import data from "$lib/data.json";

    const description: string | undefined = data.description;
</script>

{#if description}
    <p class="text-xs select-none cursor-default mt-4 xs:text-sm text-gray-600 dark:text-gray-400 tracking-tight text-justify">
        {description}
    </p>
{:else}
    <p class="text-xs select-none cursor-default mt-4 xs:text-sm text-red-600 dark:text-red-300 tracking-tight text-justify">
        ERROR: No description provided
    </p>
{/if}