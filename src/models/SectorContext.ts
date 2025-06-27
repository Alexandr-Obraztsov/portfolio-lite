import { createContext, type Dispatch, type SetStateAction } from 'react'

export type SectorType = 'home' | 'menu' | 'contact'

export interface SectorContextType {
	currentSector: SectorType
	setCurrentSector: Dispatch<SetStateAction<SectorType>>
}

export const SectorContext = createContext<SectorContextType>({
	currentSector: 'home',
	setCurrentSector: () => {},
})
