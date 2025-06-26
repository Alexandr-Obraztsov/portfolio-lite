import { motion } from 'framer-motion'
import { Heart, ArrowUp, Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
	const scrollToTop = () => {
		const mainElement = document.querySelector('main')
		if (mainElement) {
			mainElement.scrollTo({ top: 0, behavior: 'smooth' })
		}
	}

	const socialLinks = [
		{
			name: 'GitHub',
			icon: <Github className='w-5 h-5' />,
			url: 'https://github.com',
			color: 'hover:text-white',
		},
		{
			name: 'LinkedIn',
			icon: <Linkedin className='w-5 h-5' />,
			url: 'https://linkedin.com',
			color: 'hover:text-blue-400',
		},
		{
			name: 'Email',
			icon: <Mail className='w-5 h-5' />,
			url: 'mailto:your.email@example.com',
			color: 'hover:text-emerald-400',
		},
	]

	return (
		<footer className='border-t border-slate-700/50 mt-auto'>
			<div className='max-w-7xl mx-auto px-6 py-6'>
				{/* Main Content */}
				<div className='flex flex-row justify-between items-center gap-8'>
					{/* Left Side - Social Links */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className='flex gap-4'
					>
						{socialLinks.map((link, index) => (
							<motion.a
								key={link.name}
								href={link.url}
								target='_blank'
								rel='noopener noreferrer'
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								viewport={{ once: true }}
								whileHover={{ scale: 1.1, y: -2 }}
								whileTap={{ scale: 0.95 }}
								className={`p-3 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 text-slate-400 transition-all duration-300 ${link.color} hover:border-emerald-500/50`}
							>
								{link.icon}
							</motion.a>
						))}
					</motion.div>

					{/* Center - Copyright */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.3 }}
						viewport={{ once: true }}
						className='items-center gap-2 text-slate-400 text-center hidden md:flex'
					>
						<span>© 2025 Создано с</span>
						<Heart className='w-4 h-4 text-emerald-400 animate-pulse' />
						<span> Александром Образцовым</span>
					</motion.div>

					{/* Right Side - Scroll to Top */}
					<motion.button
						onClick={scrollToTop}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.6 }}
						viewport={{ once: true }}
						whileHover={{ scale: 1.1, y: -2 }}
						whileTap={{ scale: 0.95 }}
						className='group p-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl text-white shadow-lg hover:shadow-emerald-500/25 transition-all duration-300'
					>
						<ArrowUp className='w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-300' />
					</motion.button>
				</div>
			</div>

			{/* Decorative Bottom Line */}
			<div className='w-full h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500' />
		</footer>
	)
}
