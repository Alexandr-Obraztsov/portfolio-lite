import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import type { Project } from '../../const/projects'

type Props = {
	project: Project
}

export const ProjectCard = ({ project }: Props) => {
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
			<div className='p-3! md:p-6! flex flex-col grow'>
				<h3 className='text-xl font-bold text-black mb-2!'>{project.title}</h3>
				<p className='text-black/70 font-light mb-4! leading-relaxed'>
					{project.description}
				</p>

				{/* Технологии */}
				<div className='flex flex-wrap gap-2! mb-4! '>
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
