import React from 'react'
import { useState } from 'react'
import Findteam from '../components/Findteam'

const SignedInHomepage = () => {
  const [isExpanded, setisExpanded] = useState(false)

  // Closing team selector function
  const handleClose = () => {
    setisExpanded(false)
  }

  return (
    <main>
      <header className='welcome-banner'>
        <div>
          <h1> <span> Footy </span> Fan Hub</h1>
        </div>
      </header>
      <section className='button-section'>
        <div>
        <h1 className='title-message'>Welcome back,&nbsp; <span>user</span></h1>
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