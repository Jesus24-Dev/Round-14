import { useNavigate } from "react-router-dom";
import { baseStyles } from "./SidebarLink.styles";
import { type SidebarLinkProps } from "./SidebarLink.types";

export function SidebarLink({to, label, icon}: SidebarLinkProps){

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(to);
    }

    return (
        <div className={baseStyles.container} onClick={handleClick}>
            {icon && <img src={icon} alt={label} className={baseStyles.icon} />}
            <span className={baseStyles.label}>{label}</span>
        </div>
    )
}