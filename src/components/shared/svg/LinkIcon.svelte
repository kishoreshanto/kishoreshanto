<script>
	// Size in em (matches \resizebox{!}{1em}{...} behavior: scales to text height)
	export let size = '1em';
	// Small horizontal offset to mimic \hspace{0.2em} before the icon
	export let spaced = false;
</script>

<svg
	class="link-icon"
	class:spaced
	viewBox="0 0 960 960"
	width={size}
	height={size}
	fill="currentColor"
	xmlns="http://www.w3.org/2000/svg"
	aria-hidden="true"
	focusable="false"
>
	<!-- Ring (outer r=460, inner r=360, evenodd punches the hole) -->
	<path
		fill-rule="evenodd"
		d="M940,480 A460,460 0 1,0 20,480 A460,460 0 1,0 940,480 Z
       M840,480 A360,360 0 1,0 120,480 A360,360 0 1,0 840,480 Z"
	/>
	<!-- Diagonal arrow -->
	<path d="M300,604 L504,400 L414,400 L414,320 L640,320 L640,546 L560,546 L560,457 L357,660 Z" />
</svg>

<style>
	.link-icon {
		display: inline-block;
		vertical-align: -0.15em;
	}
	.spaced {
		margin-left: 0.2em;
	}
</style>
