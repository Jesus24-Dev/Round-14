import {useState, type ReactNode} from 'react'
import { HabitContext} from './HabitContext'

export const HabitProvider = ({children}: { children: ReactNode}) => {
    const [areaId, setAreaId] = useState<string>('');

    const updateAreaId = (newAreaId: string) => {
        setAreaId(newAreaId)
    }

    return (
        <HabitContext.Provider value={{areaId, updateAreaId}}>
            {children}
        </HabitContext.Provider>
    )
}