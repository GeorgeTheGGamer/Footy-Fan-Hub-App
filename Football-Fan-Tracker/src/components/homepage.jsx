import React from 'react'
import { useState } from 'react'
import Findteam from './Findteam'

const Homepage = () => {
  const [isExpanded, setisExpanded] = useState(false)

  // Closing team selector function
  const handleClose = () => {
    setisExpanded(false)
  }

  return (
    <main>
      <header className='welcome-banner'>
        <div>
          <h1>Welcome to <span> Footy </span> Fan Hub</h1>
        </div>
      </header>
      <section className='button-section'>
        {!isExpanded ? (
          <button onClick={() => setisExpanded(true)}>Select your team</button>
        ) : (
          <Findteam 
            onClose={handleClose}
          />
        )}
      </section>
    </main>
  )
}

export default Homepage