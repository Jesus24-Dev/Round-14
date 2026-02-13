import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { HabitProvider } from './store/habits/HabitProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HabitProvider>
      <App />
    </HabitProvider>
  </StrictMode>,
)
