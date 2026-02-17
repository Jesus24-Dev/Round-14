import {type HabitProps} from "./HabitCard.types"
import { Button } from "../Button"
import { HabitCardStyles } from "./HabitCard.styles"

export function HabitCard({title, description, frequency, isDone}: HabitProps){
    return (
        <div className={HabitCardStyles.container}>
            <h2 className={HabitCardStyles.title}>{title}</h2>
            <p className={HabitCardStyles.description}>{description}</p>
            <p className={HabitCardStyles.frequency}>Frequency: {frequency}</p>
            <Button text={isDone ? "Done" : "Mark as Done"} color={isDone? "primary" : "danger"} onClick={() => console.log("Marking as done...")} type="button"/>
        </div>
    )
}