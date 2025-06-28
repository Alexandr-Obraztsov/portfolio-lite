import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { RiTelegram2Line } from 'react-icons/ri'

const socialLinks = [
	{
		icon: <FiGithub className='size-8 md:size-10 lg:size-12' />,
		url: 'https://github.com/Alexandr-Obraztsov',
		label: 'GITHUB',
	},
	{
		icon: <FiLinkedin className='size-8 md:size-10 lg:size-12' />,
		url: 'https://www.linkedin.com/in/obraztsov-alexandr-047369349/',
		label: 'LINKEDIN',
	},
	{
		icon: <RiTelegram2Line className='size-8 md:size-10 lg:size-12' />,
		url: 'https://t.me/obraztsov_alexandr',
		label: 'TELEGRAM',
	},
]

export const Socials = () => {
	return (
		<div className='flex items-center gap-4 md:gap-6 lg:gap-8'>
			{socialLinks.map((link, index) => (
				<motion.a
					key={index}
					href={link.url}
					className='text-black hover:scale-110 transition-transform'
					whileHover={{ scale: 1.2 }}
					whileTap={{ scale: 0.9 }}
					aria-label={link.label}
				>
					{link.icon}
				</motion.a>
			))}
		</div>
	)
}
