import { motion } from 'framer-motion'

export const ProjectsHeader = () => {
	return (
		<motion.div
			className='text-center mb-4! md:mb-12!'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
		>
			<div className='flex justify-center items-center text-[3.5rem] xs:text-[4rem] md:text-[6rem] lg:text-[8rem] font-black text-black leading-none'>
				{['P', 'R', 'O', 'J', 'E', 'C', 'T', 'S'].map((letter, index) => (
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

			<motion.p
				className='font-bold text-black uppercase
				text-[1rem]
				sm:text-[1.5rem]
				md:text-[2rem]
				'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.8 }}
			>
				Some of my recent work
			</motion.p>
		</motion.div>
	)
}
