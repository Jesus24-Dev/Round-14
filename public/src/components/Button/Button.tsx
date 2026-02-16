import { type ButtonProps } from "./Button.types";
import { buttonStyles, buttonColors } from "./Button.styles";

export function Button({ text, color, onClick, type }: ButtonProps) {
    const colorClass = buttonColors[color] || buttonColors.primary;
    return (
        <button
            className={`${buttonStyles.base} ${colorClass}`}
            onClick={onClick}
            type={type}
        >
            {text}  
        </button>
    );
}
