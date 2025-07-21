import { useState,useEffect } from 'react'
import Spinner from './Spinner'
import Playercard from './Playercard'

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

  const fetchPlayers = async () => {  
      setisLoading(true)
      seterrorMessage('')
  
      try {
          const endpoint = `${API_BASE_URL}/lookup_all_players.php?id=${teamId}`
          const response = await fetch(endpoint, API_OPTIONS)
  
          if (!response.ok) {  
              throw new Error('Failed to fetch players')
          }
  
          const data = await response.json();

          setplayerList(data.player || data.players || [])
          
      } catch (error) {
          console.log(`Error Fetching players: ${error}`)
          seterrorMessage('Error fetching players. Please try again later.')
          
      } finally {
          setisLoading(false)
      }
    }
  
    useEffect(() => {
      if (teamId) { 
        fetchPlayers()
      }
    }, [teamId])

  return (
    <main className="stats-container">
      <header className="stats-header">
        <h3>Players</h3>
      </header>
      <section className='p-5'>
        {isLoading ? (
          <div className="flex justify-center">
            <Spinner />
          </div>
        ) : errorMessage ? (
          <p className='text-red-600 text-center'>{errorMessage}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {playerList.map((player) => (
              <Playercard key={player.idPlayer} player={player} />
            ))}
          </div>
        )}
      </section>
    </main>
  )
}

export default Playerviewer