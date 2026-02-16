import { type ButtonProps } from "./Button.types";
import { buttonStyles, buttonColors } from "./Button.styles";

export function Button({ text, color, onClick }: ButtonProps) {
    const colorClass = buttonColors[color] || buttonColors.primary;
    return (
        <button
            className={`${buttonStyles.base} ${colorClass}`}
            onClick={onClick}
        >
            {text}  
        </button>
    );
}
