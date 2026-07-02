<script>
	import { resolve } from '$app/paths';
	import LinkIcon from '$component/shared/svg/LinkIcon.svelte';
</script>

<section id="research-interests" class="mb-3 max-w-6xl">
	<div id="preface-heading">
		<h2 class="font-lora text-xl font-bold text-amber-700 md:text-2xl">Research Interests</h2>
		<!-- Horizontal Rule -->
		<hr class="mb-2 w-1/2 border border-amber-700" />

		<!-- Preface Content -->
		<div class="mt-2 flex flex-col gap-2">
			<p>
				Computer vision, biomedical signal processing, cloud-backed systems, and carefully crafted
				interfaces.
			</p>
			<p class="w-fit border-l-2 border-amber-700 bg-amber-100/90 px-4.5 py-1 text-gray-600 italic">
				To know more about my research experiences and publications, please visit the <a
					href={resolve('/academic/research')}
					class="font-semibold text-amber-700 underline underline-offset-4 hover:text-amber-600"
					>Research <span><LinkIcon /></span></a
				> page.
			</p>
		</div>
	</div>
</section>
