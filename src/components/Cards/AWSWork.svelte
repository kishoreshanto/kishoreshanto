<script lang="ts">
	import Card from '../Card.svelte';

	interface Props {
		date: string;
		onshowmodal?: () => void;
	}

	let { date, onshowmodal }: Props = $props();
</script>

{#snippet cardContent()}
	<!-- Modern Card Layout with Left Accent Bar -->
	<div class="relative">
		<!-- Orange accent bar on the left -->
		<div
			class="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-orange-400 via-amber-500 to-orange-600 rounded-l-lg"
		></div>

		<!-- Main content with left padding for accent bar -->
		<div class="pl-6 space-y-6">
			<!-- Header Section - Horizontal Layout -->
			<div class="flex items-start justify-between">
				<div class="flex-1">
					<div class="flex items-center space-x-3 mb-2">
						<!-- AWS Icon -->
						<div
							class="w-10 h-10 bg-gradient-to-br bg-white rounded-lg flex items-center justify-center shadow-lg"
						>
							<svg
								class="p-1 translate-y-0.5"
								width="200"
								height="200"
								viewBox="0 0 200 200"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M57.0527 83.8691C57.0527 86.3547 57.3173 88.3702 57.7804 89.8481C58.3096 91.3261 58.9711 92.9385 59.8973 94.6852C60.2281 95.2226 60.3604 95.7601 60.3604 96.2303C60.3604 96.9021 59.9634 97.5739 59.1035 98.2457L54.9358 101.067C54.3404 101.47 53.7451 101.672 53.2158 101.672C52.5543 101.672 51.8928 101.336 51.2313 100.731C50.3051 99.7237 49.5113 98.6488 48.8498 97.5739C48.1882 96.4319 47.5267 95.1554 46.799 93.6103C41.6391 99.7909 35.1561 102.881 27.3501 102.881C21.7932 102.881 17.361 101.269 14.1195 98.0442C10.878 94.8195 9.22415 90.52 9.22415 85.1455C9.22415 79.4351 11.2087 74.7996 15.2441 71.3062C19.2794 67.8128 24.6378 66.0661 31.4515 66.0661C33.7007 66.0661 36.0161 66.2677 38.4637 66.6036C40.9114 66.9395 43.4252 67.4769 46.0713 68.0816V63.1774C46.0713 58.0716 45.0129 54.5111 42.9621 52.4284C40.8452 50.3458 37.273 49.3381 32.1792 49.3381C29.8639 49.3381 27.4824 49.6069 25.0347 50.2115C22.587 50.8161 20.2055 51.5551 17.8902 52.4956C16.8317 52.9659 16.0379 53.2346 15.5748 53.369C15.1118 53.5033 14.781 53.5705 14.5164 53.5705C13.5902 53.5705 13.1272 52.8987 13.1272 51.4879V48.1961C13.1272 47.1212 13.2595 46.315 13.5902 45.8447C13.921 45.3745 14.5164 44.9042 15.4425 44.4339C17.7579 43.2247 20.5363 42.217 23.7778 41.4108C27.0193 40.5374 30.4592 40.1344 34.0977 40.1344C41.9698 40.1344 47.7252 41.9482 51.4297 45.576C55.0681 49.2038 56.9204 54.7126 56.9204 62.1025V83.8691H57.0527ZM30.1946 94.0805C32.3777 94.0805 34.6269 93.6775 37.0084 92.8713C39.3899 92.0651 41.5068 90.5871 43.2929 88.5717C44.3514 87.2953 45.1452 85.8845 45.5421 84.2721C45.939 82.6598 46.2036 80.7116 46.2036 78.4274V75.6058C44.2852 75.1356 42.2345 74.7325 40.1176 74.4637C38.0007 74.195 35.9499 74.0607 33.8992 74.0607C29.4669 74.0607 26.2255 74.934 24.0424 76.7479C21.8594 78.5618 20.8009 81.1146 20.8009 84.4737C20.8009 87.6312 21.5947 89.9825 23.2486 91.5948C24.8362 93.2744 27.1516 94.0805 30.1946 94.0805ZM83.3154 101.336C82.1247 101.336 81.3308 101.135 80.8016 100.664C80.2724 100.261 79.8093 99.3206 79.4124 98.0442L63.8665 46.1135C63.4695 44.7698 63.2711 43.8965 63.2711 43.4262C63.2711 42.3513 63.8003 41.7467 64.8588 41.7467H71.3417C72.5987 41.7467 73.4586 41.9482 73.9217 42.4185C74.4509 42.8216 74.8479 43.7621 75.2448 45.0386L86.3585 89.5122L96.6783 45.0386C97.0091 43.6949 97.406 42.8216 97.9352 42.4185C98.4644 42.0154 99.3906 41.7467 100.581 41.7467H105.874C107.13 41.7467 107.99 41.9482 108.52 42.4185C109.049 42.8216 109.512 43.7621 109.777 45.0386L120.229 90.0497L131.673 45.0386C132.07 43.6949 132.533 42.8216 132.996 42.4185C133.525 42.0154 134.385 41.7467 135.576 41.7467H141.728C142.787 41.7467 143.382 42.2841 143.382 43.4262C143.382 43.7621 143.316 44.098 143.25 44.5011C143.184 44.9042 143.052 45.4416 142.787 46.1806L126.844 98.1114C126.447 99.455 125.984 100.328 125.455 100.731C124.926 101.135 124.066 101.403 122.941 101.403H117.252C115.995 101.403 115.135 101.202 114.606 100.731C114.077 100.261 113.613 99.3878 113.349 98.0442L103.095 54.7126L92.9076 97.977C92.5768 99.3206 92.1799 100.194 91.6507 100.664C91.1215 101.135 90.1953 101.336 89.0046 101.336H83.3154ZM168.322 103.15C164.882 103.15 161.442 102.747 158.134 101.941C154.827 101.135 152.247 100.261 150.527 99.2535C149.468 98.6488 148.741 97.977 148.476 97.3724C148.211 96.7678 148.079 96.096 148.079 95.4913V92.0651C148.079 90.6543 148.608 89.9825 149.601 89.9825C149.998 89.9825 150.394 90.0497 150.791 90.1841C151.188 90.3184 151.784 90.5871 152.445 90.8559C154.694 91.8636 157.142 92.6697 159.722 93.2072C162.368 93.7446 164.948 94.0134 167.594 94.0134C171.762 94.0134 175.003 93.2744 177.253 91.7964C179.502 90.3184 180.693 88.1686 180.693 85.4142C180.693 83.5331 180.097 81.988 178.906 80.7116C177.716 79.4351 175.466 78.2931 172.225 77.2182L162.633 74.195C157.804 72.6499 154.231 70.3657 152.048 67.3426C149.865 64.3866 148.741 61.0948 148.741 57.6014C148.741 54.7798 149.336 52.2941 150.527 50.1443C151.718 47.9945 153.305 46.1135 155.29 44.6355C157.274 43.0903 159.524 41.9482 162.17 41.1421C164.816 40.3359 167.594 40 170.505 40C171.96 40 173.482 40.0672 174.937 40.2687C176.459 40.4703 177.848 40.739 179.237 41.0077C180.56 41.3436 181.817 41.6795 183.008 42.0826C184.199 42.4857 185.125 42.8888 185.786 43.2919C186.712 43.8293 187.374 44.3668 187.771 44.9714C188.168 45.5088 188.366 46.2478 188.366 47.1883V50.3458C188.366 51.7566 187.837 52.4956 186.845 52.4956C186.316 52.4956 185.456 52.2269 184.331 51.6895C180.56 49.9428 176.326 49.0694 171.63 49.0694C167.859 49.0694 164.882 49.674 162.831 50.9505C160.78 52.2269 159.722 54.1751 159.722 56.9296C159.722 58.8106 160.384 60.423 161.707 61.6994C163.03 62.9758 165.477 64.2523 168.983 65.3943L178.377 68.4175C183.14 69.9626 186.58 72.1124 188.631 74.8668C190.682 77.6212 191.674 80.7787 191.674 84.2721C191.674 87.1609 191.079 89.781 189.954 92.0651C188.763 94.3493 187.176 96.3647 185.125 97.977C183.074 99.6565 180.626 100.866 177.782 101.739C174.805 102.68 171.696 103.15 168.322 103.15Z"
									fill="#252F3E"
								/>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M180.825 135.8C159.061 152.125 127.439 160.791 100.251 160.791C62.1465 160.791 27.8131 146.482 1.88117 122.7C-0.169572 120.819 1.68271 118.266 4.13037 119.744C32.1792 136.27 66.7772 146.28 102.566 146.28C126.712 146.28 153.239 141.175 177.649 130.694C181.288 129.015 184.397 133.113 180.825 135.8Z"
									fill="#FF9900"
								/>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M189.888 125.32C187.109 121.692 171.497 123.573 164.419 124.446C162.302 124.715 161.971 122.834 163.89 121.423C176.326 112.555 196.768 115.108 199.149 118.064C201.531 121.087 198.488 141.846 186.845 151.789C185.059 153.334 183.339 152.528 184.133 150.513C186.779 143.862 192.666 128.88 189.888 125.32Z"
									fill="#FF9900"
								/>
							</svg>
						</div>
						<div>
							<h1 class="text-xl font-bold text-sky-800 dark:text-white leading-tight">
								Cloud Solutions Architect
							</h1>
							<p class="text-sm text-orange-600 dark:text-orange-400 font-medium">
								Freelance • Australia (Remote)
							</p>
						</div>
					</div>
				</div>

				<!-- Duration Badge - Top Right -->
				<div class="flex flex-col items-end">
					<div class="text-xs text-gray-500 dark:text-gray-400 font-mono mb-1">
						Duration: 6 months
					</div>
				</div>
			</div>

			<!-- Project Summary - Full Width Card -->
			<div
				class="bg-gradient-to-r from-slate-50 via-gray-50 to-slate-50 dark:from-slate-800/50 dark:via-gray-800/50 dark:to-slate-800/50 rounded-xl p-5 border border-gray-200 dark:border-gray-700 shadow-sm"
			>
				<div class="flex items-start space-x-4">
					<div class="flex-1">
						<h3 class="font-semibold text-gray-900 dark:text-white mb-2">Overview</h3>
						<p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
							Architected and deployed a comprehensive AWS cloud infrastructure for a growing
							Australian tech startup, delivering scalable, secure, and highly available solutions
							that enabled seamless business growth and operational efficiency.
						</p>
					</div>
				</div>
			</div>

			<!-- Two Column Layout for Tech Stack & Achievements -->
			<div class="grid md:grid-cols-2 gap-6">
				<!-- Tech Stack Column -->
				<div class="space-y-4">
					<h3
						class="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b border-gray-200 dark:border-gray-700 pb-2"
					>
						Tech Stack
					</h3>
					<div class="grid grid-cols-2 gap-2">
						<div
							class="bg-white dark:bg-gray-800 rounded-lg p-3 border border-gray-200 dark:border-gray-700 text-center"
						>
							<div class="text-xs font-semibold text-blue-600 dark:text-blue-400">AWS Cloud</div>
						</div>
						<div
							class="bg-white dark:bg-gray-800 rounded-lg p-3 border border-gray-200 dark:border-gray-700 text-center"
						>
							<div class="text-xs font-semibold text-green-600 dark:text-green-400">EC2</div>
						</div>
						<div
							class="bg-white dark:bg-gray-800 rounded-lg p-3 border border-gray-200 dark:border-gray-700 text-center"
						>
							<div class="text-xs font-semibold text-purple-600 dark:text-purple-400">VPC</div>
						</div>
						<div
							class="bg-white dark:bg-gray-800 rounded-lg p-3 border border-gray-200 dark:border-gray-700 text-center"
						>
							<div class="text-xs font-semibold text-red-600 dark:text-red-400">ELB</div>
						</div>
						<div
							class="bg-white dark:bg-gray-800 rounded-lg p-3 border border-gray-200 dark:border-gray-700 text-center"
						>
							<div class="text-xs font-semibold text-yellow-600 dark:text-yellow-400">
								Auto Scaling
							</div>
						</div>
						<div
							class="bg-white dark:bg-gray-800 rounded-lg p-3 border border-gray-200 dark:border-gray-700 text-center"
						>
							<div class="text-xs font-semibold text-indigo-600 dark:text-indigo-400">IAM</div>
						</div>
					</div>
				</div>

				<!-- Key Deliverables Column -->
				<div class="space-y-4">
					<h3
						class="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b border-gray-200 dark:border-gray-700 pb-2"
					>
						Key Deliverables
					</h3>
					<div class="space-y-3">
						<div
							class="flex items-center space-x-3 bg-green-50 dark:bg-green-900/20 rounded-lg p-3"
						>
							<div class="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
							<span class="text-xs text-green-800 dark:text-green-300 font-medium">
								Multi-AZ Infrastructure Design
							</span>
						</div>
						<div class="flex items-center space-x-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
							<div class="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
							<span class="text-xs text-blue-800 dark:text-blue-300 font-medium">
								Security & Compliance Setup
							</span>
						</div>
						<div
							class="flex items-center space-x-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg p-3"
						>
							<div class="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
							<span class="text-xs text-orange-800 dark:text-orange-300 font-medium">
								Auto-Scaling Implementation
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
{/snippet}

<Card {date} {onshowmodal}>
	{@render cardContent()}
</Card>
