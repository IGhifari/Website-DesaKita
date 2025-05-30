import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LoginUser from './LoginUser.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoginUser />
  </StrictMode>,
)
