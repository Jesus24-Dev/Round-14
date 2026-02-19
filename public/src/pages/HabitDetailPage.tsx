import {useState} from 'react'
import {useParams, useNavigate} from 'react-router-dom';
import { HabitsList } from '../features/habits/components/HabitsList';
import { ModalForm } from '../features/modalforms/components/ModalForm';
import { Button } from "../components/Button";
import { type InputProps } from "../components/Input";
import { Grid } from '../components/Grid/Grid';
import { Sidebar } from '../features/sidebar/components/Sidebar';

const habitFormInputs: InputProps[] = [
    { name: "title", type: "text", placeholder: "Enter habit title" },
    { name: "description", type: "text", placeholder: "Enter habit description" },
    { name: "frequency", type: "text", placeholder: "Enter habit frequency" },
]

export function HabitDetailPage(){
    const { areaId } = useParams();
    habitFormInputs.push({ name: "areaId", type: "hidden", value: areaId})

    const [isOpen, setIsOpen] = useState(false)

    const handleOpenModal = () => {
        setIsOpen(!isOpen)
    }

    const navigate = useNavigate();

    const goBack = () => {
        navigate('/habits')
    }

        const handleSubmit = async (event: React.SubmitEvent) => {
            event.preventDefault()
            const formData = new FormData(event.target)
            const form = event.target;
            const data = Object.fromEntries(formData.entries())
            console.log(data)

            try {
                const response = await fetch("http://localhost:3000/api/habits", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                });

                if (response.ok){
                    console.log("habits data submitted successfully")    
                }
                form.reset();
            } catch (error){
                console.error("Error submitting habits data:", error)
            }
        }

    return (
        <Grid sidebar={<Sidebar />} content={
            <div>
            <h2>Habit Detail Page</h2>
            {areaId ? <HabitsList areaId={areaId} /> : <p>No area ID provided.</p>}
            <Button text="Add Habit" color="primary" type="button" onClick={handleOpenModal} />
            <Button text="Go Back" color="secondary" type="button" onClick={goBack} />
            <ModalForm inputs={habitFormInputs} title="Add New Habit" isOpen={isOpen} onClose={handleOpenModal} onSubmit={handleSubmit}/>    
        </div>
        }/>

    )
}