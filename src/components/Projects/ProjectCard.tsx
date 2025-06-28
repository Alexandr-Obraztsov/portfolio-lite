import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import type { Project } from '../../const/projects'
import { useEffect, useState } from 'react'

type Props = {
	project: Project
}

export const ProjectCard = ({ project }: Props) => {
	const [isMobile, setIsMobile] = useState(false)

	// Check if device is mobile on mount and on resize
	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth < 768)
		}

		// Initial check
		checkMobile()

		// Add resize listener
		window.addEventListener('resize', checkMobile)

		// Cleanup
		return () => {
			window.removeEventListener('resize', checkMobile)
		}
	}, [])

	// Simplified mobile card
	if (isMobile) {
		return (
			<div className='h-full bg-black/5 backdrop-blur-sm rounded-2xl overflow-hidden flex flex-col'>
				{/* Изображение проекта */}
				<img
					src={project.image}
					alt={project.title}
					loading='lazy'
					className='w-full h-40 object-cover object-center'
				/>

				{/* Минимальный контент */}
				<div className='p-4 flex flex-col'>
					<h3 className='text-lg font-bold text-black'>{project.title}</h3>

					{/* Ссылки без текста */}
					<div className='flex gap-3 mt-2'>
						{project.github && (
							<a
								href={project.github}
								className='text-black'
								aria-label='GitHub repository'
							>
								<Github size={16} />
							</a>
						)}
						{project.live && (
							<a
								href={project.live}
								className='text-black'
								aria-label='Live demo'
							>
								<ExternalLink size={16} />
							</a>
						)}
					</div>
				</div>
			</div>
		)
	}

	// Desktop version
	return (
		<div className='h-full! bg-black/5 backdrop-blur-sm rounded-2xl overflow-hidden group  transition-all duration-300 flex flex-col'>
			{/* Изображение проекта */}
			<img
				src={project.image}
				alt={project.title}
				className='w-full object-cover object-center'
			/>

			{/* Контент */}
			<div className='p-6! flex flex-col grow'>
				<h3 className='text-xl font-bold text-black mb-2!'>{project.title}</h3>
				<p className='text-black/70 font-light mb-4! leading-relaxed'>
					{project.description}
				</p>

				{/* Технологии */}
				<div className='flex flex-wrap gap-2! mb-4!'>
					{project.tech.map((tech, techIndex) => (
						<span
							key={techIndex}
							className='px-3! py-1! bg-black/10 text-black text-xs font-medium rounded-full'
						>
							{tech}
						</span>
					))}
				</div>

				{/* Ссылки */}
				<div className='flex gap-4! mt-auto!'>
					{project.github && (
						<motion.a
							href={project.github}
							className='flex items-center gap-2! text-black hover:text-accent transition-colors'
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							<Github size={18} />
							<span className='text-sm font-medium'>Code</span>
						</motion.a>
					)}
					{project.live && (
						<motion.a
							href={project.live}
							className='flex items-center gap-2! text-black hover:text-accent transition-colors'
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							<ExternalLink size={18} />
							<span className='text-sm font-medium'>Live</span>
						</motion.a>
					)}
				</div>
			</div>
		</div>
	)
}
