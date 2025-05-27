import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Posts from './components/Posts.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Posts />
  </StrictMode>,
)
