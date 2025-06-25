import { Suspense } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function LoadingSpinner() {
	return (
		<div className='fixed inset-0 flex items-center justify-center bg-dark z-50'>
			<div className='flex flex-col items-center space-y-4'>
				<div className='w-12 h-12 border-2 border-accent/30 border-t-accent rounded-full animate-spin'></div>
				<p className='text-accent font-mono'>Загрузка...</p>
			</div>
		</div>
	)
}

function App() {
	return (
		<div className='min-h-screen bg-dark text-text-primary overflow-x-hidden snap-y snap-mandatory'>
			{/* Navigation */}
			<Navigation />

			{/* Main Content with Snap Scrolling */}
			<main className='snap-y snap-mandatory overflow-y-auto h-screen relative z-10'>
				{/* Hero Section */}
				<section className='snap-start h-screen flex items-center justify-center'>
					<Hero />
				</section>

				{/* Projects Section */}
				<section className='snap-start h-screen flex items-center justify-center overflow-y-auto'>
					<Projects />
				</section>

				{/* Skills Section */}
				<section className='snap-start h-screen flex items-center justify-center overflow-y-auto'>
					<div className='w-full'>
						<Skills />
					</div>
				</section>

				{/* Contact Section */}
				<section className='snap-start h-screen flex items-center justify-center overflow-y-auto'>
					<div className='w-full'>
						<Contact />
						<Footer />
					</div>
				</section>
			</main>

			{/* Loading Overlay */}
			<Suspense fallback={<LoadingSpinner />}>
				<div></div>
			</Suspense>
		</div>
	)
}

export default App
