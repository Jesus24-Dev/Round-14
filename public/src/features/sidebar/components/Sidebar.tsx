import { SidebarLink } from "../../../components/SidebarLink"

export function Sidebar(){
    return (
        <div className="w-64 bg-white shadow-md h-screen p-4">
            <SidebarLink to="home" label="Home" />
            <SidebarLink to="habits" label="Habits" />
            <SidebarLink to="weight" label="Weight Control" />
        </div>
    )
}