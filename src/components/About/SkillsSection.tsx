import { motion } from 'framer-motion'

const skills = [
	{ name: 'React', level: 95 },
	{ name: 'TypeScript', level: 90 },
	{ name: 'CSS/Tailwind', level: 88 },
	{ name: 'Node.js', level: 85 },
	{ name: 'UI/UX', level: 80 },
	{ name: 'Problem Solving', level: 95 },
]

export function SkillsSection() {
	return (
		<div className='space-y-8!'>
			<motion.h3
				className='text-2xl font-bold text-black mb-6!'
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 1.6 }}
			>
				Skills & Expertise
			</motion.h3>

			<div className='space-y-6!'>
				{skills.map((skill, index) => (
					<motion.div
						key={skill.name}
						className='group'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 2.0 + index * 0.1 }}
					>
						{/* Название и процент */}
						<div className='flex justify-between items-center mb-2!'>
							<span className='font-semibold text-black text-lg'>
								{skill.name}
							</span>
							<span className='text-accent font-bold text-lg'>
								{skill.level}%
							</span>
						</div>

						{/* Стильный прогресс бар */}
						<div className='h-1.5 bg-black/10 relative overflow-hidden'>
							<motion.div
								className='h-full bg-black absolute top-0 left-0'
								initial={{ width: 0 }}
								animate={{ width: `${skill.level}%` }}
								transition={{
									duration: 1.5,
									delay: 2.3 + index * 0.1,
									ease: 'easeOut',
								}}
							/>
							{/* Оранжевый акцент на конце */}
							<motion.div
								className='h-full w-1 bg-accent absolute top-0'
								style={{ left: `${skill.level}%` }}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{
									duration: 0.3,
									delay: 2.8 + index * 0.1,
								}}
							/>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	)
}
