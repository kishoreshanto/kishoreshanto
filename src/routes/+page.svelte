<script lang="ts">
	import Modal from '../components/Modal.svelte';
	// import BSC_UIU from '../components/modals/BSC_UIU.svelte';
	// import ARFPTDCFBDC from '../components/modals/ARFPTDCFBDC.svelte';
	// import ADLBAFADDOFIGPL from '../components/modals/ADLBAFADDOFIGPL.svelte';
	// import GBDTSVM from '../components/modals/GBDTSVM.svelte';
	// import VAD from '../components/modals/VAD.svelte';
	// import EEG from '../components/modals/EEG.svelte';
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

<main class="space-y-10 py-20 sm:space-y-32 sm:py-32 md:space-y-14 bg-fixed bg-cover bg-center">

	<EegResearch date="February 20th, 2025"/>
	<UniversityUIU date="November 6th, 2024"/>
	<PasswordCrackResearch date="February 27th, 2023"/>
	<VADResearch date="November 17th, 2024"/>
	<GBDTSVMResearch date="December 15th, 2024"/>
	<GarmentDefectResearch date="January 10th, 2025"/>
	<RFWOCResearch date="March 5th, 2025"/>
	<LandSphereProject date="January 10th, 2025"/>
	<PlantifyProject date="January 10th, 2025"/>
	<AgriInnProject date="January 10th, 2025"/>
	<!-- Add more cards here, each with its own content and modal component -->
</main>

{#if showModal && selectedComponent}
	<Modal on:close={closeModal}>
		<svelte:component this={selectedComponent} />
	</Modal>
{/if}

