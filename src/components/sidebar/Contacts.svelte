<!-- YOU DO NOT NEED TO CHANGE THIS FILE -->

<script lang="ts">
	import GitHub from '../contacts/GitHub.svelte';
	import LinkedIn from '../contacts/LinkedIn.svelte';
	import Instagram from '../contacts/Instagram.svelte';
	import Orcid from '../contacts/Orcid.svelte';
	import Email from '../contacts/Email.svelte';
	import Resume from '../contacts/Resume.svelte';
</script>

<div
	class="mt-2 flex flex-col selection:bg-sky-200 selection:text-black dark:text-white dark:selection:text-white"
>
	<div
		class="xs:flex-row xs:gap-12 xs:text-lg mb-4 flex flex-col gap-2 text-sm text-black dark:text-white"
	>
		<Email />
		<Resume />
	</div>

	<div class="xs: xs:flex-row xs:gap-x-8 flex flex-col flex-wrap gap-2 gap-y-2">
		<GitHub />
		<LinkedIn />
		<Instagram />
	</div>

	<Orcid />
</div>
