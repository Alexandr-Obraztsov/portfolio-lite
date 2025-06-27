import { AnimatePresence } from 'framer-motion'

import Menu from './components/Menu/Menu'
import { Home } from './components/Home/Home'
import { Contact } from './components/Contact/Contact'
import { About } from './components/About/About'
import { Projects } from './components/Projects/Projects'
import { BrowserRouter, Route, Routes } from 'react-router'
import { PATHS } from './const/PATHS'

function App() {
	return (
		<AnimatePresence mode='wait'>
			<BrowserRouter>
				<Routes>
					<Route path={PATHS.home} element={<Home />} />
					<Route path={PATHS.menu} element={<Menu />} />
					<Route path={PATHS.contact} element={<Contact />} />
					<Route path={PATHS.about} element={<About />} />
					<Route path={PATHS.projects} element={<Projects />} />
				</Routes>
			</BrowserRouter>
		</AnimatePresence>
	)
}

export default App
