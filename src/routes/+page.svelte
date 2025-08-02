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
	import YouthCyberSafetySurvey from '../components/Cards/YouthCyberSafetySurvey.svelte';
	import projectsData from '$lib/data_card.json';
	import globalData from '$lib/data_en.json';
	import { generateAIResponse } from '$lib/aiService';
  	import EnergyFootprint from '../components/Cards/EnergyFootprint.svelte';
	import EnergyFootprintModal from '../components/modals/EnergyFootprintModal.svelte';
	import TimelineGrantChart from '../components/modals/TimelineGrantChart.svelte';

	let showModal = $state(false);
	let showTimelineModal = $state(false);
	let selectedComponent: any = $state(null);
	let searchTerm = $state('');
	let debouncedSearchTerm = $state('');
	let isAskMode = $state(false);
	let aiResponse = $state<{question: string, answer: string, isLoading: boolean} | null>(null);
	let searchDebounceTimer: number;

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
		LabAssistantWork,
		YouthCyberSafetySurvey
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

	// Using Svelte 5 $derived.by rune for reactive computations with debounced search
	const filteredProjects = $derived(() => {
		if (isAskMode || !debouncedSearchTerm.trim()) return projects;
		const search = debouncedSearchTerm.toLowerCase();
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

	function openTimelineModal() {
		// Only open modal if global modal setting is enabled
		if (!globalData.modal) {
			return;
		}
		showTimelineModal = true;
	}

	function closeTimelineModal() {
		showTimelineModal = false;
	}

	function clearSearch() {
		searchTerm = '';
		debouncedSearchTerm = '';
		aiResponse = null;
		if (searchDebounceTimer) {
			clearTimeout(searchDebounceTimer);
		}
	}

	// Debounced search function for better performance (300ms delay)
	function debounceSearch(term: string) {
		if (searchDebounceTimer) {
			clearTimeout(searchDebounceTimer);
		}
		
		searchDebounceTimer = setTimeout(() => {
			debouncedSearchTerm = term;
		}, 300);
	}

	function toggleMode() {
		isAskMode = !isAskMode;
		searchTerm = '';
		debouncedSearchTerm = '';
		aiResponse = null;
		if (searchDebounceTimer) {
			clearTimeout(searchDebounceTimer);
		}
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
		debouncedSearchTerm = '';
		aiResponse = null;
	}
</script>

<TopBar 
	{searchTerm} 
	{isAskMode}
	onclearSearch={clearSearch} 
	onsearchInput={(event) => {
		searchTerm = event.detail.value;
		if (!isAskMode) {
			debounceSearch(event.detail.value);
		}
	}}
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



	<!-- <section class="scroll-mt-16 focus-visible:outline-none ">
		<div class="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
			<div class="lg:ml-96 lg:flex lg:w-full lg:justify-end lg:pl-32">
				<button 
					class="select-none mx-auto max-w-lg rounded-3xl border border-zinc-300 bg-white/50 p-4 drop-shadow-xl backdrop-blur-md transition-transform duration-300 dark:border-zinc-700 dark:bg-zinc-800/30 lg:mx-0 lg:w-0 lg:max-w-xl lg:flex-auto cursor-pointer hover:scale-[1.01] text-center"
					onclick={openTimelineModal}
					type="button"
				>
					Timeline Overview
				</button>
			</div>
		</div>
	</section> -->



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

{#if showTimelineModal}
	<Modal onclose={closeTimelineModal}>
		<TimelineGrantChart />
	</Modal>
{/if}

