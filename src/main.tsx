import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FizzboardApp } from './App'
import './index.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FizzboardApp />
  </StrictMode>,
)
