import { type ModalProps } from "./Modal.types";
import { modalStyles } from "./Modal.styles";

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
    if (!isOpen) return null;

    return (
        <div className={`${modalStyles.overlay}`} onClick={onClose}>
            <div className={`${modalStyles.content}`} onClick={(e) => e.stopPropagation()}>
                <button className={`${modalStyles.closeButton}`} onClick={onClose}>&times;</button>
                <div className={`${modalStyles.header}`}>{title}</div>
                {children}
            </div>
        </div>
    );
}   