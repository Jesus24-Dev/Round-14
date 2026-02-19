import { type InputProps } from "../../../components/Input"

export interface ModalFormProps {
    inputs: InputProps[];
    onSubmit?: (event: React.SubmitEvent) => void;
}