import {useParams} from 'react-router-dom';
import { HabitsList } from '../features/habits/components/HabitsList';

export function HabitDetailPage(){
    const { areaId } = useParams();

    return (
        <div>
            <h2>Habit Detail Page</h2>
            {areaId ? <HabitsList areaId={areaId} /> : <p>No area ID provided.</p>}
        </div>
    )
}