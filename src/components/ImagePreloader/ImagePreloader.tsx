import { useEffect } from 'react'
import { projects } from '../../const/projects'

export const ImagePreloader = () => {
	useEffect(() => {
		projects.forEach(project => {
			const img = new Image()
			img.src = project.image
		})
	}, [])

	return null // Этот компонент не рендерит ничего в DOM
}
