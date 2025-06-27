import { motion } from 'framer-motion'

export function ContactTitle() {
	return (
		<motion.div
			className='mb-8 relative flex justify-center 
			text-[3rem] 
			sm:text-[4rem] 
			md:text-[5rem] 
			lg:text-[7rem] 
			font-black text-black leading-none'
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
		>
			C
			<motion.div
				className='relative my-1! md:my-3! bg-black text-accent rounded-full inline-flex items-center justify-center mx-2 
				font-bold whitespace-nowrap overflow-hidden 
				text-[0.8rem] [--initial-width:40px] [--max-width:140px]
				sm:text-[1.6rem] sm:[--initial-width:55px] sm:[--max-width:300px]
				md:text-[2.4rem] md:[--initial-width:55px] md:[--max-width:400px]
				lg:text-[3.2rem] lg:[--initial-width:85px] lg:[--max-width:500px]'
				initial={{ width: 'var(--initial-width)' }}
				animate={{ width: 'var(--max-width)' }}
				transition={{ duration: 0.5, ease: 'circOut', delay: 0.5 }}
			>
				<motion.div
					initial={{ y: '-200%' }}
					animate={{ y: '0%' }}
					transition={{ duration: 0.5, ease: 'backOut', delay: 1 }}
					className='relative'
				>
					HOW CAN I HELP?
				</motion.div>
			</motion.div>
			NTACT
		</motion.div>
	)
}
