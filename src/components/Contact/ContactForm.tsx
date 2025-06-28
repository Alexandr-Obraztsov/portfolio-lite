import { useState } from 'react'
import { motion } from 'framer-motion'
import { PATHS } from '../../const/PATHS'
import { useNavigate } from 'react-router'

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
	const [isLoading, setIsLoading] = useState(false)

	const navigate = useNavigate()
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
		setIsLoading(true)

		const response = await fetch('/api/sendMessage', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formData),
		})

		if (!response.ok) {
			console.log('Network response was not ok')
		}

		setIsLoading(false)
		navigate(PATHS.thanks)
	}

	return (
		<motion.div
			className='w-full max-w-2xl px-6!'
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: 0.4 }}
		>
			{/* Убираем оверлей - теперь форма полностью заменяется */}

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
						disabled={isLoading}
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
						disabled={isLoading}
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
						disabled={isLoading}
					/>
				</motion.div>

				{/* Кнопка отправки и сообщение об ошибке */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.9 }}
					className='flex flex-col items-center gap-4!'
				>
					<motion.button
						type='submit'
						disabled={isLoading}
						className='bg-black hover:bg-black/90 text-white border border-black hover:border-accent py-2! px-4! transition-all duration-300 flex items-center justify-center text-[1.2rem] font-light disabled:opacity-50 disabled:cursor-not-allowed'
						whileHover={isLoading ? { scale: 1.05 } : {}}
						whileTap={isLoading ? { scale: 0.95 } : {}}
					>
						{isLoading ? (
							<motion.span
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								className='flex items-center gap-2!'
							>
								<motion.div
									className='w-4! h-4! border-2! border-white border-t-transparent rounded-full'
									animate={{ rotate: 360 }}
									transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
								/>
								SENDING...
							</motion.span>
						) : (
							'SUBMIT'
						)}
					</motion.button>
				</motion.div>
			</form>
		</motion.div>
	)
}
