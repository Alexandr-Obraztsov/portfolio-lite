import SwipeContainer from '../SwipeContainer/SwipeContainer'
import { SwipeChevron } from '../SwipeChevron/SwipeChevron'
import { ContactTitle } from './ContactTitle'
import { ContactSubtitle } from './ContactSubtitle'
import { ContactForm } from './ContactForm'
import { useNavigate } from 'react-router'
import { PATHS } from '../../const/PATHS'

export function Contact() {
	const navigate = useNavigate()

	const handleSwipeUp = () => {
		navigate(PATHS.menu)
	}

	return (
		<SwipeContainer
			className='min-h-svh bg-accent flex flex-col items-center justify-center relative overflow-hidden px-6!'
			onSwipeUp={handleSwipeUp}
		>
			<ContactTitle />
			<ContactSubtitle />
			<ContactForm />
			<SwipeChevron sector='menu' direction='up' />
		</SwipeContainer>
	)
}
