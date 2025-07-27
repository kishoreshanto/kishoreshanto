<script lang="ts">
	import Modal from '../components/Modal.svelte';
	import UniversityUiuModal from '../components/modals/UniversityUIUModal.svelte';
	import PasswordCrackResearchModal from '../components/modals/PasswordCrackResearchModal.svelte';
	import GarmentDefectResearchModal from '../components/modals/GarmentDefectResearchModal.svelte';
	import GbdtsvmModal from '../components/modals/GBDTSVMModal.svelte';
	import VadModal from '../components/modals/VADModal.svelte';
	import EegModal from '../components/modals/EEGModal.svelte';
    import EegResearch from '../components/Cards/EEGResearch.svelte';
	import UniversityUIU from "../components/Cards/UniversityUIU.svelte";
	import PasswordCrackResearch from "../components/Cards/PasswordCrackResearch.svelte";
	import VADResearch from "../components/Cards/VADResearch.svelte";
	import GBDTSVMResearch from "../components/Cards/GBDTSVMResearch.svelte";
	import GarmentDefectResearch from "../components/Cards/GarmentDefectResearch.svelte";
	import RFWOCResearch from "../components/Cards/RFWOCResearch.svelte";
	import LandSphereProject from "../components/Cards/LandSphereProject.svelte";
	import PlantifyProject from "../components/Cards/PlantifyProject.svelte";
	import AgriInnProject from "../components/Cards/AgriInnProject.svelte";
	import NotFoundCard from '../components/NotFoundCard.svelte';
	import TopBar from '../components/TopBar.svelte';
	import projectsData from '../lib/data_card.json';

	let showModal = false;
	let selectedComponent: any = null;
	let searchTerm = '';

	// Component mapping
	const componentMap: { [key: string]: any } = {
		EegResearch,
		UniversityUIU,
		VADResearch,
		GBDTSVMResearch,
		GarmentDefectResearch,
		RFWOCResearch,
		LandSphereProject,
		PlantifyProject,
		AgriInnProject,
		PasswordCrackResearch
	};

	// Modal mapping
	const modalMap: { [key: string]: any } = {
		EegModal,
		UniversityUiuModal,
		VadModal,
		GbdtsvmModal,
		GarmentDefectResearchModal,
		PasswordCrackResearchModal

	};

	// Transform JSON data to include actual component references
	const projects = projectsData.projects.map(project => ({
		...project,
		component: componentMap[project.component],
		modal: project.modal ? modalMap[project.modal] : null
	}));

	// Filter projects based on search term
	$: filteredProjects = projects.filter(project => {
		if (!searchTerm.trim()) return true;
		const search = searchTerm.toLowerCase();
		return project.title.toLowerCase().includes(search) || 
			   project.keywords.toLowerCase().includes(search) ||
			   project.date.toLowerCase().includes(search);
	});

	function openModal(component: any) {
		selectedComponent = component;
		showModal = true;
	}

	function closeModal() {
		showModal = false;
		selectedComponent = null;
	}

	function clearSearch() {
		searchTerm = '';
	}

	function handleSearchInput(event: CustomEvent<{value: string}>) {
		searchTerm = event.detail.value;
	}
</script>

<TopBar 
	{searchTerm} 
	on:clearSearch={clearSearch} 
	on:searchInput={handleSearchInput} 
/>

<main class="space-y-10 py-20 sm:space-y-32 sm:py-32 md:space-y-14 bg-fixed bg-cover bg-center">
	{#if filteredProjects.length > 0}
		{#each filteredProjects as project (project.id)}
			<svelte:component 
				this={project.component} 
				date={project.date} 
				on:showmodal={project.modal ? () => openModal(project.modal) : undefined}
			/>
		{/each}
	{:else}
		<!-- No results found message -->
		<NotFoundCard on:clearSearch={clearSearch} />

	{/if}
</main>

{#if showModal && selectedComponent}
	<Modal on:close={closeModal}>
		<svelte:component this={selectedComponent} />
	</Modal>
{/if}

