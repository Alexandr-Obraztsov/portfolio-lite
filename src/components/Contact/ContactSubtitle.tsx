import { motion } from 'framer-motion'

export function ContactSubtitle() {
	return (
		<motion.div
			className='mb-6! md:mb-12! text-center'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: 0.2 }}
		>
			<span className='text-[1.2rem] md:text-[1.5rem] lg:text-[2rem] font-bold text-black/80'>
				LET'S WORK TOGETHER
			</span>
		</motion.div>
	)
}
