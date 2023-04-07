import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { OdontoApp } from './OdontoApp'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <OdontoApp />
    </BrowserRouter>
  </React.StrictMode>,
)
