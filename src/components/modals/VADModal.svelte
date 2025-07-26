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

        <h2 id="modal-title" class="text-3xl font-bold text-sky-800 dark:text-zinc-100 leading-tight">
            Vision Transformer Embedded Video Anomaly Detection with Attention Driven Recurrence
        </h2>
        
        <div class="flex items-center space-x-2 text-lg">
            <span class="font-medium text-sky-600 dark:text-sky-400">Array</span>
            <span class="text-zinc-400">•</span>
            <span class="text-zinc-600 dark:text-zinc-400">Elsevier</span>
        </div>
    </div>

    <!-- Abstract Accordion -->
    <div class="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
        <button 
            class="w-full p-6 text-left hover:bg-blue-100/50 dark:hover:bg-blue-800/20 transition-colors duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
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
                    Automated video anomaly detection (VAD) is a challenging task due to its context-dependent and sporadic nature. However, recent deep learning advancements offer promising solutions. In this paper, we propose a novel framework for detecting anomalies in videos by uniquely analyzing spatial and temporal (spatio-temporal) features. We address challenges such as the processing of lengthy videos and the sparse occurrence of anomalies by segmenting and labeling anomalous parts within videos. We employ a modified pre-trained vision transformer for video feature extraction, leveraging its ability to capture complex spatio-temporal patterns and the global context. Additionally, we incorporate a parameter-efficient recurrent model, the Simple Recurrent Unit Plus Plus (SRU++), which processes long sequential video embeddings efficiently by reducing computational costs by ten times compared to traditional methods. To further enhance the multiclass prediction performance, we develop a cluster-based weighting mechanism that assigns weights to classification scores based on feature similarity. We extensively evaluated our approach on three popular datasets - UCF-Crime, RWF-2000, and Smart City CCTV Violence Detection (SCVD) - achieving superior performance compared to state-of-the-art methods, making it well-suited for real-world surveillance applications.
                </p>
            </div>
        </div>
        {/if}
    </div>

    <!-- Research Summary -->
    <div class="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 rounded-lg p-6 border border-amber-200 dark:border-amber-800">
        <div class="flex items-start space-x-3">
            <div class="flex-shrink-0 mt-1">
                <svg class="w-5 h-5 text-amber-600 dark:text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clip-rule="evenodd"/>
                </svg>
            </div>
            <div>
                <p class="text-lg font-medium text-amber-800 dark:text-amber-200 mb-3">Research Summary</p>
                <p class="text-amber-700 dark:text-amber-300 leading-relaxed mb-4">
                    This research presents an innovative real-time anomaly detection system using Vision Transformers and an attention-enhanced recurrent network for long surveillance footage analysis. The approach significantly improves detection accuracy and processing efficiency in video surveillance applications.
                </p>
                <p class="text-amber-700 dark:text-amber-300 leading-relaxed">
                    The proposed method combines the spatial attention capabilities of Vision Transformers with temporal modeling through recurrent networks, enabling robust detection of anomalous events in complex surveillance scenarios.
                </p>
            </div>
        </div>
    </div>

    <!-- Technical Approach -->
    <div class="space-y-4">
        <h3 class="text-xl font-semibold text-zinc-800 dark:text-zinc-200">Technical Approach</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                <h4 class="font-medium text-blue-800 dark:text-blue-200 mb-2">Vision Transformer</h4>
                <ul class="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                    <li>• Spatial feature extraction from video frames</li>
                    <li>• Attention-based patch processing</li>
                    <li>• Enhanced visual representation learning</li>
                </ul>
            </div>
            <div class="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 border border-purple-200 dark:border-purple-800">
                <h4 class="font-medium text-purple-800 dark:text-purple-200 mb-2">Recurrent Network</h4>
                <ul class="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                    <li>• Temporal sequence modeling</li>
                    <li>• Attention-driven recurrence mechanism</li>
                    <li>• Long-term dependency capture</li>
                </ul>
            </div>
        </div>
    </div>

    <!-- Research Contributions -->
    <div class="space-y-3">
        <h3 class="text-xl font-semibold text-zinc-800 dark:text-zinc-200">Key Contributions</h3>
        <div class="space-y-3">
            <div class="flex items-start space-x-3">
                <svg class="w-5 h-5 mr-1 mt-0.5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                <p class="text-zinc-700 dark:text-zinc-300">Novel integration of Vision Transformers with attention-driven recurrent networks</p>
            </div>
            <div class="flex items-start space-x-3">
                <svg class="w-5 h-5 mr-1 mt-0.5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                <p class="text-zinc-700 dark:text-zinc-300">Real-time processing capabilities for surveillance footage analysis</p>
            </div>
            <div class="flex items-start space-x-3">
                <svg class="w-5 h-5 mr-1 mt-0.5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                <p class="text-zinc-700 dark:text-zinc-300">Comprehensive evaluation on multiple benchmark datasets</p>
            </div>
        </div>
    </div>

    <!-- Research Tags -->
    <div class="space-y-3">
        <h3 class="text-xl font-semibold text-zinc-800 dark:text-zinc-200">Research Areas</h3>
        <div class="flex flex-wrap gap-2">
            <span class="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300">
                Video Anomaly Detection
            </span>
            <span class="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                Vision Transformers
            </span>
            <span class="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
                Attention Mechanisms
            </span>
            <span class="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                Surveillance Systems
            </span>
        </div>
    </div>

    <!-- Publication Status -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-lg p-4 border border-emerald-200 dark:border-emerald-800">
            <div class="flex items-center space-x-3">
                <svg class="w-6 h-6 text-emerald-600 dark:text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <div>
                    <p class="font-semibold text-emerald-800 dark:text-emerald-200">
                        Q1 Quartile Journal
                    </p>
                    <p class="text-sm text-emerald-600 dark:text-emerald-400">
                        Top-tier academic publication
                    </p>
                </div>
            </div>
        </div>
        
        <div class="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-lg p-4 border border-amber-200 dark:border-amber-800">
            <div class="flex items-center space-x-3">
                <svg class="w-6 h-6 text-amber-600 dark:text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"/>
                </svg>
                <div>
                    <p class="font-semibold text-amber-800 dark:text-amber-200">
                        Accepted: July 2025
                    </p>
                    <p class="text-sm text-amber-600 dark:text-amber-400">
                        DOI: To be determined
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>