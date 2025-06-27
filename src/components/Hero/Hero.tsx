import { ChevronDownIcon } from 'lucide-react'

export default function Hero() {
	return (
		<div className='min-h-screen bg-[#f4a63f] flex flex-col items-center justify-center relative overflow-hidden'>
			<div className='inline-flex flex-col items-center justify-center relative overflow-hidden mx-auto'>
				{/* Имя ALEXANDR */}
				<span className='text-[4rem] md:text-[8rem] lg:text-[10rem] font-black text-black leading-none'>
					ALEXANDR
				</span>

				<div className='w-full h-16 relative bg-black text-white overflow-hidden rounded-full flex items-center'>
					<span className='absolute text-[2rem] font-bold marquee'>
						FRONTEND-DEVELOPER • REACT-SPECIALIST • TYPESCRIPT-EXPERT •
						UI/UX-ENTHUSIAST • PROBLEM-SOLVER • WEB-DEVELOPER •
						FRONTEND-DEVELOPER • REACT-SPECIALIST • TYPESCRIPT-EXPERT •
						UI/UX-ENTHUSIAST • PROBLEM-SOLVER • WEB-DEVELOPER •{' '}
					</span>
				</div>

				{/* Фамилия OBRAZTSOV с интерактивными элементами */}
				<span className='text-[4rem] md:text-[8rem] lg:text-[10rem] font-black text-black leading-none relative'>
					OBRAZTSOV
				</span>
			</div>

			{/* Подсказка для свайпа */}
			<div className='absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce'>
				<div className='flex flex-col items-center text-black/90'>
					<span className='text-xl font-bold uppercase'>Swipe</span>
					<ChevronDownIcon className='size-8' />
				</div>
			</div>
		</div>
	)
}
