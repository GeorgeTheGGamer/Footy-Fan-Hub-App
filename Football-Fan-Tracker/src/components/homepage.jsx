import React from 'react'
import { useState } from 'react'

const Homepage = () => {

    const [isExpanded, setisExpanded] = useState(false)


  return (
    <main>
      <header className='welcome-banner'>
        <div>
          <h1>Welcome to <span> Footy</span> Fan Hub</h1>
        </div>
      </header>
      <section className='button-section'>
        <button onClick={() => {
          setisExpanded(true)
          console.log("hello there")}}>Select your team</button>
      </section>
    </main>
  )
}

export default Homepage