import { type ModalFormProps } from "../types/ModalForm";
import { Input } from "../../../components/Input";
import { Modal, type ModalProps } from "../../../components/Modal";
import { Button } from "../../../components/Button";

type Props = ModalFormProps & Omit<ModalProps, "children">;

export function ModalForm({inputs, onSubmit, ...modalProps}: Props) {
    return (
        <Modal {...modalProps}>
            <form onSubmit={onSubmit}>
                {inputs.map((input, index) => (
                    <Input key={index} {...input} />
                ))}
                <Button text="Submit" color="primary" type="submit"/>
            </form>
        </Modal>
    )
}