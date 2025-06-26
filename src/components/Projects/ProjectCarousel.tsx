import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { ProjectCard } from './ProjectCard'
import type { Project } from './Projects'
import './ProjectCarousel.styles.css'

interface ProjectCarouselProps {
	projects: Project[]
}

const ProjectCarousel = ({ projects }: ProjectCarouselProps) => {
	return (
		<Swiper
			modules={[Pagination]}
			spaceBetween={0}
			slidesPerView={1.3}
			centeredSlides
			className='h-full overflow-auto'
			loop
		>
			{projects.map((project, index) => (
				<SwiperSlide key={project.id}>
					<ProjectCard project={project} index={index} />
				</SwiperSlide>
			))}
		</Swiper>
	)
}

export default ProjectCarousel
