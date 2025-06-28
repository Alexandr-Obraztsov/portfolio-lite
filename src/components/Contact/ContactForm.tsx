import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import confetti from 'canvas-confetti'

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
	const [sendingStatus, setSendingStatus] = useState<
		'idle' | 'sending' | 'success' | 'error'
	>('idle')
	const [error, setError] = useState<string | null>(null)

	// Функция для запуска конфетти
	const fireConfetti = () => {
		const count = 200
		const defaults = {
			origin: { y: 0.7 },
		}

		function fire(particleRatio: number, opts: confetti.Options) {
			confetti({
				...defaults,
				...opts,
				particleCount: Math.floor(count * particleRatio),
			})
		}

		fire(0.25, {
			spread: 26,
			startVelocity: 55,
		})
		fire(0.2, {
			spread: 60,
		})
		fire(0.35, {
			spread: 100,
			decay: 0.91,
			scalar: 0.8,
		})
		fire(0.1, {
			spread: 120,
			startVelocity: 25,
			decay: 0.92,
			scalar: 1.2,
		})
		fire(0.1, {
			spread: 120,
			startVelocity: 45,
		})
	}

	// Запускаем конфетти при успешной отправке
	useEffect(() => {
		if (sendingStatus === 'success') {
			setTimeout(() => {
				fireConfetti()
			}, 500) // Небольшая задержка для лучшего эффекта
		}
	}, [sendingStatus])

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
		setSendingStatus('sending')
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

			setSendingStatus('success')
			// Не очищаем форму сразу, дадим пользователю время насладиться успехом
		} catch (err) {
			setSendingStatus('success')
			setError('Failed to send message. Please try again later.')
			console.error(err)
		}
	}

	const handleSendAnotherMessage = () => {
		setSendingStatus('idle')
		setError(null)
		setFormData({ name: '', email: '', message: '' }) // Очищаем форму только при нажатии кнопки
	}

	// Если сообщение успешно отправлено, показываем благодарность
	if (sendingStatus === 'success') {
		return (
			<motion.div
				className='w-full max-w-2xl px-6! text-center'
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: 'easeOut' }}
			>
				<motion.h2
					className='text-4xl md:text-5xl font-bold text-black mb-3! '
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.4, duration: 0.6 }}
				>
					THANK YOU
				</motion.h2>

				<motion.div
					className='text-black/80 text-lg md:text-xl font-bold uppercase'
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.6, duration: 0.6 }}
				>
					<p>Your message has been successfully sent.</p>
					<p>I appreciate you reaching out and will definitely</p>
					<p>get back to you with feedback soon.</p>
				</motion.div>

				<motion.button
					onClick={handleSendAnotherMessage}
					className='mt-12! bg-black text-white border border-black hover:bg-black/90 hover:text-white py-4! px-8! transition-all duration-300 text-lg font-light tracking-wider uppercase'
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.8, duration: 0.6 }}
					whileHover={{ scale: 1.05, letterSpacing: '0.2em' }}
					whileTap={{ scale: 0.95 }}
				>
					Send Another Message
				</motion.button>
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
						disabled={sendingStatus === 'sending'}
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
						disabled={sendingStatus === 'sending'}
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
						disabled={sendingStatus === 'sending'}
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
						disabled={sendingStatus === 'sending'}
						className='bg-black hover:bg-black/90 text-white border border-black hover:border-accent py-2! px-4! transition-all duration-300 flex items-center justify-center text-[1.2rem] font-light disabled:opacity-50 disabled:cursor-not-allowed'
						whileHover={sendingStatus !== 'sending' ? { scale: 1.05 } : {}}
						whileTap={sendingStatus !== 'sending' ? { scale: 0.95 } : {}}
					>
						{sendingStatus === 'sending' ? (
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
					{error && (
						<motion.p
							className='text-red-500 text-sm'
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.3 }}
						>
							{error}
						</motion.p>
					)}
				</motion.div>
			</form>
		</motion.div>
	)
}
