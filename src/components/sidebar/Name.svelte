<!-- YOU DO NOT NEED TO CHANGE THIS FILE -->

<script lang="ts">
    import data from "$lib/data.json";

    const name: string = data.name;

    let first_name: string;
    let last_name: string;

    if (name) {
        first_name = name.split(' ')[0];
        last_name = name.split(' ').slice(1).join(' ');
    }

</script>

{#if name}
<h1 class=" dark:text-white font-black text-5xl text-black">
    {first_name}
    <span class="text-sky-300">{last_name}</span>
</h1>
{:else}
<h1 class=" dark:text-red-300 font-mono font-bold text-red-600">ERROR: No name provided</h1>
{/if}