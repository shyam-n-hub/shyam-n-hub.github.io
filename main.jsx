import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import {UserCard} from "./UserCard.jsx"
// import './index.css'
import { QrCode } from "./QrCode.jsx"
import "./QrCode.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <UserCard/> */}

    <QrCode />
  </StrictMode>
)
