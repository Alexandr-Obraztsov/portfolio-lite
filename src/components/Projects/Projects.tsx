import { Eye, Github, ExternalLink, Star, ArrowDown } from 'lucide-react'

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
}

const scrollToNext = () => {
	const mainElement = document.querySelector('main')
	if (mainElement) {
		const sections = mainElement.querySelectorAll('section')
		const nextSection = sections[3] // Skills section
		if (nextSection) {
			mainElement.scrollTo({
				top: nextSection.offsetTop,
				behavior: 'smooth',
			})
		}
	}
}

export default function Projects() {
	const projects: Project[] = [
		{
			id: 1,
			title: 'CryptoTracker Pro',
			description:
				'Профессиональный трекер криптовалют с real-time данными и интерактивными графиками',
			image:
				'https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=800&h=600&fit=crop&crop=center',
			tech: ['React', 'TypeScript', 'D3.js', 'WebSocket'],
			github: 'https://github.com',
			demo: 'https://demo.com',
			featured: true,
			category: 'Web App',
		},
		{
			id: 2,
			title: 'TaskMaster AI',
			description:
				'Умный планировщик задач с ИИ-помощником и командной работой',
			image:
				'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop&crop=center',
			tech: ['Next.js', 'OpenAI', 'Prisma', 'PostgreSQL'],
			github: 'https://github.com',
			demo: 'https://demo.com',
			featured: true,
			category: 'SaaS',
		},
		{
			id: 3,
			title: 'DesignSystem Studio',
			description: 'Конструктор дизайн-систем с live preview и генерацией кода',
			image:
				'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop&crop=center',
			tech: ['Vue.js', 'Nuxt', 'Canvas API', 'Figma API'],
			github: 'https://github.com',
			demo: 'https://demo.com',
			featured: false,
			category: 'Design Tool',
		},
		{
			id: 4,
			title: 'E-Commerce Engine',
			description: 'Полнофункциональная платформа электронной коммерции',
			image:
				'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center',
			tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
			github: 'https://github.com',
			demo: 'https://demo.com',
			featured: true,
			category: 'E-Commerce',
		},
	]

	return (
		<div className='w-full min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col justify-center relative'>
			<div className='max-w-7xl mx-auto'>
				{/* Header */}
				<div className='text-center mb-16 opacity-0 animate-[fadeInUp_0.6s_ease-out_0.2s_forwards]'>
					<div className='flex items-center justify-center gap-2 mb-4'>
						<Eye className='text-accent' size={24} />
						<span className='font-mono text-accent text-sm uppercase tracking-wider'>
							Портфолио проектов
						</span>
					</div>
					<h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
						Избранные работы
					</h2>
					<p className='text-lg text-gray-400 max-w-2xl mx-auto'>
						Наведите курсор на проект, чтобы узнать подробности
					</p>
				</div>

				{/* Projects Grid */}
				<div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-16'>
					{projects.map((project, index) => (
						<div
							key={project.id}
							className='group relative overflow-hidden rounded-2xl cursor-pointer bg-white/5 border border-white/10 hover:border-accent/30 transition-all duration-500 opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]'
							style={{
								animationDelay: `${0.4 + index * 0.2}s`,
							}}
						>
							{/* Project Image */}
							<div className='relative aspect-[4/3] overflow-hidden'>
								<img
									src={project.image}
									alt={project.title}
									className='w-full h-full object-cover transition-all duration-700 group-hover:scale-110'
									loading='lazy'
								/>

								{/* Featured Badge */}
								{project.featured && (
									<div className='absolute top-4 right-4 bg-accent/90 backdrop-blur-sm rounded-full p-2'>
										<Star className='w-4 h-4 text-slate-900 fill-slate-900' />
									</div>
								)}

								{/* Overlay */}
								<div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500' />

								{/* Action Buttons */}
								<div className='absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500'>
									<a
										href={project.github}
										target='_blank'
										rel='noopener noreferrer'
										className='p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300 hover:scale-110'
									>
										<Github size={20} />
									</a>
									<a
										href={project.demo}
										target='_blank'
										rel='noopener noreferrer'
										className='p-3 bg-accent/80 backdrop-blur-sm rounded-full text-slate-900 hover:bg-accent transition-all duration-300 hover:scale-110'
									>
										<ExternalLink size={20} />
									</a>
								</div>
							</div>

							{/* Project Info */}
							<div className='p-6'>
								<div className='flex items-start justify-between mb-3'>
									<h3 className='text-xl font-bold text-white group-hover:text-accent transition-colors'>
										{project.title}
									</h3>
									<span className='px-2 py-1 bg-accent/20 text-accent text-xs font-medium rounded-full'>
										{project.category}
									</span>
								</div>

								<p className='text-gray-400 text-sm mb-4 leading-relaxed'>
									{project.description}
								</p>

								{/* Tech Stack */}
								<div className='flex flex-wrap gap-2'>
									{project.tech.map(tech => (
										<span
											key={tech}
											className='px-3 py-1 bg-white/10 text-gray-300 text-xs rounded-full border border-white/20'
										>
											{tech}
										</span>
									))}
								</div>
							</div>
						</div>
					))}
				</div>

				{/* CTA */}
				<div className='text-center opacity-0 animate-[fadeInUp_0.8s_ease-out_1.2s_forwards]'>
					<p className='text-gray-400 mb-6'>
						Хотите увидеть больше моих работ?
					</p>
					<a
						href='https://github.com'
						target='_blank'
						rel='noopener noreferrer'
						className='inline-flex items-center gap-2 px-8 py-3 bg-accent text-slate-900 rounded-lg font-semibold transition-all duration-300 hover:bg-accent/90 hover:scale-105'
					>
						<Github size={20} />
						Смотреть на GitHub
					</a>
				</div>
			</div>

			{/* Scroll Indicator */}
			<div
				className='absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer opacity-0 animate-[fadeInUp_0.8s_ease-out_1.4s_forwards]'
				onClick={scrollToNext}
			>
				<div className='flex flex-col items-center text-gray-400 hover:text-accent transition-colors group'>
					<span className='text-xs font-mono mb-2'>Навыки</span>
					<ArrowDown
						size={20}
						className='animate-bounce group-hover:translate-y-1 transition-transform'
					/>
				</div>
			</div>
		</div>
	)
}
