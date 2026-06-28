<script lang="ts">
	import contactData from '$lib/data/contact.json';
	import ResumeIcon from '$component/shared/svg/ResumeIcon.svelte';
</script>

<a
	id="resume-cv-card"
	href={contactData.cv_resume.url}
	target="_blank"
	rel="noopener noreferrer"
	class="contact-card"
>
	<div class="flex items-start justify-between gap-4">
		<div class="space-y-4">
			<div class="flex items-center gap-3">
				<div class="contact-icon-wrap">
					<ResumeIcon />
				</div>

				<div>
					<p class="contact-card-kicker">{contactData.cv_resume.eyebrow}</p>
					<h3 class="font-lora text-2xl font-semibold text-amber-600">CV</h3>
				</div>
			</div>

			<p class="font-lora leading-relaxed text-gray-700">{contactData.cv_resume.description}</p>
		</div>
	</div>

	<div class="mt-4 flex items-center justify-between gap-4 border-t border-amber-700/15 pt-4">
		<span class="font-mono text-sm tracking-[0.18em] text-amber-700 uppercase">
			{contactData.cv_resume.url_preview}
		</span>
	</div>
</a>
