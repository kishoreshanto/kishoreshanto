<!-- YOU DO NOT NEED TO CHANGE THIS FILE -->

<script lang="ts">
    import data from "$lib/data.json";
    const name: string = data.name;

</script>

{#if name}
    <h1 class="font-semibold text-zinc-400 text-sm">Legal Name: {data.legal_name}</h1>
{:else}
    <h1 class=" dark:text-red-300 font-mono font-bold text-red-600">No name provided</h1>
{/if}