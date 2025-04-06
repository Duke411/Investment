import React from 'react'
import HomePage from './Pages/HomePage'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './Pages/LoginPage'
import SignUpPage from './Pages/SignUpPage'
import DashboardLayout from './Dashboard/DashboardLayout'
import Loan from './Dashboard/Loan'
import Settings from './Dashboard/Settings'
import Profile from './Dashboard/Profile'
import Transfer from './components/Transfer'
import Fundaccount from './components/Fundaccount'
import Recieve from './components/Recieve'



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar/>}/>
        <Route index element={<HomePage/>}/>
        <Route path="login" element={<LoginPage/>}/>
        <Route path="signup" element={<SignUpPage/>}/>
        <Route path="dashboard" element={<DashboardLayout/>}/>
        <Route path="Loan" element={<Loan/>}/>
        <Route path="Settings" element={<Settings/>}/>
        <Route path="Profile" element={<Profile/>}/>
        <Route path="Transfer" element={<Transfer/>}/>
        <Route path="Fundaccount" element={<Fundaccount/>}/>
        <Route path="Recieve" element={<Recieve/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App