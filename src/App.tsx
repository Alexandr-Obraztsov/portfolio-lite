import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from './components/Navigation/Navigation'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const sections = [
	{
		id: 0,
		name: 'hero',
		component: Hero,
		accentColor: '#3b82f6', // Blue
	},
	{
		id: 1,
		name: 'about',
		component: About,
		accentColor: '#10b981', // Emerald
	},
	{
		id: 2,
		name: 'projects',
		component: Projects,
		accentColor: '#8b5cf6', // Violet
	},
	{
		id: 3,
		name: 'skills',
		component: Skills,
		accentColor: '#f59e0b', // Amber
	},
	{
		id: 4,
		name: 'contact',
		component: Contact,
		accentColor: '#ef4444', // Red
	},
]

function App() {
	const [activeSection, setActiveSection] = useState(0)
	const [isTransitioning, setIsTransitioning] = useState(false)
	const [scrollOffset, setScrollOffset] = useState(0)
	const [isMobile, setIsMobile] = useState(false)
	const containerRef = useRef<HTMLDivElement>(null)
	const accumulatedDelta = useRef(0)
	const lastWheelTime = useRef(0)
	const touchStartY = useRef(0)
	const touchStartTime = useRef(0)

	// Проверка мобильного устройства
	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth < 768)
		}

		checkMobile()
		window.addEventListener('resize', checkMobile)
		return () => window.removeEventListener('resize', checkMobile)
	}, [])

	// Функция для перехода к секции
	const goToSection = (sectionIndex: number) => {
		if (sectionIndex < 0 || sectionIndex >= sections.length || isTransitioning)
			return

		setIsTransitioning(true)
		setActiveSection(sectionIndex)
		setScrollOffset(0)

		setTimeout(() => setIsTransitioning(false), 500)
	}

	// Touch события для мобильных устройств
	useEffect(() => {
		if (!isMobile) return

		const handleTouchStart = (e: TouchEvent) => {
			touchStartY.current = e.touches[0].clientY
			touchStartTime.current = Date.now()
		}

		const handleTouchEnd = (e: TouchEvent) => {
			if (isTransitioning) return

			const touchEndY = e.changedTouches[0].clientY
			const touchEndTime = Date.now()
			const deltaY = touchStartY.current - touchEndY
			const deltaTime = touchEndTime - touchStartTime.current

			// Проверяем что это быстрый свайп (меньше 300мс) и достаточно длинный (больше 50px)
			if (deltaTime < 300 && Math.abs(deltaY) > 50) {
				if (deltaY > 0 && activeSection < sections.length - 1) {
					// Свайп вверх - следующая секция
					goToSection(activeSection + 1)
				} else if (deltaY < 0 && activeSection > 0) {
					// Свайп вниз - предыдущая секция
					goToSection(activeSection - 1)
				}
			}
		}

		const container = containerRef.current
		if (container) {
			container.addEventListener('touchstart', handleTouchStart, {
				passive: true,
			})
			container.addEventListener('touchend', handleTouchEnd, { passive: true })

			return () => {
				container.removeEventListener('touchstart', handleTouchStart)
				container.removeEventListener('touchend', handleTouchEnd)
			}
		}
	}, [activeSection, isTransitioning, isMobile])

	// Обработка wheel событий для десктопа
	useEffect(() => {
		if (isMobile) return

		const handleWheel = (e: WheelEvent) => {
			e.preventDefault()

			if (isTransitioning) return

			const now = Date.now()
			const timeDiff = now - lastWheelTime.current

			if (timeDiff > 100) {
				accumulatedDelta.current = 0
			}

			lastWheelTime.current = now
			accumulatedDelta.current += e.deltaY

			const isScrollingDown = e.deltaY > 0
			const threshold = 80

			// Небольшой горизонтальный эффект при скролле внутри секции
			if (Math.abs(accumulatedDelta.current) < threshold) {
				setScrollOffset(prev => {
					const newOffset = prev + e.deltaY * 0.3
					return Math.max(-100, Math.min(100, newOffset))
				})
				return
			}

			// Переход к следующей/предыдущей секции
			if (Math.abs(accumulatedDelta.current) >= threshold) {
				const newSection = isScrollingDown
					? Math.min(activeSection + 1, sections.length - 1)
					: Math.max(activeSection - 1, 0)

				if (newSection !== activeSection) {
					goToSection(newSection)
				}

				accumulatedDelta.current = 0
			}
		}

		const container = containerRef.current
		if (container) {
			container.addEventListener('wheel', handleWheel, { passive: false })
			return () => container.removeEventListener('wheel', handleWheel)
		}
	}, [activeSection, isTransitioning, isMobile])

	// Экспорт функции для навигации
	useEffect(() => {
		;(window as unknown as { goToSection: typeof goToSection }).goToSection =
			goToSection
	}, [])

	const currentSection = sections[activeSection]

	return (
		<div
			ref={containerRef}
			className={`h-screen overflow-hidden bg-black text-white relative ${
				isMobile ? 'touch-pan-y' : ''
			}`}
		>
			{/* Navigation */}
			<Navigation
				activeSection={activeSection}
				accentColor={currentSection.accentColor}
				isMobile={isMobile}
			/>

			{/* Sections Container */}
			<div className='relative h-full'>
				<AnimatePresence mode='wait'>
					<motion.div
						key={activeSection}
						initial={{ opacity: 0, y: isMobile ? 0 : 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: isMobile ? 0 : -20 }}
						transition={{
							duration: isMobile ? 0.3 : 0.5,
							ease: [0.23, 1, 0.32, 1],
						}}
						className='absolute inset-0 h-screen flex flex-col'
					>
						{/* Content with subtle scroll effect */}
						<motion.div
							animate={{ x: isMobile ? 0 : scrollOffset * 0.5 }}
							transition={{ duration: 0.2, ease: 'easeOut' }}
							className='h-full flex flex-col'
						>
							{activeSection === 0 && (
								<Hero
									accentColor={currentSection.accentColor}
									isMobile={isMobile}
								/>
							)}
							{activeSection === 1 && (
								<About
									accentColor={currentSection.accentColor}
									isMobile={isMobile}
								/>
							)}
							{activeSection === 2 && (
								<Projects
									accentColor={currentSection.accentColor}
									isMobile={isMobile}
								/>
							)}
							{activeSection === 3 && (
								<Skills
									accentColor={currentSection.accentColor}
									isMobile={isMobile}
								/>
							)}
							{activeSection === 4 && (
								<div className='h-full flex flex-col'>
									<div className='flex-1'>
										<Contact
											accentColor={currentSection.accentColor}
											isMobile={isMobile}
										/>
									</div>
									<Footer accentColor={currentSection.accentColor} />
								</div>
							)}
						</motion.div>
					</motion.div>
				</AnimatePresence>
			</div>

			{/* Section Indicator - скрыт на мобильных */}
			{!isMobile && (
				<div className='fixed right-6 top-1/2 transform -translate-y-1/2 z-50 space-y-3'>
					{sections.map((section, index) => (
						<motion.button
							key={index}
							onClick={() => goToSection(index)}
							className='w-2 h-8 rounded-full transition-all duration-300 relative group'
							style={{
								backgroundColor:
									index === activeSection ? section.accentColor : '#333',
							}}
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
							disabled={isTransitioning}
						>
							{/* Tooltip */}
							<div
								className='absolute right-4 top-1/2 transform -translate-y-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap'
								style={{ color: section.accentColor }}
							>
								{section.name.charAt(0).toUpperCase() + section.name.slice(1)}
							</div>
						</motion.button>
					))}
				</div>
			)}

			{/* Progress bar */}
			<div className='fixed top-0 left-0 right-0 h-0.5 bg-gray-900 z-50'>
				<motion.div
					className='h-full origin-left'
					style={{ backgroundColor: currentSection.accentColor }}
					initial={{ scaleX: 0 }}
					animate={{ scaleX: (activeSection + 1) / sections.length }}
					transition={{ duration: 0.5 }}
				/>
			</div>

			{/* Mobile swipe hint */}
			{isMobile && !isTransitioning && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					className='fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40'
				>
					<div className='flex items-center space-x-2 text-gray-500 text-sm bg-black/80 backdrop-blur-sm rounded-full px-3 py-2 border border-gray-800'>
						<div
							className='w-1 h-1 rounded-full'
							style={{ backgroundColor: currentSection.accentColor }}
						/>
						<span>Свайп для навигации</span>
					</div>
				</motion.div>
			)}

			{/* Desktop scroll hint */}
			{!isMobile && !isTransitioning && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					className='fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40'
				>
					<div className='flex items-center space-x-2 text-gray-500 text-sm'>
						<div
							className='w-1 h-1 rounded-full'
							style={{ backgroundColor: currentSection.accentColor }}
						/>
						<span>Scroll to navigate</span>
					</div>
				</motion.div>
			)}

			{/* Global styles */}
			<style
				dangerouslySetInnerHTML={{
					__html: `
				/* Mobile viewport fix */
				@media (max-width: 768px) {
					.h-screen {
						height: 100vh;
						height: 100dvh;
					}
					
					/* Предотвращаем зум при двойном тапе */
					* {
						touch-action: manipulation;
					}
				}
				
				/* Custom scrollbar */
				::-webkit-scrollbar {
					width: 2px;
				}
				
				::-webkit-scrollbar-track {
					background: #000;
				}
				
				::-webkit-scrollbar-thumb {
					background: ${currentSection.accentColor};
					border-radius: 1px;
				}
				
				/* Selection */
				::selection {
					background: ${currentSection.accentColor}30;
					color: white;
				}
				
				/* Focus styles */
				button:focus-visible {
					outline: 2px solid ${currentSection.accentColor};
					outline-offset: 2px;
				}
			`,
				}}
			/>
		</div>
	)
}

export default App
