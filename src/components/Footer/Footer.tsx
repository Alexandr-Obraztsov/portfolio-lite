import { motion } from 'framer-motion'
import { Heart, ArrowUp } from 'lucide-react'

export default function Footer() {
	const scrollToTop = () => {
		const mainElement = document.querySelector('main')
		if (mainElement) {
			mainElement.scrollTo({ top: 0, behavior: 'smooth' })
		}
	}

	return (
		<div className='w-full py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10'>
			<div className='max-w-7xl mx-auto'>
				<div className='flex flex-col md:flex-row justify-between items-center gap-4'>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
						className='flex items-center gap-2 text-text-secondary'
					>
						<span>© 2024 Создано с</span>
						<Heart size={16} className='text-accent animate-pulse' />
						<span>используя React & Three.js</span>
					</motion.div>

					<motion.button
						onClick={scrollToTop}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.1 }}
						viewport={{ once: true }}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						className='p-2 bg-white/5 rounded-full hover:bg-accent/20 transition-all duration-300 text-text-secondary hover:text-accent'
					>
						<ArrowUp size={20} />
					</motion.button>
				</div>
			</div>
		</div>
	)
}
