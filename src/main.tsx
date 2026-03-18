import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './lib/auth'
import { SubmissionsProvider } from './lib/submissions'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <SubmissionsProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SubmissionsProvider>
    </AuthProvider>
  </StrictMode>,
)
