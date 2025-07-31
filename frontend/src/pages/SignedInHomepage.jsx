import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Findteam from '../components/Findteam'
import api from '../api'

const SignedInHomepage = () => {
  const [isExpanded, setisExpanded] = useState(false)
  const navigate = useNavigate()
  const [Username, setUsername] = useState("")

  // Closing team selector function
  const handleClose = () => {
    setisExpanded(false)
  }

  const fetchUser = async () => {
    try {
    const teamDetails = await api.get("api/user/details")

    const username = teamDetails.data.username

    // Use state allows for accessing outside of this function 
    setUsername(username)
    
  } catch (error) {
    alert(error)
    
  }
    
  }

  // Use when the page has loaded 
  useEffect(() => {
    fetchUser()
  }, [])
  

  

  return (
    <main>
      <div className="absolute top-4 left-4 flex gap-4 z-10">
        <button 
          onClick={() => navigate('/')}
          className="bg-white/20 backdrop-blur-sm px-6 py-3 text-lg rounded-lg text-white font-medium border border-white/30 ease-in-out hover:bg-white/30 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
        >
          Homepage
        </button>
      </div>
      
      <header className='welcome-banner'>
        <div>
          <h1> <span> Footy </span> Fan Hub</h1>
        </div>
      </header>
      <section className='button-section'>
        <div>
        <h1 className='title-message'>Welcome back,&nbsp; <span>{Username}</span></h1>
        </div>
        <div>
          {!isExpanded ? (
          <button className='button-styles' onClick={() => setisExpanded(true)}>Select your team</button>
        ) : (
          <Findteam 
            onClose={handleClose}
          />
        )}
        </div>
        
      </section>
    </main>
  )
}

export default SignedInHomepage