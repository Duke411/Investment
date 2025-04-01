import React from 'react'
import HomePage from './Pages/HomePage'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './Pages/LoginPage'
import SignUpPage from './Pages/SignUpPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar/>}/>
        <Route index element={<HomePage/>}/>
        <Route path="login" element={<LoginPage/>}/>
        <Route path="signup" element={<SignUpPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App