<script lang="ts">
    import data from "$lib/data.json"
    import ResumeIcon from "../visuals/icons/ResumeIcon.svelte";

    const show_resume: boolean = data.show_resume;
    const resume_url: string = data.resume_url;
</script>

{#if show_resume}
    <a target="_blank"
       class=" text-sm select-none flex gap-1 text-sky-500 items-center hover:text-sky-600 dark:text-sky-400 dark:hover:text-sky-500 font-medium transition-all duration-300"
       href={resume_url}>

        <ResumeIcon/>

        {#if resume_url}
            View Resume
        {:else}
            <span class="text-red-500 dark:text-red-400 font-mono">No resume link provided</span>
        {/if}
    </a>
{/if}