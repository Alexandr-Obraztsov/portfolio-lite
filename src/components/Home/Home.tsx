import { motion } from 'framer-motion'
import SwipeContainer from '../SwipeContainer/SwipeContainer'
import { Socials } from '../Socials/Socials'

const associations = [
	'FRONTEND-DEVELOPER',
	'REACT-SPECIALIST',
	'TYPESCRIPT-EXPERT',
	'PROBLEM-SOLVER',
	'WEB-DEVELOPER',
	'VIBE-CODER',
]

export function Home() {
	return (
		<SwipeContainer
			className='min-h-svh flex flex-col items-center justify-center relative overflow-hidden'
			downSection={'menu'}
		>
			{/* Социальные сети */}
			<motion.div
				initial={{ opacity: 0, y: -40 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					duration: 0.3,
					delay: 1.8,
					type: 'spring',
					stiffness: 200,
				}}
				className='absolute top-5 flex justify-center w-full'
			>
				<Socials />
			</motion.div>

			<div className='inline-flex flex-col items-center justify-center relative overflow-hidden mx-auto'>
				{/* Имя ALEXANDR */}
				<motion.span
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className='text-[3rem] xs:text-[4rem] sm:text-[6rem] mb:text-[9rem] lg:text-[9rem] xl:text-[10rem] font-black text-black leading-none'
				>
					ALEXANDR
				</motion.span>

				<motion.div
					className='w-full [--h:2rem] sm:[--h:4rem] relative bg-black text-white overflow-hidden rounded-full flex items-center'
					initial={{ opacity: 0, height: 0 }}
					animate={{ opacity: 1, height: 'var(--h)' }}
					transition={{
						duration: 1,
						delay: 0.6,
						type: 'spring',
						stiffness: 200,
					}}
				>
					<span className='absolute text-[1.5rem] sm:text-[2rem] font-light marquee'>
						{[...associations, ...associations].reduce(
							(acc, curr) => acc + curr + '⠀×⠀',
							''
						)}
					</span>
				</motion.div>

				{/* Фамилия OBRAZTSOV с интерактивными элементами */}
				<motion.span
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className='text-[3rem] xs:text-[4rem] sm:text-[6rem] mb:text-[9rem] lg:text-[9rem] xl:text-[10rem] font-black text-black leading-none'
				>
					OBRAZTSOV
				</motion.span>
			</div>
		</SwipeContainer>
	)
}
