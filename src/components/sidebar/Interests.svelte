<script lang="ts">
    import data from "$lib/data.json";
</script>

<h1 class="select-none cursor-default font-bold text-sky-800 dark:text-sky-600 font-mono">Interests and Passion</h1>
<div class="select-none mt-2 flex gap-x-4 gap-y-2 flex-wrap dark:text-white text-sm">
    {#each data.interest_and_passion as subject}
        <h1 class="bg-sky-100 cursor-default text-zinc-600 hover:bg-sky-200 transition-all shadow
        duration-300 dark:hover:dark:bg-sky-800 dark:text-zinc-200 dark:bg-sky-950 font-medium px-3 py-0.5 rounded-2xl">{subject}</h1>
    {/each}
</div>