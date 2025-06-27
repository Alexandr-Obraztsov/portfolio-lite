import { useContext } from 'react'
import { motion } from 'framer-motion'
import { SectorContext } from '../../models/SectorContext'
import { User, Code, Mail } from 'lucide-react'
import SwipeContainer from '../SwipeContainer/SwipeContainer'
import { SwipeChevron } from '../SwipeChevron/SwipeChevron'

export default function Menu() {
	const { setCurrentSector } = useContext(SectorContext)

	const handleSwipeUp = () => {
		setCurrentSector('home')
	}

	const menuItems = [
		{
			id: 'about',
			title: 'ABOUT',
			icon: <User className='size-12 md:size-14 lg:size-16' />,
		},
		{
			id: 'projects',
			title: 'PROJECTS',
			icon: <Code className='size-12 md:size-14 lg:size-16' />,
		},
		{
			id: 'contact',
			title: 'CONTACT',
			icon: <Mail className='size-12 md:size-14 lg:size-16' />,
		},
	]

	const handleMenuClick = (itemId: string) => {
		if (itemId === 'contact') {
			setCurrentSector('contact')
		}
		// Здесь можно добавить обработку других пунктов меню
	}

	return (
		<SwipeContainer
			className='min-h-screen bg-accent flex flex-col items-center justify-center relative overflow-hidden'
			onSwipeUp={handleSwipeUp}
		>
			{/* Заголовок MENU */}
			<motion.div
				className='mb-16'
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				<span className='text-[4rem] md:text-[6rem] lg:text-[8rem] font-black text-black leading-none'>
					MENU
				</span>
			</motion.div>

			{/* Основные пункты меню */}
			<motion.div
				className='flex flex-col w-full'
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
			>
				{menuItems.map((item, index) => (
					<motion.div
						key={item.id}
						className='flex items-center justify-center gap-4 cursor-pointer group text-[3rem] md:text-[4rem] lg:text-[5rem] hover:bg-white/60  transition-all ease-in-out duration-300 p-2!'
						initial={{ opacity: 0, y: -20 * index }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.3 * index }}
						onClick={() => handleMenuClick(item.id)}
					>
						<div className='text-black transition-transform'>{item.icon}</div>
						<span className='font-black text-black transition-all leading-none'>
							{item.title}
						</span>
					</motion.div>
				))}
			</motion.div>

			{/* Социальные ссылки */}

			<SwipeChevron sector='home' direction='up' />
		</SwipeContainer>
	)
}
