import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './pages/HomePage.jsx'
import Cursor from './components/Cursor.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Cursor></Cursor>
    {/* <App></App> */}
    <HomePage />
    {/* Hello */}
  </StrictMode>,
)
