import { useState,useEffect } from 'react'
import Spinner from './Spinner'


// Future proofing for private key
const API_KEY = import.meta.env.VITE_SPORTSDB_API_KEY
const API_BASE_URL = `https://www.thesportsdb.com/api/v1/json/${API_KEY}`

const API_OPTIONS = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
}


const Playerviewer = ({teamId}) => {
  const [isLoading, setisLoading] = useState(false)
  const [errorMessage, seterrorMessage] = useState('')
  const [playerList, setplayerList] = useState([])

  const fetchTeams = async () => {
      setisLoading(true)
      seterrorMessage('')
  
      try {
          const endpoint1 = `${API_BASE_URL}/eventslast.php?id=${teamId}`
          const response = await fetch(endpoint1, API_OPTIONS)

  
          if (!response1.ok) {  
              throw new Error('Failed to fetch teams')
          }
  
          const data = await response.json();
  
          console.log(data)
  

          
      } catch (error) {
          console.log(`Error Fetching teams: ${error}`)
          seterrorMessage('Error fetching teams. Please try again later.')
          
      } finally {
          setisLoading(false)
      }
    }
  
    useEffect(() => {
      if (teamId) { 
        fetchTeams()
      }
    }, [teamId])


  return (
    <main className="stats-container">
      <header className="stats-header">
        <h3>Players</h3>
      </header>
      <section>
      </section>
    </main>
  )
}

export default Playerviewer