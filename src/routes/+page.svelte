<script lang="ts">
	import Card from '../components/Card.svelte';
	import Modal from '../components/Modal.svelte';
	import UiuModal from '../components/modals/Uiu.svelte';
	import ProjectAModal from '../components/modals/ProjectA.svelte';

	let showModal = false;
	let selectedComponent: any = null;

	function openModal(component: any) {
		selectedComponent = component;
		showModal = true;
	}

	function closeModal() {
		showModal = false;
		selectedComponent = null;
	}
</script>

<main class="space-y-10 py-20 sm:space-y-32 sm:py-32 md:space-y-14">
	<div
		class="focus:outline-none"
		on:click={() => openModal(UiuModal)}
		on:keydown={(e) => e.key === 'Enter' && openModal(UiuModal)}
		role="button"
		tabindex="0"
	>
		<Card date="January 16th, 2020">
			<h1 class="mb-2 text-lg font-bold">Graduated from University</h1>
			<p>Completed my Bachelor of Science in Computer Science and Engineering from United International University.</p>
		</Card>
	</div>

	<div
		class="focus:outline-none"
		on:click={() => openModal(ProjectAModal)}
		on:keydown={(e) => e.key === 'Enter' && openModal(ProjectAModal)}
		role="button"
		tabindex="0"
	>
		<Card date="August 5th, 2023">
			<h3 class="mb-2 text-lg font-bold">Completed Project Alpha</h3>
			<p>Successfully developed and launched a full-stack web application using the MERN stack.</p>
		</Card>
	</div>

	<!-- Add more cards here, each with its own content and modal component -->
</main>

{#if showModal && selectedComponent}
	<Modal on:close={closeModal}>
		<svelte:component this={selectedComponent} />
	</Modal>
{/if}

