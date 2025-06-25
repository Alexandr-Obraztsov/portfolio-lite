import { motion } from 'framer-motion'
import {
	ExternalLink,
	Github,
	Eye,
	Star,
	Code,
	Zap,
	Palette,
	Database,
	Globe,
	Smartphone,
} from 'lucide-react'

const projects = [
	{
		id: 1,
		title: 'CryptoTracker Pro',
		description:
			'Профессиональный трекер криптовалют с real-time данными, интерактивными графиками и портфолио-менеджером',
		image:
			'https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=800&h=600&fit=crop&crop=center',
		tech: ['React', 'TypeScript', 'D3.js', 'WebSocket', 'TradingView'],
		github: 'https://github.com',
		demo: 'https://demo.com',
		featured: true,
		category: 'Web App',
		icon: <Zap className='w-6 h-6' />,
		gradient: 'from-yellow-400 via-orange-500 to-red-500',
		stats: { users: '15K+', rating: 4.9, downloads: '50K+' },
	},
	{
		id: 2,
		title: 'TaskMaster AI',
		description:
			'Умный планировщик задач с ИИ-помощником, автоматическим планированием и командной работой',
		image:
			'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop&crop=center',
		tech: ['Next.js', 'OpenAI', 'Prisma', 'PostgreSQL', 'Redis'],
		github: 'https://github.com',
		demo: 'https://demo.com',
		featured: true,
		category: 'SaaS',
		icon: <Code className='w-6 h-6' />,
		gradient: 'from-blue-400 via-purple-500 to-pink-500',
		stats: { users: '8K+', rating: 4.8, downloads: '25K+' },
	},
	{
		id: 3,
		title: 'DesignSystem Studio',
		description:
			'Конструктор дизайн-систем с live preview, генерацией кода и экспортом в Figma',
		image:
			'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop&crop=center',
		tech: ['Vue.js', 'Nuxt', 'Canvas API', 'Figma API', 'Storybook'],
		github: 'https://github.com',
		demo: 'https://demo.com',
		featured: false,
		category: 'Design Tool',
		icon: <Palette className='w-6 h-6' />,
		gradient: 'from-green-400 via-cyan-500 to-blue-500',
		stats: { users: '12K+', rating: 4.7, downloads: '35K+' },
	},
	{
		id: 4,
		title: 'DataViz Dashboard',
		description:
			'Интерактивная платформа для визуализации больших данных с машинным обучением',
		image:
			'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center',
		tech: ['React', 'Python', 'FastAPI', 'TensorFlow', 'Apache Kafka'],
		github: 'https://github.com',
		demo: 'https://demo.com',
		featured: false,
		category: 'Analytics',
		icon: <Database className='w-6 h-6' />,
		gradient: 'from-purple-400 via-pink-500 to-red-500',
		stats: { users: '6K+', rating: 4.6, downloads: '18K+' },
	},
	{
		id: 5,
		title: 'E-Commerce Engine',
		description:
			'Полнофункциональная платформа электронной коммерции с микросервисной архитектурой',
		image:
			'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center',
		tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Docker'],
		github: 'https://github.com',
		demo: 'https://demo.com',
		featured: true,
		category: 'E-Commerce',
		icon: <Globe className='w-6 h-6' />,
		gradient: 'from-indigo-400 via-purple-500 to-pink-500',
		stats: { users: '20K+', rating: 4.9, downloads: '75K+' },
	},
	{
		id: 6,
		title: 'MobileFirst PWA',
		description:
			'Прогрессивное веб-приложение с offline-режимом и push-уведомлениями',
		image:
			'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&crop=center',
		tech: ['Svelte', 'Service Workers', 'IndexedDB', 'WebRTC'],
		github: 'https://github.com',
		demo: 'https://demo.com',
		featured: false,
		category: 'PWA',
		icon: <Smartphone className='w-6 h-6' />,
		gradient: 'from-teal-400 via-green-500 to-lime-500',
		stats: { users: '10K+', rating: 4.5, downloads: '30K+' },
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
			initial={{ opacity: 0, y: 60 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{
				duration: 0.8,
				delay: index * 0.1,
				type: 'spring',
				stiffness: 100,
			}}
			viewport={{ once: true }}
			className='group relative overflow-hidden rounded-2xl cursor-pointer'
		>
			{/* Main Image */}
			<div className='relative aspect-[4/3] overflow-hidden rounded-2xl'>
				<img
					src={project.image}
					alt={project.title}
					className='w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110'
				/>

				{/* Gradient Overlay */}
				<div
					className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-all duration-500 mix-blend-overlay`}
				/>

				{/* Dark Overlay for Text Readability */}
				<div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500' />

				{/* Featured Badge */}
				{project.featured && (
					<motion.div
						initial={{ scale: 0, rotate: -180 }}
						animate={{ scale: 1, rotate: 0 }}
						transition={{ delay: index * 0.1 + 0.3 }}
						className='absolute top-4 right-4 bg-yellow-400/90 backdrop-blur-sm rounded-full p-2'
					>
						<Star className='w-4 h-4 text-black fill-black' />
					</motion.div>
				)}

				{/* Hover Content */}
				<div className='absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0'>
					{/* Title */}
					<h3 className='text-2xl font-bold text-white mb-3'>
						{project.title}
					</h3>

					{/* Tech Stack */}
					<div className='flex flex-wrap gap-2 mb-4'>
						{project.tech.map((tech, techIndex) => (
							<motion.span
								key={tech}
								initial={{ opacity: 0, scale: 0.8 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ delay: 0.1 + techIndex * 0.05 }}
								className='px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full border border-white/30'
							>
								{tech}
							</motion.span>
						))}
					</div>

					{/* Action Buttons */}
					<div className='flex gap-3'>
						<motion.a
							href={project.github}
							target='_blank'
							rel='noopener noreferrer'
							whileHover={{ scale: 1.05, y: -2 }}
							whileTap={{ scale: 0.95 }}
							className='flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-xl hover:bg-white/30 border border-white/30 hover:border-white/50 transition-all duration-300'
						>
							<Github className='w-4 h-4' />
							Код
						</motion.a>
						<motion.a
							href={project.demo}
							target='_blank'
							rel='noopener noreferrer'
							whileHover={{ scale: 1.05, y: -2 }}
							whileTap={{ scale: 0.95 }}
							className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.gradient} text-white rounded-xl hover:shadow-lg transition-all duration-300 font-medium`}
						>
							<ExternalLink className='w-4 h-4' />
							Демо
						</motion.a>
					</div>
				</div>

				{/* Subtle Border Glow on Hover */}
				<div
					className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-500 -z-10 rounded-2xl`}
				/>
			</div>
		</motion.div>
	)
}

export default function Projects() {
	const featuredProjects = projects.filter(p => p.featured)
	const otherProjects = projects.filter(p => !p.featured)

	return (
		<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
			{/* Header */}
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				viewport={{ once: true }}
				className='text-center mb-16'
			>
				<div className='flex items-center justify-center gap-3 mb-6'>
					<div className='p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl'>
						<Eye className='text-white w-6 h-6' />
					</div>
					<span className='font-mono text-blue-400 text-sm uppercase tracking-wider font-semibold'>
						Портфолио проектов
					</span>
				</div>
				<h2 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent mb-6'>
					Избранные работы
				</h2>
				<p className='text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed'>
					Наведите курсор на проект, чтобы узнать подробности
				</p>
			</motion.div>

			{/* Featured Projects */}
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.6, delay: 0.2 }}
				viewport={{ once: true }}
				className='mb-16'
			>
				<h3 className='text-2xl font-bold text-white mb-8 flex items-center gap-3'>
					<Star className='w-6 h-6 text-yellow-400 fill-yellow-400' />
					Рекомендуемые проекты
				</h3>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{featuredProjects.map((project, index) => (
						<ProjectCard key={project.id} project={project} index={index} />
					))}
				</div>
			</motion.div>

			{/* Other Projects */}
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.6, delay: 0.4 }}
				viewport={{ once: true }}
			>
				<h3 className='text-2xl font-bold text-white mb-8 flex items-center gap-3'>
					<Code className='w-6 h-6 text-blue-400' />
					Другие проекты
				</h3>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{otherProjects.map((project, index) => (
						<ProjectCard
							key={project.id}
							project={project}
							index={index + featuredProjects.length}
						/>
					))}
				</div>
			</motion.div>
		</div>
	)
}
