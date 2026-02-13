import { useHabit } from "../../../store/habits/useHabit";
import { useHabits } from "../hooks/useHabits";
import { type Habits } from "../types/Habits";

export function HabitsList(){
    const { areaId} = useHabit()

    const {habits} = useHabits(areaId)

    return (
        <div>
            {habits?.map((habit: Habits) => (
                <div key={habit.id}>
                    <h3>{habit.title}</h3>
                    <p>{habit.description}</p>
                    <p>{habit.frequency}</p>
                </div>
            ))}
        </div>
    )
}