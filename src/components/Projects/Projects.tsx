import { motion } from 'framer-motion'
import SwipeContainer from '../SwipeContainer/SwipeContainer'
import { SwipeChevron } from '../SwipeChevron/SwipeChevron'
import { ExternalLink, Github } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './Projects.styles.css'
import { useNavigate } from 'react-router'
import { PATHS } from '../../const/PATHS'
import { projects } from '../../const/Projects'

export function Projects() {
	const navigate = useNavigate()

	const handleSwipeUp = () => {
		navigate(PATHS.menu)
	}

	return (
		<SwipeContainer
			className='min-h-screen bg-accent flex flex-col items-center justify-center relative overflow-hidden'
			onSwipeUp={handleSwipeUp}
		>
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

			{/* Swiper с проектами */}
			<div className='w-full'>
				<Swiper
					modules={[Autoplay]}
					autoplay={{
						delay: 5000,
						disableOnInteraction: true,
					}}
					grabCursor={true}
					centeredSlides={true}
					slidesPerView={1.2}
					spaceBetween={0}
					loop
					autoHeight={false}
					breakpoints={{
						620: {
							slidesPerView: 2.2,
							spaceBetween: 0,
						},
						1200: {
							slidesPerView: 3,
						},
						1600: {
							slidesPerView: 4,
							loop: false,
						},
					}}
				>
					{projects.map((project, index) => (
						<SwiperSlide key={project.id}>
							<motion.div
								className='h-full! bg-black/5 backdrop-blur-sm rounded-2xl overflow-hidden group hover:bg-black/10 transition-all duration-300 flex flex-col'
								initial={{ opacity: 0, y: 50 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
								whileHover={{ scale: 1.02 }}
							>
								{/* Изображение проекта */}
								<img
									src={project.image}
									alt={project.title}
									className='w-full object-cover object-center'
								/>

								{/* Контент */}
								<div className='p-6! flex flex-col grow'>
									<h3 className='text-xl font-bold text-black mb-2!'>
										{project.title}
									</h3>
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
							</motion.div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>

			<SwipeChevron sector='menu' direction='up' />
		</SwipeContainer>
	)
}
