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

        <h2 id="modal-title" class="text-3xl font-bold text-sky-800 dark:text-zinc-100 leading-tight">
            A Deep Learning based Approach for Automated Defect Detection of Fabrics in Garment Production Line
        </h2>
        
        <div class="flex items-center space-x-2 text-lg">
            <span class="font-medium text-sky-600 dark:text-sky-400">ACM</span>
            <span class="text-zinc-400">•</span>
            <span class="text-zinc-600 dark:text-zinc-400">Conference ICCA — 2024</span>
        </div>
    </div>

    <!-- Abstract Accordion -->
    <div class="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
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
                    It is estimated that over 50% of garment product rejections are due to raw material defects which leads to huge amounts of financial loss every year. The rework rate of these industries exceeds approximately 7% on a daily basis, in turn lowering the efficiency and productivity. The existing solution to this problem is manual checking for each and every apparel item to either approve or reject the item which is tedious and often ends up with human error. This paper proposes deep learning based solution to this problem, by automating the task of quality control in the aforementioned apparel industry. By distinguishing between defective and non-defective garment products and localizing the specific type of defect within the fabric, the proposed model makes the task much more efficient and streamlined, therefore, help to redirect the defected products to its specific market, or at the worst case complete rejection. The approach is based on the classic object detection model, YOLOv8 along with necessary extensive image preprocessing measures and hyperparameter tunings. For the training and validation purposes, a custom dataset consisting of over 1500 garment product images of multiple classes has been prepared. Various classes of defects, including horizontal or vertical lines from faulty stitching, tears or spots within the fabric were collected and superimposed on top of the gathered images, and the final image was rendered to be included within the dataset. The use case is further strengthened as the model has managed to make accurate detections when tested with real world non-synthetic images. It has proven to be competitive in the field of garment defect detection, managing to achieve a staggering 97.96% mean average precision.
                </p>
            </div>
        </div>
        {/if}
    </div>

    <!-- Research Summary -->
    <div class="bg-gradient-to-r from-sky-50 to-indigo-50 dark:from-sky-900/20 dark:to-indigo-900/20 rounded-lg p-6 border border-sky-200 dark:border-sky-800">
        <div class="flex items-start space-x-3">
            <div class="flex-shrink-0 mt-1">
                <svg class="w-5 h-5 text-sky-600 dark:text-sky-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
                </svg>
            </div>
            <div>
                <p class="text-lg font-medium text-sky-800 dark:text-sky-200 mb-3">Research Summary</p>
                <p class="text-sky-700 dark:text-sky-300 leading-relaxed mb-4">
                    This research presents an innovative deep learning solution for identifying and localizing defects in fabrics within garment production lines, utilizing the advanced YOLOv8 object detection framework.
                </p>
                <p class="text-sky-700 dark:text-sky-300 leading-relaxed">
                    The study addresses critical quality control challenges in textile manufacturing by providing automated, real-time defect detection capabilities that significantly improve production efficiency and product quality.
                </p>
            </div>
        </div>
    </div>

    <!-- Technical Implementation -->
    <div class="space-y-4">
        <h3 class="text-xl font-semibold text-zinc-800 dark:text-zinc-200">Technical Implementation</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                <h4 class="font-medium text-blue-800 dark:text-blue-200 mb-2">YOLOv8 Architecture</h4>
                <ul class="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                    <li>• State-of-the-art object detection model</li>
                    <li>• Real-time processing capabilities</li>
                    <li>• High precision defect localization</li>
                </ul>
            </div>
            <div class="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
                <h4 class="font-medium text-green-800 dark:text-green-200 mb-2">Production Integration</h4>
                <ul class="text-sm text-green-700 dark:text-green-300 space-y-1">
                    <li>• Automated quality control pipeline</li>
                    <li>• Seamless production line integration</li>
                    <li>• Reduced manual inspection overhead</li>
                </ul>
            </div>
        </div>
    </div>

    <!-- Research Impact -->
    <div class="space-y-3">
        <h3 class="text-xl font-semibold text-zinc-800 dark:text-zinc-200">Research Impact</h3>
        <div class="space-y-3">
            <div class="flex items-start space-x-3">
                <svg class="w-5 h-5 mr-1 mt-0.5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                <p class="text-zinc-700 dark:text-zinc-300">Revolutionizes traditional quality control processes in garment manufacturing</p>
            </div>
            <div class="flex items-start space-x-3">
                <svg class="w-5 h-5 mr-1 mt-0.5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                <p class="text-zinc-700 dark:text-zinc-300">Significantly reduces defect detection time and increases accuracy</p>
            </div>
            <div class="flex items-start space-x-3">
                <svg class="w-5 h-5 mr-1 mt-0.5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                <p class="text-zinc-700 dark:text-zinc-300">Provides scalable solution for textile industry automation</p>
            </div>
        </div>
    </div>

    <!-- Application Areas -->
    <div class="space-y-4">
        <h3 class="text-xl font-semibold text-zinc-800 dark:text-zinc-200">Application Areas</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div class="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-3 border border-orange-200 dark:border-orange-800">
                <h4 class="font-medium text-orange-800 dark:text-orange-200 text-sm mb-1">Manufacturing</h4>
                <p class="text-xs text-orange-700 dark:text-orange-300">Real-time production line monitoring</p>
            </div>
            <div class="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-3 border border-purple-200 dark:border-purple-800">
                <h4 class="font-medium text-purple-800 dark:text-purple-200 text-sm mb-1">Quality Control</h4>
                <p class="text-xs text-purple-700 dark:text-purple-300">Automated defect classification</p>
            </div>
            <div class="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-3 border border-teal-200 dark:border-teal-800">
                <h4 class="font-medium text-teal-800 dark:text-teal-200 text-sm mb-1">Industry 4.0</h4>
                <p class="text-xs text-teal-700 dark:text-teal-300">Smart factory integration</p>
            </div>
        </div>
    </div>

    <!-- Research Focus Areas -->
    <div class="space-y-3">
        <h3 class="text-xl font-semibold text-zinc-800 dark:text-zinc-200">Research Focus Areas</h3>
        <div class="flex flex-wrap gap-2">
            <span class="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                Computer Vision
            </span>
            <span class="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                Deep Learning
            </span>
            <span class="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
                Object Detection
            </span>
            <span class="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300">
                Industrial Automation
            </span>
        </div>
    </div>

    <!-- Publication Information -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-lg p-4 border border-purple-200 dark:border-purple-800">
            <div class="flex items-center space-x-3">
                <svg class="w-6 h-6 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
                </svg>
                <div>
                    <p class="font-semibold text-purple-800 dark:text-purple-200">
                        ACM Conference
                    </p>
                    <p class="text-sm text-purple-600 dark:text-purple-400">
                        International Conference on Computing and Applications
                    </p>
                </div>
            </div>
        </div>
        
        <div class="bg-gradient-to-r flex from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
            <div class="flex items-center space-x-3">
                <svg class="w-6 h-6 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"/>
                </svg>
                <div>
                    <p class="font-semibold text-green-800 dark:text-green-200">
                        Published: June 2025
                    </p>
                    <p class="text-sm text-green-600 dark:text-green-400 font-mono">
                        DOI: 10.1145/3723178.3723196
                    </p>
                </div>
            </div>
        </div>
    </div>

    <!-- Access Link -->
    <div class="flex justify-center">
        <a
            href="https://dl.acm.org/doi/10.1145/3723178.3723196"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-lg bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-300 dark:hover:bg-green-900/50 transition-colors duration-200"
        >
            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clip-rule="evenodd"/>
            </svg>
            Access Full-Text Publication
        </a>
    </div>
</div>