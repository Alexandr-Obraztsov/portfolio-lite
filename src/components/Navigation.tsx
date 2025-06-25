import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

const navItems = [
	{ name: 'Главная', section: 0 },
	{ name: 'Проекты', section: 1 },
	{ name: 'Навыки', section: 2 },
	{ name: 'Контакты', section: 3 },
]

const socialLinks = [
	{ icon: Github, href: 'https://github.com', label: 'GitHub' },
	{ icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
	{ icon: Mail, href: 'mailto:your@email.com', label: 'Email' },
]

export default function Navigation() {
	const [isOpen, setIsOpen] = useState(false)
	const [scrolled, setScrolled] = useState(false)
	const [activeSection, setActiveSection] = useState(0)

	useEffect(() => {
		const mainElement = document.querySelector('main')
		if (!mainElement) return

		const handleScroll = () => {
			const scrollTop = mainElement.scrollTop
			const windowHeight = window.innerHeight
			const currentSection = Math.round(scrollTop / windowHeight)
			setActiveSection(currentSection)
			setScrolled(scrollTop > 50)
		}

		mainElement.addEventListener('scroll', handleScroll)
		return () => mainElement.removeEventListener('scroll', handleScroll)
	}, [])

	const scrollToSection = (sectionIndex: number) => {
		const mainElement = document.querySelector('main')
		if (mainElement) {
			const windowHeight = window.innerHeight
			mainElement.scrollTo({
				top: sectionIndex * windowHeight,
				behavior: 'smooth',
			})
		}
		setIsOpen(false)
	}

	return (
		<>
			<motion.nav
				initial={{ y: -100 }}
				animate={{ y: 0 }}
				className={`fixed top-0 w-full z-[60] transition-all duration-300 ${
					scrolled ? 'backdrop-blur-lg' : 'bg-transparent'
				}`}
				style={{
					backgroundColor: scrolled ? 'rgba(10, 10, 10, 0.9)' : 'transparent',
				}}
			>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='flex justify-between items-center h-16'>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.2 }}
							className='text-xl font-mono font-semibold nav-logo cursor-pointer'
							onClick={() => scrollToSection(0)}
						>
							{'<Dev />'}
						</motion.div>

						{/* Desktop Navigation */}
						<div className='hidden md:flex items-center space-x-8'>
							{navItems.map((item, index) => (
								<motion.button
									key={item.name}
									onClick={() => scrollToSection(item.section)}
									initial={{ opacity: 0, y: -20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.1 * index }}
									className={`nav-link transition-colors duration-300 relative group ${
										activeSection === item.section ? 'text-accent' : ''
									}`}
								>
									{item.name}
									<span
										className={`nav-underline absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
											activeSection === item.section
												? 'w-full bg-accent'
												: 'w-0 group-hover:w-full bg-accent'
										}`}
									></span>
								</motion.button>
							))}
						</div>

						{/* Social Links */}
						<div className='hidden md:flex items-center space-x-4'>
							{socialLinks.map((social, index) => (
								<motion.a
									key={social.label}
									href={social.href}
									target='_blank'
									rel='noopener noreferrer'
									initial={{ opacity: 0, scale: 0 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ delay: 0.3 + 0.1 * index }}
									className='social-link transition-all duration-300 hover:scale-110'
								>
									<social.icon size={18} />
								</motion.a>
							))}
						</div>

						{/* Mobile menu button */}
						<motion.button
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.3 }}
							className='md:hidden mobile-menu-btn transition-colors'
							onClick={() => setIsOpen(!isOpen)}
						>
							{isOpen ? <X size={24} /> : <Menu size={24} />}
						</motion.button>
					</div>
				</div>
			</motion.nav>

			{/* Mobile Navigation */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className='fixed inset-0 z-40 md:hidden'
					>
						<div
							className='fixed inset-0'
							style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
							onClick={() => setIsOpen(false)}
						/>
						<motion.div
							initial={{ x: '100%' }}
							animate={{ x: 0 }}
							exit={{ x: '100%' }}
							transition={{ type: 'tween', duration: 0.3 }}
							className='fixed right-0 top-0 h-full w-64 border-l border-white/10 p-6 mobile-nav'
						>
							<div className='flex flex-col space-y-6 mt-16'>
								{navItems.map((item, index) => (
									<motion.button
										key={item.name}
										onClick={() => scrollToSection(item.section)}
										initial={{ opacity: 0, x: 20 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: 0.1 * index }}
										className={`mobile-nav-link transition-colors duration-300 text-left ${
											activeSection === item.section ? 'text-accent' : ''
										}`}
									>
										{item.name}
									</motion.button>
								))}
								<div className='flex space-x-4 pt-6 border-t border-white/10'>
									{socialLinks.map((social, index) => (
										<motion.a
											key={social.label}
											href={social.href}
											target='_blank'
											rel='noopener noreferrer'
											initial={{ opacity: 0, y: 20 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ delay: 0.4 + 0.1 * index }}
											className='mobile-social-link transition-colors'
										>
											<social.icon size={20} />
										</motion.a>
									))}
								</div>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	)
}
