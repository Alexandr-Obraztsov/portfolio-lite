export default function Portfolio() {
	const projects = [
		{
			title: 'E-Commerce Platform',
			category: 'Full Stack Web App',
		},
		{
			title: 'Task Manager Dashboard',
			category: 'React Application',
		},
		{
			title: 'Weather Forecast App',
			category: 'API Integration',
		},
		{
			title: 'Portfolio Website',
			category: 'Personal Branding',
		},
		{
			title: 'Social Media Dashboard',
			category: 'Data Visualization',
		},
		{
			title: 'Landing Page Collection',
			category: 'UI/UX Design',
		},
	]

	return (
		<div className='min-h-screen bg-[#F4D03F] py-20 px-8'>
			<div className='max-w-6xl mx-auto'>
				{/* Заголовок */}
				<div className='text-center mb-16'>
					<h2 className='text-6xl md:text-8xl font-black text-black mb-4'>
						PORTF<span className='opacity-50'>OLIO</span>
					</h2>
				</div>

				{/* Список проектов */}
				<div className='space-y-8'>
					{projects.map((project, index) => (
						<div
							key={index}
							className='group cursor-pointer border-b border-black/20 pb-4 hover:border-black/50 transition-colors'
						>
							<div className='flex flex-col md:flex-row md:items-center md:justify-between'>
								<h3 className='text-2xl md:text-3xl font-black text-black mb-2 md:mb-0 hover:opacity-70 transition-opacity'>
									{project.title}
								</h3>
								<p className='text-sm text-black/70 uppercase tracking-wider'>
									{project.category}
								</p>
							</div>
						</div>
					))}
				</div>

				{/* Дополнительная информация */}
				<div className='text-center mt-16'>
					<p className='text-lg text-black/80'>
						More projects available on GitHub
					</p>
					<a
						href='https://github.com/Alexandr-Obraztsov'
						target='_blank'
						rel='noopener noreferrer'
						className='inline-block mt-4 text-black font-bold hover:opacity-70 transition-opacity'
					>
						github.com/Alexandr-Obraztsov →
					</a>
				</div>
			</div>
		</div>
	)
}
