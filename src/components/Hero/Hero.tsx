import { useState, useEffect, useRef } from 'react'

export default function Hero() {
	const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
	const heroRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			if (heroRef.current) {
				const rect = heroRef.current.getBoundingClientRect()
				const centerX = rect.left + rect.width / 2
				const centerY = rect.top + rect.height / 2

				setMousePos({
					x: (e.clientX - centerX) / 50, // Уменьшаем чувствительность
					y: (e.clientY - centerY) / 50,
				})
			}
		}

		window.addEventListener('mousemove', handleMouseMove)
		return () => window.removeEventListener('mousemove', handleMouseMove)
	}, [])

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
					{/* Интерактивный круг слева */}
					<div className='relative'>
						<div className='logo-oval w-16 h-full md:w-24 md:h-14 lg:w-28 lg:h-16'>
							<div
								className='logo-circle w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 transition-transform duration-300 ease-out'
								style={{
									transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
								}}
							/>
						</div>
					</div>

					<span className='text-[4rem] md:text-[8rem] lg:text-[10rem] font-black text-black leading-none'>
						BRAZTS
					</span>

					{/* Интерактивный круг справа */}
					<div className='relative'>
						<div className='logo-oval w-16 h-10 md:w-24 md:h-14 lg:w-28 lg:h-16'>
							<div
								className='logo-circle w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 transition-transform duration-300 ease-out'
								style={{
									transform: `translate(${-mousePos.x}px, ${mousePos.y}px)`,
								}}
							/>
						</div>
					</div>

					<span className='text-[4rem] md:text-[8rem] lg:text-[10rem] font-black text-black leading-none'>
						V
					</span>
				</div>
			</div>
		</div>
	)
}
