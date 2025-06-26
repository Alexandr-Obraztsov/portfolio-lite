export default function Contact() {
	return (
		<div className='min-h-screen bg-white flex items-center justify-center px-8'>
			<div className='max-w-4xl mx-auto w-full'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-start'>
					{/* Левая часть - заголовок и информация */}
					<div>
						<h2 className='text-6xl md:text-8xl font-black text-black mb-8'>
							c<span className='text-gray-400'>ontact</span>
						</h2>

						<p className='text-lg text-gray-700 leading-relaxed mb-8'>
							How can I help?
						</p>

						<div className='space-y-4 text-gray-600'>
							<div>
								<span className='text-sm uppercase tracking-wider'>Email</span>
								<div className='text-lg'>your@email.com</div>
							</div>
							<div>
								<span className='text-sm uppercase tracking-wider'>Phone</span>
								<div className='text-lg'>+1 (555) 123-4567</div>
							</div>
							<div>
								<span className='text-sm uppercase tracking-wider'>
									Location
								</span>
								<div className='text-lg'>Your City, Country</div>
							</div>
						</div>
					</div>

					{/* Правая часть - форма */}
					<div className='bg-gray-50 p-8 rounded-lg'>
						<form className='space-y-6'>
							<div>
								<input
									type='text'
									placeholder='Name'
									className='w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors bg-white'
								/>
							</div>

							<div>
								<input
									type='email'
									placeholder='Email'
									className='w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors bg-white'
								/>
							</div>

							<div>
								<textarea
									placeholder='Message'
									rows={6}
									className='w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors bg-white resize-none'
								/>
							</div>

							<button
								type='submit'
								className='w-full bg-black text-white py-4 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors'
							>
								Send Message
							</button>
						</form>

						<div className='mt-8 text-center'>
							<p className='text-sm text-gray-500'>
								Thank you! Your submission has been received!
							</p>
						</div>
					</div>
				</div>

				{/* Footer */}
				<div className='text-center mt-16 pt-8 border-t border-gray-200'>
					<p className='text-sm text-gray-400'>
						© 2024 Your Name. All rights reserved.
					</p>
				</div>
			</div>
		</div>
	)
}
