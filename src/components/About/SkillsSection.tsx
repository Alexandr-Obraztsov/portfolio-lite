import { motion } from 'framer-motion'

const skills = [
	{ name: 'React', level: 95 },
	{ name: 'TypeScript', level: 90 },
	{ name: 'CSS/Tailwind', level: 95 },
	{ name: 'NextJS', level: 85 },
	{ name: 'UI/UX', level: 80 },
	{ name: 'Problem Solving', level: 95 },
]

export function SkillsSection() {
	const radius = 36
	const circumference = 2 * Math.PI * radius

	return (
		<div className='px-3!'>
			<motion.h3
				className='font-bold text-black mb-2! text-center uppercase
				text-[2rem]
				sm:text-[2.5rem]
				md:text-[3rem]
				lg:text-[3.5rem]
				'
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 1.6 }}
			>
				Skills
			</motion.h3>

			{/* Сетка кружков */}
			<div className='grid grid-cols-3 sm:grid-cols-6 gap-2'>
				{skills.map((skill, index) => (
					<motion.div
						key={skill.name}
						className='flex flex-col items-center'
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 2.0 + index * 0.1 }}
					>
						{/* SVG кружок с прогрессом */}
						<motion.div
							className='flex items-center justify-center relative mb-2!
							size-16 
							md:size-24'
							whileHover={{ scale: 1.1 }}
							transition={{ duration: 0.2 }}
						>
							<svg
								className='transform -rotate-90
							size-16
							md:size-24'
								viewBox='0 0 80 80'
							>
								{/* Фоновый круг */}
								<circle
									cx='40'
									cy='40'
									r={radius}
									stroke='rgb(0 0 0 / 0.15)'
									strokeWidth='6'
									fill='transparent'
								/>
								{/* Прогресс круг */}
								<motion.circle
									cx='40'
									cy='40'
									r={radius}
									stroke='black'
									strokeWidth='6'
									fill='transparent'
									strokeDasharray={circumference}
									initial={{ strokeDashoffset: circumference }}
									animate={{
										strokeDashoffset:
											circumference - (skill.level / 100) * circumference,
									}}
									transition={{
										duration: 1.5,
										delay: 2.3 + index * 0.1,
										ease: 'easeOut',
									}}
								/>
							</svg>

							{/* Процент в центре */}
							<span
								className='absolute font-bold text-black 
							text-[1rem] 
							md:text-[1.5rem]'
							>
								{skill.level}%
							</span>
						</motion.div>

						{/* Название навыка */}
						<span
							className=' font-bold text-black text-center leading-tight
						text-[0.8rem]
						md:text-[1.2rem]'
						>
							{skill.name}
						</span>
					</motion.div>
				))}
			</div>
		</div>
	)
}
