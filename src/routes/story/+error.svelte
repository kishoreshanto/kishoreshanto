<script lang="ts">
	import { page } from '$app/state';
	import RouteErrorView from '$component/RouteErrorView.svelte';
</script>

<svelte:head>
	<title>{page.status} | Story error</title>
</svelte:head>

<RouteErrorView
	status={page.status}
	title={page.status === 404 ? 'That story could not be found.' : 'This story is unavailable right now.'}
	message={page.error?.message ?? 'Story unavailable'}
	description="The story archive is still intact, but this route could not resolve the page you asked for."
	eyebrow="Story boundary"
	section="Story archive"
	actions={[
		{ href: '/story', label: 'Back to stories' },
		{ href: '/', label: 'Return home', variant: 'secondary' }
	]}
/>
