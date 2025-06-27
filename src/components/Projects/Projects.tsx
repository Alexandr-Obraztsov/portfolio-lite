import { motion } from 'framer-motion'
import SwipeContainer from '../SwipeContainer/SwipeContainer'
import { ExternalLink, Github } from 'lucide-react'

import { projects } from '../../const/projects'

export function Projects() {
	return (
		<SwipeContainer upSection={'menu'}>
			{/* Заголовок */}
			<motion.div
				className='text-center mb-4! md:mb-12!'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
			>
				<div className='flex justify-center items-center text-[3.5rem] xs:text-[4rem] md:text-[6rem] lg:text-[8rem] font-black text-black leading-none'>
					{['P', 'R', 'O', 'J', 'E', 'C', 'T', 'S'].map((letter, index) => (
						<motion.span
							key={index}
							initial={{ y: -100, rotateX: 90 }}
							animate={{ y: 0, rotateX: 0 }}
							transition={{
								duration: 0.6,
								delay: index * 0.1,
								type: 'spring',
								stiffness: 200,
							}}
							className='inline-block'
						>
							{letter}
						</motion.span>
					))}
				</div>

				<motion.p
					className='font-bold text-black uppercase
					text-[1rem]
					sm:text-[1.5rem]
					md:text-[2rem]
					'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.8 }}
				>
					Some of my recent work
				</motion.p>
			</motion.div>

			{/* Проекты: горизонтальный скролл */}
			<div className='w-full overflow-x-auto scrollbar-thin scrollbar-thumb-black/20 scrollbar-track-transparent'>
				<div className='flex gap-6 snap-x snap-mandatory px-4'>
					{projects.map(project => (
						<div
							key={project.id}
							className='flex-shrink-0 w-4/5 xs:w-3/4 sm:w-1/2 lg:w-1/3 snap-start bg-[#d4a14e] rounded-2xl overflow-hidden flex flex-col'
						>
							{/* Изображение проекта */}
							<img
								src={project.image}
								alt={project.title}
								className='w-full h-60 object-cover object-center'
							/>
							{/* Контент */}
							<div className='p-6 flex flex-col grow'>
								<h3 className='text-xl font-bold text-black mb-2'>
									{project.title}
								</h3>
								<p className='text-black/70 font-light mb-4 leading-relaxed'>
									{project.description}
								</p>
								{/* Технологии */}
								<div className='flex flex-wrap gap-2 mb-4'>
									{project.tech.map((tech, techIndex) => (
										<span
											key={techIndex}
											className='px-3 py-1 bg-black/10 text-black text-xs font-medium rounded-full'
										>
											{tech}
										</span>
									))}
								</div>
								{/* Ссылки */}
								<div className='flex gap-4 mt-auto'>
									{project.github && (
										<motion.a
											href={project.github}
											className='flex items-center gap-2 text-black hover:text-accent transition-colors'
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
											className='flex items-center gap-2 text-black hover:text-accent transition-colors'
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
					))}
				</div>
			</div>
		</SwipeContainer>
	)
}
