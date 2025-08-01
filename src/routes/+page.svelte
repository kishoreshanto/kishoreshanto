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
	import AIResponseCard from '../components/Cards/AIResponseCard.svelte';
	import NotFoundCard from '../components/NotFoundCard.svelte';
	import TopBar from '../components/TopBar.svelte';
	import AWSWork from '../components/Cards/AWSWork.svelte';
	import LabAssistantWork from '../components/Cards/LabAssistantWork.svelte';
	import projectsData from '$lib/data_card.json';
	import globalData from '$lib/data_en.json';
	import { generateAIResponse } from '$lib/aiService';
	import backgroundImage from '../lib/assets/background-image.jpg';
  	import EnergyFootprint from '../components/Cards/EnergyFootprint.svelte';
  import EnergyFootprintModal from '../components/modals/EnergyFootprintModal.svelte';

	// Using Svelte 5 $state rune for reactive state
	let showModal = $state(false);
	let selectedComponent: any = $state(null);
	let searchTerm = $state('');
	let isAskMode = $state(false);
	let aiResponse = $state<{question: string, answer: string, isLoading: boolean} | null>(null);

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
		PasswordCrackResearch,
		EnergyFootprint,
		AWSWork,
		LabAssistantWork
	};

	// Modal mapping
	const modalMap: { [key: string]: any } = {
		EegModal,
		UniversityUiuModal,
		VadModal,
		GbdtsvmModal,
		GarmentDefectResearchModal,
		PasswordCrackResearchModal,
		EnergyFootprintModal

	};

	// Transform JSON data to include actual component references
	const projects = projectsData.projects
		.filter(project => project.show)
		.map(project => ({
			...project,
			component: componentMap[project.component],
			modal: project.modal ? modalMap[project.modal] : null
		}));

	// Using Svelte 5 $derived.by rune for reactive computations
	const filteredProjects = $derived(() => {
		if (isAskMode || !searchTerm.trim()) return projects;
		const search = searchTerm.toLowerCase();
		return projects.filter(project => 
			project.title.toLowerCase().includes(search) || 
			project.keywords.toLowerCase().includes(search) ||
			project.date.toLowerCase().includes(search)
		);
	});

	function openModal(component: any) {
		// Only open modal if global modal setting is enabled
		if (!globalData.modal) {
			return;
		}
		selectedComponent = component;
		showModal = true;
	}

	function closeModal() {
		showModal = false;
		selectedComponent = null;
	}

	function clearSearch() {
		searchTerm = '';
		aiResponse = null;
	}

	function toggleMode() {
		isAskMode = !isAskMode;
		searchTerm = '';
		aiResponse = null;
	}

	async function handleAskQuestion(question: string) {
		if (!question.trim()) return;
		
		// Set loading state
		aiResponse = {
			question: question,
			answer: '',
			isLoading: true
		};

		try {
			const answer = await generateAIResponse(question);
			aiResponse = {
				question: question,
				answer: answer,
				isLoading: false
			};
		} catch (error) {
			console.error('Error generating AI response:', error);
			aiResponse = {
				question: question,
				answer: "I'm sorry, I encountered an error while processing your question. Please try again.",
				isLoading: false
			};
		}
	}

	function askAnotherQuestion() {
		searchTerm = '';
		aiResponse = null;
	}
</script>

<TopBar 
	{searchTerm} 
	{isAskMode}
	onclearSearch={clearSearch} 
	onsearchInput={(event) => searchTerm = event.detail.value}
	onaskQuestion={handleAskQuestion}
	ontoggleMode={toggleMode}
/>

<main class="space-y-10 py-20 sm:space-y-32 sm:py-32 md:space-y-14 bg-fixed bg-cover bg-center">
	{#if isAskMode && aiResponse}
		<!-- AI Response Display -->
		<AIResponseCard 
			question={aiResponse.question}
			answer={aiResponse.answer}
			isLoading={aiResponse.isLoading}
			onaskAnother={askAnotherQuestion}
		/>
	{:else if !isAskMode && filteredProjects().length > 0}
		<!-- Regular Project Cards -->
		{#each filteredProjects() as project (project.id)}
			{@const Component = project.component}
			<Component 
				date={project.date} 
				onshowmodal={globalData.modal && project.modal ? () => openModal(project.modal) : undefined}
			/>
		{/each}
	{:else if !isAskMode}
		<!-- No search results found -->
		<NotFoundCard onclearSearch={clearSearch} />
	{/if}
</main>

{#if showModal && selectedComponent}
	{@const ModalComponent = selectedComponent}
	<Modal onclose={closeModal}>
		<ModalComponent />
	</Modal>
{/if}

