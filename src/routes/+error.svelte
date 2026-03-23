<script lang="ts">
	import { page } from '$app/state';
	import RouteErrorView from '$component/RouteErrorView.svelte';

	const title = $derived(
		page.status === 404 ? 'That page does not exist here.' : 'This page could not be loaded.'
	);
	const description = $derived(
		page.status === 404
			? 'The route may have changed, the link may be outdated, or the page was never published.'
			: 'A route or load failure interrupted the request before the page finished rendering.'
	);
</script>

<svelte:head>
	<title>{page.status} | Portfolio error</title>
</svelte:head>

<RouteErrorView
	status={page.status}
	{title}
	message={page.error?.message ?? 'Internal Error'}
	{description}
	eyebrow="Global boundary"
	section="Portfolio"
	actions={[
		{ href: '/', label: 'Go home' },
		{
			href: page.status === 404 ? '/story' : '/contact',
			label: page.status === 404 ? 'Browse stories' : 'Open contact',
			variant: 'secondary'
		}
	]}
/>
