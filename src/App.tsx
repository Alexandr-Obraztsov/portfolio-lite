import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Navigation from './components/Navigation/Navigation'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
	const [activeSection, setActiveSection] = useState(0)
	const mainRef = useRef<HTMLElement>(null)

	const scrollAnimate = (index: number) => {
		return {
			opacity: activeSection === index ? 1 : 0.5,
			filter: activeSection === index ? 'blur(0px)' : 'blur(2px)',
		}
	}

	// Отслеживание активной секции
	useEffect(() => {
		const handleScroll = () => {
			if (!mainRef.current) return

			const scrollTop = mainRef.current.scrollTop
			const sections = mainRef.current.querySelectorAll('section')

			let currentSection = 0
			sections.forEach((section, index) => {
				const sectionTop = section.offsetTop
				const sectionHeight = section.offsetHeight

				// Секция считается активной, если видна больше чем на 30%
				if (scrollTop >= sectionTop - sectionHeight * 0.3) {
					currentSection = index
				}
			})

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
					animate={scrollAnimate(0)}
					transition={{ duration: 0.4, ease: 'easeInOut' }}
				>
					<Hero isActive={activeSection === 0} />
				</motion.section>

				{/* About Section */}
				<motion.section
					className='snap-start min-h-screen flex items-center justify-center overflow-y-auto relative'
					animate={scrollAnimate(1)}
					transition={{ duration: 0.4, ease: 'easeInOut' }}
				>
					<About />
				</motion.section>

				{/* Projects Section */}
				<motion.section
					className='snap-start min-h-screen flex items-center justify-center overflow-y-auto relative'
					animate={scrollAnimate(2)}
					transition={{ duration: 0.4, ease: 'easeInOut' }}
				>
					<Projects />
				</motion.section>

				{/* Skills Section */}
				<motion.section
					className='snap-start min-h-screen flex items-center justify-center relative'
					animate={scrollAnimate(3)}
					transition={{ duration: 0.4, ease: 'easeInOut' }}
				>
					<Skills />
				</motion.section>

				{/* Contact Section */}
				<motion.section
					className='snap-start min-h-screen flex flex-col items-center justify-center relative'
					animate={scrollAnimate(4)}
					transition={{ duration: 0.4, ease: 'easeInOut' }}
				>
					<div className='w-full'>
						<Contact />
						<Footer />
					</div>
				</motion.section>
			</main>
		</div>
	)
}

export default App
