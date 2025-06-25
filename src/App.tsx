import { Suspense, useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function LoadingSpinner() {
	return (
		<div className='fixed inset-0 flex items-center justify-center bg-dark z-50'>
			<div className='flex flex-col items-center space-y-4'>
				<div className='w-12 h-12 border-2 border-accent/30 border-t-accent rounded-full animate-spin'></div>
				<p className='text-accent font-mono'>Загрузка...</p>
			</div>
		</div>
	)
}

function App() {
	const [activeSection, setActiveSection] = useState(0)
	const mainRef = useRef<HTMLElement>(null)

	// Отслеживание активной секции
	useEffect(() => {
		const handleScroll = () => {
			if (!mainRef.current) return

			const scrollTop = mainRef.current.scrollTop
			const windowHeight = window.innerHeight
			const currentSection = Math.round(scrollTop / windowHeight)

			if (currentSection !== activeSection) {
				setActiveSection(currentSection)
			}
		}

		const mainElement = mainRef.current
		if (mainElement) {
			mainElement.addEventListener('scroll', handleScroll, { passive: true })
			return () => mainElement.removeEventListener('scroll', handleScroll)
		}
	}, [activeSection])

	return (
		<div className='min-h-screen bg-dark text-text-primary overflow-x-hidden'>
			{/* Navigation */}
			<Navigation />

			{/* Main Content with Snap Scrolling */}
			<main
				ref={mainRef}
				className='snap-y snap-mandatory overflow-y-auto h-screen relative z-10'
				style={{ scrollBehavior: 'smooth' }}
			>
				{/* Hero Section */}
				<motion.section
					className='snap-start h-screen flex items-center justify-center relative'
					animate={{
						opacity: activeSection === 0 ? 1 : 0.2,
						filter: activeSection === 0 ? 'blur(0px)' : 'blur(2px)',
					}}
					transition={{ duration: 0.4, ease: 'easeInOut' }}
				>
					<Hero isActive={activeSection === 0} />
				</motion.section>

				{/* Projects Section */}
				<motion.section
					className='snap-start h-screen flex items-center justify-center overflow-y-auto relative'
					animate={{
						opacity: activeSection === 1 ? 1 : 0.2,
						filter: activeSection === 1 ? 'blur(0px)' : 'blur(2px)',
					}}
					transition={{ duration: 0.4, ease: 'easeInOut' }}
				>
					<Projects />
				</motion.section>

				{/* Skills Section */}
				<motion.section
					className='snap-start h-screen flex items-center justify-center overflow-y-auto relative'
					animate={{
						opacity: activeSection === 2 ? 1 : 0.2,
						filter: activeSection === 2 ? 'blur(0px)' : 'blur(2px)',
					}}
					transition={{ duration: 0.4, ease: 'easeInOut' }}
				>
					<div className='w-full'>
						<Skills />
					</div>
				</motion.section>

				{/* Contact Section */}
				<motion.section
					className='snap-start h-screen flex items-center justify-center overflow-y-auto relative'
					animate={{
						opacity: activeSection === 3 ? 1 : 0.2,
						filter: activeSection === 3 ? 'blur(0px)' : 'blur(2px)',
					}}
					transition={{ duration: 0.4, ease: 'easeInOut' }}
				>
					<div className='w-full'>
						<Contact />
						<Footer />
					</div>
				</motion.section>
			</main>

			{/* Loading Overlay */}
			<Suspense fallback={<LoadingSpinner />}>
				<div></div>
			</Suspense>
		</div>
	)
}

export default App
