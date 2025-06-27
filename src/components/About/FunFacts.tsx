import { motion } from 'framer-motion'

const facts = [
	'☕ Coffee addict (5+ cups/day)',
	'🌙 Night owl developer',
	'🎮 Gamer in free time',
	'📚 Always learning new tech',
	'🎵 Code with music on',
	'🚀 Love clean architecture',
]

export function FunFacts() {
	return (
		<div className='space-y-3'>
			<h3 className='text-xl font-bold text-black'>Fun Facts</h3>
			{facts.map((fact, index) => (
				<motion.div
					key={index}
					className='bg-black/10 backdrop-blur-sm p-3 rounded-lg'
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 2 + index * 0.1 }}
					whileHover={{ scale: 1.02, backgroundColor: 'rgba(0,0,0,0.2)' }}
				>
					<span className='font-light text-black'>{fact}</span>
				</motion.div>
			))}
		</div>
	)
}
