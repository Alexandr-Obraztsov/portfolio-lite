import { motion } from 'framer-motion'
import { ExternalLink, Github, Eye } from 'lucide-react'

const projects = [
	{
		id: 1,
		title: 'E-Commerce Dashboard',
		description:
			'Современный дашборд для управления интернет-магазином с аналитикой в реальном времени, управлением товарами и обработкой заказов.',
		image:
			'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop&crop=center',
		tech: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
		github: 'https://github.com',
		demo: 'https://demo.com',
		featured: true,
	},
	{
		id: 2,
		title: 'Task Management App',
		description:
			'Приложение для управления задачами с Kanban-доской, функцией перетаскивания и совместной работой в команде.',
		image:
			'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop&crop=center',
		tech: ['Next.js', 'Redux', 'Prisma', 'PostgreSQL'],
		github: 'https://github.com',
		demo: 'https://demo.com',
		featured: true,
	},
	{
		id: 3,
		title: 'Weather Dashboard',
		description:
			'Интерактивная погодная панель с прогнозами, картами и красивыми анимациями.',
		image:
			'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop&crop=center',
		tech: ['Vue.js', 'D3.js', 'OpenWeather API'],
		github: 'https://github.com',
		demo: 'https://demo.com',
		featured: false,
	},
	{
		id: 4,
		title: 'Portfolio Website',
		description:
			'Минималистичное портфолио с 3D-анимациями и современным дизайном.',
		image:
			'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop&crop=center',
		tech: ['React', 'Three.js', 'Framer Motion'],
		github: 'https://github.com',
		demo: 'https://demo.com',
		featured: false,
	},
]

function ProjectCard({
	project,
	index,
}: {
	project: (typeof projects)[0]
	index: number
}) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, delay: index * 0.1 }}
			viewport={{ once: true }}
			className='group relative bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-accent/50 project-card cursor-pointer'
		>
			{/* Background Image */}
			<div className='aspect-[16/10] overflow-hidden relative'>
				<img
					src={project.image}
					alt={project.title}
					className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700'
				/>

				{/* Overlay that appears on hover */}
				<div className='absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/80 to-dark/30 opacity-0 group-hover:opacity-100 transition-all duration-500 project-card-overlay'>
					{/* Content Container */}
					<div className='absolute inset-0 flex flex-col items-center justify-center p-6 text-center transform translate-y-4 group-hover:translate-y-0 transition-all duration-500'>
						{/* Title */}
						<motion.h3 className='text-2xl font-bold text-white mb-3 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100'>
							{project.title}
						</motion.h3>

						{/* Featured Badge */}
						{project.featured && (
							<motion.span className='px-3 py-1 bg-accent/90 text-dark text-sm font-medium rounded-full mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-150'>
								⭐ Избранное
							</motion.span>
						)}

						{/* Description */}
						<motion.p className='text-gray-200 mb-6 leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 max-w-sm'>
							{project.description}
						</motion.p>

						{/* Technologies */}
						<motion.div className='flex flex-wrap gap-2 justify-center mb-6 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-250'>
							{project.tech.map((tech, techIndex) => (
								<motion.span
									key={tech}
									initial={{ scale: 0 }}
									animate={{ scale: 1 }}
									transition={{ delay: techIndex * 0.1 }}
									className='px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full border border-white/30'
								>
									{tech}
								</motion.span>
							))}
						</motion.div>

						{/* Action Buttons */}
						<motion.div className='flex gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300'>
							<motion.a
								href={project.github}
								target='_blank'
								rel='noopener noreferrer'
								whileHover={{ scale: 1.1, y: -2 }}
								whileTap={{ scale: 0.95 }}
								className='flex items-center gap-2 px-4 py-2 bg-accent text-dark rounded-lg hover:bg-accent/90 transition-all duration-300 font-medium'
							>
								<Github size={18} />
								Код
							</motion.a>
							<motion.a
								href={project.demo}
								target='_blank'
								rel='noopener noreferrer'
								whileHover={{ scale: 1.1, y: -2 }}
								whileTap={{ scale: 0.95 }}
								className='flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white border border-white/30 rounded-lg hover:bg-white/30 transition-all duration-300 font-medium'
							>
								<ExternalLink size={18} />
								Демо
							</motion.a>
						</motion.div>
					</div>
				</div>

				{/* Subtle corner indicator */}
				<div className='absolute top-3 right-3 w-2 h-2 bg-accent rounded-full opacity-60 group-hover:opacity-0 transition-opacity duration-300'></div>
			</div>
		</motion.div>
	)
}

export default function Projects() {
	return (
		<div className='max-w-7xl px-4 sm:px-6 lg:px-8 overflow-y-auto justify-center items-center '>
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				viewport={{ once: true }}
				className='text-center mb-8 flex-shrink-0'
			>
				<div className='flex items-center justify-center gap-2 mb-4'>
					<Eye className='text-accent' size={24} />
					<span className='font-mono text-accent text-sm uppercase tracking-wider'>
						Мои работы
					</span>
				</div>
				<h2 className='text-3xl md:text-4xl font-bold text-text-primary mb-4'>
					Избранные проекты
				</h2>
				<p className='text-base text-text-secondary max-w-2xl mx-auto'>
					Наведите курсор на проект, чтобы узнать подробности.
					<br />
					Коллекция работ, демонстрирующих мои навыки в области
					фронтенд-разработки
				</p>
			</motion.div>

			<div className='flex-1 overflow-hidden'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
					{projects.map((project, index) => (
						<ProjectCard key={project.id} project={project} index={index} />
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					viewport={{ once: true }}
					className='text-center pb-4'
				>
					<motion.a
						href='https://github.com'
						target='_blank'
						rel='noopener noreferrer'
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className='inline-flex items-center gap-2 px-6 py-3 border-2 border-accent text-accent hover:bg-accent hover:text-dark transition-all duration-300 rounded-lg font-semibold'
					>
						<Github size={20} />
						Посмотреть все проекты на GitHub
					</motion.a>
				</motion.div>
			</div>
		</div>
	)
}
