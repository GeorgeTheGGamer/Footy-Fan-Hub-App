import React from 'react'
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom'
import Homepage from './components/homepage'
import Teampage from './components/teampage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path='/' element={<Homepage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App