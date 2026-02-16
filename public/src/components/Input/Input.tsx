import { useState } from "react";
import { type InputProps } from "./Input.types";
import { baseStyle } from "./Input.styles";

export function Input({name, type, placeholder, disabled}: InputProps){
    const [value, setValue] = useState("");

    const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    return (
        <input 
            name={name}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            style={baseStyle}
            value={value}
            onChange={handleInputValue}
        />
    )
}