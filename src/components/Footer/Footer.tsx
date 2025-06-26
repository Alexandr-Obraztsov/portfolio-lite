import { motion } from 'framer-motion'
import { Heart, ArrowUp, Github, Linkedin, Mail } from 'lucide-react'

interface FooterProps {
	accentColor: string
}

const Footer = ({ accentColor }: FooterProps) => {
	const scrollToTop = () => {
		const goToSection = (
			window as unknown as { goToSection?: (index: number) => void }
		).goToSection
		if (goToSection) goToSection(0)
	}

	const socialLinks = [
		{
			name: 'GitHub',
			icon: <Github className='w-4 h-4' />,
			url: 'https://github.com/Alexandr-Obraztsov',
		},
		{
			name: 'LinkedIn',
			icon: <Linkedin className='w-4 h-4' />,
			url: 'https://www.linkedin.com/in/obraztsov-alexandr-047369349/',
		},
		{
			name: 'Email',
			icon: <Mail className='w-4 h-4' />,
			url: 'mailto:obraztsov.official@gmail.com',
		},
	]

	return (
		<footer className='border-t border-gray-800 bg-black'>
			<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
				<div className='flex flex-col sm:flex-row justify-between items-center gap-4'>
					{/* Social Links */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
						className='flex gap-3'
					>
						{socialLinks.map((link, index) => (
							<motion.a
								key={link.name}
								href={link.url}
								target='_blank'
								rel='noopener noreferrer'
								initial={{ opacity: 0, scale: 0.8 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
								className='p-2 bg-gray-900 rounded-lg border border-gray-800 text-gray-400 hover:text-white hover:border-gray-700 transition-all duration-300'
							>
								{link.icon}
							</motion.a>
						))}
					</motion.div>

					{/* Copyright */}
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.3 }}
						className='flex items-center gap-2 text-gray-400 text-sm'
					>
						<span>© 2025 Создано с</span>
						<Heart className='w-4 h-4 text-red-400' />
						<span>Александром Образцовым</span>
					</motion.div>

					{/* Scroll to Top */}
					<motion.button
						onClick={scrollToTop}
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.6 }}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						className='p-2 rounded-lg border transition-all duration-300'
						style={{
							backgroundColor: accentColor,
							borderColor: accentColor,
							color: 'black',
						}}
					>
						<ArrowUp className='w-4 h-4' />
					</motion.button>
				</div>
			</div>
		</footer>
	)
}

export default Footer
