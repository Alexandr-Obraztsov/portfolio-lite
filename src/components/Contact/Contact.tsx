import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react'

interface ContactProps {
	accentColor: string
}

const Contact = ({ accentColor }: ContactProps) => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	})
	const [isSubmitting, setIsSubmitting] = useState(false)

	const contactInfo = [
		{
			icon: Mail,
			label: 'Email',
			value: 'obraztsov.official@gmail.com',
			href: 'mailto:obraztsov.official@gmail.com',
		},
		{
			icon: Phone,
			label: 'Телефон',
			value: '+375 (33) 992-29-43',
			href: 'tel:+375339922943',
		},
		{
			icon: MapPin,
			label: 'Локация',
			value: 'Минск, Беларусь',
			href: '#',
		},
	]

	const socialLinks = [
		{
			icon: Github,
			label: 'GitHub',
			href: 'https://github.com/Alexandr-Obraztsov',
		},
		{
			icon: Linkedin,
			label: 'LinkedIn',
			href: 'https://www.linkedin.com/in/obraztsov-alexandr-047369349/',
		},
		{
			icon: Mail,
			label: 'Telegram',
			href: 'https://t.me/obraztsov_alexandr',
		},
	]

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setIsSubmitting(true)

		// Simulate form submission
		await new Promise(resolve => setTimeout(resolve, 2000))

		console.log('Form submitted:', formData)
		setIsSubmitting(false)
		setFormData({ name: '', email: '', subject: '', message: '' })
	}

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData(prev => ({
			...prev,
			[e.target.name]: e.target.value,
		}))
	}

	return (
		<div className='h-full flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20'>
			<div className='max-w-6xl mx-auto w-full'>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className='text-center mb-16'
				>
					<h2 className='text-4xl sm:text-5xl font-bold text-white mb-6'>
						Контакты
					</h2>
					<p className='text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed'>
						Готов к новым проектам и интересным задачам. Свяжитесь со мной,
						чтобы обсудить ваши идеи
					</p>
				</motion.div>

				<div className='grid lg:grid-cols-2 gap-12'>
					{/* Contact Information */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className='space-y-8'
					>
						<div className='bg-gray-900/50 rounded-lg p-6 border border-gray-800'>
							<h3 className='text-2xl font-semibold text-white mb-6 flex items-center gap-3'>
								<span className='text-2xl'>📞</span>
								Контактная информация
							</h3>
							<div className='space-y-4'>
								{contactInfo.map((contact, index) => (
									<motion.a
										key={contact.label}
										href={contact.href}
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
										className='flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-gray-600 transition-all duration-300 group'
									>
										<div
											className='p-2 rounded-lg transition-colors'
											style={{ backgroundColor: `${accentColor}20` }}
										>
											<contact.icon size={20} style={{ color: accentColor }} />
										</div>
										<div>
											<p className='text-gray-400 text-sm'>{contact.label}</p>
											<p className='text-white font-medium group-hover:opacity-80 transition-opacity'>
												{contact.value}
											</p>
										</div>
									</motion.a>
								))}
							</div>
						</div>

						{/* Social Links */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.6 }}
							className='bg-gray-900/50 rounded-lg p-6 border border-gray-800'
						>
							<h3 className='text-2xl font-semibold text-white mb-6 flex items-center gap-3'>
								<span className='text-2xl'>🌐</span>
								Социальные сети
							</h3>
							<div className='flex gap-4'>
								{socialLinks.map((social, index) => (
									<motion.a
										key={social.label}
										href={social.href}
										target='_blank'
										rel='noopener noreferrer'
										initial={{ opacity: 0, scale: 0.8 }}
										animate={{ opacity: 1, scale: 1 }}
										transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
										whileHover={{ scale: 1.1 }}
										whileTap={{ scale: 0.9 }}
										className='p-3 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-gray-600 text-gray-400 hover:text-white transition-all duration-300'
									>
										<social.icon size={20} />
									</motion.a>
								))}
							</div>
						</motion.div>
					</motion.div>

					{/* Contact Form */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className='bg-gray-900/50 rounded-lg p-6 border border-gray-800'
					>
						<h3 className='text-2xl font-semibold text-white mb-6 flex items-center gap-3'>
							<span className='text-2xl'>✉️</span>
							Отправить сообщение
						</h3>
						<form onSubmit={handleSubmit} className='space-y-6'>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
								<div>
									<label
										htmlFor='name'
										className='block text-white font-medium mb-2'
									>
										Имя *
									</label>
									<input
										type='text'
										id='name'
										name='name'
										value={formData.name}
										onChange={handleChange}
										required
										className='w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-gray-600 focus:outline-none transition-colors'
										placeholder='Ваше имя'
									/>
								</div>
								<div>
									<label
										htmlFor='email'
										className='block text-white font-medium mb-2'
									>
										Email *
									</label>
									<input
										type='email'
										id='email'
										name='email'
										value={formData.email}
										onChange={handleChange}
										required
										className='w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-gray-600 focus:outline-none transition-colors'
										placeholder='your@email.com'
									/>
								</div>
							</div>

							<div>
								<label
									htmlFor='subject'
									className='block text-white font-medium mb-2'
								>
									Тема
								</label>
								<input
									type='text'
									id='subject'
									name='subject'
									value={formData.subject}
									onChange={handleChange}
									className='w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-gray-600 focus:outline-none transition-colors'
									placeholder='Тема сообщения'
								/>
							</div>

							<div>
								<label
									htmlFor='message'
									className='block text-white font-medium mb-2'
								>
									Сообщение *
								</label>
								<textarea
									id='message'
									name='message'
									value={formData.message}
									onChange={handleChange}
									required
									rows={5}
									className='w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-gray-600 focus:outline-none transition-colors resize-none'
									placeholder='Расскажите о вашем проекте...'
								/>
							</div>

							<motion.button
								type='submit'
								disabled={isSubmitting}
								className='w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 border flex items-center justify-center gap-2'
								style={{
									backgroundColor: accentColor,
									borderColor: accentColor,
									color: 'black',
								}}
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
							>
								{isSubmitting ? (
									<div className='w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin' />
								) : (
									<>
										<Send size={18} />
										Отправить сообщение
									</>
								)}
							</motion.button>
						</form>
					</motion.div>
				</div>
			</div>
		</div>
	)
}

export default Contact
