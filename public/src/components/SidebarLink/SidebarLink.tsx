import { baseStyles } from "./SidebarLink.styles";
import { type SidebarLinkProps } from "./SidebarLink.types";
import { usePage } from "../../store/pages/usePage";

export function SidebarLink({to, label, icon}: SidebarLinkProps){

    const {updatePage} = usePage();

    const handleClick = () => {
        updatePage(to);
    }

    return (
        <div className={baseStyles.container} onClick={handleClick}>
            {icon && <img src={icon} alt={label} className={baseStyles.icon} />}
            <span className={baseStyles.label}>{label}</span>
        </div>
    )
}