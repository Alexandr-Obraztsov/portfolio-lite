import { div } from 'framer-motion/client'
import { useState, useEffect } from 'react'

export default function Hero() {
	const [currentSkill, setCurrentSkill] = useState(0)

	const skills = [
		'FRONTEND DEVELOPER',
		'CREATIVE PROBLEM SOLVER',
		'UI/UX DESIGNER',
		'REACT SPECIALIST',
		'STRATEGIC THINKER',
		'FULL STACK ENGINEER',
	]

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSkill(prev => (prev + 1) % skills.length)
		}, 2500)

		return () => clearInterval(interval)
	}, [skills.length])

	return (
		<div className='min-h-screen flex items-center justify-center bg-white'>
			<div className='text-center'>
				{/* Основное имя */}
				<div className='relative'>
					<div className='flex items-center justify-center mb-8'>
						<h1 className='text-[12vw] md:text-[8rem] font-black leading-none tracking-tight text-black'>
							YOUR
						</h1>
					</div>

					<div className='flex items-center justify-center mb-16'>
						<h1 className='text-[12vw] md:text-[8rem] font-black leading-none tracking-tight text-black'>
							NAME
						</h1>
					</div>
				</div>

				{/* Анимированный текст навыков */}
				<div className='h-16 flex items-center justify-center overflow-hidden'>
					<div
						className='rotating-text text-lg md:text-xl font-light uppercase tracking-widest text-gray-600'
						key={currentSkill}
					>
						{skills[currentSkill]}
					</div>
				</div>

				{/* Разделяющие точки */}
				<div className='flex justify-center space-x-2 mt-8'>
					<div className='w-1 h-1 bg-black rounded-full'></div>
					<div className='w-1 h-1 bg-black rounded-full'></div>
					<div className='w-1 h-1 bg-black rounded-full'></div>
				</div>
			</div>
		</div>
	)
}
