export interface ButtonProps {
    text: string;
    color: string;
    onClick?: () => void;
    type: "button" | "submit" | "reset";
}