import SwipeContainer from '../SwipeContainer/SwipeContainer'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { useState, useEffect } from 'react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './Projects.styles.css'
import { projects } from '../../const/projects'
import { ProjectCard } from './ProjectCard'

export function Projects() {
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

	return (
		<SwipeContainer upSection={'menu'}>
			{/* Заголовок */}
			<div className='text-center mb-4! md:mb-12!'>
				<h1 className='text-[3.5rem] xs:text-[4rem] md:text-[6rem] lg:text-[8rem] font-black text-black leading-none'>
					PROJECTS
				</h1>
				<p className='font-bold text-black uppercase text-[1rem] sm:text-[1.5rem] md:text-[2rem]'>
					Some of my recent work
				</p>
			</div>

			{/* Проекты: разные варианты для мобильных и десктопа */}
			{isMobile ? (
				/* Простой скролл для мобильных */
				<div className='w-full overflow-x-auto pb-4'>
					<div className='flex gap-4 px-4'>
						{projects.map(project => (
							<div
								key={project.id}
								className='flex-shrink-0 w-[85%] snap-start'
							>
								<ProjectCard project={project} />
							</div>
						))}
					</div>
				</div>
			) : (
				/* Swiper для десктопа */
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
						{projects.map(project => (
							<SwiperSlide key={project.id}>
								<ProjectCard project={project} />
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			)}
		</SwipeContainer>
	)
}
