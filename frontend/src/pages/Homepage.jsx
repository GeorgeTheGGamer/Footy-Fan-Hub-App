import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'


const Homepage = () => {

  const navigate = useNavigate()
  const [registerClick, setregisterClick] = useState(false)
  const [loginClicked, setloginClicked] = useState(false)


  useEffect(() => {
    if (registerClick) {
      navigate("/Register")
    } 
  }, [registerClick])

  useEffect(() => {
    if (loginClicked) {
      navigate("/login")
    }
  }, [loginClicked])
  

  

  return (
    <main>
      <header className='welcome-banner'>
        <div>
          <h1>Welcome to <span> Footy </span> Fan Hub</h1>
        </div>
      </header>
      <section className='button-section-homepage'>
        <div className='text-message'>
          <p className='text-white text-center'>To select your team you must be Logged In. <span>Choose one of the options below:</span></p>
        </div>
        <div className='flex justify-evenly'>
          <button onClick={() => {setregisterClick(true)}} className='button-styles'>Register&nbsp;</button>
          <button onClick={() => {setloginClicked(true)}} className='button-styles'> &nbsp;&nbsp; Login &nbsp; &nbsp;</button>
        </div>
        

      </section>
    </main>
  )
}

export default Homepage