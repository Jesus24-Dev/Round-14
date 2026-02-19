import {useState} from 'react'
import { Button } from "../components/Button";
import { ModalForm } from "../features/modalforms/components/ModalForm";
import { WeightList } from "../features/weights/components/WeightList";
import { type InputProps } from "../components/Input";
import { Grid } from "../components/Grid/Grid"
import { Sidebar } from "../features/sidebar/components/Sidebar"

const weightFormInputs: InputProps[] =[
    { name: "weight", type: "number", placeholder: "Weight in kg"},
    { name: "date", type: "date" },
    { name: "hoursOfSleep", type: "number", placeholder: "Hours of sleep"},
    { name: "energy", type: "number", placeholder: "Energy level (1-10)"},
    { name: "waterIntake", type: "number", placeholder: "Water intake in liters"}
]

export function WeightControlPage(){

    const [isOpen, setIsOpen] = useState(false)

    const handleOpenModal = () => {
        setIsOpen(!isOpen)
    }

    const handleSubmit = async (event: React.SubmitEvent) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        const form = event.target;
        const data = Object.fromEntries(formData.entries())

        try {
            const response = await fetch("http://localhost:3000/api/weights", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            if (response.ok){
                console.log("Weight data submitted successfully")    
            }
            form.reset();
        } catch (error){
            console.error("Error submitting weight data:", error)
        }
    }

    return (
        <Grid sidebar={<Sidebar />} content={
            <div className="container mx-auto p-4">
                <WeightList />    
                <Button text="Add Weight" color="primary" type="button" onClick={handleOpenModal} />
                <ModalForm inputs={weightFormInputs} title="Add New Weight" isOpen={isOpen} onClose={handleOpenModal} onSubmit={handleSubmit}/>
            </div>
        }/>
           
    )
}