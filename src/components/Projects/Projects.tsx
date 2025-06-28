import SwipeContainer from '../SwipeContainer/SwipeContainer'
import { ProjectsHeader } from './ProjectsHeader'
import { ProjectsSlider } from './ProjectsSlider'

import './Projects.styles.css'

export function Projects() {
	return (
		<SwipeContainer upSection={'menu'}>
			<ProjectsHeader />
			<ProjectsSlider />
		</SwipeContainer>
	)
}
