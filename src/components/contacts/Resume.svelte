<script lang="ts">
	import data from '$lib/data/personal.json';
	import ResumeIcon from '$component/shared/svg/ResumeIcon.svelte';

	const show_resume: boolean = data.show_resume;
	const resume_url: string = data.resume_url;
</script>

{#if show_resume}
	<a
		target="_blank"
		class=" flex items-center gap-1 text-sm font-medium text-sky-500 transition-all duration-300 select-none hover:text-sky-600 dark:text-sky-400 dark:hover:text-sky-500"
		href={resume_url}
	>
		<ResumeIcon />

		{#if resume_url}
			View Resume
		{:else}
			<span class="font-mono text-red-500 dark:text-red-400">No resume link provided</span>
		{/if}
	</a>
{/if}
