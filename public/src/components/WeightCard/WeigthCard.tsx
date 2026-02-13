import { type WeightCardProps } from "./WeightCard.types";
import { baseStyles } from "./WeightCard.styles";

export function WeightCard({id, date, weight, hoursOfSleep, energy, waterIntake}: WeightCardProps) {
    return (
        <div className={baseStyles.container} id={id}>
            <div className={baseStyles.date}>{date}</div>
            <div className={baseStyles.text}>Weight: {weight} kg</div>
            <div className={baseStyles.text}>Hours of Sleep: {hoursOfSleep} hrs</div>
            <div className={baseStyles.text}>Energy: {energy}/10</div>
            <div className={baseStyles.text}>Water Intake: {waterIntake} L</div>
        </div>
    );
}