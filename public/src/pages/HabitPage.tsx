import { AreaList } from "../features/areas/components/AreaList"
import { Grid } from "../components/Grid/Grid"
import { Sidebar } from "../features/sidebar/components/Sidebar"

export function HabitPage(){
    return (
    <Grid sidebar={<Sidebar />} content={
      <AreaList />
    }/>
    )
}