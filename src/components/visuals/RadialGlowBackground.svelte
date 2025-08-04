<svg
	class="absolute -bottom-48 left-[-40%] h-[80rem] w-[180%] lg:-right-40 lg:bottom-auto lg:left-auto lg:top-[-40%] lg:h-[180%] lg:w-[80rem] radial-glow"
	aria-hidden="true"
>
	<defs>
		<radialGradient id=":R1d6:-desktop" cx="100%">
			<stop offset="0%" class="glow-stop-1" stop-color="rgba(56, 189, 248, 0.3)"></stop>
			<stop offset="53.95%" class="glow-stop-2" stop-color="rgba(0, 71, 255, 0.09)"></stop>
			<stop offset="100%" stop-color="rgba(10, 14, 23, 0)"></stop>
		</radialGradient>
		<radialGradient id=":R1d6:-mobile" cy="100%">
			<stop offset="0%" class="glow-stop-1" stop-color="rgba(56, 189, 248, 0.3)"></stop>
			<stop offset="53.95%" class="glow-stop-2" stop-color="rgba(0, 71, 255, 0.09)"></stop>
			<stop offset="100%" stop-color="rgba(10, 14, 23, 0)"></stop>
		</radialGradient>
	</defs>
	<rect width="100%" height="100%" fill="url(#:R1d6:-desktop)" class="hidden lg:block"></rect>
	<rect width="100%" height="100%" fill="url(#:R1d6:-mobile)" class="lg:hidden"></rect>
</svg>

<style>
	.radial-glow {
		animation: gentle-pulse 6s ease-in-out infinite;
	}

	@keyframes gentle-pulse {
		0%,
		100% {
			opacity: 0.8;
			transform: scale(1);
		}
		50% {
			opacity: 1;
			transform: scale(1.3);
		}
	}

	.glow-stop-1 {
		animation: color-shift-1 8s ease-in-out infinite;
	}

	.glow-stop-2 {
		animation: color-shift-2 8s ease-in-out infinite;
	}

	@keyframes color-shift-1 {
		0%,
		100% {
			stop-color: rgba(56, 189, 248, 0.4);
		}
		33% {
			stop-color: rgba(56, 189, 248, 0.5);
		}
		66% {
			stop-color: rgba(56, 189, 248, 0.35);
		}
	}

	@keyframes color-shift-2 {
		0%,
		100% {
			stop-color: rgba(0, 71, 255, 0.09);
		}
		33% {
			stop-color: rgba(0, 71, 255, 0.12);
		}
		66% {
			stop-color: rgba(0, 71, 255, 0.06);
		}
	}
</style>
