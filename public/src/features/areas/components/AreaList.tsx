import { useAreas } from "../hooks/useAreas";
import { Card } from "../../../components/Card";

export function AreaList(){
    const { data, isLoading }  = useAreas();
    return(
        <>
            {isLoading ?? <p>loading...</p>}
            <div className="grid grid-cols-3 gap-4">
                {data?.cards.map(card => (
                    <Card key={card.id} id={card.id} title={card.title} icon={card.icon} color={card.color}/>
                ))}
            </div>
        </>
    )
}