import { useState } from 'react'
import { motion } from 'framer-motion'

interface NavigationProps {
	activeSection: number
	accentColor: string
}

const Navigation = ({ activeSection, accentColor }: NavigationProps) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const navItems = [
		{ name: 'Home', index: 0 },
		{ name: 'About', index: 1 },
		{ name: 'Projects', index: 2 },
		{ name: 'Skills', index: 3 },
		{ name: 'Contact', index: 4 },
	]

	const goToSection = (index: number) => {
		const goToSectionFn = (
			window as unknown as { goToSection?: (index: number) => void }
		).goToSection
		if (goToSectionFn) {
			goToSectionFn(index)
		}
		setIsMenuOpen(false)
	}

	return (
		<nav className='fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex items-center justify-between h-16'>
					{/* Logo */}
					<motion.div
						className='text-xl font-bold text-white'
						whileHover={{ scale: 1.05 }}
					>
						Portfolio
					</motion.div>

					{/* Desktop Navigation */}
					<div className='hidden md:flex space-x-8'>
						{navItems.map(item => (
							<motion.button
								key={item.name}
								onClick={() => goToSection(item.index)}
								className={`text-sm font-medium transition-colors duration-200 ${
									activeSection === item.index
										? 'text-white'
										: 'text-gray-400 hover:text-white'
								}`}
								whileHover={{ y: -2 }}
								whileTap={{ scale: 0.95 }}
							>
								{item.name}
								{activeSection === item.index && (
									<motion.div
										className='h-0.5 mt-1 rounded-full'
										style={{ backgroundColor: accentColor }}
										layoutId='activeTab'
									/>
								)}
							</motion.button>
						))}
					</div>

					{/* Mobile menu button */}
					<motion.button
						className='md:hidden text-white'
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						whileTap={{ scale: 0.95 }}
					>
						<div className='w-6 h-6 flex flex-col justify-center space-y-1'>
							<motion.div
								className='w-full h-0.5 bg-white'
								animate={
									isMenuOpen ? { rotate: 45, y: 2 } : { rotate: 0, y: 0 }
								}
							/>
							<motion.div
								className='w-full h-0.5 bg-white'
								animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
							/>
							<motion.div
								className='w-full h-0.5 bg-white'
								animate={
									isMenuOpen ? { rotate: -45, y: -2 } : { rotate: 0, y: 0 }
								}
							/>
						</div>
					</motion.button>
				</div>

				{/* Mobile Navigation */}
				<motion.div
					className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
					initial={{ opacity: 0, y: -10 }}
					animate={isMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
					transition={{ duration: 0.2 }}
				>
					<div className='py-4 space-y-2 border-t border-gray-800'>
						{navItems.map(item => (
							<motion.button
								key={item.name}
								onClick={() => goToSection(item.index)}
								className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors duration-200 ${
									activeSection === item.index
										? 'text-white'
										: 'text-gray-400 hover:text-white'
								}`}
								style={{
									color: activeSection === item.index ? accentColor : undefined,
								}}
								whileTap={{ scale: 0.95 }}
							>
								{item.name}
							</motion.button>
						))}
					</div>
				</motion.div>
			</div>
		</nav>
	)
}

export default Navigation
