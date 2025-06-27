import { useState } from 'react'
import { motion } from 'framer-motion'

interface FormData {
	name: string
	email: string
	message: string
}

export function ContactForm() {
	const [formData, setFormData] = useState<FormData>({
		name: '',
		email: '',
		message: '',
	})

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
	)
}
