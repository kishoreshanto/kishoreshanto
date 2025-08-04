<script>
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	let isAbstractExpanded = $state(false);

	function toggleAbstract() {
		isAbstractExpanded = !isAbstractExpanded;
	}
</script>

<div class="space-y-6">
	<!-- Header -->
	<div class="space-y-4">
		<div class="flex items-center justify-between">
			<div
				class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300"
			>
				<svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
					<path
						fill-rule="evenodd"
						d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
						clip-rule="evenodd"
					/>
				</svg>
				Q1 Journal Publication
			</div>
			<div class="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
				Elsevier • IF: 6.3 (Jul 2025)
			</div>
		</div>

		<h2 id="modal-title" class="text-3xl font-bold text-sky-800 dark:text-zinc-100 leading-tight">
			Combined Support Vector Machine and Gradient Boosting Decision Tree Framework for efficient
			snoRNA disease association prediction
		</h2>

		<div class="flex items-center space-x-2 text-lg">
			<span class="font-medium text-sky-600 dark:text-sky-400"
				>Computers in Biology and Medicine</span
			>
			<span class="text-zinc-400">•</span>
			<span class="text-zinc-600 dark:text-zinc-400">Elsevier</span>
		</div>
	</div>

	<!-- Abstract Accordion -->
	<div
		class="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg border border-blue-200 dark:border-blue-800"
	>
		<button
			class="w-full p-6 text-left hover:bg-blue-100/50 dark:hover:bg-blue-800/20 transition-colors duration-200 rounded-lg focus:outline-none"
			onclick={toggleAbstract}
			aria-expanded={isAbstractExpanded}
			aria-controls="abstract-content"
		>
			<div class="flex items-center justify-between">
				<div class="flex items-start space-x-3">
					<div class="flex-shrink-0 mt-1">
						<svg
							class="w-5 h-5 text-blue-600 dark:text-blue-400"
							fill="currentColor"
							viewBox="0 0 20 20"
						>
							<path
								fill-rule="evenodd"
								d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
					<div>
						<p class="text-lg font-medium text-blue-800 dark:text-blue-200">Abstract</p>
						<p class="text-sm text-blue-600 dark:text-blue-400 mt-1">
							Click to expand detailed abstract
						</p>
					</div>
				</div>
				<div class="flex-shrink-0">
					<svg
						class="w-5 h-5 text-blue-600 dark:text-blue-400 transform transition-transform duration-200 {isAbstractExpanded
							? 'rotate-180'
							: ''}"
						fill="currentColor"
						viewBox="0 0 20 20"
					>
						<path
							fill-rule="evenodd"
							d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
							clip-rule="evenodd"
						/>
					</svg>
				</div>
			</div>
		</button>

		{#if isAbstractExpanded}
			<div
				id="abstract-content"
				class="px-6 pb-6"
				aria-labelledby="abstract-button"
				transition:slide={{ duration: 400, easing: quintOut }}
			>
				<div class="border-t border-blue-200 dark:border-blue-700 pt-4">
					<p class="text-blue-700 dark:text-blue-300 leading-relaxed text-justify">
						Small nucleolar RNAs (snoRNAs) are increasingly recognized for their critical role in
						the pathogenesis and characterization of various human diseases. Consequently, the
						precise identification of snoRNA-disease associations (SDAs) is essential for the
						progression of diseases and the advancement of treatment strategies. However,
						conventional biological experimental approaches are costly, time-consuming, and
						resource-intensive; therefore, machine learning-based computational methods offer a
						promising solution to mitigate these limitations. This paper proposes a model called
						'GBDTSVM', representing a novel and efficient machine learning approach for predicting
						snoRNA-disease associations by leveraging a Gradient Boosting Decision Tree (GBDT) and
						Support Vector Machine (SVM). 'GBDTSVM' effectively extracts integrated snoRNA-disease
						feature representations utilizing GBDT, and SVM is subsequently utilized to classify and
						identify potential associations. Furthermore, the method enhances the accuracy of these
						predictions by incorporating Gaussian integrated profile kernel similarity for both
						snoRNAs and diseases. Experimental evaluation of the GBDTSVM model demonstrates superior
						performance compared to state-of-the-art methods in the field, achieving an AUROC of
						0.96 and an AUPRC of 0.95 on the 'MDRF' dataset. Moreover, our model shows superior
						performance on two more datasets named 'LSGT' and 'PsnoD'. Additionally, a case study
						conducted on the predicted snoRNA-disease associations verified the top-ranked snoRNAs
						across twelve prevalent diseases, further validating the efficacy of the GBDTSVM
						approach. These results underscore the model's potential as a robust tool for advancing
						snoRNA-related disease research.
					</p>
				</div>
			</div>
		{/if}
	</div>

	<!-- Research Summary -->
	<div
		class="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 rounded-lg p-6 border border-amber-200 dark:border-amber-800"
	>
		<div class="flex items-start space-x-3">
			<div class="flex-shrink-0 mt-1">
				<svg
					class="w-5 h-5 text-amber-600 dark:text-amber-400"
					fill="currentColor"
					viewBox="0 0 20 20"
				>
					<path
						fill-rule="evenodd"
						d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
						clip-rule="evenodd"
					/>
				</svg>
			</div>
			<div>
				<p class="text-lg font-medium text-amber-800 dark:text-amber-200 mb-3">Research Summary</p>
				<p class="text-amber-700 dark:text-amber-300 leading-relaxed mb-4">
					This research introduces a novel machine learning model, 'GBDTSVM', for predicting
					associations between small nucleolar RNAs (snoRNAs) and diseases. The model proposes a
					novel method using a Gradient Boosting Decision Tree (GBDT) followed by a Support Vector
					Machine (SVM). To handle the highly imbalanced nature of snoRNA-disease datasets, a
					proportional clustering technique is used.
				</p>
				<p class="text-amber-700 dark:text-amber-300 leading-relaxed">
					The proposed method achieves superior performance over state-of-the-art models with an
					AUROC of 0.96 and AUPRC of 0.95, providing valuable insights for biomedical research and
					drug discovery.
				</p>
			</div>
		</div>
	</div>

	<!-- Technical Methodology -->
	<div class="space-y-4">
		<h3 class="text-xl font-semibold text-zinc-800 dark:text-zinc-200">Technical Methodology</h3>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
			<div
				class="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800"
			>
				<h4 class="font-medium text-blue-800 dark:text-blue-200 mb-2">Support Vector Machine</h4>
				<ul class="text-sm text-blue-700 dark:text-blue-300 space-y-1">
					<li>• Final classification of snoRNA-disease pairs</li>
					<li>• Uses Radial Basis Function (RBF) kernel for non-linear data</li>
					<li>• Optimizes hyperplane for maximum margin separation</li>
				</ul>
			</div>
			<div
				class="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-200 dark:border-green-800"
			>
				<h4 class="font-medium text-green-800 dark:text-green-200 mb-2">
					Gradient Boosting Decision Tree
				</h4>
				<ul class="text-sm text-green-700 dark:text-green-300 space-y-1">
					<li>• Used for feature extraction and transformation</li>
					<li>• Ensemble of iteratively built decision trees</li>
					<li>• Constructs new feature vectors from tree leaf nodes</li>
				</ul>
			</div>
		</div>
	</div>

	<!-- Key Innovations -->
	<div class="space-y-3">
		<h3 class="text-xl font-semibold text-zinc-800 dark:text-zinc-200">Key Innovations</h3>
		<div class="space-y-3">
			<div class="flex items-start space-x-3">
				<svg class="w-5 h-5 mr-1 mt-0.5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
					<path
						fill-rule="evenodd"
						d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
						clip-rule="evenodd"
					/>
				</svg>
				<p class="text-zinc-700 dark:text-zinc-300">
					Novel hybrid framework combining SVM and GBDT for enhanced prediction accuracy
				</p>
			</div>
			<div class="flex items-start space-x-3">
				<svg class="w-5 h-5 mr-1 mt-0.5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
					<path
						fill-rule="evenodd"
						d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
						clip-rule="evenodd"
					/>
				</svg>
				<p class="text-zinc-700 dark:text-zinc-300">
					Comprehensive feature engineering for snoRNA-disease association patterns
				</p>
			</div>
			<div class="flex items-start space-x-3">
				<svg class="w-5 h-5 mr-1 mt-0.5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
					<path
						fill-rule="evenodd"
						d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
						clip-rule="evenodd"
					/>
				</svg>
				<p class="text-zinc-700 dark:text-zinc-300">
					Validation on multiple biological datasets with superior performance metrics
				</p>
			</div>
		</div>
	</div>

	<!-- Research Impact -->
	<div class="space-y-3">
		<h3 class="text-xl font-semibold text-zinc-800 dark:text-zinc-200">Research Areas</h3>
		<div class="flex flex-wrap gap-2">
			<span
				class="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
			>
				Bioinformatics
			</span>
			<span
				class="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
			>
				Machine Learning
			</span>
			<span
				class="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300"
			>
				snoRNA Research
			</span>
			<span
				class="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
			>
				Disease Association Prediction
			</span>
		</div>
	</div>

	<!-- Publication Information -->
	<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
		<div
			class="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-lg p-4 border border-emerald-200 dark:border-emerald-800"
		>
			<div class="flex items-center space-x-3">
				<svg
					class="w-6 h-6 text-emerald-600 dark:text-emerald-400"
					fill="currentColor"
					viewBox="0 0 20 20"
				>
					<path
						fill-rule="evenodd"
						d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/>
				</svg>
				<div>
					<p class="font-semibold text-emerald-800 dark:text-emerald-200">Q1 Quartile Journal</p>
					<p class="text-sm text-emerald-600 dark:text-emerald-400">Impact Factor: 6.3</p>
				</div>
			</div>
		</div>

		<div
			class="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800"
		>
			<div class="flex items-center space-x-3">
				<svg
					class="w-6 h-6 text-blue-600 dark:text-blue-400"
					fill="currentColor"
					viewBox="0 0 20 20"
				>
					<path
						fill-rule="evenodd"
						d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
						clip-rule="evenodd"
					/>
				</svg>
				<div>
					<p class="font-semibold text-blue-800 dark:text-blue-200">Published: June 2025</p>
					<p class="text-sm text-blue-600 dark:text-blue-400 font-mono">
						DOI: 10.1016/j.compbiomed.2025.110219
					</p>
				</div>
			</div>
		</div>
	</div>

	<!-- Access Link -->
	<div class="flex justify-center">
		<a
			href="https://www.sciencedirect.com/science/article/abs/pii/S0010482525005700"
			target="_blank"
			rel="noopener noreferrer"
			class="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-lg bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-300 dark:hover:bg-green-900/50 transition-colors duration-200"
		>
			<svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
				<path
					fill-rule="evenodd"
					d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
					clip-rule="evenodd"
				/>
			</svg>
			Access Full-Text Publication
		</a>
	</div>
</div>
