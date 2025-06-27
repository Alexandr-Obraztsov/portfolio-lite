import { useContext, useState } from 'react'
import { motion } from 'framer-motion'
import { SectorContext } from '../../models/SectorContext'
import SwipeContainer from '../SwipeContainer/SwipeContainer'
import { SwipeChevron } from '../SwipeChevron/SwipeChevron'
import { Mail, Send, User } from 'lucide-react'

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
				className='mb-8'
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				<span className='text-[3rem] md:text-[5rem] lg:text-[7rem] font-black text-black leading-none'>
					CONTACT
				</span>
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
						<div className='relative'>
							<User className='absolute left-4 top-1/2 transform -translate-y-1/2 text-white/90 size-6 z-10' />
							<input
								type='text'
								name='name'
								value={formData.name}
								onChange={handleInputChange}
								placeholder='YOUR NAME'
								className='w-full bg-black border border-black rounded-sm px-14! py-2! text-white placeholder-white/90 focus:outline-none focus:border-accent transition-all duration-300 text-lg font-bold'
								required
							/>
						</div>
					</motion.div>

					{/* Поле email */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.7 }}
					>
						<div className='relative'>
							<Mail className='absolute left-4 top-1/2 transform -translate-y-1/2 text-white/90 size-6 z-10' />
							<input
								type='email'
								name='email'
								value={formData.email}
								onChange={handleInputChange}
								placeholder='YOUR EMAIL'
								className='w-full bg-black border border-black rounded-sm px-14! py-2! text-white placeholder-white/90 focus:outline-none focus:border-accent transition-all duration-300 text-lg font-bold'
								required
							/>
						</div>
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
							placeholder='YOUR MESSAGE'
							rows={6}
							className='w-full bg-black border border-black rounded-sm p-3! text-white placeholder-white/90 focus:outline-none focus:border-accent transition-all duration-300 resize-none text-lg font-bold'
							required
						/>
					</motion.div>

					{/* Кнопка отправки */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.9 }}
					>
						<button
							type='submit'
							className='w-full bg-black hover:bg-black/90 text-white border border-black hover:border-accent font-bold py-2! px-4! rounded-sm transition-all duration-300 flex items-center justify-center gap-3 group text-lg'
						>
							<span className='text-[1.2rem]'>SEND MESSAGE</span>
							<Send className='size-6 group-hover:translate-x-1 transition-transform duration-300' />
						</button>
					</motion.div>
				</form>
			</motion.div>

			<SwipeChevron sector='menu' direction='up' />
		</SwipeContainer>
	)
}
