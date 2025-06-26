import { motion } from 'framer-motion'
import { User, MapPin, Calendar, Coffee, Code2, Heart, Bot } from 'lucide-react'
import ScrollIndicator from '../ScrollIndicator/ScrollIndicator'

const personalInfo = [
	{
		icon: MapPin,
		label: 'Локация',
		value: 'Минск',
	},
	{
		icon: Calendar,
		label: 'Опыт',
		value: '1+ года',
	},
	{
		icon: Coffee,
		label: 'Любимый напиток',
		value: 'Кофе ☕',
	},
	{
		icon: Code2,
		label: 'Любимый язык',
		value: 'TypeScript',
	},
]

const interests = [
	'💻 Frontend',
	'⚡ Производительность',
	'🎯 UX/UI',
	'🔥 Красивый код',
	'🔧 Новые инструменты',
	'📖 Обучение',
]

export default function About() {
	return (
		<div className='w-full min-h-screen pt-24 px-4 sm:px-6 lg:px-8 bg-white/[0.02] flex items-center justify-center relative pb-32'>
			<div className='max-w-6xl mx-auto'>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className='text-center mb-16'
				>
					<div className='flex items-center justify-center gap-2 mb-4'>
						<User className='text-accent' size={24} />
						<span className='font-mono text-accent text-sm uppercase tracking-wider'>
							Познакомимся
						</span>
					</div>
					<h2 className='text-4xl md:text-5xl font-bold text-text-primary mb-6'>
						Обо мне
					</h2>
					<p className='text-lg text-text-secondary max-w-2xl mx-auto'>
						Привет! Я frontend-разработчик, который любит создавать красивые и
						функциональные веб-приложения
					</p>
				</motion.div>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>
					{/* Левая колонка - Основная информация */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						viewport={{ once: true }}
						className='space-y-8'
					>
						<div className='bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10'>
							<h3 className='text-2xl font-semibold text-text-primary mb-6'>
								Моя история
							</h3>
							<div className='space-y-4 text-text-secondary leading-relaxed'>
								<p>
									Начал свой путь в программировании с изучения основ
									веб-разработки. Постепенно углублялся в современные технологии
									и фреймворки.
								</p>
								<p>
									Сегодня специализируюсь на создании интерактивных
									пользовательских интерфейсов с использованием React,
									TypeScript и современных инструментов разработки.
								</p>
								<p>
									Всегда стремлюсь к совершенству в коде и постоянно изучаю
									новые подходы к решению задач. Верю, что хороший код должен
									быть не только функциональным, но и красивым.
								</p>
							</div>
						</div>

						{/* Личная информация */}
						<div className='grid grid-cols-2 gap-4'>
							{personalInfo.map((info, index) => (
								<motion.div
									key={info.label}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
									viewport={{ once: true }}
									className='bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 text-center group hover:border-accent/30 transition-all duration-300'
								>
									<div className='inline-flex p-2 bg-accent/20 rounded-full mb-3 group-hover:bg-accent/30 transition-colors'>
										<info.icon className='text-accent' size={20} />
									</div>
									<div className='text-xs text-text-secondary mb-1'>
										{info.label}
									</div>
									<div className='text-sm font-medium text-text-primary'>
										{info.value}
									</div>
								</motion.div>
							))}
						</div>
					</motion.div>

					{/* Правая колонка - Интересы и цели */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.3 }}
						viewport={{ once: true }}
						className='space-y-8'
					>
						{/* Интересы */}
						<div className='bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 not-sm:hidden'>
							<h3 className='text-2xl font-semibold text-text-primary mb-6'>
								Интересы
							</h3>
							<div className='grid grid-cols-2 gap-3'>
								{interests.map((interest, index) => (
									<motion.div
										key={interest}
										initial={{ opacity: 0, scale: 0.9 }}
										whileInView={{ opacity: 1, scale: 1 }}
										transition={{ duration: 0.4, delay: index * 0.1 + 0.5 }}
										viewport={{ once: true }}
										className='bg-white/5 rounded-lg p-3 text-center border border-white/10 hover:border-accent/30 transition-all duration-300 group'
									>
										<span className='text-sm text-text-secondary group-hover:text-text-primary transition-colors'>
											{interest}
										</span>
									</motion.div>
								))}
							</div>
						</div>

						{/* Философия */}
						<div className='bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10'>
							<h3 className='text-2xl font-semibold text-text-primary mb-6'>
								Моя философия
							</h3>
							<div className='space-y-4'>
								<div className='flex items-start gap-3'>
									<Heart className='text-accent mt-1 flex-shrink-0' size={20} />
									<p className='text-text-secondary'>
										<span className='text-accent font-medium'>
											Пунктуальность
										</span>{' '}
										— таски должны быть закрыты в срок
									</p>
								</div>
								<div className='flex items-start gap-3'>
									<Code2 className='text-accent mt-1 flex-shrink-0' size={20} />
									<p className='text-text-secondary'>
										<span className='text-accent font-medium'>Простота</span> —
										сложные вещи должны выглядеть просто
									</p>
								</div>
								<div className='flex items-start gap-3'>
									<Bot className='text-accent mt-1 flex-shrink-0' size={20} />
									<p className='text-text-secondary'>
										<span className='text-accent font-medium'>AI</span> — не
										можешь победить - возглавь
									</p>
								</div>
							</div>
						</div>

						{/* Fun Fact */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.6 }}
							viewport={{ once: true }}
							className='bg-gradient-to-r from-accent/10 to-accent/5 rounded-xl p-6 border border-accent/20'
						>
							<h4 className='text-lg font-semibold text-text-primary mb-2'>
								💡 Fun Fact
							</h4>
							<p className='text-text-secondary text-sm'>
								Написал свою первую строку кода в{' '}
								<span className='text-accent font-mono'>
									console.log("Hello World!")
								</span>{' '}
								и до сих пор получаю удовольствие от каждой новой строки!
							</p>
						</motion.div>
					</motion.div>
				</div>
			</div>

			{/* Scroll Indicator */}
			<ScrollIndicator nextSection='Проекты' />
		</div>
	)
}
