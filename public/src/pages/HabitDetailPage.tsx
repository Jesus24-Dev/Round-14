import {useState} from 'react'
import {useParams} from 'react-router-dom';
import { HabitsList } from '../features/habits/components/HabitsList';
import { ModalForm } from '../features/modalforms/components/ModalForm';
import { Button } from "../components/Button";
import { type InputProps } from "../components/Input";

const habitFormInputs: InputProps[] =[
    { name: "title", type: "string" },
    { name: "description", type: "string" },
    { name: "frequency", type: "string"},
]

export function HabitDetailPage(){
    const { areaId } = useParams();

    const [isOpen, setIsOpen] = useState(false)

    const handleOpenModal = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <h2>Habit Detail Page</h2>
            {areaId ? <HabitsList areaId={areaId} /> : <p>No area ID provided.</p>}
            <Button text="Add Habit" color="primary" type="button" onClick={handleOpenModal} />
            <ModalForm inputs={habitFormInputs} action="/api/habits" method="POST" title="Add New Habit" isOpen={isOpen} onClose={handleOpenModal}/>
        </div>
    )
}