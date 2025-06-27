import { AnimatePresence } from 'framer-motion'

import Menu from './components/Menu/Menu'
import { useState } from 'react'
import { SectorContext, type SectorType } from './models/SectorContext'
import { Home } from './components/Home/Home'
import { Contact } from './components/Contact/Contact'
import { About } from './components/About/About'
import { Projects } from './components/Projects/Projects'

const sectors = {
	home: {
		id: 'home',
		component: <Home />,
	},
	menu: {
		id: 'menu',
		component: <Menu />,
	},
	contact: {
		id: 'contact',
		component: <Contact />,
	},
	about: {
		id: 'about',
		component: <About />,
	},
	projects: {
		id: 'projects',
		component: <Projects />,
	},
}

function App() {
	const [currentSector, setCurrentSector] = useState<SectorType>('home')

	return (
		<SectorContext.Provider value={{ currentSector, setCurrentSector }}>
			<AnimatePresence mode='wait'>
				{sectors[currentSector].component}
			</AnimatePresence>
		</SectorContext.Provider>
	)
}

export default App
