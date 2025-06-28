import dotnews from '../assets/images/dotnews.webp'
import debator from '../assets/images/debator.webp'
import macPortfolio from '../assets/images/mac-portfolio.webp'
import inctagram from '../assets/images/inctagram.webp'
import circuitDesigner from '../assets/images/circuit-designer.webp'

export type Project = {
	id: number
	title: string
	description: string
	tech: string[]
	image: string
	live?: string
	github?: string
}

export const projects = [
	{
		id: 1,
		title: '.news',
		description: 'Telegram Mini App for summarizing news from the channel',
		tech: ['React', 'TypeScript', 'Tailwind', 'Telegram Bot API', 'RTK Query'],
		image: dotnews,
		live: 'https://t.me/dnwsbot',
	},
	{
		id: 2,
		title: 'Debator',
		description: 'Debator is a platform for creating and managing debates',
		tech: ['React', 'TypeScript', 'Tailwind', 'RTK Query', 'i18n'],
		image: debator,
	},
	{
		id: 3,
		title: 'Mac Portfolio',
		description: 'Mac Portfolio is a portfolio website for a Mac developer',
		tech: ['NextJS', 'TypeScript', 'Tailwind', 'Swiper', 'NodeJS'],
		image: macPortfolio,
		github: 'https://github.com/Alexandr-Obraztsov/mac-portfolio',
		live: 'https://portfolio-tau-gray-80.vercel.app/',
	},
	{
		id: 4,
		title: 'Inctagram',
		description:
			'Instagram clone on NextJS with localization and authentication (internship project)',
		tech: ['NextJS', 'TypeScript', 'Tailwind', 'Shadcn UI', 'i18n', 'oAuth'],
		image: inctagram,
		github: 'https://github.com/Alexandr-Obraztsov/Inctagram',
	},
	{
		id: 5,
		title: 'Circuit Designer',
		description: 'Platform for designing and solving transition processes',
		tech: ['React', 'TypeScript', 'Tailwind', 'RTK Query', 'Python', 'FastAPI'],
		image: circuitDesigner,
		github: 'https://github.com/Alexandr-Obraztsov/apec-frontend',
	},
]
