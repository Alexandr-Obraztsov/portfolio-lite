import { motion } from 'framer-motion'
import SwipeContainer from '../SwipeContainer/SwipeContainer'
import { SwipeChevron } from '../SwipeChevron/SwipeChevron'
import { useNavigate } from 'react-router'
import { PATHS } from '../../const/PATHS'

export function Home() {
	const navigate = useNavigate()

	const handleSwipeDown = () => {
		navigate(PATHS.menu)
	}

	return (
		<SwipeContainer
			className='h-svh flex flex-col items-center justify-center relative overflow-hidden'
			onSwipeDown={handleSwipeDown}
		>
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

				<div className='w-full h-12 sm:h-16 relative bg-black text-white overflow-hidden rounded-full flex items-center'>
					<span className='absolute text-[1.5rem] sm:text-[2rem] font-light marquee'>
						FRONTEND-DEVELOPER • REACT-SPECIALIST • TYPESCRIPT-EXPERT •
						UI/UX-ENTHUSIAST • PROBLEM-SOLVER • WEB-DEVELOPER •
						FRONTEND-DEVELOPER • REACT-SPECIALIST • TYPESCRIPT-EXPERT •
						UI/UX-ENTHUSIAST • PROBLEM-SOLVER • WEB-DEVELOPER •{' '}
					</span>
				</div>

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

			<SwipeChevron sector='menu' direction='down' />
		</SwipeContainer>
	)
}
