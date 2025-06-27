import { motion } from 'framer-motion'
import { User, Code, Mail } from 'lucide-react'
import SwipeContainer from '../SwipeContainer/SwipeContainer'
import { SwipeChevron } from '../SwipeChevron/SwipeChevron'
import { PATHS } from '../../const/PATHS'
import { useNavigate } from 'react-router'

export default function Menu() {
	const navigate = useNavigate()

	const menuItems = [
		{
			id: 'about',
			title: 'ABOUT',
			icon: <User className='size-10 xs:size-12 md:size-14 lg:size-16' />,
		},
		{
			id: 'projects',
			title: 'PROJECTS',
			icon: <Code className='size-10 xs:size-12 md:size-14 lg:size-16' />,
		},
		{
			id: 'contact',
			title: 'CONTACT',
			icon: <Mail className='size-10 xs:size-12 md:size-14 lg:size-16' />,
		},
	]

	return (
		<SwipeContainer
			className='min-h-svh bg-accent flex flex-col items-center justify-center relative overflow-hidden'
			upSection={'home'}
		>
			{/* Заголовок MENU */}
			<motion.div
				className='mb-8!'
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
					<motion.button
						key={item.id}
						className='flex items-center justify-center gap-4 cursor-pointer group text-[2.5rem] xs:text-[3rem] md:text-[4rem] lg:text-[5rem] hover:bg-white/60  transition-all ease-in-out not-hover:duration-700 p-2!'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.2, delay: 0.3 * index }}
						onClick={() => navigate(PATHS[item.id as keyof typeof PATHS])}
					>
						<div className='text-black transition-transform'>{item.icon}</div>
						<span className='font-black text-black transition-all leading-none'>
							{item.title}
						</span>
					</motion.button>
				))}
			</motion.div>

			{/* Социальные ссылки */}

			<SwipeChevron sector='home' direction='up' />
		</SwipeContainer>
	)
}
