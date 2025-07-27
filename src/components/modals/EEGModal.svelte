<script>
    import { slide } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
    
    let isAbstractExpanded = false;
    
    function toggleAbstract() {
        isAbstractExpanded = !isAbstractExpanded;
    }
</script>

<div class="space-y-6">
    <!-- Header -->
    <div class="space-y-4">
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

        <h2 id="modal-title" class="text-3xl font-bold text-sky-800 dark:text-zinc-100 leading-tight">
            Classification of Upper Limb Motor Movements Using EEG Signals
        </h2>
    </div>

    <!-- Abstract Accordion -->
    <div class=" bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
        <button 
            class="w-full p-6 text-left hover:bg-blue-100/50 dark:hover:bg-blue-800/20 transition-colors duration-200 rounded-lg focus:outline-none"
            on:click={toggleAbstract}
            aria-expanded={isAbstractExpanded}
            aria-controls="abstract-content"
        >
            <div class="flex items-center justify-between">
                <div class="flex items-start space-x-3">
                    <div class="flex-shrink-0 mt-1">
                        <svg class="w-5 h-5 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" clip-rule="evenodd"/>
                        </svg>
                    </div>
                    <div>
                        <p class="text-lg font-medium text-blue-800 dark:text-blue-200">Abstract</p>
                        <p class="text-sm text-blue-600 dark:text-blue-400 mt-1">Click to expand detailed abstract</p>
                    </div>
                </div>
                <div class="flex-shrink-0">
                    <svg 
                        class="w-5 h-5 text-blue-600 dark:text-blue-400 transform transition-transform duration-200 {isAbstractExpanded ? 'rotate-180' : ''}" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                    >
                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
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
                    Brain-computer interfaces (BCI) in electroencephalography (EEG)-based motor imagery classification offer promising solutions in neurorehabilitation and assistive technologies by enabling communication between the brain and external devices. However, the non-stationary nature of EEG signals and significant inter-subject variability cause substantial challenges for developing robust cross-subject classification models. This paper introduces a novel Spatial-Spectral-Temporal Attention Fusion (SSTAF) Transformer specifically designed for upper-limb motor imagery classification. Our architecture consists of a spectral transformer and a spatial transformer, followed by a transformer block and a classifier network. Each module is integrated with attention mechanisms that dynamically attend to the most discriminative patterns across multiple domains, such as spectral frequencies, spatial electrode locations, and temporal dynamics. The short-time Fourier transform is incorporated to extract features in the time-frequency domain to make it easier for the model to obtain a better feature distinction. We evaluated our SSTAF Transformer model on two publicly available datasets, the EEGMMIDB dataset, and BCI Competition IV-2a. SSTAF Transformer achieves an accuracy of 76.83% and 68. 30% in the data sets, respectively, outperforms traditional CNN-based architectures and a few existing transformer-based approaches.
                </p>
            </div>
        </div>
        {/if}
    </div>

    <!-- Detailed Research Overview -->
    <div class="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-lg p-6 border border-indigo-200 dark:border-indigo-800">
        <div class="flex items-start space-x-3">
            <div class="flex-shrink-0 mt-1">
                <svg class="w-5 h-5 text-indigo-600 dark:text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clip-rule="evenodd"/>
                </svg>
            </div>
            <div>
                <p class="text-lg font-medium text-indigo-800 dark:text-indigo-200 mb-3">Research Overview</p>
                <p class="text-indigo-700 dark:text-indigo-300 leading-relaxed mb-4">
                    This ongoing research focuses on developing a deep learning approach to classify upper limb motor movements using electroencephalogram (EEG) signal data. The primary goal is to advance brain-computer interface (BCI) applications that can interpret neural signals for assistive technologies and human-computer interaction.
                </p>
                <p class="text-indigo-700 dark:text-indigo-300 leading-relaxed">
                    The research involves preprocessing EEG data, extracting relevant features, and implementing various neural network architectures to achieve accurate classification of different motor imagery tasks and actual movements.
                </p>
            </div>
        </div>
    </div>

    <!-- Research Methodology -->
    <div class="space-y-4">
        <h3 class="text-xl font-semibold text-zinc-800 dark:text-zinc-200">Research Methodology</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                <h4 class="font-medium text-blue-800 dark:text-blue-200 mb-2">Data Processing</h4>
                <ul class="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                    <li>• Signal preprocessing and artifact removal</li>
                    <li>• Feature extraction from EEG channels</li>
                    <li>• Time-frequency domain analysis</li>
                </ul>
            </div>
            <div class="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
                <h4 class="font-medium text-green-800 dark:text-green-200 mb-2">Machine Learning</h4>
                <ul class="text-sm text-green-700 dark:text-green-300 space-y-1">
                    <li>• Deep neural network architectures</li>
                    <li>• Convolutional Neural Networks (CNN)</li>
                    <li>• Recurrent Neural Networks (RNN)</li>
                </ul>
            </div>
        </div>
    </div>

    <!-- Research Focus Areas -->
    <div class="space-y-3">
        <h3 class="text-xl font-semibold text-zinc-800 dark:text-zinc-200">Research Focus Areas</h3>
        <div class="flex flex-wrap gap-2">
            <span class="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                Brain-Computer Interface
            </span>
            <span class="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                Neural Signal Processing
            </span>
            <span class="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
                Deep Learning Networks
            </span>
            <span class="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300">
                Motor Imagery Classification
            </span>
        </div>
    </div>

    <!-- Current Status -->
    <div class="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-lg p-4 border border-cyan-200 dark:border-cyan-800">
        <div class="flex items-center space-x-3">
            <svg class="w-6 h-6 text-cyan-600 dark:text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clip-rule="evenodd"/>
            </svg>
            <div>
                <p class="font-semibold text-cyan-800 dark:text-cyan-200">
                    Ongoing Research Project
                </p>
                <p class="text-sm text-cyan-600 dark:text-cyan-400">
                    Self-initiated independent study • Started February 2025
                </p>
            </div>
        </div>
    </div>

    <!-- Links and Resources -->
    <div class="flex flex-col sm:flex-row gap-3">
        <a
            href="https://drive.google.com/file/d/1EoQmhpDo8FAeqePLlldQuuxAGK1tdUQR/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg bg-indigo-100 text-indigo-800 hover:bg-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-300 dark:hover:bg-indigo-900/50 transition-colors duration-200"
        >
            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clip-rule="evenodd"/>
            </svg>
            View Technical Report
        </a>
    </div>
</div>