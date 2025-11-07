import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode class="w-full h-full bg-black py-0 my-0">
    <App />
  </StrictMode>,
)
