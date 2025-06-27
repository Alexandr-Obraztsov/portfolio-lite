import { motion } from 'framer-motion'
import SwipeContainer from '../SwipeContainer/SwipeContainer'
import { AnimatedTitle } from './AnimatedTitle'
import { StoryCard } from './StoryCard'
import { SkillsSection } from './SkillsSection'

export function About() {
	return (
		<SwipeContainer upSection={'menu'}>
			<AnimatedTitle />

			<div className='w-full max-w-6xl mt-4!'>
				{/* Левая колонка - О себе */}
				<motion.div
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.6 }}
				>
					<StoryCard />
				</motion.div>

				{/* Правая колонка - Навыки */}
				<motion.div
					className='space-y-6'
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.8 }}
				>
					<SkillsSection />
				</motion.div>
			</div>
		</SwipeContainer>
	)
}
