import { motion } from 'framer-motion'
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react'
import { useContext } from 'react'
import { SectorContext, type SectorType } from '../../models/SectorContext'

interface SwipeChevronProps {
	sector: SectorType
	direction: 'up' | 'down'
}

export const SwipeChevron = ({ sector, direction }: SwipeChevronProps) => {
	const { setCurrentSector } = useContext(SectorContext)

	return (
		<motion.div
			className={`absolute ${
				direction === 'down' ? 'bottom-5' : 'top-5'
			} left-1/2 transform -translate-x-1/2`}
			animate={{ y: [0, 10, 0] }}
			transition={{ repeat: Infinity, duration: 2 }}
		>
			<div
				className={`flex items-center text-black/90 cursor-pointer ${
					direction === 'down' ? 'flex-col' : 'flex-col-reverse'
				}`}
				onClick={() => setCurrentSector(sector)}
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
			</div>
		</motion.div>
	)
}
