import { motion } from 'framer-motion'

interface AboutProps {
	accentColor: string
	isMobile: boolean
}

const About = ({ accentColor, isMobile }: AboutProps) => {
	const experiences = [
		{
			period: '2023 - Present',
			role: 'Senior Frontend Developer',
			company: 'Tech Solutions Inc.',
			description:
				'Leading frontend development for enterprise applications using React, TypeScript, and modern web technologies.',
		},
		{
			period: '2021 - 2023',
			role: 'Frontend Developer',
			company: 'Digital Agency',
			description:
				'Developed responsive web applications and collaborated with design teams to create engaging user experiences.',
		},
		{
			period: '2020 - 2021',
			role: 'Junior Developer',
			company: 'StartUp Co.',
			description:
				'Started my journey in web development, working on various projects and learning modern frameworks.',
		},
	]

	const skills = [
		{ name: 'React/Next.js', level: 95 },
		{ name: 'TypeScript', level: 90 },
		{ name: 'JavaScript', level: 95 },
		{ name: 'CSS/SCSS', level: 85 },
		{ name: 'Node.js', level: 80 },
		{ name: 'Python', level: 75 },
	]

	const interests = [
		{
			icon: '🎮',
			title: 'Game Development',
			description: 'Creating interactive experiences',
		},
		{
			icon: '🎵',
			title: 'Music Production',
			description: 'Electronic music and sound design',
		},
		{
			icon: '📚',
			title: 'Continuous Learning',
			description: 'Always exploring new technologies',
		},
		{
			icon: '🚀',
			title: 'Innovation',
			description: 'Building the future of web',
		},
	]

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
					className='text-center mb-16'
				>
					<h2
						className={`font-bold text-white mb-4 ${
							isMobile ? 'text-3xl' : 'text-4xl lg:text-5xl'
						}`}
					>
						About Me
					</h2>
					<p
						className={`text-gray-400 max-w-3xl mx-auto leading-relaxed ${
							isMobile ? 'text-sm' : 'text-lg'
						}`}
					>
						I'm a passionate frontend developer with{' '}
						{new Date().getFullYear() - 2020}+ years of experience creating
						beautiful, functional, and user-centered digital experiences.
					</p>
				</motion.div>

				{/* Main Content */}
				<div
					className={`grid gap-12 ${
						isMobile ? 'grid-cols-1' : 'lg:grid-cols-2'
					}`}
				>
					{/* Experience */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.2 }}
					>
						<h3
							className={`font-bold text-white mb-8 ${
								isMobile ? 'text-xl' : 'text-2xl'
							}`}
							style={{ color: accentColor }}
						>
							Experience
						</h3>
						<div className='space-y-6'>
							{experiences.map((exp, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.3 + index * 0.1 }}
									className='border-l-2 border-gray-800 pl-6 relative'
								>
									<div
										className='absolute w-3 h-3 rounded-full -left-2 top-2'
										style={{ backgroundColor: accentColor }}
									/>
									<div
										className={`text-sm text-gray-500 mb-1 ${
											isMobile ? 'text-xs' : ''
										}`}
									>
										{exp.period}
									</div>
									<h4
										className={`font-semibold text-white mb-1 ${
											isMobile ? 'text-base' : 'text-lg'
										}`}
									>
										{exp.role}
									</h4>
									<div
										className={`font-medium mb-2 ${
											isMobile ? 'text-sm' : 'text-base'
										}`}
										style={{ color: accentColor }}
									>
										{exp.company}
									</div>
									<p
										className={`text-gray-400 ${
											isMobile ? 'text-sm' : 'text-base'
										}`}
									>
										{exp.description}
									</p>
								</motion.div>
							))}
						</div>
					</motion.div>

					{/* Skills */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.4 }}
					>
						<h3
							className={`font-bold text-white mb-8 ${
								isMobile ? 'text-xl' : 'text-2xl'
							}`}
							style={{ color: accentColor }}
						>
							Skills
						</h3>
						<div className='space-y-6'>
							{skills.map((skill, index) => (
								<motion.div
									key={skill.name}
									initial={{ opacity: 0, x: 20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: 0.5 + index * 0.1 }}
								>
									<div className='flex justify-between mb-2'>
										<span
											className={`font-medium text-white ${
												isMobile ? 'text-sm' : 'text-base'
											}`}
										>
											{skill.name}
										</span>
										<span
											className={`text-gray-400 ${
												isMobile ? 'text-sm' : 'text-base'
											}`}
										>
											{skill.level}%
										</span>
									</div>
									<div className='w-full bg-gray-800 rounded-full h-2'>
										<motion.div
											className='h-2 rounded-full'
											style={{ backgroundColor: accentColor }}
											initial={{ width: 0 }}
											animate={{ width: `${skill.level}%` }}
											transition={{ delay: 0.7 + index * 0.1, duration: 0.8 }}
										/>
									</div>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>

				{/* Interests */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.8 }}
					className='mt-16'
				>
					<h3
						className={`font-bold text-white mb-8 text-center ${
							isMobile ? 'text-xl' : 'text-2xl'
						}`}
						style={{ color: accentColor }}
					>
						Interests & Hobbies
					</h3>
					<div
						className={`grid gap-6 ${
							isMobile
								? 'grid-cols-1 sm:grid-cols-2'
								: 'grid-cols-2 lg:grid-cols-4'
						}`}
					>
						{interests.map((interest, index) => (
							<motion.div
								key={interest.title}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.9 + index * 0.1 }}
								className='bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300 text-center group'
								whileHover={{ y: -5 }}
							>
								<div
									className={`text-4xl mb-4 ${
										isMobile ? 'text-3xl' : 'text-4xl'
									}`}
								>
									{interest.icon}
								</div>
								<h4
									className={`font-semibold text-white mb-2 ${
										isMobile ? 'text-base' : 'text-lg'
									}`}
								>
									{interest.title}
								</h4>
								<p
									className={`text-gray-400 ${
										isMobile ? 'text-sm' : 'text-base'
									}`}
								>
									{interest.description}
								</p>
							</motion.div>
						))}
					</div>
				</motion.div>

				{/* Quote */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1.2 }}
					className='mt-16 text-center'
				>
					<blockquote
						className={`font-medium text-gray-300 mb-4 ${
							isMobile ? 'text-base' : 'text-xl'
						}`}
					>
						"Code is like humor. When you have to explain it, it's bad."
					</blockquote>
					<cite
						className={`text-gray-500 ${isMobile ? 'text-sm' : 'text-base'}`}
						style={{ color: accentColor }}
					>
						— Cory House
					</cite>
				</motion.div>
			</div>
		</section>
	)
}

export default About
