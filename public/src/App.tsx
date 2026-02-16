import { HabitPage } from "./pages/HabitPage"
import { WeightControlPage } from "./pages/WeightControlPage"
import { Sidebar } from "./features/sidebar/components/Sidebar"
import { HomePage } from "./pages/HomePage"
import { usePage } from "./store/pages/usePage"

function App() {

  const {page} = usePage();

  return (
    <div className="grid grid-cols-5">
      <div className="col-span-1">
        <Sidebar />
      </div>
      <div className="col-span-4 col-start-2 p-8">
        {page === "home" && <HomePage />}
        {page === "habits" && <HabitPage />}
        {page === "weight" && <WeightControlPage />}
      </div>
    </div>
  )
}

export default App
