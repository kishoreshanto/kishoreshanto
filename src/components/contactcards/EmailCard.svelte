<script lang="ts">
	import contactData from '$lib/data/contact.json';
	import EmailIcon from '$component/shared/svg/EmailIcon.svelte';

	const href = contactData.email.url.startsWith('mailto:')
		? contactData.email.url
		: `mailto:${contactData.email.url}`;
</script>

<a id="email-card" {href} target="_blank" rel="noopener noreferrer" class="contact-card">
	<div class="flex items-start justify-between gap-4">
		<div class="space-y-4">
			<div class="flex items-center gap-3">
				<div class="contact-icon-wrap">
					<EmailIcon />
				</div>

				<div>
					<p class="contact-card-kicker">{contactData.email.eyebrow}</p>
					<h3 class="font-lora text-2xl font-semibold text-amber-600">Email</h3>
				</div>
			</div>

			<p class="font-lora leading-relaxed text-gray-700">{contactData.email.description}</p>
		</div>
	</div>

	<div class="mt-4 flex items-center justify-between gap-4 border-t border-amber-700/15 pt-4">
		<span class="font-mono text-sm tracking-[0.18em] text-amber-700 uppercase">
			{contactData.email.url_preview}
		</span>
	</div>
</a>
