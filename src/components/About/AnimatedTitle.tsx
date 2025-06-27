import { motion } from 'framer-motion'

export function AnimatedTitle() {
	return (
		<motion.div
			className='mb-12 text-center'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
		>
			<div className='flex justify-center items-center text-[4rem] md:text-[6rem] lg:text-[8rem] font-black text-black leading-none'>
				{['A', 'B', 'O', 'U', 'T'].map((letter, index) => (
					<motion.span
						key={index}
						initial={{ y: -100, rotateX: 90 }}
						animate={{ y: 0, rotateX: 0 }}
						transition={{
							duration: 0.6,
							delay: index * 0.1,
							type: 'spring',
							stiffness: 200,
						}}
						className='inline-block'
					>
						{letter}
					</motion.span>
				))}
			</div>

			{/* Подзаголовок с пишущей машинкой */}
			<motion.div
				className='mt-4 text-[1rem] md:text-[1.2rem] font-light text-black/70'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.8 }}
			>
				<motion.span
					initial={{ width: 0 }}
					animate={{ width: 'auto' }}
					transition={{ duration: 2, delay: 1 }}
					className='inline-block overflow-hidden whitespace-nowrap border-r-2 border-black'
				>
					Frontend Developer & Creative Problem Solver
				</motion.span>
			</motion.div>
		</motion.div>
	)
}
