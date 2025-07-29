import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Homepage from './components/Homepage'
import SignedInHomepage from './components/SignedInHomepage'
import Teampage from './components/Teampage'
import Register from "./pages/Register"
import Login from "./pages/Login"
import NotFound from "./pages/NotFound"
import ProtectedRoute from "./components/ProtectedRoute"

const Logout = () => {
  localStorage.clear()    // Ensure no access to old tokens
  return  <Navigate to="/login" />
}

const RegisterAndLogout = () => {
  localStorage.clear()    // Ensure no access to old tokens
  return <Register />
}

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path='/' element={<Homepage />}/>
        <Route path="/Homepage" element={<SignedInHomepage />} />
        {/* Route parameter for specific team id */}
        <Route path='/team/:id' element={<Teampage />}/>
        <Route path="/Register" element={<RegisterAndLogout />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Logout" element={<Logout />} />
        {/* Any Other page is a Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App