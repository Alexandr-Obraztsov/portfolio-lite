import { useState } from 'react'
import { motion } from 'framer-motion'

const skills = [
	{ name: 'React', level: 95, color: '#61DAFB' },
	{ name: 'TypeScript', level: 90, color: '#3178C6' },
	{ name: 'CSS/Tailwind', level: 88, color: '#06B6D4' },
	{ name: 'Node.js', level: 85, color: '#339933' },
	{ name: 'UI/UX', level: 80, color: '#FF6B6B' },
	{ name: 'Problem Solving', level: 95, color: '#9C88FF' },
]

export function SkillsSection() {
	const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

	return (
		<div className='space-y-6'>
			<h3 className='text-xl font-bold text-black'>Skills & Expertise</h3>

			{skills.map((skill, index) => (
				<motion.div
					key={skill.name}
					className='relative'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 2.2 + index * 0.1 }}
					onHoverStart={() => setHoveredSkill(skill.name)}
					onHoverEnd={() => setHoveredSkill(null)}
				>
					<div className='flex justify-between items-center mb-2'>
						<span className='font-medium text-black'>{skill.name}</span>
						<span className='text-sm text-black/70'>{skill.level}%</span>
					</div>

					{/* Прогресс бар */}
					<div className='h-3 bg-black/20 rounded-full overflow-hidden'>
						<motion.div
							className='h-full rounded-full'
							style={{ backgroundColor: skill.color }}
							initial={{ width: 0 }}
							animate={{ width: `${skill.level}%` }}
							transition={{ duration: 1, delay: 2.5 + index * 0.1 }}
							whileHover={{ scale: 1.05 }}
						/>
					</div>

					{/* Hover эффект */}
					{hoveredSkill === skill.name && (
						<motion.div
							className='absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-1 rounded text-sm'
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
						>
							{skill.level}% proficiency
						</motion.div>
					)}
				</motion.div>
			))}
		</div>
	)
}
