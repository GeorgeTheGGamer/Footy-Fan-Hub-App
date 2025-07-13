import React from 'react'
import { useState,useEffect } from 'react'
import Search from './Search'
import Teamcard from './Teamcard'

const API_BASE_URL = `https://www.thesportsdb.com/api/v1/json/123/`
const API_KEY = import.meta.env.VITE_SPORTSDB_API_KEY

const Findteam = ({onClose }) => {
  const [isExit, setisExit] = useState(false)

  useEffect(() => {
    if (isExit) {
      onClose()
      // Reset the exit state after closing
      setisExit(false)
    }
  }, [isExit, onClose])

  return (
    <main className='team-finder'>
        <header>
            <Search/>
            <button onClick={() => setisExit(true)}>X</button>  
        </header>
        <section className='teamcard-view'>
            
            <div>
                <Teamcard/>
            </div>

        </section>
        
        {/* Your team selection content here */}
    </main>
  )
}

export default Findteam