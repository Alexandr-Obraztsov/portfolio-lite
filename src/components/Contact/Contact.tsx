import SwipeContainer from '../SwipeContainer/SwipeContainer'
import { ContactTitle } from './ContactTitle'
import { ContactSubtitle } from './ContactSubtitle'
import { ContactForm } from './ContactForm'

export function Contact() {
	return (
		<SwipeContainer upSection={'menu'}>
			<ContactTitle />
			<ContactSubtitle />
			<ContactForm />
		</SwipeContainer>
	)
}
