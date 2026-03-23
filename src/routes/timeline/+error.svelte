<script lang="ts">
	import { page } from '$app/state';
	import RouteErrorView from '$component/RouteErrorView.svelte';
</script>

<svelte:head>
	<title>{page.status} | Timeline error</title>
</svelte:head>

<RouteErrorView
	status={page.status}
	title="The timeline could not be assembled."
	message={page.error?.message ?? 'Timeline unavailable'}
	description="Something interrupted this section before the research and experience history could be rendered."
	eyebrow="Timeline boundary"
	section="Timeline"
	actions={[
		{ href: '/timeline', label: 'Retry timeline' },
		{ href: '/', label: 'Go home', variant: 'secondary' }
	]}
/>
