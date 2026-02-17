import {Routes, Route} from "react-router-dom"
import { HabitPage } from "./pages/HabitPage"
import { WeightControlPage } from "./pages/WeightControlPage"
import { HomePage } from "./pages/HomePage"
import { HabitDetailPage } from "./pages/HabitDetailPage"


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/habits" element={<HabitPage />} />
      <Route path="/weight-control" element={<WeightControlPage />} />
      <Route path="/habit-detail/:areaId" element={<HabitDetailPage />} />
    </Routes>

  )
}

export default App
