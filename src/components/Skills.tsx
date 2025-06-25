import { motion } from 'framer-motion'
import { Code, Palette, Brain, Zap } from 'lucide-react'

const skillCategories = [
	{
		icon: Code,
		title: 'Frontend',
		color: 'text-blue-400',
		skills: [
			{ name: 'React/Next.js', level: 95 },
			{ name: 'TypeScript', level: 90 },
			{ name: 'JavaScript ES6+', level: 95 },
			{ name: 'HTML5/CSS3', level: 98 },
		],
	},
	{
		icon: Palette,
		title: 'Styling & Design',
		color: 'text-purple-400',
		skills: [
			{ name: 'Tailwind CSS', level: 92 },
			{ name: 'Styled Components', level: 85 },
			{ name: 'SASS/SCSS', level: 88 },
			{ name: 'Figma', level: 80 },
		],
	},
]

const additionalSkills = [
	{
		icon: Brain,
		name: 'Problem Solving',
		description: 'Аналитическое мышление и решение сложных задач',
	},
	{
		icon: Zap,
		name: 'Performance',
		description: 'Оптимизация производительности веб-приложений',
	},
	{
		icon: Palette,
		name: 'UI/UX Design',
		description: 'Создание интуитивных пользовательских интерфейсов',
	},
]

function SkillBar({
	skill,
	index,
}: {
	skill: { name: string; level: number }
	index: number
}) {
	return (
		<motion.div
			initial={{ opacity: 0, x: -50 }}
			whileInView={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.6, delay: index * 0.1 }}
			viewport={{ once: true }}
			className='mb-6'
		>
			<div className='flex justify-between items-center mb-2'>
				<span className='text-text-primary font-medium'>{skill.name}</span>
				<span className='text-accent font-mono text-sm'>{skill.level}%</span>
			</div>
			<div className='w-full bg-white/10 rounded-full h-2 overflow-hidden'>
				<motion.div
					initial={{ width: 0 }}
					whileInView={{ width: `${skill.level}%` }}
					transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
					viewport={{ once: true }}
					className='h-full bg-gradient-to-r from-accent to-accent/70 rounded-full relative'
				>
					<div className='absolute inset-0 bg-gradient-to-r from-transparent to-white/20 animate-pulse'></div>
				</motion.div>
			</div>
		</motion.div>
	)
}

function SkillCategory({
	category,
	index,
}: {
	category: (typeof skillCategories)[0]
	index: number
}) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, delay: index * 0.2 }}
			viewport={{ once: true }}
			className='bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-accent/30 transition-all duration-300'
		>
			<div className='flex items-center gap-3 mb-6'>
				<div className={`p-2 rounded-lg bg-white/10 ${category.color}`}>
					<category.icon size={24} />
				</div>
				<h3 className='text-xl font-semibold text-text-primary'>
					{category.title}
				</h3>
			</div>
			<div>
				{category.skills.map((skill, skillIndex) => (
					<SkillBar key={skill.name} skill={skill} index={skillIndex} />
				))}
			</div>
		</motion.div>
	)
}

export default function Skills() {
	return (
		<div className='w-full h-screen py-8 px-4 sm:px-6 lg:px-8 bg-white/[0.02] flex items-center justify-center'>
			<div className='max-w-7xl mx-auto'>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className='text-center mb-16'
				>
					<div className='flex items-center justify-center gap-2 mb-4'>
						<Code className='text-accent' size={24} />
						<span className='font-mono text-accent text-sm uppercase tracking-wider'>
							Технический стек
						</span>
					</div>
					<h2 className='text-4xl md:text-5xl font-bold text-text-primary mb-6'>
						Навыки и технологии
					</h2>
					<p className='text-lg text-text-secondary max-w-2xl mx-auto'>
						Постоянно изучаю новые технологии и улучшаю существующие навыки для
						создания лучших решений
					</p>
				</motion.div>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-16'>
					{skillCategories.map((category, index) => (
						<SkillCategory
							key={category.title}
							category={category}
							index={index}
						/>
					))}
				</div>

				{/* Additional Skills */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					viewport={{ once: true }}
					className='mt-16'
				>
					<h3 className='text-2xl font-bold text-text-primary text-center mb-8'>
						Дополнительные навыки
					</h3>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
						{additionalSkills.map((skill, index) => (
							<motion.div
								key={skill.name}
								initial={{ opacity: 0, scale: 0.9 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								viewport={{ once: true }}
								className='text-center p-6 bg-white/5 rounded-xl border border-white/10 hover:border-accent/30 transition-all duration-300 group'
							>
								<div className='inline-flex p-3 bg-accent/20 rounded-full mb-4 group-hover:bg-accent/30 transition-colors'>
									<skill.icon className='text-accent' size={24} />
								</div>
								<h4 className='text-lg font-semibold text-text-primary mb-2'>
									{skill.name}
								</h4>
								<p className='text-text-secondary text-sm'>
									{skill.description}
								</p>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</div>
	)
}
