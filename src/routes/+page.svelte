<script lang="ts">
	import Modal from '../components/Modal.svelte';
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
  import Card from '../components/Card.svelte';
  import NotFoundCard from '../components/NotFoundCard.svelte';

	let showModal = false;
	let selectedComponent: any = null;
	let searchTerm = '';

	// Lazy load modal components
	const lazyModals: Record<string, () => Promise<any>> = {
		eeg: () => import('../components/modals/EEGModal.svelte'),
		university: () => import('../components/modals/UniversityUIUModal.svelte'),
		password: () => import('../components/modals/PasswordCrackResearchModal.svelte'),
		garment: () => import('../components/modals/GarmentDefectResearchModal.svelte'),
		gbdtsvm: () => import('../components/modals/GBDTSVMModal.svelte'),
		vad: () => import('../components/modals/VADModal.svelte')
	};

	// Define all projects with their searchable data
	const projects = [
		{
			id: 'eeg',
			component: EegResearch,
			modal: 'eeg',
			date: "February 20th, 2025",
			title: "EEG Research",
			keywords: "eeg electroencephalogram brain computer interface bci neural signals deep learning classification upper limb motor movement research"
		},
		{
			id: 'university',
			component: UniversityUIU,
			modal: 'university',
			date: "November 6th, 2024",
			title: "University UIU",
			keywords: "university uiu education academic study computer science software engineering"
		},
		{
			id: 'password',
			component: PasswordCrackResearch,
			modal: 'password',
			date: "February 27th, 2023",
			title: "Password Crack Research",
			keywords: "password cracking security cybersecurity encryption hashing authentication research"
		},
		{
			id: 'vad',
			component: VADResearch,
			modal: 'vad',
			date: "November 17th, 2024",
			title: "VAD Research",
			keywords: "vad voice activity detection audio signal processing speech recognition machine learning"
		},
		{
			id: 'gbdtsvm',
			component: GBDTSVMResearch,
			modal: 'gbdtsvm',
			date: "December 15th, 2024",
			title: "GBDT SVM Research",
			keywords: "gbdt svm gradient boosting decision tree support vector machine machine learning classification research"
		},
		{
			id: 'garment',
			component: GarmentDefectResearch,
			modal: 'garment',
			date: "January 10th, 2025",
			title: "Garment Defect Research",
			keywords: "garment defect detection textile manufacturing quality control computer vision image processing research"
		},
		{
			id: 'rfwoc',
			component: RFWOCResearch,
			modal: null,
			date: "March 5th, 2025",
			title: "RFWOC Research",
			keywords: "rfwoc research wireless communication radio frequency optimization"
		},
		{
			id: 'landsphere',
			component: LandSphereProject,
			modal: null,
			date: "January 10th, 2025",
			title: "LandSphere Project",
			keywords: "landsphere land management geography gis mapping project real estate"
		},
		{
			id: 'plantify',
			component: PlantifyProject,
			modal: null,
			date: "January 10th, 2025",
			title: "Plantify Project",
			keywords: "plantify plant identification botany agriculture gardening mobile app project"
		},
		{
			id: 'agriinn',
			component: AgriInnProject,
			modal: null,
			date: "January 10th, 2025",
			title: "AgriInn Project",
			keywords: "agriinn agriculture innovation farming technology iot sensors smart farming project"
		}
	];

	// Filter projects based on search term
	$: filteredProjects = projects.filter(project => {
		if (!searchTerm.trim()) return true;
		const search = searchTerm.toLowerCase();
		return project.title.toLowerCase().includes(search) || 
			   project.keywords.toLowerCase().includes(search) ||
			   project.date.toLowerCase().includes(search);
	});

	function openModal(modalKey: string) {
		if (lazyModals[modalKey]) {
			lazyModals[modalKey]().then((module: any) => {
				selectedComponent = module.default;
				showModal = true;
			});
		}
	}

	function closeModal() {
		showModal = false;
		selectedComponent = null;
	}

	function clearSearch() {
		searchTerm = '';
	}
</script>

