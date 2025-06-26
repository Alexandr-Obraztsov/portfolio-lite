import { useState } from 'react'

interface NavigationProps {
	currentSection: number
}

export default function Navigation({ currentSection }: NavigationProps) {
	const [showMenu, setShowMenu] = useState(false)

	const navItems = [
		{ name: 'ABOUT', href: '#about' },
		{ name: 'PORTFOLIO', href: '#portfolio' },
		{ name: 'CONTACT', href: '#contact' },
	]

	const scrollToSection = (href: string) => {
		const element = document.querySelector(href)
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' })
		}
		setShowMenu(false)
	}

	// Показать меню если не на главной странице
	if (currentSection === 0 && !showMenu) {
		return (
			<button
				onClick={() => setShowMenu(true)}
				className='fixed top-8 right-8 z-50 text-black text-xl font-black hover:scale-105 transition-transform'
			>
				MENU
			</button>
		)
	}

	return (
		<div className='fixed inset-0 bg-[#F4D03F] z-50 flex flex-col items-center justify-center'>
			{/* Кнопка закрыть */}
			<button
				onClick={() => setShowMenu(false)}
				className='absolute top-8 right-8 text-black text-xl font-black hover:scale-105 transition-transform'
			>
				✕
			</button>

			{/* Меню */}
			<div className='space-y-8 text-center'>
				{navItems.map(item => (
					<button
						key={item.name}
						onClick={() => scrollToSection(item.href)}
						className='nav-item block text-6xl md:text-8xl font-black text-black hover:opacity-70 transition-opacity'
					>
						{item.name}
					</button>
				))}
			</div>

			{/* Копирайт */}
			<div className='absolute bottom-8 text-center'>
				<p className='text-sm text-black'>© Alexandr Obraztsov 2024</p>
			</div>
		</div>
	)
}
