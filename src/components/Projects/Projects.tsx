import { useState } from 'react'
import { motion } from 'framer-motion'

interface ProjectsProps {
	accentColor: string
	isMobile: boolean
}

const Projects = ({ accentColor, isMobile }: ProjectsProps) => {
	const projects = [
		{
			id: 1,
			title: 'E-Commerce Platform',
			description:
				'Modern online store with React, TypeScript, and Stripe integration',
			image:
				'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
			technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
			category: 'Web App',
			github: '#',
			demo: '#',
		},
		{
			id: 2,
			title: 'Task Management App',
			description:
				'Collaborative project management tool with real-time updates',
			image:
				'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
			technologies: ['Next.js', 'Socket.io', 'MongoDB', 'Redux'],
			category: 'Web App',
			github: '#',
			demo: '#',
		},
		{
			id: 3,
			title: 'Weather Dashboard',
			description: 'Beautiful weather app with location-based forecasts',
			image:
				'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop',
			technologies: ['Vue.js', 'OpenWeather API', 'Chart.js'],
			category: 'Web App',
			github: '#',
			demo: '#',
		},
		{
			id: 4,
			title: 'Portfolio Website',
			description:
				'Responsive portfolio with smooth animations and modern design',
			image:
				'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
			technologies: ['React', 'Framer Motion', 'Tailwind CSS'],
			category: 'Website',
			github: '#',
			demo: '#',
		},
		{
			id: 5,
			title: 'Crypto Tracker',
			description: 'Real-time cryptocurrency price tracking with charts',
			image:
				'https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=800&h=600&fit=crop',
			technologies: ['React', 'CoinGecko API', 'Chart.js', 'Redux'],
			category: 'Web App',
			github: '#',
			demo: '#',
		},
		{
			id: 6,
			title: 'Blog Platform',
			description: 'Full-stack blog with admin panel and content management',
			image:
				'https://images.unsplash.com/photo-1486312338219-ce68e2c6b696?w=800&h=600&fit=crop',
			technologies: ['React', 'Node.js', 'PostgreSQL', 'Express'],
			category: 'Full Stack',
			github: '#',
			demo: '#',
		},
	]

	const categories = ['All', 'Web App', 'Website', 'Full Stack']
	const [activeCategory, setActiveCategory] = useState('All')

	const filteredProjects =
		activeCategory === 'All'
			? projects
			: projects.filter(project => project.category === activeCategory)

	return (
		<section
			className={`h-screen overflow-y-auto pt-20 pb-8 ${
				isMobile ? 'px-4' : 'px-8'
			}`}
		>
			<div className='max-w-7xl mx-auto'>
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
						My Projects
					</h2>
					<p
						className={`text-gray-400 max-w-2xl mx-auto ${
							isMobile ? 'text-sm' : 'text-lg'
						}`}
					>
						Here are some of my recent projects that showcase my skills and
						experience
					</p>
				</motion.div>

				{/* Category Filter */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2 }}
					className={`flex justify-center mb-12 ${
						isMobile ? 'flex-wrap gap-2' : 'gap-4'
					}`}
				>
					{categories.map(category => (
						<motion.button
							key={category}
							onClick={() => setActiveCategory(category)}
							className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
								activeCategory === category
									? 'text-black'
									: 'text-gray-400 hover:text-white border border-gray-600 hover:border-gray-400'
							} ${isMobile ? 'text-sm px-4 py-2' : ''}`}
							style={{
								backgroundColor:
									activeCategory === category ? accentColor : 'transparent',
							}}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							{category}
						</motion.button>
					))}
				</motion.div>

				{/* Projects Grid */}
				<motion.div
					className={`grid gap-8 ${
						isMobile
							? 'grid-cols-1'
							: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
					}`}
					layout
				>
					{filteredProjects.map((project, index) => (
						<motion.div
							key={project.id}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.1 }}
							className='bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300 group'
							whileHover={{ y: -5 }}
						>
							{/* Project Image */}
							<div className='relative overflow-hidden'>
								<img
									src={project.image}
									alt={project.title}
									className='w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110'
								/>
								<div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4'>
									<motion.a
										href={project.github}
										className='p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors'
										whileHover={{ scale: 1.1 }}
										whileTap={{ scale: 0.9 }}
									>
										<svg
											className='w-5 h-5'
											fill='currentColor'
											viewBox='0 0 24 24'
										>
											<path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
										</svg>
									</motion.a>
									<motion.a
										href={project.demo}
										className='p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors'
										whileHover={{ scale: 1.1 }}
										whileTap={{ scale: 0.9 }}
									>
										<svg
											className='w-5 h-5'
											fill='none'
											stroke='currentColor'
											viewBox='0 0 24 24'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
											/>
										</svg>
									</motion.a>
								</div>
							</div>

							{/* Project Info */}
							<div className='p-6'>
								<div className='flex items-center justify-between mb-2'>
									<h3
										className={`font-bold text-white ${
											isMobile ? 'text-lg' : 'text-xl'
										}`}
									>
										{project.title}
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
										{project.category}
									</span>
								</div>

								<p
									className={`text-gray-400 mb-4 ${
										isMobile ? 'text-sm' : 'text-base'
									}`}
								>
									{project.description}
								</p>

								<div className='flex flex-wrap gap-2'>
									{project.technologies.map(tech => (
										<span
											key={tech}
											className={`px-3 py-1 bg-gray-800 text-gray-300 rounded-full ${
												isMobile ? 'text-xs' : 'text-sm'
											}`}
										>
											{tech}
										</span>
									))}
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>

				{/* Call to Action */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.5 }}
					className='text-center mt-16'
				>
					<p
						className={`text-gray-400 mb-6 ${isMobile ? 'text-sm' : 'text-lg'}`}
					>
						Want to see more of my work?
					</p>
					<motion.a
						href='https://github.com'
						target='_blank'
						rel='noopener noreferrer'
						className={`inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
							isMobile ? 'px-6 py-2 text-sm' : ''
						}`}
						style={{
							backgroundColor: accentColor,
							color: 'black',
						}}
						whileHover={{ scale: 1.05, y: -2 }}
						whileTap={{ scale: 0.95 }}
					>
						<svg
							className={`${isMobile ? 'w-4 h-4' : 'w-5 h-5'}`}
							fill='currentColor'
							viewBox='0 0 24 24'
						>
							<path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
						</svg>
						View on GitHub
					</motion.a>
				</motion.div>
			</div>
		</section>
	)
}

export default Projects
