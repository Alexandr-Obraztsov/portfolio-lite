import { motion } from 'framer-motion'
import { Star, Github, ExternalLink } from 'lucide-react'
import type { Project } from './Projects'

export type Props = {
	project: Project
	index: number
}

export function ProjectCard({ project, index }: Props) {
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
			className='group relative overflow-hidden rounded-2xl cursor-pointer min-w-full md:min-w-0 h-full'
		>
			{/* Main Image */}
			<div className='relative md:aspect-[4/3] overflow-hidden rounded-2xl h-full'>
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

				{/* Mobile Info - Always Visible */}
				<div className='absolute inset-0 flex flex-col justify-end p-4 md:p-6 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 md:transform md:translate-y-4 md:group-hover:translate-y-0'>
					{/* Title */}
					<h3 className='text-xl md:text-2xl font-bold text-white mb-2 md:mb-3'>
						{project.title}
					</h3>

					{/* Description - Mobile Only */}
					<p className='text-sm text-gray-200 mb-3 md:hidden line-clamp-2'>
						{project.description}
					</p>

					{/* Tech Stack */}
					<div className='flex flex-wrap gap-1 md:gap-2 mb-3 md:mb-4'>
						{project.tech.slice(0, 3).map((tech, techIndex) => (
							<motion.span
								key={tech}
								initial={{ opacity: 0, scale: 0.8 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ delay: 0.1 + techIndex * 0.05 }}
								className='px-2 py-1 md:px-3 bg-white/20 backdrop-blur-sm text-white text-xs md:text-sm rounded-full border border-white/30'
							>
								{tech}
							</motion.span>
						))}
						{project.tech.length > 3 && (
							<span className='px-2 py-1 bg-white/10 backdrop-blur-sm text-white text-xs rounded-full border border-white/20'>
								+{project.tech.length - 3}
							</span>
						)}
					</div>

					{/* Action Buttons */}
					<div className='flex gap-2 md:gap-3'>
						<motion.a
							href={project.github}
							target='_blank'
							rel='noopener noreferrer'
							whileHover={{ scale: 1.05, y: -2 }}
							whileTap={{ scale: 0.95 }}
							className='flex items-center gap-1 md:gap-2 px-3 py-2 md:px-4 bg-white/20 backdrop-blur-sm text-white rounded-xl hover:bg-white/30 border border-white/30 hover:border-white/50 transition-all duration-300 text-sm'
						>
							<Github className='w-3 h-3 md:w-4 md:h-4' />
							Код
						</motion.a>
						<motion.a
							href={project.demo}
							target='_blank'
							rel='noopener noreferrer'
							whileHover={{ scale: 1.05, y: -2 }}
							whileTap={{ scale: 0.95 }}
							className={`flex items-center gap-1 md:gap-2 px-3 py-2 md:px-4 bg-gradient-to-r ${project.gradient} text-white rounded-xl hover:shadow-lg transition-all duration-300 font-medium text-sm`}
						>
							<ExternalLink className='w-3 h-3 md:w-4 md:h-4' />
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
