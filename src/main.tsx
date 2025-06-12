import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import Navigation from './Navigation/Navigation.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navigation />
  </StrictMode>,
)
