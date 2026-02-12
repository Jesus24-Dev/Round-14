import { useAreas } from "../hooks/useAreas";
import { Card } from "../../../components/Card";

export function AreaList(){
    const { data, isLoading }  = useAreas();
    console.log(data)
    return(
        <>
            {isLoading ?? <p>loading...</p>}
            {data?.cards.map(card => (
                <Card id={card.id} title={card.title} icon={card.icon} color={card.color}/>
            ))}
        </>
    )
}