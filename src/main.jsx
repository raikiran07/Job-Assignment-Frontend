import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UserContextProvider from './userContext/UserContext.jsx'

createRoot(document.getElementById('root')).render(
 
    <UserContextProvider>
    <App />
    </UserContextProvider>
    
    
 
)
