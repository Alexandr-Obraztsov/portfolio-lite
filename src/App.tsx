import { AnimatePresence } from 'framer-motion'

import Menu from './components/Menu/Menu'
import { Home } from './components/Home/Home'
import { HashRouter, Route, Routes } from 'react-router'
import { PATHS } from './const/PATHS'
import { lazy } from 'react'
import { ImagePreloader } from './components/ImagePreloader/ImagePreloader'

const LazyContact = lazy(() =>
	import('./components/Contact/Contact').then(module => ({
		default: module.Contact,
	}))
)

const LazyAbout = lazy(() =>
	import('./components/About/About').then(module => ({
		default: module.About,
	}))
)

const LazyProjects = lazy(() =>
	import('./components/Projects/Projects').then(module => ({
		default: module.Projects,
	}))
)

const LazyThanks = lazy(() =>
	import('./components/Thanks/Thanks').then(module => ({
		default: module.Thanks,
	}))
)

function App() {
	return (
		<AnimatePresence mode='wait'>
			<ImagePreloader />
			<HashRouter>
				<Routes>
					<Route path={PATHS.home} element={<Home />} />
					<Route path={PATHS.menu} element={<Menu />} />
					<Route path={PATHS.contact} element={<LazyContact />} />
					<Route path={PATHS.about} element={<LazyAbout />} />
					<Route path={PATHS.projects} element={<LazyProjects />} />
					<Route path={PATHS.thanks} element={<LazyThanks />} />
				</Routes>
			</HashRouter>
		</AnimatePresence>
	)
}

export default App
