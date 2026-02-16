import {useState} from 'react'
import { Button } from "../components/Button";
import { ModalForm } from "../features/modalforms/components/ModalForm";
import { WeightList } from "../features/weights/components/WeightList";
import { type InputProps } from "../components/Input";

const weightFormInputs: InputProps[] =[
    { name: "weight", type: "number" },
    { name: "date", type: "date" },
    { name: "hoursOfSleep", type: "number"},
    { name: "waterIntake", type: "number"}
]

export function WeightControlPage(){

    const [isOpen, setIsOpen] = useState(false)

    const handleOpenModal = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="container mx-auto p-4">
            <WeightList />    
            <Button text="Add Weight" color="primary" type="button" onClick={handleOpenModal} />
            <ModalForm inputs={weightFormInputs} action="/api/weights" method="POST" title="Add New Weight" isOpen={isOpen} onClose={handleOpenModal}/>
        </div>
           
    )
}