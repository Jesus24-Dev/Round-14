import { useState } from "react";
import { type InputProps } from "./Input.types";
import { baseStyle } from "./Input.styles";

export function Input({name, type, placeholder, disabled, value}: InputProps){
    const [inputValue, setInputValue] = useState(value || "");

    const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    return (
        <input 
            name={name}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            style={baseStyle}
            value={inputValue}
            onChange={handleInputValue}
        />
    )
}