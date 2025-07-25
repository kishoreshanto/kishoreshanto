<script lang="ts">
	import Card from '../components/Card.svelte';
	import Modal from '../components/Modal.svelte';
	import { fade } from 'svelte/transition';

	let showModal = false;
	let selectedCard = null;

	function showModalHandler(event) {
		selectedCard = event.detail;
		showModal = true;
	}

	function closeModalHandler() {
		showModal = false;
		selectedCard = null;
	}

	// Sample data - replace with your actual data from data.json
	const cards = [
		{
			date: 'January 16th, 2000',
			title: 'United International University',
			content: 'Went to United International University to study Computer Science and Engineering.'
		},
		{
			date: 'February 26th, 1999',
			title: 'Another Achievement',
			content: 'Details about another achievement.'
		}
		// Add more card data here
	];
</script>

<main class="space-y-10 py-20 sm:space-y-32 sm:py-32 md:space-y-14">
	{#each cards as card}
		<div
			role="button"
			tabindex="0"
			on:click={() => (selectedCard = card)}
			on:keydown={(e) => e.key === 'Enter' && (selectedCard = card)}
		>
			<Card date={card.date} on:showmodal={() => (showModal = true)}>
				<h3 class="text-lg font-bold">{card.title}</h3>
			</Card>
		</div>
	{/each}
</main>

{#if showModal && selectedCard}
	<Modal on:close={closeModalHandler}>
		<h2 slot="title">{selectedCard.title}</h2>
		<div slot="content">
			<p>{selectedCard.content}</p>
		</div>
	</Modal>
{/if}

