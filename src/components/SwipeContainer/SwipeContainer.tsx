import { motion, type PanInfo } from 'framer-motion'
import { useCallback, useEffect, type ReactNode } from 'react'
import { PATHS } from '../../const/PATHS'
import { useNavigate } from 'react-router'
import { SwipeChevron } from '../SwipeChevron/SwipeChevron'

interface SwipeContainerProps {
	children: ReactNode
	upSection?: keyof typeof PATHS
	downSection?: keyof typeof PATHS
	className?: string
}

export default function SwipeContainer({
	children,
	upSection,
	downSection,
	className = '',
}: SwipeContainerProps) {
	const navigate = useNavigate()

	const handleSwipe = (
		_event: MouseEvent | TouchEvent | PointerEvent,
		info: PanInfo
	) => {
		const threshold = 50

		// Свайп вверх
		if (info.offset.y > threshold && upSection) {
			navigate(PATHS[upSection])
		}
		// Свайп вниз
		else if (info.offset.y < -threshold && downSection) {
			navigate(PATHS[downSection])
		}
	}

	const handleScroll = useCallback(
		(event: WheelEvent) => {
			event.preventDefault()
			const threshold = 50

			// Скролл вверх
			if (event.deltaY < -threshold && upSection) {
				navigate(PATHS[upSection])
			}
			// Скролл вниз
			else if (event.deltaY > threshold && downSection) {
				navigate(PATHS[downSection])
			}
		},
		[upSection, downSection, navigate]
	)

	useEffect(() => {
		const handleKeyDown = (event: Event) => {
			const keyEvent = event as KeyboardEvent
			switch (keyEvent.key) {
				case 'ArrowUp':
					keyEvent.preventDefault()
					if (upSection) {
						navigate(PATHS[upSection])
					}
					break
				case 'ArrowDown':
					keyEvent.preventDefault()
					if (downSection) {
						navigate(PATHS[downSection])
					}
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
	}, [upSection, downSection, handleScroll, navigate])

	return (
		<motion.div
			className={`${className} min-h-svh  bg-accent flex flex-col items-center justify-center relative ${
				upSection && 'pt-5!'
			} ${downSection && 'pb-5!'}`}
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
			{upSection && <SwipeChevron sector={upSection} direction='up' />}
			{children}
			{downSection && <SwipeChevron sector={downSection} direction='down' />}
		</motion.div>
	)
}
