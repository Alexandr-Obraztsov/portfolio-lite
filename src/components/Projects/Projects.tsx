import { useContext } from 'react'
import { motion } from 'framer-motion'
import { SectorContext } from '../../models/SectorContext'
import SwipeContainer from '../SwipeContainer/SwipeContainer'
import { SwipeChevron } from '../SwipeChevron/SwipeChevron'
import { ExternalLink, Github } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import dotnews from '../../assets/images/dotnews.png'
import debator from '../../assets/images/debator.png'
import macPortfolio from '../../assets/images/mac-portfolio.png'
import inctagram from '../../assets/images/inctagram.png'
import circuitDesigner from '../../assets/images/circuit-designer.png'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './Projects.styles.css'

const projects = [
	{
		id: 1,
		title: '.news',
		description: 'Telegram Mini App for summarizing news from the channel',
		tech: ['React', 'TypeScript', 'Tailwind', 'Telegram Bot API', 'RTK Query'],
		image: dotnews,
		live: 'https://t.me/dnwsbot',
	},
	{
		id: 2,
		title: 'Debator',
		description: 'Debator is a platform for creating and managing debates',
		tech: ['React', 'TypeScript', 'Tailwind', 'RTK Query', 'i18n'],
		image: debator,
	},
	{
		id: 3,
		title: 'Mac Portfolio',
		description: 'Mac Portfolio is a portfolio website for a Mac developer',
		tech: ['NextJS', 'TypeScript', 'Tailwind', 'Swiper', 'NodeJS'],
		image: macPortfolio,
		github: 'https://github.com/Alexandr-Obraztsov/mac-portfolio',
		live: 'https://portfolio-tau-gray-80.vercel.app/',
	},
	{
		id: 4,
		title: 'Inctagram',
		description:
			'Instagram clone on NextJS with localization and authentication (internship project)',
		tech: ['NextJS', 'TypeScript', 'Tailwind', 'Shadcn UI', 'i18n', 'oAuth'],
		image: inctagram,
		github: 'https://github.com/Alexandr-Obraztsov/Inctagram',
	},
	{
		id: 5,
		title: 'Circuit Designer',
		description: 'Platform for designing and solving transition processes',
		tech: ['React', 'TypeScript', 'Tailwind', 'RTK Query', 'Python', 'FastAPI'],
		image: circuitDesigner,
		github: 'https://github.com/Alexandr-Obraztsov/apec-frontend',
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
								transition={{ delay: 1.2 + index * 0.2 }}
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
