import { motion } from 'framer-motion'
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react'
import { PATHS } from '../../const/PATHS'
import { Link } from 'react-router'

interface SwipeChevronProps {
	sector: keyof typeof PATHS
	direction: 'up' | 'down'
}

export const SwipeChevron = ({ sector, direction }: SwipeChevronProps) => {
	return (
		<motion.div
			className={`absolute ${
				direction === 'down' ? 'bottom-5' : 'top-2'
			} left-1/2 transform -translate-x-1/2`}
			animate={{ y: [0, 10, 0] }}
			transition={{ repeat: Infinity, duration: 2 }}
		>
			<Link
				className={`flex items-center text-black/90 cursor-pointer ${
					direction === 'down' ? 'flex-col' : 'flex-col-reverse'
				}`}
				to={PATHS[sector]}
			>
				<span
					className='font-bold uppercase
				text-[1rem]
				'
				>
					{sector.toUpperCase()}
				</span>
				{direction === 'down' ? (
					<ChevronDownIcon className='size-6 sm:size-8' />
				) : (
					<ChevronUpIcon className='size-6 sm:size-8' />
				)}
			</Link>
		</motion.div>
	)
}
