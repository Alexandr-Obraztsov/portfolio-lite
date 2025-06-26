interface NavigationProps {
	currentSection: number
}

export default function Navigation({ currentSection }: NavigationProps) {
	const navItems = [
		{ name: 'Home', href: '#hero' },
		{ name: 'About', href: '#about' },
		{ name: 'Portfolio', href: '#portfolio' },
		{ name: 'Contact', href: '#contact' },
	]

	const scrollToSection = (href: string) => {
		const element = document.querySelector(href)
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' })
		}
	}

	return (
		<nav className='fixed top-0 right-0 z-50 p-8'>
			<div className='flex flex-col space-y-4'>
				{navItems.map((item, index) => (
					<button
						key={item.name}
						onClick={() => scrollToSection(item.href)}
						className={`text-sm uppercase tracking-wider transition-all hover-underline ${
							currentSection === index
								? 'text-black font-medium'
								: 'text-gray-400 hover:text-black'
						}`}
					>
						{item.name}
					</button>
				))}
			</div>
		</nav>
	)
}
