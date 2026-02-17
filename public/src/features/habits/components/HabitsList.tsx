import { useHabits } from "../hooks/useHabits";
import { type HabitProps } from "../types/Habits";
import { HabitCard } from "../../../components/HabitCard";

export function HabitsList({areaId}: {areaId: string}){
    
    const {habits} = useHabits(areaId)

    return (
        <div className="grid grid-cols-3">
            {habits?.map((habit: HabitProps) => (
                <HabitCard key={habit.id} {...habit}/>
            ))}
        </div>
    )
}