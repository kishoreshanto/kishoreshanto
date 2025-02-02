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
    <div class="flex flex-col gap-0.5">
        <h1 class=" my-0.5 dark:text-white font-black xs:text-5xl text-4xl text-black">
            {first_name}
            <span class="text-sky-300">{last_name}</span>
        </h1>
        <h1 class="font-semibold text-zinc-400 text-sm">{data.ipa_name}</h1>
    </div>

{:else}
    <h1 class=" dark:text-red-300 font-mono font-bold text-red-600">No name provided</h1>
{/if}