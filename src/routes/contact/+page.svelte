<script lang="ts">
	import './contact.css';
	import EmailCard from '$component/contactcards/EmailCard.svelte';
	import GitHubCard from '$component/contactcards/GitHubCard.svelte';
	import LinkedInCard from '$component/contactcards/LinkedInCard.svelte';
	import GoogleScholarCard from '$component/contactcards/GoogleScholarCard.svelte';
	import OrcidCard from '$component/contactcards/OrcidCard.svelte';
	import ResumeCVCard from '$component/contactcards/ResumeCVCard.svelte';
</script>

<main class="mx-5 mb-20 md:container md:mx-auto md:px-10">
	<section class="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
		<EmailCard />
		<GitHubCard />
		<LinkedInCard />
		<GoogleScholarCard />
		<OrcidCard />
		<ResumeCVCard />
	</section>
</main>
