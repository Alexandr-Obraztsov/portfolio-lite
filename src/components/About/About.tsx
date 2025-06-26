export default function About() {
	return (
		<div className='min-h-screen bg-[#F4D03F] flex items-center justify-center px-8'>
			<div className='max-w-4xl mx-auto'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
					{/* Левая часть - заголовок */}
					<div>
						<h2 className='text-6xl md:text-8xl font-black text-black mb-8'>
							AB<span className='opacity-50'>OUT</span>
						</h2>
					</div>

					{/* Правая часть - текст */}
					<div className='space-y-6'>
						<p className='text-lg text-black leading-relaxed'>
							Hello, I'm Alexandr Obraztsov. I've been in frontend development
							for over a year. My development philosophy has always been one of
							clarity – clarity of code and user experience.
						</p>

						<p className='text-lg text-black leading-relaxed'>
							Achieving a great product requires the discipline of restraint.
							Continuous learning, self-improvement, and humility are the
							cornerstones of my practice.
						</p>

						<p className='text-lg text-black leading-relaxed'>
							Let me help you bring your ideas to life with modern web
							technologies.
						</p>

						{/* Навыки */}
						<div className='pt-8'>
							<div className='grid grid-cols-2 gap-4 text-sm text-black/80 uppercase tracking-wider font-medium'>
								<div>• React & Next.js</div>
								<div>• TypeScript</div>
								<div>• Tailwind CSS</div>
								<div>• JavaScript ES6+</div>
								<div>• Git & GitHub</div>
								<div>• Responsive Design</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
