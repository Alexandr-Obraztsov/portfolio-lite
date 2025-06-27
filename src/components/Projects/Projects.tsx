import { useContext } from 'react'
import { motion } from 'framer-motion'
import { SectorContext } from '../../models/SectorContext'
import SwipeContainer from '../SwipeContainer/SwipeContainer'
import { SwipeChevron } from '../SwipeChevron/SwipeChevron'
import { ExternalLink, Github } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './Projects.styles.css'

const projects = [
	{
		id: 1,
		title: 'E-Commerce Platform',
		description:
			'Modern online store with React, TypeScript and payment integration',
		tech: ['React', 'TypeScript', 'Tailwind', 'Node.js'],
		image:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9IloXN0mCCLJ6qscCTFh-kjYf8Orn6o9x2A&s',
		github: 'https://github.com',
		live: 'https://example.com',
	},
	{
		id: 2,
		title: 'Task Management App',
		description: 'Collaborative project management tool with real-time updates',
		tech: ['React', 'Firebase', 'Material-UI'],
		image:
			'https://www.it-academy.by/upload/medialibrary/3d6/whb8nryp2va2vb57i3bsglq5pp15wjxw.png',
		github: 'https://github.com',
		live: 'https://example.com',
	},
	{
		id: 3,
		title: 'Weather Dashboard',
		description: 'Beautiful weather app with location-based forecasts',
		tech: ['React', 'API Integration', 'CSS3'],
		image:
			'https://media.licdn.com/dms/image/v2/D4D12AQFtdAY6ehT7Lg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1694870890113?e=2147483647&v=beta&t=pTAkbM24u9MBbf1WVmIV3f8ckFR3daaTLR5kVKGoUwM',
		github: 'https://github.com',
		live: 'https://example.com',
	},
	{
		id: 4,
		title: 'Portfolio Website',
		description:
			'Personal portfolio with modern animations and responsive design',
		tech: ['React', 'Framer Motion', 'Tailwind'],
		image:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROgl51eBJOJmK0mJd-KHwEtSmIZNyNDPaM7A&s',
		github: 'https://github.com',
		live: 'https://example.com',
	},
]

export function Projects() {
	const { setCurrentSector } = useContext(SectorContext)

	const handleSwipeUp = () => {
		setCurrentSector('menu')
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
				<div className='flex justify-center items-center text-[4rem] md:text-[6rem] lg:text-[8rem] font-black text-black leading-none'>
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
					breakpoints={{
						620: {
							loop: false,
							slidesPerView: 2.2,
							spaceBetween: 0,
						},
						1200: {
							slidesPerView: 3,
							loop: false,
						},
						1600: {
							slidesPerView: 4,
							loop: false,
						},
					}}
				>
					{projects.map((project, index) => (
						<SwiperSlide key={project.id} className='h-full!'>
							<motion.div
								className='bg-black/5 backdrop-blur-sm rounded-2xl overflow-hidden group hover:bg-black/10 transition-all duration-300'
								initial={{ opacity: 0, y: 50 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 1.2 + index * 0.2 }}
								whileHover={{ scale: 1.02 }}
							>
								{/* Изображение проекта */}
								<div className='relative overflow-hidden'>
									<img
										src={project.image}
										alt={project.title}
										className='w-full h-full object-cover'
									/>
									<div className='absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
								</div>

								{/* Контент */}
								<div className='p-6!'>
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
									<div className='flex gap-4!'>
										<motion.a
											href={project.github}
											className='flex items-center gap-2! text-black hover:text-accent transition-colors'
											whileHover={{ scale: 1.05 }}
											whileTap={{ scale: 0.95 }}
										>
											<Github size={18} />
											<span className='text-sm font-medium'>Code</span>
										</motion.a>
										<motion.a
											href={project.live}
											className='flex items-center gap-2! text-black hover:text-accent transition-colors'
											whileHover={{ scale: 1.05 }}
											whileTap={{ scale: 0.95 }}
										>
											<ExternalLink size={18} />
											<span className='text-sm font-medium'>Live</span>
										</motion.a>
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
