import { useWeights } from "../hooks/useWeight";
import { WeightCard } from "../../../components/WeightCard";
import { type WeightCardProps } from "../../../components/WeightCard";

export function WeightList(){
    const { weights } = useWeights();

    return (
        <div className="grid grid-cols-3 gap-4">
            {weights?.map((weight: WeightCardProps) => (
                <WeightCard key={weight.id} {...weight} />
            ))}
        </div>
    )
}