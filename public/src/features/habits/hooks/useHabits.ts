import {useEffect, useState} from 'react'
import { getHabits } from '../api/getHabits'
import { type Habits } from '../types/Habits'

export function useHabits(habitId: string){
    const [habits, setHabits] = useState<Habits[] | null>(null)

    useEffect(() => {
        getHabits().then((data) => {
            const filteredHabits = data.filter((habit: Habits) => habit.areaId === habitId)
            setHabits(filteredHabits)
        })

    }, [habitId])

    return {habits}
}