import { motion } from 'framer-motion'

interface CTAButtonProps {
	onClick: () => void
}

export function CTAButton({ onClick }: CTAButtonProps) {
	return (
		<motion.div
			className='mt-16 text-center'
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 3.5 }}
		>
			<motion.button
				onClick={onClick}
				className='bg-black text-white px-8 py-4 rounded-full font-light text-lg relative overflow-hidden group'
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
			>
				<motion.div
					className='absolute inset-0 bg-accent'
					initial={{ scale: 0 }}
					whileHover={{ scale: 1 }}
					transition={{ duration: 0.3 }}
					style={{ borderRadius: '50px' }}
				/>
				<span className='relative z-10 group-hover:text-black transition-colors'>
					Let's Create Something Amazing
				</span>
			</motion.button>
		</motion.div>
	)
}
