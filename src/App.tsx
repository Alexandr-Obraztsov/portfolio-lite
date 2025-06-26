import { useState, useEffect } from 'react'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import Navigation from './components/Navigation/Navigation'

function App() {
	const [currentSection, setCurrentSection] = useState(0)

	useEffect(() => {
		const handleScroll = () => {
			const sections = document.querySelectorAll('section')
			const scrollTop = window.pageYOffset

			sections.forEach((section, index) => {
				const sectionTop = section.offsetTop - 100
				const sectionHeight = section.offsetHeight

				if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
					setCurrentSection(index)
				}
			})
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<div className='min-h-screen bg-white text-black'>
			<Navigation currentSection={currentSection} />

			<section id='hero'>
				<Hero />
			</section>

			<section id='about'>
				<About />
			</section>

			<section id='portfolio'>
				<Portfolio />
			</section>

			<section id='contact'>
				<Contact />
			</section>
		</div>
	)
}

export default App
