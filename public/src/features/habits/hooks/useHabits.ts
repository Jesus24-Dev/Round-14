import {useEffect, useState} from 'react'
import { getHabits } from '../api/getHabits'
import { type HabitProps } from '../types/Habits'

export function useHabits(areaId: string){
    const [habits, setHabits] = useState<HabitProps[]>([]);

    useEffect(() => {
        const fetchHabits = async () => {
            try {
                const data = await getHabits(areaId);
                setHabits(data);
            } catch (error) {
                console.error("Error fetching habits:", error);
            }
        };

        fetchHabits();
    }, [areaId]);

    return {habits};
}

