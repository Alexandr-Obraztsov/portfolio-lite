export default function Contact() {
	return (
		<div className='min-h-screen bg-[#F4D03F] flex items-center justify-center px-8'>
			<div className='max-w-4xl mx-auto w-full'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-start'>
					{/* Левая часть - заголовок и информация */}
					<div>
						<h2 className='text-6xl md:text-8xl font-black text-black mb-8'>
							C<span className='opacity-50'>ONTACT</span>
						</h2>

						<p className='text-lg text-black leading-relaxed mb-8'>
							How can I Help?
						</p>

						<div className='space-y-4 text-black'>
							<div>
								<span className='text-sm uppercase tracking-wider font-bold'>
									Email
								</span>
								<div className='text-lg'>obraztsov.official@gmail.com</div>
							</div>
							<div>
								<span className='text-sm uppercase tracking-wider font-bold'>
									Telegram
								</span>
								<div className='text-lg'>@obraztsov_alexandr</div>
							</div>
							<div>
								<span className='text-sm uppercase tracking-wider font-bold'>
									Location
								</span>
								<div className='text-lg'>Minsk, Belarus</div>
							</div>
							<div>
								<span className='text-sm uppercase tracking-wider font-bold'>
									GitHub
								</span>
								<div className='text-lg'>github.com/Alexandr-Obraztsov</div>
							</div>
						</div>
					</div>

					{/* Правая часть - форма */}
					<div className='bg-black p-8 rounded-lg'>
						<form className='space-y-6'>
							<div>
								<input
									type='text'
									placeholder='Name'
									className='w-full p-4 border border-gray-600 rounded-lg focus:outline-none focus:border-[#F4D03F] transition-colors bg-gray-800 text-white placeholder-gray-400'
								/>
							</div>

							<div>
								<input
									type='email'
									placeholder='Email'
									className='w-full p-4 border border-gray-600 rounded-lg focus:outline-none focus:border-[#F4D03F] transition-colors bg-gray-800 text-white placeholder-gray-400'
								/>
							</div>

							<div>
								<textarea
									placeholder='Message'
									rows={6}
									className='w-full p-4 border border-gray-600 rounded-lg focus:outline-none focus:border-[#F4D03F] transition-colors bg-gray-800 text-white placeholder-gray-400 resize-none'
								/>
							</div>

							<button
								type='submit'
								className='w-full bg-[#F4D03F] text-black py-4 px-6 rounded-lg font-black hover:opacity-80 transition-opacity'
							>
								SEND MESSAGE
							</button>
						</form>

						<div className='mt-8 text-center'>
							<p className='text-sm text-white'>
								Thank you! Your submission has been received!
							</p>
							<p className='text-xs text-gray-400 mt-2'>
								Oops! Something went wrong while submitting the form.
							</p>
						</div>
					</div>
				</div>

				{/* Footer */}
				<div className='text-center mt-16 pt-8'>
					<p className='text-sm text-black'>© Alexandr Obraztsov 2024</p>
				</div>
			</div>
		</div>
	)
}
