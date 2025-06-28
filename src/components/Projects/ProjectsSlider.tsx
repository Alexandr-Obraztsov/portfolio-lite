import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './Projects.styles.css'
import { projects } from '../../const/projects'
import { ProjectCard } from './ProjectCard'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { PATHS } from '../../const/PATHS'
import { useNavigate } from 'react-router'
import { swipeHandler } from '../../lib/swipeHandler'

export const ProjectsSlider = () => {
	const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
	const navigate = useNavigate()
	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768)
		}

		handleResize() // Установить начальное значение
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return isMobile ? (
		<motion.div
			dragConstraints={{ top: 0, bottom: 0 }}
			dragElastic={0.2}
			drag='y'
			onDragEnd={swipeHandler(() => navigate(PATHS.menu))}
			whileDrag={{ scale: 0.98 }}
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: 20 }}
			transition={{ duration: 0.5 }}
			className='flex overflow-x-scroll gap-2.5 px-5! w-full snap-x snap-mandatory'
		>
			{projects.map(project => (
				<div
					key={project.id}
					className='shrink-0 w-[calc(100svw-40px)]! snap-center'
				>
					<ProjectCard project={project} />
				</div>
			))}
		</motion.div>
	) : (
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
				autoHeight={false}
				loop={false}
				breakpoints={{
					620: {
						slidesPerView: 2.2,
						spaceBetween: 0,
					},
					1200: {
						slidesPerView: 3,
						spaceBetween: 0,
					},
					1600: {
						slidesPerView: 4,
						spaceBetween: 0,
					},
				}}
			>
				{projects.map(project => (
					<SwiperSlide key={project.id}>
						<ProjectCard project={project} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}
