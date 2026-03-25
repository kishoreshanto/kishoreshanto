import type { Action } from 'svelte/action';

export interface SwipeOptions {
	onSwipeLeft?: () => void;
	onSwipeRight?: () => void;
	threshold?: number;
	velocityThreshold?: number;
	axisLockRatio?: number;
	hapticDuration?: number;
	disabled?: boolean;
	ignore?: (target: EventTarget | null) => boolean;
}

type ResolvedSwipeOptions = Required<
	Pick<SwipeOptions, 'threshold' | 'velocityThreshold' | 'axisLockRatio' | 'hapticDuration' | 'disabled'>
> &
	Pick<SwipeOptions, 'onSwipeLeft' | 'onSwipeRight' | 'ignore'>;

const DEFAULT_THRESHOLD = 50;
const DEFAULT_VELOCITY_THRESHOLD = 0.3;
const DEFAULT_AXIS_LOCK_RATIO = 1.2;
const DEFAULT_HAPTIC_DURATION = 10;
const IGNORED_TARGET_SELECTOR =
	'input, textarea, select, [contenteditable="true"], [data-swipe-ignore]';

function resolveOptions(options: SwipeOptions = {}): ResolvedSwipeOptions {
	return {
		onSwipeLeft: options.onSwipeLeft,
		onSwipeRight: options.onSwipeRight,
		threshold: options.threshold ?? DEFAULT_THRESHOLD,
		velocityThreshold: options.velocityThreshold ?? DEFAULT_VELOCITY_THRESHOLD,
		axisLockRatio: options.axisLockRatio ?? DEFAULT_AXIS_LOCK_RATIO,
		hapticDuration: options.hapticDuration ?? DEFAULT_HAPTIC_DURATION,
		disabled: options.disabled ?? false,
		ignore: options.ignore
	};
}

function shouldIgnoreTarget(options: ResolvedSwipeOptions, target: EventTarget | null): boolean {
	if (options.ignore?.(target)) {
		return true;
	}

	return target instanceof Element && target.closest(IGNORED_TARGET_SELECTOR) !== null;
}

export const swipe: Action<HTMLElement, SwipeOptions> = (node, initialOptions = {}) => {
	let options = resolveOptions(initialOptions);

	let tracking = false;
	let startX = 0;
	let startY = 0;
	let lastX = 0;
	let lastY = 0;
	let startTime = 0;

	function reset() {
		tracking = false;
		startX = 0;
		startY = 0;
		lastX = 0;
		lastY = 0;
		startTime = 0;
	}

	function handleTouchStart(event: TouchEvent) {
		if (options.disabled || event.touches.length !== 1 || shouldIgnoreTarget(options, event.target)) {
			reset();
			return;
		}

		const touch = event.touches[0];
		tracking = true;
		startX = lastX = touch.clientX;
		startY = lastY = touch.clientY;
		startTime = performance.now();
	}

	function handleTouchMove(event: TouchEvent) {
		if (!tracking || event.touches.length !== 1) {
			return;
		}

		const touch = event.touches[0];
		lastX = touch.clientX;
		lastY = touch.clientY;
	}

	function handleTouchEnd(event: TouchEvent) {
		if (!tracking) {
			return;
		}

		const touch = event.changedTouches[0];

		if (!touch) {
			reset();
			return;
		}

		lastX = touch.clientX;
		lastY = touch.clientY;

		const deltaX = lastX - startX;
		const deltaY = lastY - startY;
		const horizontalDistance = Math.abs(deltaX);
		const verticalDistance = Math.abs(deltaY);
		const elapsed = Math.max(performance.now() - startTime, 1);
		const velocity = horizontalDistance / elapsed;
		const isHorizontalGesture = horizontalDistance > verticalDistance * options.axisLockRatio;

		if (
			horizontalDistance >= options.threshold &&
			isHorizontalGesture &&
			velocity >= options.velocityThreshold
		) {
			if (options.hapticDuration > 0 && 'vibrate' in navigator) {
				navigator.vibrate(options.hapticDuration);
			}

			if (deltaX < 0) {
				options.onSwipeLeft?.();
			} else {
				options.onSwipeRight?.();
			}
		}

		reset();
	}

	function handleTouchCancel() {
		reset();
	}

	node.addEventListener('touchstart', handleTouchStart, { passive: true });
	node.addEventListener('touchmove', handleTouchMove, { passive: true });
	node.addEventListener('touchend', handleTouchEnd, { passive: true });
	node.addEventListener('touchcancel', handleTouchCancel, { passive: true });

	return {
		update(nextOptions = {}) {
			options = resolveOptions(nextOptions);
		},
		destroy() {
			node.removeEventListener('touchstart', handleTouchStart);
			node.removeEventListener('touchmove', handleTouchMove);
			node.removeEventListener('touchend', handleTouchEnd);
			node.removeEventListener('touchcancel', handleTouchCancel);
		}
	};
};
