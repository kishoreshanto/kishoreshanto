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
            A Deep Learning Approach to Assess Password Strength, Compromise Likelihood, and Time-to-Crack Estimation
        </h2>
    </div>

    <!-- Abstract Accordion -->
    <div class="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
        <button 
            class="w-full p-6 text-left hover:bg-blue-100/50 dark:hover:bg-blue-800/20 transition-colors duration-200 rounded-lg focus:outline-none"
            onclick={toggleAbstract}
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
                    The research presents a deep learning-based method using a GPT-2 model to detect weak passwords where we examining their character sequences. In the traditional password strength meters which evaluate passwords based on length, alphanumeric letter inclusion as well as special symbols who do not account for frequent password patterns which are vulnerable to attacks. The model is trained by using public available datasets of stolen passwords to allow it to recognize predictable patterns as well as sequences. The model’s performance is evaluated by perplexity, with lower scores indicating weaker passwords. Although early results are limited by dataset size and model constraints, this technique has potential for improving password strength evaluation when applied to more powerful models and larger, diversified datasets, emphasizing the need for improved machine learning approaches.
                </p>
            </div>
        </div>
        {/if}
    </div>

    <!-- Research Overview -->
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
                    This comprehensive research project developed a GPT-2 based deep learning model for password strength estimation through advanced sequence analysis and perplexity scoring techniques applied to real-world leaked password datasets.
                </p>
                <p class="text-indigo-700 dark:text-indigo-300 leading-relaxed">
                    The study addresses critical cybersecurity challenges by providing accurate assessments of password vulnerability, compromise likelihood, and time-to-crack estimations using state-of-the-art natural language processing techniques.
                </p>
            </div>
        </div>
    </div>

    <!-- Technical Methodology -->
    <div class="space-y-4">
        <h3 class="text-xl font-semibold text-zinc-800 dark:text-zinc-200">Technical Methodology</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                <h4 class="font-medium text-blue-800 dark:text-blue-200 mb-2">GPT-2 Model Architecture</h4>
                <ul class="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                    <li>• Transformer-based sequence modeling</li>
                    <li>• Fine-tuned on password datasets</li>
                    <li>• Perplexity-based strength scoring</li>
                </ul>
            </div>
            <div class="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
                <h4 class="font-medium text-green-800 dark:text-green-200 mb-2">Security Analysis</h4>
                <ul class="text-sm text-green-700 dark:text-green-300 space-y-1">
                    <li>• Real-world breach dataset analysis</li>
                    <li>• Compromise likelihood prediction</li>
                    <li>• Time-to-crack estimation algorithms</li>
                </ul>
            </div>
        </div>
    </div>

    <!-- Key Findings -->
    <div class="space-y-3">
        <h3 class="text-xl font-semibold text-zinc-800 dark:text-zinc-200">Key Research Findings</h3>
        <div class="space-y-3">
            <div class="flex items-start space-x-3">
                <svg class="w-5 h-5 mr-1 mt-0.5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                <p class="text-zinc-700 dark:text-zinc-300">Superior accuracy in password strength assessment compared to traditional metrics</p>
            </div>
            <div class="flex items-start space-x-3">
                <svg class="w-5 h-5 mr-1 mt-0.5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                <p class="text-zinc-700 dark:text-zinc-300">Novel approach to semantic password pattern recognition</p>
            </div>
            <div class="flex items-start space-x-3">
                <svg class="w-5 h-5 mr-1 mt-0.5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                <p class="text-zinc-700 dark:text-zinc-300">Practical implementation for real-time security assessment tools</p>
            </div>
        </div>
    </div>

    <!-- Research Applications -->
    <div class="space-y-4">
        <h3 class="text-xl font-semibold text-zinc-800 dark:text-zinc-200">Research Applications</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div class="bg-red-50 dark:bg-red-900/20 rounded-lg p-3 border border-red-200 dark:border-red-800">
                <h4 class="font-medium text-red-800 dark:text-red-200 text-sm mb-1">Cybersecurity</h4>
                <p class="text-xs text-red-700 dark:text-red-300">Enterprise password policy optimization</p>
            </div>
            <div class="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3 border border-blue-200 dark:border-blue-800">
                <h4 class="font-medium text-blue-800 dark:text-blue-200 text-sm mb-1">User Authentication</h4>
                <p class="text-xs text-blue-700 dark:text-blue-300">Real-time strength feedback systems</p>
            </div>
            <div class="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-3 border border-purple-200 dark:border-purple-800">
                <h4 class="font-medium text-purple-800 dark:text-purple-200 text-sm mb-1">Risk Assessment</h4>
                <p class="text-xs text-purple-700 dark:text-purple-300">Organizational security auditing</p>
            </div>
        </div>
    </div>

    <!-- Research Focus Areas -->
    <div class="space-y-3">
        <h3 class="text-xl font-semibold text-zinc-800 dark:text-zinc-200">Research Focus Areas</h3>
        <div class="flex flex-wrap gap-2">
            <span class="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                Generative Pretrained Transformer
            </span>
            <span class="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                Computer Security
            </span>
            <span class="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
                Natural Language Processing
            </span>
            <span class="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300">
                Password Security
            </span>
        </div>
    </div>

    <!-- Project Timeline -->
    <div class="bg-gradient-to-r from-slate-50 to-gray-50 dark:from-slate-900/20 dark:to-gray-900/20 rounded-lg p-4 border border-slate-200 dark:border-slate-800">
        <div class="flex items-center space-x-3">
            <svg class="w-6 h-6 text-slate-600 dark:text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"/>
            </svg>
            <div>
                <p class="font-semibold text-slate-800 dark:text-slate-200">
                    Project Timeline
                </p>
                <p class="text-sm text-slate-600 dark:text-slate-400">
                    July 2024 - November 2024 • Independent Research Study
                </p>
            </div>
        </div>
    </div>

    <!-- Access Link -->
    <div class="flex justify-center">
        <a
            href="https://drive.google.com/file/d/1EoQmhpDo8FAeqePLlldQuuxAGK1tdUQR/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-lg bg-indigo-100 text-indigo-800 hover:bg-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-300 dark:hover:bg-indigo-900/50 transition-colors duration-200"
        >
            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clip-rule="evenodd"/>
            </svg>
            View Technical Report
        </a>
    </div>
</div>