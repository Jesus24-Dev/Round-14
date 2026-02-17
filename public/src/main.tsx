import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'

import { PageProvider } from './store/pages/PageProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <PageProvider>
          <App />
      </PageProvider>
    </BrowserRouter>
  </StrictMode>,
)
