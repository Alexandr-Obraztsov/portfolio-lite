import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

const socialLinks = [
	{ icon: <Github className='w-8 h-8' />, url: '#', label: 'GITHUB' },
	{ icon: <Linkedin className='w-8 h-8' />, url: '#', label: 'LINKEDIN' },
	{ icon: <Mail className='w-8 h-8' />, url: '#', label: 'EMAIL' },
]

export const Socials = () => {
	return (
		<motion.div
			className='flex items-center gap-4'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.6, delay: 0.6 }}
		>
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
		</motion.div>
	)
}
