import { motion } from 'framer-motion'

const timelineData = [
	{
		year: '2019',
		title: 'Started Coding',
		description: 'Fell in love with programming at 14',
	},
	{
		year: '2022',
		title: 'First Web Development',
		description: 'Built personal websites and small apps',
	},
	{
		year: '2024',
		title: 'Started IT-INCUBATOR Curses',
		description: 'Junior Frontend Developer at local company',
	},
	{
		year: '2024',
		title: 'Full-time Job',
		description: 'Frontend Developer, React specialist',
	},
]

export function StoryCard() {
	return (
		<motion.div
			className='p-8! relative'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, delay: 1.2 }}
		>
			{/* Горизонтальный Timeline */}
			<div className='relative'>
				{/* Горизонтальная линия */}
				<motion.div
					className='absolute top-10 left-8 right-8 h-0.5 bg-black/20'
					initial={{ scaleX: 0 }}
					animate={{ scaleX: 1 }}
					transition={{ duration: 1.5, delay: 1.9 }}
				/>

				{/* Timeline элементы */}
				<div className='flex justify-between'>
					{timelineData.map((item, index) => (
						<motion.div
							key={item.year}
							className='flex flex-col items-center max-w-32'
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 2.1 + index * 0.2 }}
						>
							{/* Год */}
							<motion.div
								className='bg-black text-accent font-bold text-sm px-3! py-1! rounded-full mb-2!'
								initial={{ scale: 0 }}
								animate={{ scale: 1 }}
								transition={{ delay: 2.3 + index * 0.2 }}
							>
								{item.year}
							</motion.div>

							{/* Точка на линии */}
							<motion.div
								className='size-2 bg-black rounded-full mb-4! relative z-10'
								initial={{ scale: 0 }}
								animate={{ scale: 1 }}
								transition={{ delay: 2.5 + index * 0.2 }}
							/>

							{/* Контент */}
							<div className='text-center'>
								<h4 className='text-sm font-bold text-black mb-2! leading-tight'>
									{item.title}
								</h4>
								<p className='text-xs text-black/70 font-light leading-relaxed'>
									{item.description}
								</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</motion.div>
	)
}
