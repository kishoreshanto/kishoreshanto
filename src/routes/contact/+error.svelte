<script lang="ts">
	import { page } from '$app/state';
	import RouteErrorView from '$component/RouteErrorView.svelte';
</script>

<svelte:head>
	<title>{page.status} | Contact error</title>
</svelte:head>

<RouteErrorView
	status={page.status}
	title="The contact page is unavailable."
	message={page.error?.message ?? 'Contact details unavailable'}
	description="This section hit a route error before the contact options could finish rendering."
	eyebrow="Contact boundary"
	section="Contact"
	actions={[
		{ href: '/contact', label: 'Retry contact' },
		{ href: '/', label: 'Go home', variant: 'secondary' }
	]}
/>
