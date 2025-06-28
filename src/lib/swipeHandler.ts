import type { PanInfo } from 'framer-motion'

export const swipeHandler =
	(onSwipeTop?: () => void, onSwipeBottom?: () => void) =>
	(_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
		const threshold = 50

		// Свайп вверх
		if (info.offset.y > threshold) {
			onSwipeTop?.()
		}
		// Свайп вниз
		else if (info.offset.y < -threshold) {
			onSwipeBottom?.()
		}
	}
