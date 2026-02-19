import { type WeightCardProps } from "./WeightCard.types";
import { baseStyles } from "./WeightCard.styles";

export function WeightCard({id, date_registered, weight, hours_of_sleep, energy, water_intake}: WeightCardProps) {

    const localeDate = new Date(date_registered).toLocaleDateString("en-US")

    return (
        <div className={baseStyles.container} id={id}>
            <div className={baseStyles.date}>{localeDate.toString()}</div>
            <div className={baseStyles.text}>Weight: {weight} kg</div>
            <div className={baseStyles.text}>Hours of Sleep: {hours_of_sleep} hrs</div>
            <div className={baseStyles.text}>Energy: {energy}/10</div>
            <div className={baseStyles.text}>Water Intake: {water_intake} L</div>
        </div>
    );
}