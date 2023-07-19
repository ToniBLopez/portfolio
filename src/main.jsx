import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode> //  Is only for development mode, remove for production
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navigate to='/portfolio' />} />
      <Route path='/portfolio'>
        <Route index element={<App />} />
      </Route>
    </Routes>
  </BrowserRouter>
  // </React.StrictMode>,
)
