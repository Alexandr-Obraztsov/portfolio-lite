import { motion, type PanInfo } from 'framer-motion'
import { useCallback, useEffect, type ReactNode } from 'react'

interface SwipeContainerProps {
	children: ReactNode
	onSwipeUp?: () => void
	onSwipeDown?: () => void
	className?: string
}

export default function SwipeContainer({
	children,
	onSwipeUp,
	onSwipeDown,
	className = '',
}: SwipeContainerProps) {
	const handleSwipe = (
		_event: MouseEvent | TouchEvent | PointerEvent,
		info: PanInfo
	) => {
		const threshold = 50

		// Свайп вверх
		if (info.offset.y > threshold && onSwipeUp) {
			onSwipeUp()
		}
		// Свайп вниз
		else if (info.offset.y < -threshold && onSwipeDown) {
			onSwipeDown()
		}
	}

	const handleScroll = useCallback(
		(event: WheelEvent) => {
			event.preventDefault()
			const threshold = 10

			// Скролл вверх
			if (event.deltaY < -threshold && onSwipeUp) {
				onSwipeUp()
			}
			// Скролл вниз
			else if (event.deltaY > threshold && onSwipeDown) {
				onSwipeDown()
			}
		},
		[onSwipeUp, onSwipeDown]
	)

	useEffect(() => {
		const handleKeyDown = (event: Event) => {
			const keyEvent = event as KeyboardEvent
			switch (keyEvent.key) {
				case 'ArrowUp':
					keyEvent.preventDefault()
					onSwipeUp?.()
					break
				case 'ArrowDown':
					keyEvent.preventDefault()
					onSwipeDown?.()
					break
			}
		}

		// Добавляем обработчики событий
		window.addEventListener('wheel', handleScroll, { passive: false })
		window.addEventListener('keydown', handleKeyDown)

		// Убираем обработчики при размонтировании
		return () => {
			window.removeEventListener('wheel', handleScroll)
			window.removeEventListener('keydown', handleKeyDown)
		}
	}, [onSwipeUp, onSwipeDown, handleScroll])

	return (
		<motion.div
			className={className}
			drag='y'
			dragConstraints={{ top: 0, bottom: 0 }}
			dragElastic={0.2}
			onDragEnd={handleSwipe}
			whileDrag={{ scale: 0.98 }}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
		>
			{children}
		</motion.div>
	)
}
