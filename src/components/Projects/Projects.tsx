import { motion } from 'framer-motion'
import { Eye } from 'lucide-react'
import ProjectCarousel from './ProjectCarousel'
import { ProjectCard } from './ProjectCard'
import ScrollIndicator from '../ScrollIndicator/ScrollIndicator'

export interface Project {
	id: number
	title: string
	description: string
	image: string
	tech: string[]
	github: string
	demo: string
	featured: boolean
	category: string
	icon: React.ReactNode
	gradient: string
	stats: { users: string; rating: number; downloads: string }
}

export default function Projects() {
	const projects: Project[] = [
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
			icon: <Eye className='w-6 h-6' />,
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
			icon: <Eye className='w-6 h-6' />,
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
			icon: <Eye className='w-6 h-6' />,
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
			icon: <Eye className='w-6 h-6' />,
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
			icon: <Eye className='w-6 h-6' />,
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
			icon: <Eye className='w-6 h-6' />,
			gradient: 'from-teal-400 via-green-500 to-lime-500',
			stats: { users: '10K+', rating: 4.5, downloads: '30K+' },
		},
	]

	return (
		<>
			<div className='max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col justify-center min-h-screen relative'>
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className='text-center mb-4 sm:mb-6 md:mb-16'
				>
					<div className='flex items-center justify-center gap-2 sm:gap-3 mb-2 sm:mb-3 md:mb-6'>
						<div className='p-1.5 sm:p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl'>
							<Eye className='text-white w-4 h-4 sm:w-6 sm:h-6' />
						</div>
						<span className='font-mono text-blue-400 text-xs sm:text-sm uppercase tracking-wider font-semibold'>
							Портфолио проектов
						</span>
					</div>
					<h2 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent mb-3 sm:mb-6'>
						Избранные работы
					</h2>
					<p className='text-sm sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed px-4'>
						<span className='md:hidden'>Свайпайте для просмотра проектов</span>
						<span className='hidden md:inline'>
							Наведите курсор на проект, чтобы узнать подробности
						</span>
					</p>
				</motion.div>

				{/* Mobile Carousels */}
				<div className='sm:hidden mb-6 h-0 grow'>
					<ProjectCarousel projects={projects} />
				</div>

				{/* Desktop Grid */}
				<div className='hidden sm:block mb-6'>
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						viewport={{ once: true }}
					>
						<div className='grid grid-cols-2 lg:grid-cols-3 gap-8'>
							{projects.map((project, index) => (
								<ProjectCard key={project.id} project={project} index={index} />
							))}
						</div>
					</motion.div>
				</div>
			</div>

			{/* Scroll Indicator */}
			<ScrollIndicator nextSection='Навыки' />
		</>
	)
}
