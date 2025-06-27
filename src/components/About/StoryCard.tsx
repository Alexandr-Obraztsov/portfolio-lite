import { motion } from 'framer-motion'

export function StoryCard() {
	return (
		<div className='bg-black text-white p-6 rounded-2xl relative overflow-hidden'>
			<motion.div
				className='absolute top-0 left-0 w-full h-1 bg-accent'
				initial={{ scaleX: 0 }}
				animate={{ scaleX: 1 }}
				transition={{ duration: 1, delay: 1.5 }}
			/>
			<h3 className='text-xl font-bold mb-4'>My Story</h3>
			<p className='font-light leading-relaxed'>
				Started coding at 16, fell in love with creating digital experiences.
				Now I turn coffee into clean, beautiful code that makes users smile.
				Always excited about the next challenge!
			</p>
		</div>
	)
}
