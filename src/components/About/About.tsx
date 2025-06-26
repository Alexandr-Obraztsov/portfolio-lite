export default function About() {
	return (
		<div className='min-h-screen bg-white flex items-center justify-center px-8'>
			<div className='max-w-4xl mx-auto'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
					{/* Левая часть - заголовок */}
					<div>
						<h2 className='text-6xl md:text-8xl font-black text-black mb-8'>
							Ab<span className='text-gray-400'>out</span>
						</h2>
					</div>

					{/* Правая часть - текст */}
					<div className='space-y-6'>
						<p className='text-lg text-gray-700 leading-relaxed'>
							Hello, I'm Your Name. I've been in web development for over 5
							years. My development philosophy has always been one of clarity –
							clarity of code and user experience.
						</p>

						<p className='text-lg text-gray-700 leading-relaxed'>
							Achieving a great product requires the discipline of restraint.
							Continuous learning, self-improvement, and humility are the
							cornerstones of my practice.
						</p>

						<p className='text-lg text-gray-700 leading-relaxed'>
							Let me help you bring your ideas to life.
						</p>

						{/* Навыки */}
						<div className='pt-8'>
							<div className='grid grid-cols-2 gap-4 text-sm text-gray-600 uppercase tracking-wider'>
								<div>• React & Next.js</div>
								<div>• TypeScript</div>
								<div>• Node.js & Express</div>
								<div>• MongoDB & PostgreSQL</div>
								<div>• AWS & Docker</div>
								<div>• UI/UX Design</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
