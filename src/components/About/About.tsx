import { motion } from 'framer-motion'
import SwipeContainer from '../SwipeContainer/SwipeContainer'
import { AnimatedTitle } from './AnimatedTitle'
import { Timeline } from './Timeline'
import { SkillsSection } from './SkillsSection'

export function About() {
	return (
		<SwipeContainer upSection={'menu'}>
			<AnimatedTitle />

			<div className='w-full max-w-6xl mt-4!'>
				<motion.div
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.6 }}
				>
					<Timeline />
				</motion.div>

				<motion.div
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
