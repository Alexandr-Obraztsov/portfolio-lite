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
	const [isSending, setIsSending] = useState(false)
	const [isSent, setIsSent] = useState(false)
	const [error, setError] = useState<string | null>(null)

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target
		setFormData(prev => ({
			...prev,
			[name]: value,
		}))
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setIsSending(true)
		setError(null)

		try {
			const response = await fetch('/api/sendMessage', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			})

			if (!response.ok) {
				throw new Error('Network response was not ok')
			}

			setIsSent(true)
			setFormData({ name: '', email: '', message: '' }) // Очистить форму
		} catch (err) {
			setError('Failed to send message. Please try again later.')
			console.error(err)
		} finally {
			setIsSending(false)
		}
	}

	if (isSent) {
		return (
			<motion.div
				className='text-center text-white text-xl'
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
			>
				Thank you! Your message has been sent.
			</motion.div>
		)
	}

	return (
		<motion.div
			className='w-full max-w-2xl px-6!'
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

				{/* Кнопка отправки и сообщение об ошибке */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.9 }}
					className='flex flex-col items-center gap-4!'
				>
					<button
						type='submit'
						disabled={isSending}
						className=' bg-black hover:bg-black/90 text-white border border-black hover:border-accent py-2! px-4! transition-all duration-300 flex items-center justify-center text-[1.2rem] font-light disabled:opacity-50 disabled:cursor-not-allowed'
					>
						{isSending ? 'SENDING...' : 'SUBMIT'}
					</button>
					{error && <p className='text-red-500 text-sm'>{error}</p>}
				</motion.div>
			</form>
		</motion.div>
	)
}
