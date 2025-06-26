import { useState } from 'react'
import { motion } from 'framer-motion'

interface SkillsProps {
	accentColor: string
	isMobile: boolean
}

const Skills = ({ accentColor, isMobile }: SkillsProps) => {
	const [activeTab, setActiveTab] = useState('Frontend')

	const skillCategories = {
		Frontend: [
			{
				name: 'React',
				level: 95,
				description: 'Building modern UIs with hooks and context',
			},
			{
				name: 'Next.js',
				level: 90,
				description: 'Full-stack React framework with SSR/SSG',
			},
			{
				name: 'TypeScript',
				level: 90,
				description: 'Type-safe JavaScript development',
			},
			{
				name: 'Tailwind CSS',
				level: 85,
				description: 'Utility-first CSS framework',
			},
			{
				name: 'Framer Motion',
				level: 80,
				description: 'Production-ready motion library',
			},
			{
				name: 'Vue.js',
				level: 75,
				description: 'Progressive JavaScript framework',
			},
		],
		Backend: [
			{
				name: 'Node.js',
				level: 80,
				description: 'Server-side JavaScript runtime',
			},
			{
				name: 'Express.js',
				level: 75,
				description: 'Web application framework for Node.js',
			},
			{
				name: 'Python',
				level: 70,
				description: 'General-purpose programming language',
			},
			{
				name: 'PostgreSQL',
				level: 70,
				description: 'Advanced open source database',
			},
			{ name: 'MongoDB', level: 65, description: 'NoSQL document database' },
			{
				name: 'REST APIs',
				level: 85,
				description: 'RESTful web service design',
			},
		],
		'Tools & Other': [
			{ name: 'Git', level: 90, description: 'Version control system' },
			{ name: 'Docker', level: 70, description: 'Containerization platform' },
			{
				name: 'Webpack',
				level: 75,
				description: 'Module bundler for JavaScript',
			},
			{
				name: 'Vite',
				level: 85,
				description: 'Fast build tool for modern web projects',
			},
			{ name: 'Jest', level: 80, description: 'JavaScript testing framework' },
			{ name: 'Figma', level: 75, description: 'Collaborative design tool' },
		],
	}

	const tabs = Object.keys(skillCategories) as Array<
		keyof typeof skillCategories
	>

	return (
		<section
			className={`h-screen overflow-y-auto pt-20 pb-8 ${
				isMobile ? 'px-4' : 'px-8'
			}`}
		>
			<div className='max-w-6xl mx-auto'>
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className='text-center mb-12'
				>
					<h2
						className={`font-bold text-white mb-4 ${
							isMobile ? 'text-3xl' : 'text-4xl lg:text-5xl'
						}`}
					>
						Skills & Technologies
					</h2>
					<p
						className={`text-gray-400 max-w-2xl mx-auto ${
							isMobile ? 'text-sm' : 'text-lg'
						}`}
					>
						Here are the technologies and tools I work with to bring ideas to
						life
					</p>
				</motion.div>

				{/* Tabs */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2 }}
					className={`flex justify-center mb-12 ${
						isMobile ? 'flex-wrap gap-2' : 'gap-4'
					}`}
				>
					{tabs.map(tab => (
						<motion.button
							key={tab}
							onClick={() => setActiveTab(tab)}
							className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
								activeTab === tab
									? 'text-black'
									: 'text-gray-400 hover:text-white bg-gray-900 hover:bg-gray-800'
							} ${isMobile ? 'text-sm px-4 py-2' : ''}`}
							style={{
								backgroundColor: activeTab === tab ? accentColor : undefined,
							}}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							{tab}
						</motion.button>
					))}
				</motion.div>

				{/* Skills Grid */}
				<motion.div
					key={activeTab}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3 }}
					className={`grid gap-6 ${
						isMobile
							? 'grid-cols-1'
							: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
					}`}
				>
					{skillCategories[activeTab as keyof typeof skillCategories].map(
						(skill, index) => (
							<motion.div
								key={skill.name}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.1 }}
								className='bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300 group'
								whileHover={{ y: -5 }}
							>
								{/* Skill Header */}
								<div className='flex items-center justify-between mb-4'>
									<h3
										className={`font-bold text-white ${
											isMobile ? 'text-lg' : 'text-xl'
										}`}
									>
										{skill.name}
									</h3>
									<span
										className={`px-2 py-1 rounded-full text-xs font-medium ${
											isMobile ? 'text-xs' : 'text-sm'
										}`}
										style={{
											backgroundColor: `${accentColor}20`,
											color: accentColor,
										}}
									>
										{skill.level}%
									</span>
								</div>

								{/* Description */}
								<p
									className={`text-gray-400 mb-4 ${
										isMobile ? 'text-sm' : 'text-base'
									}`}
								>
									{skill.description}
								</p>

								{/* Progress Bar */}
								<div className='w-full bg-gray-800 rounded-full h-2'>
									<motion.div
										className='h-2 rounded-full'
										style={{ backgroundColor: accentColor }}
										initial={{ width: 0 }}
										animate={{ width: `${skill.level}%` }}
										transition={{ delay: 0.3 + index * 0.1, duration: 0.8 }}
									/>
								</div>
							</motion.div>
						)
					)}
				</motion.div>

				{/* Additional Info */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.8 }}
					className='mt-16 text-center'
				>
					<div
						className={`bg-gray-900 rounded-xl p-8 border border-gray-800 ${
							isMobile ? 'p-6' : 'p-8'
						}`}
					>
						<h3
							className={`font-bold text-white mb-4 ${
								isMobile ? 'text-xl' : 'text-2xl'
							}`}
							style={{ color: accentColor }}
						>
							Always Learning
						</h3>
						<p
							className={`text-gray-400 max-w-2xl mx-auto ${
								isMobile ? 'text-sm' : 'text-lg'
							}`}
						>
							Technology evolves rapidly, and so do I. I'm constantly exploring
							new tools, frameworks, and best practices to stay at the forefront
							of web development.
						</p>

						<div
							className={`flex justify-center mt-8 ${
								isMobile ? 'flex-wrap gap-2' : 'gap-4'
							}`}
						>
							{['Learning', 'Experimenting', 'Building'].map((item, index) => (
								<motion.div
									key={item}
									initial={{ opacity: 0, scale: 0.8 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ delay: 1 + index * 0.1 }}
									className={`flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-full ${
										isMobile ? 'text-sm px-3 py-1' : ''
									}`}
								>
									<div
										className='w-2 h-2 rounded-full'
										style={{ backgroundColor: accentColor }}
									/>
									<span className='text-gray-300'>{item}</span>
								</motion.div>
							))}
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	)
}

export default Skills
