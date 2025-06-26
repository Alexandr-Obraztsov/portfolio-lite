import { motion } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface ScrollIndicatorProps {
	nextSection?: string
	className?: string
	delay?: number
}

const ScrollIndicator = ({
	nextSection = 'Следующая секция',
	className = '',
	delay = 0,
}: ScrollIndicatorProps) => {
	const isLastSection = nextSection === 'Наверх'

	const scrollToNext = () => {
		const mainElement = document.querySelector('main')
		if (mainElement) {
			if (isLastSection) {
				// Возврат наверх
				mainElement.scrollTo({
					top: 0,
					behavior: 'smooth',
				})
			} else {
				// Переход к следующей секции
				const currentScrollTop = mainElement.scrollTop
				const windowHeight = window.innerHeight
				const nextSectionTop =
					Math.ceil(currentScrollTop / windowHeight) * windowHeight

				mainElement.scrollTo({
					top: nextSectionTop,
					behavior: 'smooth',
				})
			}
		}
	}

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay, duration: 0.5 }}
			className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 ${className}`}
		>
			<motion.div
				animate={{ y: [0, 10, 0] }}
				transition={{ duration: 2, repeat: Infinity }}
				className='flex flex-col items-center cursor-pointer transition-colors group'
				style={{ color: 'var(--color-text-secondary)' }}
				whileHover={{ color: 'var(--color-accent)' }}
				onClick={scrollToNext}
			>
				<span className='text-xs font-mono mb-2 text-center group-hover:text-green-400 transition-colors duration-300'>
					{nextSection}
				</span>
				<div className='flex flex-col items-center'>
					{isLastSection ? (
						<ChevronUp
							size={16}
							className='group-hover:-translate-y-1 transition-transform duration-300'
						/>
					) : (
						<ChevronDown
							size={16}
							className='group-hover:translate-y-1 transition-transform duration-300'
						/>
					)}
				</div>
			</motion.div>
		</motion.div>
	)
}

export default ScrollIndicator
