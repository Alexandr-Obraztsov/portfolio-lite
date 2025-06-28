import { motion } from 'framer-motion'
import { useEffect } from 'react'
import SwipeContainer from '../SwipeContainer/SwipeContainer'
import confetti from 'canvas-confetti'

const successMessages = [
	'MESSAGE-DELIVERED',
	'SUCCESSFULLY-SENT',
	'TASK-COMPLETED',
	'MISSION-ACCOMPLISHED',
	'COMMUNICATION-ESTABLISHED',
	'CONNECTION-MADE',
]

export function Thanks() {
	useEffect(() => {
		// Запускаем конфетти при загрузке компонента
		const fireConfetti = () => {
			// Первая волна конфетти
			confetti({
				particleCount: 100,
				spread: 70,
				origin: { y: 0.6 },
				colors: [
					'#f4a63f',
					'#000000',
					'#ffffff',
					'#ff6b6b',
					'#4ecdc4',
					'#45b7d1',
				],
			})

			// Вторая волна с задержкой
			setTimeout(() => {
				confetti({
					particleCount: 50,
					angle: 60,
					spread: 55,
					origin: { x: 0 },
					colors: ['#f4a63f', '#000000', '#ffffff'],
				})
			}, 500)

			// Третья волна с другой стороны
			setTimeout(() => {
				confetti({
					particleCount: 50,
					angle: 120,
					spread: 55,
					origin: { x: 1 },
					colors: ['#f4a63f', '#000000', '#ffffff'],
				})
			}, 1000)

			// Финальная волна сверху
			setTimeout(() => {
				confetti({
					particleCount: 80,
					spread: 100,
					origin: { y: 0.2 },
					colors: ['#f4a63f', '#000000', '#ffffff', '#ff6b6b', '#4ecdc4'],
				})
			}, 1500)
		}

		// Запускаем конфетти через небольшую задержку
		const confettiTimer = setTimeout(fireConfetti, 200)

		return () => clearTimeout(confettiTimer)
	}, [])

	return (
		<SwipeContainer upSection={'contact'}>
			<div className='flex flex-col items-center justify-center min-h-screen px-6 relative'>
				{/* Анимированный заголовок THANKS в стиле сайта */}
				<motion.div
					className='mb-2! relative flex justify-center 
					text-[3rem] 
					sm:text-[4rem] 
					md:text-[5rem] 
					lg:text-[7rem] 
					xl:text-[8rem]
					font-black text-black leading-none'
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					TH
					<motion.div
						className='relative my-1! md:my-3! bg-black text-accent rounded-full inline-flex items-center justify-center mx-2 
						font-bold whitespace-nowrap overflow-hidden 
						text-[0.8rem] [--initial-width:40px] [--max-width:120px]
						sm:text-[1.6rem] sm:[--initial-width:55px] sm:[--max-width:250px]
						md:text-[2.4rem] md:[--initial-width:55px] md:[--max-width:350px]
						lg:text-[3.2rem] lg:[--initial-width:85px] lg:[--max-width:450px]
						xl:text-[4rem] xl:[--initial-width:95px] xl:[--max-width:550px]'
						initial={{ width: 'var(--initial-width)' }}
						animate={{ width: 'var(--max-width)' }}
						transition={{
							duration: 0.8,
							type: 'spring',
							stiffness: 200,
							delay: 0.5,
						}}
					>
						<motion.div
							initial={{ y: '-200%' }}
							animate={{ y: '0%' }}
							transition={{
								duration: 0.6,
								type: 'spring',
								stiffness: 400,
								delay: 1,
							}}
							className='relative'
						>
							YOU ROCK!
						</motion.div>
					</motion.div>
					NKS
				</motion.div>

				{/* Бегущая строка с сообщениями успеха */}
				<motion.div
					className='w-full [--h:2rem] sm:[--h:3rem] md:[--h:4rem] relative bg-black text-accent overflow-hidden rounded-full flex items-center mb-8'
					initial={{ opacity: 0, height: 0 }}
					animate={{ opacity: 1, height: 'var(--h)' }}
					transition={{
						duration: 1,
						delay: 1.5,
						type: 'spring',
						stiffness: 200,
					}}
				>
					<span className='absolute text-[1rem] sm:text-[1.5rem] md:text-[2rem] font-light marquee'>
						{[...successMessages, ...successMessages].reduce(
							(acc, curr) => acc + curr + '⠀×⠀',
							''
						)}
					</span>
				</motion.div>

				{/* Основное сообщение */}
				<motion.div
					className='text-center mb-8'
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 2 }}
				>
					<h2 className='mt-2! text-[1rem] xs:text-[1.2rem] sm:text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] font-black text-black mb-4 uppercase leading-none'>
						MESSAGE DELIVERED SUCCESSFULLY
					</h2>
					<p className='text-[0.9rem] sm:text-[1.1rem] md:text-[1.3rem] lg:text-[1.5rem] font-bold text-black/80 uppercase max-w-2xl'>
						I'll get back to you soon!
					</p>
				</motion.div>

				{/* Декоративные элементы в стиле сайта */}
				<div className='absolute inset-0 pointer-events-none overflow-hidden'>
					{/* Левый верхний угол */}
					<motion.div
						className='absolute top-[10%] left-[5%] w-16 h-16 bg-black/10 rounded-full'
						animate={{
							scale: [1, 1.2, 1],
							rotate: 360,
						}}
						transition={{
							duration: 8,
							repeat: Infinity,
							ease: 'linear',
						}}
					/>

					{/* Правый верхний угол */}
					<motion.div
						className='absolute top-[15%] right-[8%] w-8 h-8 border-4 border-black/20'
						animate={{
							rotate: -360,
							scale: [1, 1.3, 1],
						}}
						transition={{
							duration: 6,
							repeat: Infinity,
							ease: 'linear',
						}}
					/>

					{/* Левый нижний угол */}
					<motion.div
						className='absolute bottom-[20%] left-[10%] w-12 h-12 bg-black/15 rounded-full'
						animate={{
							y: [0, -20, 0],
							scale: [1, 1.1, 1],
						}}
						transition={{
							duration: 4,
							repeat: Infinity,
							ease: 'easeInOut',
						}}
					/>

					{/* Правый нижний угол */}
					<motion.div
						className='absolute bottom-[25%] right-[12%] w-6 h-6 bg-black/10'
						animate={{
							rotate: [0, 45, 0],
							scale: [1, 1.4, 1],
						}}
						transition={{
							duration: 5,
							repeat: Infinity,
							ease: 'easeInOut',
						}}
					/>

					{/* Центральные элементы */}
					<motion.div
						className='absolute top-[30%] right-[20%] w-4 h-4 bg-black/20 rounded-full'
						animate={{
							scale: [0.5, 1.5, 0.5],
							opacity: [0.3, 0.8, 0.3],
						}}
						transition={{
							duration: 3,
							repeat: Infinity,
							ease: 'easeInOut',
						}}
					/>

					<motion.div
						className='absolute bottom-[40%] left-[25%] w-10 h-2 bg-black/15 rounded-full'
						animate={{
							scaleX: [1, 2, 1],
							rotate: [0, 180, 360],
						}}
						transition={{
							duration: 7,
							repeat: Infinity,
							ease: 'linear',
						}}
					/>
				</div>
			</div>
		</SwipeContainer>
	)
}
