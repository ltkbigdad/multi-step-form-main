import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'

import {BrowserRouter} from "react-router-dom"
import { Global } from './styles/Global.js'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Global/>
      <App />    
    </BrowserRouter>
  </React.StrictMode>,
)
