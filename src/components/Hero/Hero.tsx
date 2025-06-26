import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface HeroProps {
	accentColor: string
	isMobile: boolean
}

const Hero = ({ accentColor, isMobile }: HeroProps) => {
	const [displayText, setDisplayText] = useState('')
	const fullText = 'Frontend Developer'

	useEffect(() => {
		let index = 0
		const timer = setInterval(() => {
			if (index <= fullText.length) {
				setDisplayText(fullText.slice(0, index))
				index++
			} else {
				clearInterval(timer)
			}
		}, 100)

		return () => clearInterval(timer)
	}, [])

	const handleProjectsClick = () => {
		;(
			window as unknown as { goToSection: (index: number) => void }
		).goToSection(2)
	}

	const handleContactClick = () => {
		;(
			window as unknown as { goToSection: (index: number) => void }
		).goToSection(4)
	}

	return (
		<section className='relative h-screen flex items-center justify-center overflow-hidden pt-16'>
			{/* Background particles */}
			<div className='absolute inset-0'>
				{!isMobile &&
					[...Array(20)].map((_, i) => (
						<motion.div
							key={i}
							className='absolute w-1 h-1 rounded-full opacity-30'
							animate={{
								x: [0, Math.random() * 100 - 50],
								y: [0, Math.random() * 100 - 50],
								opacity: [0.3, 0.8, 0.3],
							}}
							transition={{
								duration: 3 + Math.random() * 2,
								repeat: Infinity,
								ease: 'easeInOut',
							}}
							style={{
								left: `${Math.random() * 100}%`,
								top: `${Math.random() * 100}%`,
								backgroundColor: accentColor,
							}}
						/>
					))}
			</div>

			<div
				className={`relative z-10 text-center px-4 ${
					isMobile ? 'px-6' : 'px-8'
				}`}
			>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className='space-y-6'
				>
					{/* Main title */}
					<motion.h1
						className={`font-bold text-white leading-tight ${
							isMobile ? 'text-4xl sm:text-5xl' : 'text-6xl lg:text-7xl'
						}`}
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.8, delay: 0.2 }}
					>
						Hi, I'm{' '}
						<span
							className='bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'
							style={{
								backgroundImage: `linear-gradient(135deg, ${accentColor}, white)`,
								WebkitBackgroundClip: 'text',
								WebkitTextFillColor: 'transparent',
							}}
						>
							Developer
						</span>
					</motion.h1>

					{/* Animated role */}
					<motion.div
						className={`font-mono ${isMobile ? 'text-lg' : 'text-xl'}`}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.5 }}
					>
						<span className='text-gray-400'>&gt; </span>
						<span style={{ color: accentColor }}>{displayText}</span>
						<motion.span
							className='inline-block w-0.5 h-6 ml-1'
							style={{ backgroundColor: accentColor }}
							animate={{ opacity: [1, 0] }}
							transition={{ duration: 0.8, repeat: Infinity }}
						/>
					</motion.div>

					{/* Description */}
					<motion.p
						className={`text-gray-300 max-w-2xl mx-auto leading-relaxed ${
							isMobile ? 'text-base px-2' : 'text-lg'
						}`}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.8 }}
					>
						I create beautiful, functional, and user-centered digital
						experiences. Passionate about clean code and modern technologies.
					</motion.p>

					{/* Action buttons */}
					<motion.div
						className={`flex gap-4 justify-center ${
							isMobile ? 'flex-col items-center space-y-4' : 'flex-row'
						}`}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 1 }}
					>
						<motion.button
							onClick={handleProjectsClick}
							className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
								isMobile ? 'w-64' : ''
							}`}
							style={{
								backgroundColor: accentColor,
								color: 'black',
							}}
							whileHover={{ scale: 1.05, y: -2 }}
							whileTap={{ scale: 0.95 }}
						>
							View Projects
						</motion.button>

						<motion.button
							onClick={handleContactClick}
							className={`px-8 py-3 rounded-lg border-2 font-semibold transition-all duration-300 ${
								isMobile ? 'w-64' : ''
							}`}
							style={{
								borderColor: accentColor,
								color: accentColor,
							}}
							whileHover={{
								scale: 1.05,
								y: -2,
								backgroundColor: accentColor,
								color: 'black',
							}}
							whileTap={{ scale: 0.95 }}
						>
							Get In Touch
						</motion.button>
					</motion.div>

					{/* Scroll indicator - только на десктопе */}
					{!isMobile && (
						<motion.div
							className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 1.5 }}
						>
							<motion.div
								className='w-6 h-10 border-2 rounded-full flex justify-center'
								style={{ borderColor: accentColor }}
								animate={{ y: [0, 10, 0] }}
								transition={{ duration: 1.5, repeat: Infinity }}
							>
								<motion.div
									className='w-1 h-3 rounded-full mt-2'
									style={{ backgroundColor: accentColor }}
									animate={{ opacity: [1, 0.3, 1] }}
									transition={{ duration: 1.5, repeat: Infinity }}
								/>
							</motion.div>
						</motion.div>
					)}
				</motion.div>
			</div>
		</section>
	)
}

export default Hero
