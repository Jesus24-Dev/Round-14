import { Grid } from "../components/Grid/Grid"
import { Sidebar } from "../features/sidebar/components/Sidebar"

export function HomePage(){
    return (
        <Grid sidebar={<Sidebar />} content={
            <h1>Home page</h1>
        }/>
    )
}