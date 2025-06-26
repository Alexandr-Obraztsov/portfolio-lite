export default function Portfolio() {
	const projects = [
		{
			title: 'Air Force Publicity',
			category: 'Branding & Design',
			image: '/project1.jpg',
		},
		{
			title: 'By Navarra Rebrand',
			category: 'Brand Identity',
			image: '/project2.jpg',
		},
		{
			title: 'Hair Expo Australia',
			category: 'Event Design',
			image: '/project3.jpg',
		},
		{
			title: "Horse's Head",
			category: 'Logo Design',
			image: '/project4.jpg',
		},
		{
			title: 'Mining / Industrial Expos',
			category: 'Exhibition Design',
			image: '/project5.jpg',
		},
		{
			title: 'No Readgrets Book Club',
			category: 'Brand Identity',
			image: '/project6.jpg',
		},
	]

	return (
		<div className='min-h-screen bg-white py-20 px-8'>
			<div className='max-w-6xl mx-auto'>
				{/* Заголовок */}
				<div className='text-center mb-16'>
					<h2 className='text-6xl md:text-8xl font-black text-black mb-4'>
						PortfOLio
					</h2>
				</div>

				{/* Сетка проектов */}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{projects.map((project, index) => (
						<div key={index} className='group cursor-pointer'>
							{/* Изображение проекта */}
							<div className='aspect-square bg-gray-200 mb-4 overflow-hidden transition-all duration-300 hover:scale-105'>
								<div className='w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center'>
									<span className='text-gray-600 text-sm'>{project.title}</span>
								</div>
							</div>

							{/* Информация о проекте */}
							<div className='text-left'>
								<h3 className='text-lg font-medium text-black mb-1 hover-underline'>
									{project.title}
								</h3>
								<p className='text-sm text-gray-600 uppercase tracking-wider'>
									{project.category}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
