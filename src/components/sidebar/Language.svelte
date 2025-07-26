<!-- YOU DO NOT NEED TO CHANGE THIS FILE -->

<script lang="ts">
    import data from "$lib/data_en.json";

    const show_language: string[] | undefined = data.language;
</script>

{#if show_language}
    <h1 class="mt-4 select-none cursor-default my-1 font-bold text-sky-800 dark:text-sky-600 font-mono">Languages</h1>
    <div class="select-none my-1 flex gap-x-2 gap-y-2 flex-wrap dark:text-white text-sm">
        {#each show_language as subject}
            <h1 class="  px-3 py-0.5 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-100 dark:from-slate-800 dark:to-slate-700 text-center font-semibold cursor-default text-slate-700 dark:text-slate-200  transition-all duration-300 shadow-sm  border border-white/20 dark:border-slate-600/30 backdrop-blur-sm">{subject}</h1>
        {/each}
    </div>
{/if}