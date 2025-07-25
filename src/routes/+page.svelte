<script lang="ts">
	import Card from '../components/Card.svelte';
	import Modal from '../components/Modal.svelte';
	import BSC_UIU from '../components/modals/BSC_UIU.svelte';
	import ARFPTDCFBDC from '../components/modals/ARFPTDCFBDC.svelte';
	import ADLBAFADDOFIGPL from '../components/modals/ADLBAFADDOFIGPL.svelte';
	import GBDTSVM from '../components/modals/GBDTSVM.svelte';
	import VAD from '../components/modals/VAD.svelte';
	import EEG from '../components/modals/EEG.svelte';

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
	<Card date="February 20th, 2025" on:showmodal={() => openModal(EEG)} >
		<div class="space-y-4">
			<!-- Technical Report Type Badge -->
			<div class="flex items-center justify-between">
				<div class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300">
					<svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
						<path fill-rule="evenodd" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" clip-rule="evenodd"/>
					</svg>
					Technical Research Report
				</div>
				<div class="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
					Independent Study
				</div>
			</div>

			<!-- Title -->
			<div class="space-y-2">
				<h1 class="text-2xl font-bold text-sky-800 dark:text-zinc-100 leading-tight">
					Classification of Upper Limb Motor Movements Using EEG Signals
				</h1>
			</div>

			<!-- Research Summary Section -->
			<div class="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-lg p-4 border border-indigo-200 dark:border-indigo-800">
				<div class="flex items-start space-x-3">
					<div class="flex-shrink-0 mt-1">
						<svg class="w-4 h-4 text-indigo-600 dark:text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clip-rule="evenodd"/>
						</svg>
					</div>
					<div>
						<p class="text-sm font-medium text-indigo-800 dark:text-indigo-200 mb-1">Research Overview</p>
						<p class="text-sm text-indigo-700 dark:text-indigo-300 leading-relaxed">
							Currently researching a deep learning approach to classify upper limb motor movement using electroencephalogram signal data for brain-computer interface applications.
						</p>
					</div>
				</div>
			</div>

			<!-- Research Tags -->
			<div class="space-y-2">
				<p class="text-xs font-medium text-zinc-600 dark:text-zinc-400 uppercase tracking-wide">Research Focus Areas</p>
				<div class="flex flex-wrap gap-2">
					<span class="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
						Brain-Computer Interface
					</span>
					<span class="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
						Neural Signal Processing
					</span>
					<span class="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
						Deep Learning Networks
					</span>
					<span class="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300">
						Motor Imagery Classification
					</span>
				</div>
			</div>

			<!-- Research Status Highlight -->
			<div class="flex items-center justify-between bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-lg p-3 border border-cyan-200 dark:border-cyan-800">
				<div class="flex items-center space-x-2">
					<svg class="w-5 h-5 text-cyan-600 dark:text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
						<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clip-rule="evenodd"/>
					</svg>
					<div>
						<p class="text-sm font-semibold text-cyan-800 dark:text-cyan-200">
							Ongoing Research
						</p>
						<p class="text-xs text-cyan-600 dark:text-cyan-400">
							Self-initiated independent study
						</p>
					</div>
				</div>
			</div>

			<!-- Report Details -->
			<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
				<div class="space-y-2 flex items-center ">
					<div>
						<span class="font-medium text-zinc-700 dark:text-zinc-300">Started:</span>
						<span class="text-zinc-600 dark:text-zinc-400">February 2025</span>
					</div>
				</div>
				<div class="flex items-end justify-end">
					<a 
						href="https://drive.google.com/file/d/1EoQmhpDo8FAeqePLlldQuuxAGK1tdUQR/view?usp=sharing"
						target="_blank" 
						rel="noopener noreferrer"
						class="inline-flex items-center px-3 py-2 text-xs font-medium rounded-lg bg-indigo-100 text-indigo-800 hover:bg-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-300 dark:hover:bg-indigo-900/50 transition-colors duration-200"
						on:click|stopPropagation
					>
						<svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clip-rule="evenodd"/>
						</svg>
						View Technical Report
					</a>
				</div>
			</div>
		</div>
	</Card>


	<Card date="November 6th, 2024" on:showmodal={() => openModal(BSC_UIU)} >
		<div class="space-y-4">
			<!-- Header with degree title -->
			<div class="border-b border-zinc-200 pb-3 dark:border-zinc-700">
				<h1 class="text-2xl font-bold text-sky-800 dark:text-zinc-100 leading-tight">
					Bachelor of Computer Science and Engineering
				</h1>
				<p class="text-md font-medium text-sky-600 dark:text-sky-400 mt-1">
					Major in Data Science • With Thesis
				</p>
			</div>

			<!-- University information -->
			<div class="space-y-3">
				<div>
					<h2 class="text-lg font-semibold text-zinc-800 dark:text-zinc-200">
						United International University
					</h2>
					<p class="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
						Madani Avenue, Badda, Dhaka 1212, Bangladesh
					</p>
				</div>

				<!-- CGPA highlight -->
				<div class="flex items-center justify-between bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-3 border border-green-200 dark:border-green-800">
					<div>
						<p class="text-sm font-medium text-zinc-700 dark:text-zinc-300">
							Aggregate Percentage Result
						</p>
						<p class="text-2xl font-bold text-green-700 dark:text-green-400">
							90.1
							<span class="text-sm font-normal text-zinc-600 dark:text-zinc-400">/ 100%</span>
						</p>
					</div>
				</div>

				<!-- Achievement badge -->
				<div class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-sky-100 text-sky-800 dark:bg-sky-900/30 dark:text-sky-300">
					<svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
						<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
					</svg>
					Graduated with Honors
				</div>
			</div>
		</div>	
	</Card>

	<Card date="February 20th, 2025" on:showmodal={() => openModal(EEG)} >
		<div class="space-y-4">
			<!-- Technical Report Type Badge -->
			<div class="flex items-center justify-between">
				<div class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300">
					<svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
						<path fill-rule="evenodd" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" clip-rule="evenodd"/>
					</svg>
					Technical Research Report
				</div>
				<div class="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
					Independent Study
				</div>
			</div>

			<!-- Title -->
			<div class="space-y-2">
				<h1 class="text-2xl font-bold text-sky-800 dark:text-zinc-100 leading-tight">
					A Deep Learning Approach to Assess Password Strength, Compromise Likelihood, and Time-to-Crack Estimation
				</h1>
			</div>

			<!-- Research Summary Section -->
			<div class="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-lg p-4 border border-indigo-200 dark:border-indigo-800">
				<div class="flex items-start space-x-3">
					<div class="flex-shrink-0 mt-1">
						<svg class="w-4 h-4 text-indigo-600 dark:text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clip-rule="evenodd"/>
						</svg>
					</div>
					<div>
						<p class="text-sm font-medium text-indigo-800 dark:text-indigo-200 mb-1">Research Overview</p>
						<p class="text-sm text-indigo-700 dark:text-indigo-300 leading-relaxed">
							Researched a GPT-2 based deep learning model for password strength estimation via sequence analysis and perplexity scoring on real-world leaked datasets
						</p>
					</div>
				</div>
			</div>

			<!-- Research Tags -->
			<div class="space-y-2">
				<p class="text-xs font-medium text-zinc-600 dark:text-zinc-400 uppercase tracking-wide">Research Focus Areas</p>
				<div class="flex flex-wrap gap-2">
					<span class="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
						Generative Pretrained Transformer
					</span>
					<span class="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
						Computer Security
					</span>
				</div>
			</div>


			<!-- Report Details -->
			<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
				<div class="space-y-2 flex items-center ">
					<div>
						<span class="font-medium text-zinc-700 dark:text-zinc-300">Timeline:</span>
						<span class="text-zinc-600 dark:text-zinc-400">July 2024 - November 2024</span>
					</div>
				</div>
				<div class="flex items-end justify-end">
					<a 
						href="https://drive.google.com/file/d/1EoQmhpDo8FAeqePLlldQuuxAGK1tdUQR/view?usp=sharing"
						target="_blank" 
						rel="noopener noreferrer"
						class="inline-flex items-center px-3 py-2 text-xs font-medium rounded-lg bg-indigo-100 text-indigo-800 hover:bg-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-300 dark:hover:bg-indigo-900/50 transition-colors duration-200"
						on:click|stopPropagation
					>
						<svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clip-rule="evenodd"/>
						</svg>
						View Technical Report
					</a>
				</div>
			</div>
		</div>
	</Card>

	<Card date="November 17th, 2024" on:showmodal={() => openModal(VAD)}>
		<div class="space-y-4">
			<!-- Journal Type Badge -->
			<div class="flex items-center justify-between">
				<div class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">
					<svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
						<path fill-rule="evenodd" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" clip-rule="evenodd"/>
					</svg>
					Q1 Journal Publication
				</div>
				
				<div class="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
					Elsevier • IF: 4.5 (Jul 2025)
				</div>
			</div>

			<!-- Title and Journal -->
			<div class="space-y-2">
				<h1 class="text-2xl font-bold text-sky-800 dark:text-zinc-100 leading-tight">
					Vision Transformer Embedded Video Anomaly Detection with Attention Driven Recurrence
				</h1>
				<div class="flex items-center space-x-2 text-md">
					<span class="font-medium text-sky-600 dark:text-sky-400">Array</span>
					<span class="text-zinc-400">•</span>
					<span class="text-zinc-600 dark:text-zinc-400">Elsevier</span>
				</div>
			</div>

			<!-- Summary Section -->
			<div class="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 rounded-lg p-4 border border-amber-200 dark:border-amber-800">
				<div class="flex items-start space-x-3">
					<div class="flex-shrink-0 mt-1">
						<svg class="w-4 h-4 text-amber-600 dark:text-amber-400" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clip-rule="evenodd"/>
						</svg>
					</div>
					<div>
						<p class="text-sm font-medium text-amber-800 dark:text-amber-200 mb-1">Research Summary</p>
						<p class="text-sm text-amber-700 dark:text-amber-300 leading-relaxed">
							Researched a real-time anomaly detection system using Vision Transformers and an attention-enhanced  network in long surveillance footage. 
						</p>
					</div>
				</div>
			</div>

			<!-- Q1 Journal Highlight -->
			<div class="flex items-center justify-between bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-lg p-3 border border-emerald-200 dark:border-emerald-800">
				<div class="flex items-center space-x-2">
					<svg class="w-5 h-5 text-emerald-600 dark:text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
						<path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
					</svg>
					<div>
						<p class="text-sm font-semibold text-emerald-800 dark:text-emerald-200">
							Q1 Quartile Journal
						</p>
						<p class="text-xs text-emerald-600 dark:text-emerald-400">
							Top-tier academic publication
						</p>
					</div>
				</div>
			</div>

			<!-- Publication Details -->
			<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
				<div class="space-y-2">
					<div>
						<span class="font-medium text-zinc-700 dark:text-zinc-300">DOI:</span>
						<p class="text-zinc-600 dark:text-zinc-400 font-mono text-xs">
							TDB
						</p>
					</div>
					<div>
						<span class="font-medium text-zinc-700 dark:text-zinc-300">Accepted:</span>
						<span class="text-zinc-600 dark:text-zinc-400">July 2025</span>
					</div>
				</div>
				<div class="flex items-end justify-end">
					<div 
						class="inline-flex items-center px-3 py-2 text-xs font-medium rounded-lg bg-zinc-100 text-zinc-800 hover:bg-zinc-200 dark:bg-zinc-900/30 dark:text-zinc-300 dark:hover:bg-zinc-900/50 transition-colors duration-200"
					>
						<svg class="w-3 h-3 mr-1" fill="gray" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
							<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16z" clip-rule="evenodd"/>
						</svg>
						To be Published
					</div>
				</div>
			</div>
		</div>
	</Card>

	<Card date="November 17th, 2024" on:showmodal={() => openModal(GBDTSVM)}>
		<div class="space-y-4">
			<!-- Journal Type Badge -->
			<div class="flex items-center justify-between">
				<div class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">
					<svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
						<path fill-rule="evenodd" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" clip-rule="evenodd"/>
					</svg>
					Q1 Journal Publication
				</div>
				<div class="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
					Elsevier • IF: 6.3 (Jul 2025)
				</div>
			</div>

			<!-- Title and Journal -->
			<div class="space-y-2">
				<h1 class="text-2xl font-bold text-sky-800 dark:text-zinc-100 leading-tight">
					Combined Support Vector Machine and Gradient Boosting Decision Tree Framework for efficient snoRNA disease association prediction
				</h1>
				<div class="flex items-center space-x-2 text-md">
					<span class="font-medium text-sky-600 dark:text-sky-400">Computers in Biology and Medicine</span>
					<span class="text-zinc-400">•</span>
					<span class="text-zinc-600 dark:text-zinc-400">Elsevier</span>
				</div>
			</div>

			<!-- Summary Section -->
			<div class="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 rounded-lg p-4 border border-amber-200 dark:border-amber-800">
				<div class="flex items-start space-x-3">
					<div class="flex-shrink-0 mt-1">
						<svg class="w-4 h-4 text-amber-600 dark:text-amber-400" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clip-rule="evenodd"/>
						</svg>
					</div>
					<div>
						<p class="text-sm font-medium text-amber-800 dark:text-amber-200 mb-1">Research Summary</p>
						<p class="text-sm text-amber-700 dark:text-amber-300 leading-relaxed">
							Researched a novel machine learning approach for predicting the correlation between various snoRNA and diseases in human body using combined SVM and GBDT framework.
						</p>
					</div>
				</div>
			</div>

			<!-- Q1 Journal Highlight -->
			<div class="flex items-center justify-between bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-lg p-3 border border-emerald-200 dark:border-emerald-800">
				<div class="flex items-center space-x-2">
					<svg class="w-5 h-5 text-emerald-600 dark:text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
						<path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
					</svg>
					<div>
						<p class="text-sm font-semibold text-emerald-800 dark:text-emerald-200">
							Q1 Quartile Journal
						</p>
						<p class="text-xs text-emerald-600 dark:text-emerald-400">
							Top-tier academic publication
						</p>
					</div>
				</div>
			</div>

			<!-- Publication Details -->
			<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
				<div class="space-y-2">
					<div>
						<span class="font-medium text-zinc-700 dark:text-zinc-300">DOI:</span>
						<p class="text-zinc-600 dark:text-zinc-400 font-mono text-xs">
							10.1016/j.compbiomed.2025.110219
						</p>
					</div>
					<div>
						<span class="font-medium text-zinc-700 dark:text-zinc-300">Published:</span>
						<span class="text-zinc-600 dark:text-zinc-400">June 2025</span>
					</div>
				</div>
				<div class="flex items-end justify-end">
					<a 
						href="https://www.sciencedirect.com/science/article/abs/pii/S0010482525005700"
						target="_blank" 
						rel="noopener noreferrer"
						class="inline-flex items-center px-3 py-2 text-xs font-medium rounded-lg bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-300 dark:hover:bg-green-900/50 transition-colors duration-200"
						on:click|stopPropagation
					>
						<svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
							<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16z" clip-rule="evenodd"/>
						</svg>
						Access Full-Text
					</a>
				</div>
			</div>
		</div>
	</Card>

	<Card date="February 27th, 2023" on:showmodal={() => openModal(ADLBAFADDOFIGPL)}>
		<div class="space-y-4">
			<!-- Research Type Badge -->
			<div class="flex items-center justify-between">
				<div class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
					<svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
						<path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clip-rule="evenodd"/>
					</svg>
					Research Publication
				</div>
				<div class="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
					ACM ICCA 2025 [Open Access]
				</div>
			</div>

			<!-- Title and Journal -->
			<div class="space-y-2">
				<h1 class="text-2xl font-bold text-sky-800 dark:text-zinc-100 leading-tight">
					A Deep Learning based Approach for Automated Defect Detection of Fabrics in Garment Production Line
				</h1>
				<div class="flex items-center space-x-2 text-md">
					<span class="font-medium text-sky-600 dark:text-sky-400">ACM</span>
					<span class="text-zinc-400">•</span>
					<span class="text-zinc-600 dark:text-zinc-400">Conference ICCA — 2024</span>
				</div>
			</div>

			<!-- TLDR Section -->
			<div class="bg-gradient-to-r from-sky-50 to-indigo-50 dark:from-sky-900/20 dark:to-indigo-900/20 rounded-lg p-4 border border-sky-200 dark:border-sky-800">
				<div class="flex items-start space-x-3">
					<div class="flex-shrink-0 mt-1">
						<svg class="w-4 h-4 text-sky-600 dark:text-sky-400" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
						</svg>
					</div>
					<div>
						<p class="text-sm font-medium text-sky-800 dark:text-sky-200 mb-1">Summary</p>
						<p class="text-sm text-sky-700 dark:text-sky-300 leading-relaxed">
							Researched and implemented a deep learning solution for identifying and localizing defects in fabrics, using the YOLOv8.
						</p>
					</div>
				</div>
			</div>

			<!-- Publication Details -->
			<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
				<div class="space-y-2">
					<div>
						<span class="font-medium text-zinc-700 dark:text-zinc-300">DOI:</span>
						<p class="text-zinc-600 dark:text-zinc-400 font-mono text-xs">
							10.1145/3723178.3723196
						</p>
					</div>
					<div>
						<span class="font-medium text-zinc-700 dark:text-zinc-300">Published:</span>
						<span class="text-zinc-600 dark:text-zinc-400">June 2025</span>
					</div>
				</div>
				<div class="flex items-end justify-end">
					<a 
						href="https://dl.acm.org/doi/10.1145/3723178.3723196"
						target="_blank" 
						rel="noopener noreferrer"
						class="inline-flex items-center px-3 py-2 text-xs font-medium rounded-lg bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-300 dark:hover:bg-green-900/50 transition-colors duration-200"
						on:click|stopPropagation
					>
						<svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
							<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16z" clip-rule="evenodd"/>
						</svg>
						Access Full-Text
					</a>
				</div>
			</div>
		</div>
	</Card>

	<Card date="February 27th, 2023" on:showmodal={() => openModal(ARFPTDCFBDC)}>
		<div class="space-y-4">
			<!-- Research Type Badge -->
			<div class="flex items-center justify-between">
				<div class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
					<svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
						<path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clip-rule="evenodd"/>
					</svg>
					Research Publication
				</div>
				<div class="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
					IEEE ICCIT 2023
				</div>
			</div>

			<!-- Title and Journal -->
			<div class="space-y-2">
				<h1 class="text-2xl font-bold text-sky-800 dark:text-zinc-100 leading-tight">
					Ameliorating Random Forest Performance through Data Clustering for Big Data Classification
				</h1>
				<div class="flex items-center space-x-2 text-md">
					<span class="font-medium text-sky-600 dark:text-sky-400">IEEE Xplore</span>
					<span class="text-zinc-400">•</span>
					<span class="text-zinc-600 dark:text-zinc-400">Conference ICCIT — 2023</span>
				</div>
			</div>

			<!-- TLDR Section -->
			<div class="bg-gradient-to-r from-sky-50 to-indigo-50 dark:from-sky-900/20 dark:to-indigo-900/20 rounded-lg p-4 border border-sky-200 dark:border-sky-800">
				<div class="flex items-start space-x-3">
					<div class="flex-shrink-0 mt-1">
						<svg class="w-4 h-4 text-sky-600 dark:text-sky-400" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
						</svg>
					</div>
					<div>
						<p class="text-sm font-medium text-sky-800 dark:text-sky-200 mb-1">Summary</p>
						<p class="text-sm text-sky-700 dark:text-sky-300 leading-relaxed">
							Researched combining Random Forest with K-Means clustering to improve classification performance for Big Data mining applications.
						</p>
					</div>
				</div>
			</div>

			<!-- Publication Details -->
			<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
				<div class="space-y-2">
					<div>
						<span class="font-medium text-zinc-700 dark:text-zinc-300">DOI:</span>
						<p class="text-zinc-600 dark:text-zinc-400 font-mono text-xs">
							10.1109/ICCIT60459.2023.10441376
						</p>
					</div>
					<div>
						<span class="font-medium text-zinc-700 dark:text-zinc-300">Published:</span>
						<span class="text-zinc-600 dark:text-zinc-400">February 2023</span>
					</div>
				</div>
				<div class="flex items-end justify-end">
					<a 
						href="https://ieeexplore.ieee.org/document/10441376" 
						target="_blank" 
						rel="noopener noreferrer"
						class="inline-flex items-center px-3 py-2 text-xs font-medium rounded-lg bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-300 dark:hover:bg-green-900/50 transition-colors duration-200"
						on:click|stopPropagation
					>
						<svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
							<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16z" clip-rule="evenodd"/>
						</svg>
						Access Full-Text
					</a>
				</div>
			</div>
		</div>
	</Card>

	<!-- Add more cards here, each with its own content and modal component -->
</main>

{#if showModal && selectedComponent}
	<Modal on:close={closeModal}>
		<svelte:component this={selectedComponent} />
	</Modal>
{/if}

