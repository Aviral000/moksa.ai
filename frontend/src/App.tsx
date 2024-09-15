import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Homepage from './pages/Homepage'
import Login from './pages/Login'
import Page1 from './pages/signup/Page1'
import OtpPage from './pages/signup/OtpPage'
import FullDetail from './pages/signup/FullDetail'

export default function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/signup' element={<Page1 />} />
          <Route path='/signup/otp' element={<OtpPage />} />
          <Route path='/signup/user-info' element={<FullDetail />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </div>
  )
}
