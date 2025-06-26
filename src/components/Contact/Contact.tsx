import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react'
import { Telegram } from '../../assets/telegram'

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
		color: 'hover:text-white',
	},
	{
		icon: Linkedin,
		label: 'LinkedIn',
		href: 'https://www.linkedin.com/in/obraztsov-alexandr-047369349/',
		color: 'hover:text-blue-400',
	},
	{
		icon: Telegram,
		label: 'Telegram',
		href: 'https://t.me/obraztsov_alexandr',
		color: 'hover:text-[#6cc8e1]',
	},
]

export default function Contact() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	})
	const [isSubmitting, setIsSubmitting] = useState(false)

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
		<div className='w-full pt-24 pb-12 px-4 relative'>
			<div className='max-w-7xl mx-auto'>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className='text-center mb-16'
				>
					<div className='flex items-center justify-center gap-2 mb-4'>
						<Mail className='text-accent' size={24} />
						<span className='font-mono text-accent text-sm uppercase tracking-wider'>
							Связаться со мной
						</span>
					</div>
					<h2 className='text-4xl md:text-5xl font-bold text-text-primary mb-6'>
						Давайте работать вместе
					</h2>
					<p className='text-lg text-text-secondary max-w-2xl mx-auto'>
						Готов к новым проектам и интересным задачам. Свяжитесь со мной,
						чтобы обсудить ваши идеи
					</p>
				</motion.div>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
					{/* Contact Information */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className='space-y-8'
					>
						<div>
							<h3 className='text-2xl font-bold text-text-primary mb-6'>
								Контактная информация
							</h3>
							<div className='space-y-6'>
								{contactInfo.map((contact, index) => (
									<motion.a
										key={contact.label}
										href={contact.href}
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.5, delay: index * 0.1 }}
										viewport={{ once: true }}
										className='flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:border-accent/50 transition-all duration-300 group'
									>
										<div className='p-2 bg-accent/20 rounded-lg group-hover:bg-accent/30 transition-colors'>
											<contact.icon className='text-accent' size={20} />
										</div>
										<div>
											<p className='text-text-secondary text-sm'>
												{contact.label}
											</p>
											<p className='text-text-primary font-medium group-hover:text-accent transition-colors'>
												{contact.value}
											</p>
										</div>
									</motion.a>
								))}
							</div>
						</div>

						{/* Social Links */}
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.3 }}
							viewport={{ once: true }}
							className='flex flex-col not-lg:items-center not-lg:justify-center'
						>
							<h4 className='text-lg font-semibold text-text-primary mb-4'>
								Социальные сети
							</h4>
							<div className='flex gap-4'>
								{socialLinks.map((social, index) => (
									<motion.a
										key={social.label}
										href={social.href}
										target='_blank'
										rel='noopener noreferrer'
										initial={{ opacity: 0, scale: 0 }}
										whileInView={{ opacity: 1, scale: 1 }}
										transition={{ duration: 0.5, delay: index * 0.1 }}
										viewport={{ once: true }}
										whileHover={{ scale: 1.1 }}
										whileTap={{ scale: 0.9 }}
										className={`p-3 bg-white/5 rounded-lg border border-white/10 hover:border-accent/50 text-text-secondary ${social.color} transition-all duration-300`}
									>
										<social.icon size={20} />
									</motion.a>
								))}
							</div>
						</motion.div>
					</motion.div>

					{/* Contact Form */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className='bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10'
					>
						<h3 className='text-2xl font-bold text-text-primary mb-6'>
							Отправить сообщение
						</h3>
						<form onSubmit={handleSubmit} className='space-y-6'>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
								<div>
									<label
										htmlFor='name'
										className='block text-text-primary font-medium mb-2'
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
										className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-text-primary placeholder-text-secondary focus:border-accent focus:outline-none transition-colors'
										placeholder='Ваше имя'
									/>
								</div>
								<div>
									<label
										htmlFor='email'
										className='block text-text-primary font-medium mb-2'
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
										className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-text-primary placeholder-text-secondary focus:border-accent focus:outline-none transition-colors'
										placeholder='your@email.com'
									/>
								</div>
							</div>

							<div>
								<label
									htmlFor='subject'
									className='block text-text-primary font-medium mb-2'
								>
									Тема
								</label>
								<input
									type='text'
									id='subject'
									name='subject'
									value={formData.subject}
									onChange={handleChange}
									className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-text-primary placeholder-text-secondary focus:border-accent focus:outline-none transition-colors'
									placeholder='Тема сообщения'
								/>
							</div>

							<div>
								<label
									htmlFor='message'
									className='block text-text-primary font-medium mb-2'
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
									className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-text-primary placeholder-text-secondary focus:border-accent focus:outline-none transition-colors resize-none'
									placeholder='Расскажите о вашем проекте...'
								></textarea>
							</div>

							<motion.button
								type='submit'
								disabled={isSubmitting}
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
								className='w-full px-8 py-4 bg-accent text-dark font-semibold rounded-lg hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2'
							>
								{isSubmitting ? (
									<>
										<div className='w-5 h-5 border-2 border-dark/30 border-t-dark rounded-full animate-spin'></div>
										Отправка...
									</>
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
