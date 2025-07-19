import Search from './Search'
import Teamcard from './Teamcard'
import Spinner from './Spinner'

import { useState,useEffect } from 'react'
import { useDebounce } from 'react-use'


// Future proofing for private key
const API_KEY = import.meta.env.VITE_SPORTSDB_API_KEY
const API_BASE_URL = `https://www.thesportsdb.com/api/v1/json/${API_KEY}`

const API_OPTIONS = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
}


const Findteam = ({onClose }) => {


// All useStates for change and their initial states 
  const [isExit, setisExit] = useState(false)           // Leave the team viewer to homepage
  const [isLoading, setisLoading] = useState(false)
  const [errorMessage, seterrorMessage] = useState('')
  const [allTeams, setallTeams] = useState([])          // Store the api called teams 
  const [searchTerm, setsearchTerm] = useState('')


  // Delay search term by 500ms and dependent on searchterm changing
  useDebounce(() => setdebouncedSearchTerm(searchTerm), 500, [searchTerm])
  
  const fetchTeams = async () => {
    // Start Loading Timer - Use when rendering the teams...
    setisLoading(true)
    seterrorMessage('')

    try {
        // Top 5 teams due to API Limitations 😢
        const endpoint = `${API_BASE_URL}/lookuptable.php?l=4328`
        const response = await fetch(endpoint, API_OPTIONS)

        if (!response.ok) {
            throw new Error('Failed to fetch teams')
        }

        const data = await response.json();
        console.log(data)
        setallTeams(data.table)
        
    } catch (error) {
        console.log(`Error Fetching teams: ${error}`)
        seterrorMessage('Error fetching teams. Please try again later.')
        
    } finally {
        setisLoading(false)
    }
  }

  // When exit changes and on close changes then call the onclose function. Which makes the find team overlay disappear   
  useEffect(() => {
    if (isExit) {
      onClose()
      // Reset the exit state after closing
      setisExit(false)
    }
  }, [isExit, onClose])

  // Calls once on set up
  useEffect(() => {
    fetchTeams()
  }, [])
  

  return (
    <main className='team-finder'>
        <header>
            <Search/>
            <button onClick={() => setisExit(true)}>X</button>  
        </header>
        <section className='teamcard-view'>
            
        {/* Loads all teams in the allteams current stat */}
        {isLoading ? (
            <Spinner/>) : errorMessage ? (
                <p className='text-red-500'>{errorMessage}</p>
            ) : (
                // Future Proofing for premium version of API
                <ul>
                {allTeams.map((team) => (
                    // Utilise props
                    <Teamcard key={team.idTeam} team={team}/>
                ))}
                </ul>)}    
        </section>
    </main>
  )
}

export default Findteam