<!-- Fixed navigation controls - bottom for <1024px, top for >=1024px -->
<div class="fixed bottom-6 lg:top-6 lg:bottom-auto left-0 right-0 z-50">
	<div class="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
		<div class="lg:ml-96 lg:flex lg:w-full lg:justify-end lg:pl-32">
			<div class="mx-auto max-w-lg lg:mx-0 lg:w-0 lg:max-w-xl lg:flex-auto">
				<div class="flex flex-row-reverse gap-6 justify-center lg:justify-end items-center">
					<button class="flex-shrink-0 bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-full p-3 shadow-lg shadow-gray-500/20 dark:shadow-blue-500/30 hover:bg-white/20 dark:hover:bg-white/10 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-gray-500/30 dark:hover:shadow-blue-500/40 transition-all duration-300 ease-out group"
							on:click={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
						<svg xmlns="http://www.w3.org/2000/svg"
							 height="30px"
							 viewBox="0 -960 960 960"
							 width="30px"
							 class="fill-gray-700 dark:fill-sky-400 group-hover:fill-gray-900 dark:group-hover:fill-sky-300 group-hover:-translate-y-0.5 transition-all duration-200">
							<path d="M440-80v-647L256-544l-56-56 280-280 280 280-56 57-184-184v647h-80Z"/>
						</svg>
					</button>

					<div class="relative flex-1 min-w-0">
						<input 
							bind:value={searchTerm}
							placeholder="Search Anything..."
							class="font-mono w-full bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-full pl-4 pr-12 py-3 shadow-lg shadow-gray-500/20 dark:shadow-blue-500/30 hover:bg-white/20 dark:hover:bg-white/10 focus:bg-white/20 dark:focus:bg-white/10 hover:-translate-y-0.5 focus:-translate-y-0.5 hover:shadow-xl focus:shadow-xl hover:shadow-gray-500/30 dark:hover:shadow-blue-500/40 focus:shadow-gray-500/30 dark:focus:shadow-blue-500/40 transition-all duration-300 ease-out text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none"/>
						
						{#if searchTerm}
							<button 
								on:click={clearSearch}
								class="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 rounded-full hover:bg-white/20 dark:hover:bg-white/10 transition-colors duration-200 flex items-center justify-center">
								<svg xmlns="http://www.w3.org/2000/svg" 
									 width="20" 
									 height="20" 
									 viewBox="0 0 24 24" 
									 fill="none" 
									 stroke="currentColor" 
									 stroke-width="2" 
									 stroke-linecap="round" 
									 stroke-linejoin="round"
									 class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
									<line x1="18" y1="6" x2="6" y2="18"></line>
									<line x1="6" y1="6" x2="18" y2="18"></line>
								</svg>
							</button>
						{:else}
							<div class="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none flex items-center justify-center">
								<svg xmlns="http://www.w3.org/2000/svg" 
									 width="20" 
									 height="20" 
									 viewBox="0 0 24 24" 
									 fill="none" 
									 stroke="currentColor" 
									 stroke-width="2" 
									 stroke-linecap="round" 
									 stroke-linejoin="round"
									 class="text-gray-400 dark:text-gray-500">
									<circle cx="11" cy="11" r="8"></circle>
									<path d="m21 21-4.35-4.35"></path>
								</svg>
							</div>
						{/if}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<main class="space-y-10 py-20 sm:space-y-32 sm:py-32 md:space-y-14">
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
		 <NotFoundCard>
					<div class="space-y-4 py-4">
						<svg xmlns="http://www.w3.org/2000/svg" 
							 width="48" 
							 height="48" 
							 viewBox="0 0 24 24" 
							 fill="none" 
							 stroke="currentColor" 
							 stroke-width="2" 
							 stroke-linecap="round" 
							 stroke-linejoin="round"
							 class="mx-auto text-gray-400 dark:text-gray-500">
							<circle cx="11" cy="11" r="8"></circle>
							<path d="m21 21-4.35-4.35"></path>
						</svg>
						<h3 class="text-lg font-semibold text-gray-900 dark:text-white">No projects found</h3>
						<p class="text-sm text-gray-600 dark:text-gray-400">
							Try a different search term or 
							<button on:click={clearSearch} class="text-sky-600 dark:text-sky-400 hover:underline">
								clear the search
							</button>
						</p>
					</div>

		</NotFoundCard>

	{/if}
	<!-- Add more cards here, each with its own content and modal component -->
</main>

{#if showModal && selectedComponent}
	<Modal on:close={closeModal}>
		<svelte:component this={selectedComponent} />
	</Modal>
{/if}

