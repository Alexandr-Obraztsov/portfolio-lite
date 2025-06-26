import { Code, Palette, Brain, Zap, ArrowDown } from 'lucide-react'

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

const scrollToNext = () => {
	const mainElement = document.querySelector('main')
	if (mainElement) {
		const sections = mainElement.querySelectorAll('section')
		const nextSection = sections[4] // Contact section
		if (nextSection) {
			mainElement.scrollTo({
				top: nextSection.offsetTop,
				behavior: 'smooth',
			})
		}
	}
}

const Skills = () => {
	return (
		<div className='w-full min-h-screen py-24 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative flex flex-col items-center justify-center'>
			<div className='max-w-7xl mx-auto'>
				{/* Header */}
				<div className='text-center mb-16 opacity-0 animate-[fadeInUp_0.6s_ease-out_0.2s_forwards]'>
					<div className='flex items-center justify-center gap-2 mb-4'>
						<Code className='text-accent' size={24} />
						<span className='font-mono text-accent text-sm uppercase tracking-wider'>
							Технический стек
						</span>
					</div>
					<h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
						Навыки и технологии
					</h2>
					<p className='text-lg text-gray-400 max-w-2xl mx-auto'>
						Постоянно изучаю новые технологии и улучшаю существующие навыки для
						создания лучших решений
					</p>
				</div>

				{/* Skills Categories */}
				<div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-16'>
					{skillCategories.map((category, categoryIndex) => (
						<div
							key={category.title}
							className='bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-accent/30 transition-all duration-300 opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]'
							style={{
								animationDelay: `${0.4 + categoryIndex * 0.2}s`,
							}}
						>
							<div className='flex items-center gap-3 mb-6'>
								<div className={`p-2 rounded-lg bg-white/10 ${category.color}`}>
									<category.icon size={24} />
								</div>
								<h3 className='text-xl font-semibold text-white'>
									{category.title}
								</h3>
							</div>
							<div>
								{category.skills.map((skill, skillIndex) => (
									<div
										key={skill.name}
										className='mb-6'
										style={{
											animationDelay: `${
												0.6 + categoryIndex * 0.2 + skillIndex * 0.1
											}s`,
										}}
									>
										<div className='flex justify-between items-center mb-2'>
											<span className='text-white font-medium'>
												{skill.name}
											</span>
											<span className='text-accent font-mono text-sm'>
												{skill.level}%
											</span>
										</div>
										<div className='w-full bg-white/10 rounded-full h-2 overflow-hidden'>
											<div
												className='h-full bg-gradient-to-r from-accent to-accent/70 rounded-full relative transition-all duration-1000 ease-out'
												style={{
													width: `${skill.level}%`,
													animationDelay: `${
														0.8 + categoryIndex * 0.2 + skillIndex * 0.1
													}s`,
												}}
											>
												<div className='absolute inset-0 bg-gradient-to-r from-transparent to-white/20 animate-pulse'></div>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					))}
				</div>

				{/* Additional Skills */}
				<div className='opacity-0 animate-[fadeInUp_0.8s_ease-out_0.8s_forwards]'>
					<h3 className='text-2xl font-bold text-white text-center mb-8'>
						Дополнительные навыки
					</h3>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
						{additionalSkills.map((skill, index) => (
							<div
								key={skill.name}
								className='text-center p-6 bg-white/5 rounded-xl border border-white/10 hover:border-accent/30 transition-all duration-300 group'
								style={{
									animationDelay: `${1 + index * 0.1}s`,
								}}
							>
								<div className='inline-flex p-3 bg-accent/20 rounded-full mb-4 group-hover:bg-accent/30 transition-colors'>
									<skill.icon className='text-accent' size={24} />
								</div>
								<h4 className='text-lg font-semibold text-white mb-2'>
									{skill.name}
								</h4>
								<p className='text-gray-400 text-sm'>{skill.description}</p>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Scroll Indicator */}
			<div
				className='absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer opacity-0 animate-[fadeInUp_0.8s_ease-out_1.2s_forwards]'
				onClick={scrollToNext}
			>
				<div className='flex flex-col items-center text-gray-400 hover:text-accent transition-colors group'>
					<span className='text-xs font-mono mb-2'>Контакты</span>
					<ArrowDown
						size={20}
						className='animate-bounce group-hover:translate-y-1 transition-transform'
					/>
				</div>
			</div>
		</div>
	)
}

export default Skills
