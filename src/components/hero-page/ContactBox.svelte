<script>
	import Email from '../contacts/Email.svelte';
	import GitHub from '../contacts/GitHub.svelte';
	import LinkedIn from '../contacts/LinkedIn.svelte';
</script>

<div
	id="contact"
	class=" mt-4 flex flex-row flex-wrap items-center justify-center gap-x-8 gap-y-3 rounded-4xl bg-yellow-700/16 px-5 py-3 shadow-xl xl:flex-col lg:items-start 2xl:px-10 2xl:py-6"
>
	<Email />
	<GitHub />
	<LinkedIn />
</div>
