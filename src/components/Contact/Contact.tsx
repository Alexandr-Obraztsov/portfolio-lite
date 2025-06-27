import { useContext, useState } from 'react'
import { motion } from 'framer-motion'
import { SectorContext } from '../../models/SectorContext'
import SwipeContainer from '../SwipeContainer/SwipeContainer'
import { SwipeChevron } from '../SwipeChevron/SwipeChevron'

export function Contact() {
	const { setCurrentSector } = useContext(SectorContext)
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	})

	const handleSwipeUp = () => {
		setCurrentSector('menu')
	}

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target
		setFormData(prev => ({
			...prev,
			[name]: value,
		}))
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		// Здесь можно добавить логику отправки формы
		console.log('Form submitted:', formData)
		alert('Спасибо за сообщение! Я свяжусь с вами в ближайшее время.')
	}

	return (
		<SwipeContainer
			className='min-h-screen bg-accent flex flex-col items-center justify-center relative overflow-hidden px-6!'
			onSwipeUp={handleSwipeUp}
		>
			{/* Заголовок CONTACT */}
			<motion.div
				className='mb-8 relative flex justify-center 
				text-[3rem] 
				sm:text-[4rem] 
				md:text-[5rem] 
				lg:text-[7rem] 
				font-black text-black leading-none'
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				C
				<motion.div
					className='relative my-1! md:my-3! bg-black text-accent rounded-full inline-flex items-center justify-center mx-2 
					
					font-bold whitespace-nowrap overflow-hidden 
					text-[0.8rem] [--initial-width:40px] [--max-width:140px]
					sm:text-[1.6rem] sm:[--initial-width:55px] sm:[--max-width:300px]
					md:text-[2.4rem] md:[--initial-width:55px] md:[--max-width:400px]
					lg:text-[3.2rem] lg:[--initial-width:85px] lg:[--max-width:500px]'
					initial={{ width: 'var(--initial-width)' }}
					animate={{ width: 'var(--max-width)' }}
					transition={{ duration: 0.5, ease: 'circOut', delay: 0.5 }}
				>
					<motion.div
						initial={{ y: '-200%' }}
						animate={{ y: '0%' }}
						transition={{ duration: 0.5, ease: 'backOut', delay: 1 }}
						className='relative'
					>
						HOW CAN I HELP?
					</motion.div>
				</motion.div>
				NTACT
			</motion.div>

			{/* Подзаголовок */}
			<motion.div
				className='mb-6! md:mb-12! text-center'
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.2 }}
			>
				<span className='text-[1.2rem] md:text-[1.5rem] lg:text-[2rem] font-bold text-black/80'>
					LET'S WORK TOGETHER
				</span>
			</motion.div>

			{/* Форма */}
			<motion.div
				className='w-full max-w-2xl'
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.4 }}
			>
				<form onSubmit={handleSubmit} className='space-y-4!'>
					{/* Поле имени */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.6 }}
					>
						<input
							type='text'
							name='name'
							value={formData.name}
							onChange={handleInputChange}
							placeholder='Who are you?'
							className='w-full bg-black border border-black rounded-sm px-5! py-3! text-white placeholder-white/60 focus:outline-none focus:border-accent transition-all duration-300 text-lg font-light'
							required
						/>
					</motion.div>

					{/* Поле email */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.7 }}
					>
						<input
							type='email'
							name='email'
							value={formData.email}
							onChange={handleInputChange}
							placeholder='What`s your email?'
							className='w-full bg-black border border-black rounded-sm px-5! py-3! text-white placeholder-white/60 focus:outline-none focus:border-accent transition-all duration-300 text-lg font-light'
							required
						/>
					</motion.div>

					{/* Поле сообщения */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.8 }}
					>
						<textarea
							name='message'
							value={formData.message}
							onChange={handleInputChange}
							placeholder='Tell me your ideas'
							rows={6}
							className='w-full bg-black border border-black py-3! px-5! text-white placeholder-white/60 focus:outline-none focus:border-accent transition-all duration-300 resize-none text-lg font-light'
							required
						/>
					</motion.div>

					{/* Кнопка отправки */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.9 }}
						className='flex justify-center'
					>
						<button
							type='submit'
							className=' bg-black hover:bg-black/90 text-white border border-black hover:border-accent py-2! px-4! transition-all duration-300 flex items-center justify-center text-[1.2rem] font-light'
						>
							SUBMIT
						</button>
					</motion.div>
				</form>
			</motion.div>

			<SwipeChevron sector='menu' direction='up' />
		</SwipeContainer>
	)
}
