import { useState, useEffect, useRef } from 'react'

export default function Hero() {
	const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
	const [activeModal, setActiveModal] = useState<string | null>(null)
	const heroRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			if (heroRef.current) {
				const rect = heroRef.current.getBoundingClientRect()
				const centerX = rect.left + rect.width / 2
				const centerY = rect.top + rect.height / 2

				setMousePos({
					x: (e.clientX - centerX) / 50,
					y: (e.clientY - centerY) / 50,
				})
			}
		}

		window.addEventListener('mousemove', handleMouseMove)
		return () => window.removeEventListener('mousemove', handleMouseMove)
	}, [])

	const renderAboutModal = () => (
		<div className='fixed inset-0 bg-[#F4D03F] z-50 flex items-center justify-center p-8'>
			{/* Увеличенная буква О как фон */}
			<div className='absolute inset-0 flex items-center justify-center'>
				<span className='text-[40vw] font-black text-black/10 leading-none pointer-events-none'>
					О
				</span>
			</div>

			{/* Контент */}
			<div className='relative z-10 max-w-2xl text-center'>
				<h2 className='text-4xl md:text-6xl font-black text-black mb-8'>
					ABOUT
				</h2>

				<div className='space-y-6 text-lg text-black leading-relaxed'>
					<p>
						Hello, I'm Alexandr Obraztsov. I've been in frontend development for
						over a year. My development philosophy has always been one of
						clarity – clarity of code and user experience.
					</p>

					<p>
						Achieving a great product requires the discipline of restraint.
						Continuous learning, self-improvement, and humility are the
						cornerstones of my practice.
					</p>

					<div className='grid grid-cols-2 gap-4 mt-8 text-sm font-medium'>
						<div>• React & Next.js</div>
						<div>• TypeScript</div>
						<div>• Tailwind CSS</div>
						<div>• JavaScript ES6+</div>
						<div>• Git & GitHub</div>
						<div>• Responsive Design</div>
					</div>
				</div>

				<button
					onClick={() => setActiveModal(null)}
					className='mt-8 px-6 py-3 bg-black text-[#F4D03F] font-black rounded-lg hover:opacity-80 transition-opacity'
				>
					CLOSE
				</button>
			</div>
		</div>
	)

	const renderPortfolioModal = () => (
		<div className='fixed inset-0 bg-[#F4D03F] z-50 flex items-center justify-center p-8'>
			<div className='absolute inset-0 flex items-center justify-center'>
				<span className='text-[40vw] font-black text-black/10 leading-none pointer-events-none'>
					P
				</span>
			</div>

			<div className='relative z-10 max-w-4xl'>
				<h2 className='text-4xl md:text-6xl font-black text-black mb-8 text-center'>
					PORTFOLIO
				</h2>

				<div className='space-y-4'>
					{[
						{ title: 'E-Commerce Platform', category: 'Full Stack Web App' },
						{ title: 'Task Manager Dashboard', category: 'React Application' },
						{ title: 'Weather Forecast App', category: 'API Integration' },
						{ title: 'Portfolio Website', category: 'Personal Branding' },
						{ title: 'Social Media Dashboard', category: 'Data Visualization' },
						{ title: 'Landing Page Collection', category: 'UI/UX Design' },
					].map((project, index) => (
						<div
							key={index}
							className='flex justify-between items-center border-b border-black/20 pb-2'
						>
							<span className='font-black text-xl'>{project.title}</span>
							<span className='text-sm text-black/70 uppercase tracking-wider'>
								{project.category}
							</span>
						</div>
					))}
				</div>

				<div className='text-center mt-8'>
					<a
						href='https://github.com/Alexandr-Obraztsov'
						target='_blank'
						rel='noopener noreferrer'
						className='text-black font-bold hover:opacity-70 transition-opacity'
					>
						github.com/Alexandr-Obraztsov →
					</a>
				</div>

				<div className='text-center mt-6'>
					<button
						onClick={() => setActiveModal(null)}
						className='px-6 py-3 bg-black text-[#F4D03F] font-black rounded-lg hover:opacity-80 transition-opacity'
					>
						CLOSE
					</button>
				</div>
			</div>
		</div>
	)

	const renderContactModal = () => (
		<div className='fixed inset-0 bg-[#F4D03F] z-50 flex items-center justify-center p-8'>
			<div className='absolute inset-0 flex items-center justify-center'>
				<span className='text-[40vw] font-black text-black/10 leading-none pointer-events-none'>
					C
				</span>
			</div>

			<div className='relative z-10 max-w-2xl text-center'>
				<h2 className='text-4xl md:text-6xl font-black text-black mb-8'>
					CONTACT
				</h2>

				<div className='space-y-6'>
					<div>
						<span className='text-sm uppercase tracking-wider font-bold block'>
							Email
						</span>
						<div className='text-xl'>obraztsov.official@gmail.com</div>
					</div>
					<div>
						<span className='text-sm uppercase tracking-wider font-bold block'>
							Telegram
						</span>
						<div className='text-xl'>@obraztsov_alexandr</div>
					</div>
					<div>
						<span className='text-sm uppercase tracking-wider font-bold block'>
							Location
						</span>
						<div className='text-xl'>Minsk, Belarus</div>
					</div>
					<div>
						<span className='text-sm uppercase tracking-wider font-bold block'>
							GitHub
						</span>
						<div className='text-xl'>github.com/Alexandr-Obraztsov</div>
					</div>
				</div>

				<button
					onClick={() => setActiveModal(null)}
					className='mt-8 px-6 py-3 bg-black text-[#F4D03F] font-black rounded-lg hover:opacity-80 transition-opacity'
				>
					CLOSE
				</button>
			</div>
		</div>
	)

	return (
		<div
			ref={heroRef}
			className='min-h-screen bg-[#F4D03F] flex flex-col items-center justify-center relative overflow-hidden'
		>
			{/* Имя ALEXANDR */}
			<div className='mb-4'>
				<div className='flex items-center justify-center space-x-2 md:space-x-4'>
					<span className='text-[4rem] md:text-[8rem] lg:text-[10rem] font-black text-black leading-none'>
						A
					</span>
					<span className='text-[4rem] md:text-[8rem] lg:text-[10rem] font-black text-black leading-none'>
						L
					</span>
					<span className='text-[4rem] md:text-[8rem] lg:text-[10rem] font-black text-black leading-none'>
						E
					</span>
					<span className='text-[4rem] md:text-[8rem] lg:text-[10rem] font-black text-black leading-none'>
						X
					</span>
					<span className='text-[4rem] md:text-[8rem] lg:text-[10rem] font-black text-black leading-none'>
						A
					</span>
					<span className='text-[4rem] md:text-[8rem] lg:text-[10rem] font-black text-black leading-none'>
						N
					</span>
					<span className='text-[4rem] md:text-[8rem] lg:text-[10rem] font-black text-black leading-none'>
						D
					</span>
					<span className='text-[4rem] md:text-[8rem] lg:text-[10rem] font-black text-black leading-none'>
						R
					</span>
				</div>
			</div>

			{/* Интерактивная бегущая строка */}
			<div className='w-full overflow-hidden mb-4'>
				<div className='bg-black text-white py-2 px-4 relative'>
					<div className='marquee text-sm md:text-base font-medium uppercase tracking-wider'>
						FRONTEND DEVELOPER • REACT SPECIALIST • TYPESCRIPT EXPERT • UI/UX
						ENTHUSIAST • PROBLEM SOLVER • WEB DEVELOPER •
					</div>
					{/* Интерактивные точки */}
					<div
						className='absolute top-1/2 left-1/4 w-2 h-2 bg-[#F4D03F] rounded-full transition-transform duration-300 ease-out'
						style={{
							transform: `translate(${mousePos.x * 2}px, ${
								mousePos.y * 2 - 4
							}px)`,
						}}
					/>
					<div
						className='absolute top-1/2 right-1/4 w-2 h-2 bg-[#F4D03F] rounded-full transition-transform duration-300 ease-out'
						style={{
							transform: `translate(${-mousePos.x * 2}px, ${
								mousePos.y * 2 - 4
							}px)`,
						}}
					/>
				</div>
			</div>

			{/* Фамилия OBRAZTSOV с интерактивными элементами */}
			<div className='relative'>
				<div className='flex items-center justify-center space-x-2 md:space-x-4'>
					{/* Интерактивная буква О - About */}
					<button
						onClick={() => setActiveModal('about')}
						className='text-[4rem] md:text-[8rem] lg:text-[10rem] font-black text-black leading-none hover:opacity-70 transition-all duration-300 hover:scale-105 cursor-pointer'
					>
						О
					</button>

					<span className='text-[4rem] md:text-[8rem] lg:text-[10rem] font-black text-black leading-none'>
						B
					</span>
					<span className='text-[4rem] md:text-[8rem] lg:text-[10rem] font-black text-black leading-none'>
						R
					</span>
					<span className='text-[4rem] md:text-[8rem] lg:text-[10rem] font-black text-black leading-none'>
						A
					</span>
					<span className='text-[4rem] md:text-[8rem] lg:text-[10rem] font-black text-black leading-none'>
						Z
					</span>
					<span className='text-[4rem] md:text-[8rem] lg:text-[10rem] font-black text-black leading-none'>
						T
					</span>
					<span className='text-[4rem] md:text-[8rem] lg:text-[10rem] font-black text-black leading-none'>
						S
					</span>

					{/* Интерактивная буква О - Portfolio */}
					<button
						onClick={() => setActiveModal('portfolio')}
						className='text-[4rem] md:text-[8rem] lg:text-[10rem] font-black text-black leading-none hover:opacity-70 transition-all duration-300 hover:scale-105 cursor-pointer'
					>
						О
					</button>

					<span className='text-[4rem] md:text-[8rem] lg:text-[10rem] font-black text-black leading-none'>
						V
					</span>
				</div>
			</div>

			{/* Дополнительные интерактивные кнопки */}
			<div className='absolute bottom-20 left-1/2 transform -translate-x-1/2'>
				<button
					onClick={() => setActiveModal('contact')}
					className='text-2xl md:text-4xl font-black text-black/70 hover:text-black hover:scale-105 transition-all duration-300'
				>
					CONTACT
				</button>
			</div>

			{/* Модальные окна */}
			{activeModal === 'about' && renderAboutModal()}
			{activeModal === 'portfolio' && renderPortfolioModal()}
			{activeModal === 'contact' && renderContactModal()}
		</div>
	)
}
