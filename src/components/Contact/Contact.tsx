import { useContext } from 'react'
import { SectorContext } from '../../models/SectorContext'
import SwipeContainer from '../SwipeContainer/SwipeContainer'
import { SwipeChevron } from '../SwipeChevron/SwipeChevron'
import { ContactTitle } from './ContactTitle'
import { ContactSubtitle } from './ContactSubtitle'
import { ContactForm } from './ContactForm'

export function Contact() {
	const { setCurrentSector } = useContext(SectorContext)

	const handleSwipeUp = () => {
		setCurrentSector('menu')
	}

	return (
		<SwipeContainer
			className='min-h-screen bg-accent flex flex-col items-center justify-center relative overflow-hidden px-6!'
			onSwipeUp={handleSwipeUp}
		>
			<ContactTitle />
			<ContactSubtitle />
			<ContactForm />
			<SwipeChevron sector='menu' direction='up' />
		</SwipeContainer>
	)
}
