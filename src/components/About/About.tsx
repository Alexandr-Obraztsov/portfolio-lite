import { useContext } from 'react'
import { motion } from 'framer-motion'
import { SectorContext } from '../../models/SectorContext'
import SwipeContainer from '../SwipeContainer/SwipeContainer'
import { SwipeChevron } from '../SwipeChevron/SwipeChevron'
import { AnimatedTitle } from './AnimatedTitle'
import { StoryCard } from './StoryCard'
import { FunFacts } from './FunFacts'
import { SkillsSection } from './SkillsSection'
import { CTAButton } from './CTAButton'

export function About() {
	const { setCurrentSector } = useContext(SectorContext)

	const handleSwipeUp = () => {
		setCurrentSector('menu')
	}

	const handleContactClick = () => {
		setCurrentSector('contact')
	}

	return (
		<SwipeContainer
			className='min-h-screen bg-accent flex flex-col items-center justify-center relative overflow-hidden px-6'
			onSwipeUp={handleSwipeUp}
		>
			<AnimatedTitle />

			{/* Основной контент */}
			<div className='w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12'>
				{/* Левая колонка - О себе */}
				<motion.div
					className='space-y-8'
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 1.2 }}
				>
					<StoryCard />
					<FunFacts />
				</motion.div>

				{/* Правая колонка - Навыки */}
				<motion.div
					className='space-y-6'
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 1.4 }}
				>
					<SkillsSection />
				</motion.div>
			</div>

			<CTAButton onClick={handleContactClick} />

			<SwipeChevron sector='menu' direction='up' />
		</SwipeContainer>
	)
}
