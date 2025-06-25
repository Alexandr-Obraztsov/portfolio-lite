import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Code, Sparkles } from 'lucide-react'
import InteractiveGrid from './InteractiveGrid'

const roles = [
	'Frontend Developer',
	'React Specialist',
	'UI/UX Enthusiast',
	'JavaScript Expert',
]

interface HeroProps {
	isActive?: boolean
}

export default function Hero({ isActive = true }: HeroProps) {
	const [currentRole, setCurrentRole] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentRole(prev => (prev + 1) % roles.length)
		}, 3000)

		return () => clearInterval(interval)
	}, [])

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.3,
			},
		},
	}

	const itemVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6 },
		},
	}

	return (
		<div className='w-full h-full flex items-center justify-center relative overflow-hidden'>
			{/* Интерактивная сетка - только когда Hero активна */}
			{isActive && (
				<div className='absolute inset-0 z-0'>
					<InteractiveGrid />
				</div>
			)}

			<div className='max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10'>
				<motion.div
					variants={containerVariants}
					initial='hidden'
					animate='visible'
					className='space-y-8'
				>
					{/* Greeting */}
					<motion.div variants={itemVariants} className='space-y-2'>
						<div
							className='flex items-center justify-center space-x-2 mb-4'
							style={{ color: 'var(--color-accent)' }}
						>
							<Sparkles size={20} className='animate-pulse' />
							<span className='font-mono text-sm'>Привет, меня зовут</span>
							<Sparkles size={20} className='animate-pulse' />
						</div>
					</motion.div>

					{/* Name */}
					<motion.h1
						variants={itemVariants}
						className='text-5xl md:text-7xl font-bold mb-4'
						style={{ color: 'var(--color-text-primary)' }}
					>
						<span className='bg-gradient-to-r from-white via-[var(--color-accent)] to-white bg-clip-text text-transparent'>
							Образцов Александр
						</span>
					</motion.h1>

					{/* Animated Role */}
					<motion.div
						variants={itemVariants}
						className='h-16 flex items-center justify-center'
					>
						<div
							className='text-2xl md:text-3xl font-semibold relative'
							style={{ color: 'var(--color-text-secondary)' }}
						>
							<Code
								className='inline-block mr-2'
								style={{ color: 'var(--color-accent)' }}
								size={28}
							/>
							<motion.span
								key={currentRole}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -20 }}
								transition={{ duration: 0.5 }}
								className='inline-block'
							>
								{roles[currentRole]}
							</motion.span>
						</div>
					</motion.div>

					{/* Description */}
					<motion.p
						variants={itemVariants}
						className='text-lg md:text-xl max-w-2xl mx-auto leading-relaxed'
						style={{ color: 'var(--color-text-secondary)' }}
					>
						Создаю современные веб-приложения с фокусом на{' '}
						<span
							className='font-semibold'
							style={{ color: 'var(--color-accent)' }}
						>
							пользовательский опыт
						</span>{' '}
						и{' '}
						<span
							className='font-semibold'
							style={{ color: 'var(--color-accent)' }}
						>
							производительность
						</span>
						. Специализируюсь на React, TypeScript и современных фронтенд
						технологиях.
					</motion.p>

					{/* CTA Buttons */}
					<motion.div
						variants={itemVariants}
						className='flex flex-col sm:flex-row gap-4 justify-center items-center pt-8'
					>
						<motion.button
							onClick={() => {
								const mainElement = document.querySelector('main')
								if (mainElement) {
									mainElement.scrollTo({
										top: window.innerHeight,
										behavior: 'smooth',
									})
								}
							}}
							className='px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg'
							style={{
								backgroundColor: 'var(--color-accent)',
								color: 'var(--color-dark)',
								boxShadow: '0 0 0 0 rgba(0, 255, 136, 0.25)',
							}}
							whileHover={{
								scale: 1.05,
								boxShadow: '0 10px 25px rgba(0, 255, 136, 0.25)',
							}}
							whileTap={{ scale: 0.95 }}
						>
							Посмотреть работы
						</motion.button>
						<motion.button
							onClick={() => {
								const mainElement = document.querySelector('main')
								if (mainElement) {
									mainElement.scrollTo({
										top: window.innerHeight * 3,
										behavior: 'smooth',
									})
								}
							}}
							className='px-8 py-4 border-2 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105'
							style={{
								borderColor: 'var(--color-accent)',
								color: 'var(--color-accent)',
							}}
							whileHover={{
								scale: 1.05,
								backgroundColor: 'var(--color-accent)',
								color: 'var(--color-dark)',
							}}
							whileTap={{ scale: 0.95 }}
						>
							Связаться со мной
						</motion.button>
					</motion.div>
				</motion.div>
			</div>

			{/* Scroll Indicator */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 1.5, duration: 0.5 }}
				className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
			>
				<motion.div
					animate={{ y: [0, 10, 0] }}
					transition={{ duration: 2, repeat: Infinity }}
					className='flex flex-col items-center cursor-pointer transition-colors'
					style={{ color: 'var(--color-text-secondary)' }}
					whileHover={{ color: 'var(--color-accent)' }}
					onClick={() => {
						const mainElement = document.querySelector('main')
						if (mainElement) {
							mainElement.scrollTo({
								top: window.innerHeight,
								behavior: 'smooth',
							})
						}
					}}
				>
					<span className='text-sm font-mono mb-2'>Скролл</span>
					<ChevronDown size={20} />
				</motion.div>
			</motion.div>
		</div>
	)
}
