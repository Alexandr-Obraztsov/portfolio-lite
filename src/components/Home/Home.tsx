import { useContext } from 'react'
import { motion } from 'framer-motion'
import { SectorContext } from '../../models/SectorContext'
import SwipeContainer from '../SwipeContainer/SwipeContainer'
import { SwipeChevron } from '../SwipeChevron/SwipeChevron'

export function Home() {
	const { setCurrentSector } = useContext(SectorContext)

	const handleSwipeDown = () => {
		setCurrentSector('menu')
	}

	return (
		<SwipeContainer
			className='min-h-screen bg-accent flex flex-col items-center justify-center relative overflow-hidden'
			onSwipeDown={handleSwipeDown}
		>
			<div className='inline-flex flex-col items-center justify-center relative overflow-hidden mx-auto'>
				{/* Имя ALEXANDR */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<span className='text-[3.5rem] sm:text-[6rem] lg:text-[9rem] xl:text-[10rem] font-black text-black leading-none'>
						ALEXANDR
					</span>
				</motion.div>

				<div className='w-full h-12 sm:h-16 relative bg-black text-white overflow-hidden rounded-full flex items-center'>
					<span className='absolute text-[1.5rem] sm:text-[2rem] font-bold marquee'>
						FRONTEND-DEVELOPER • REACT-SPECIALIST • TYPESCRIPT-EXPERT •
						UI/UX-ENTHUSIAST • PROBLEM-SOLVER • WEB-DEVELOPER •
						FRONTEND-DEVELOPER • REACT-SPECIALIST • TYPESCRIPT-EXPERT •
						UI/UX-ENTHUSIAST • PROBLEM-SOLVER • WEB-DEVELOPER •{' '}
					</span>
				</div>

				{/* Фамилия OBRAZTSOV с интерактивными элементами */}
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<span className='text-[3.5rem] sm:text-[6rem] lg:text-[9rem] xl:text-[10rem] font-black text-black leading-none relative'>
						OBRAZTSOV
					</span>
				</motion.div>
			</div>

			<SwipeChevron sector='menu' direction='down' />
		</SwipeContainer>
	)
}
