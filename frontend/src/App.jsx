import React from 'react'
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom'
import Homepage from './components/Homepage'
import Teampage from './components/Teampage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path='/' element={<Homepage />}/>
        {/* Route parameter for specific team id */}
        <Route path='/team/:id' element={<Teampage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App