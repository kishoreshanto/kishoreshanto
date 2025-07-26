<script lang="ts">
    import data from "$lib/data_en.json"
    import GithubIcon from "../visuals/icons/GithubIcon.svelte";

    const show_github: boolean = data.show_github;
    let github_url: string;
    let github_username: string;

    if (show_github) {
        github_url = data.github_url;
        github_username = data.github_username;
    }
</script>

{#if show_github}
    <a target="_blank" href="{github_url}" class="flex align-middle items-center gap-1">
        <GithubIcon/>
        <h1 class="text-xs xs:text-sm font-light text-gray-500 dark:hover:text-gray-300 transition-all duration-300 hover:text-gray-900">
            / {github_username}</h1>
    </a>
{/if}