import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { HabitProvider } from './store/habits/HabitProvider.tsx'
import { PageProvider } from './store/pages/PageProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PageProvider>
      <HabitProvider>
        <App />
      </HabitProvider>
    </PageProvider>
  </StrictMode>,
)
