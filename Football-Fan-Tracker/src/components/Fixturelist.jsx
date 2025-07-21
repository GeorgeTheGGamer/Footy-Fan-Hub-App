import { useState,useEffect } from 'react'
import Spinner from './Spinner'
import FixtureCard from './FixtureCard'

// Future proofing for private key
const API_KEY = import.meta.env.VITE_SPORTSDB_API_KEY
const API_BASE_URL = `https://www.thesportsdb.com/api/v1/json/${API_KEY}`

const API_OPTIONS = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
}

const Fixturelist = ({teamId}) => {

  const [isLoading, setisLoading] = useState(false)
  const [errorMessage, seterrorMessage] = useState('')
  const [previousFixtures, setpreviousFixtures] = useState([])  
  const [nextFixtures, setnextFixtures] = useState([])        

  const fetchTeams = async () => {
    setisLoading(true)
    seterrorMessage('')

    try {
        const endpoint1 = `${API_BASE_URL}/eventslast.php?id=${teamId}`
        const endpoint2 = `${API_BASE_URL}/eventsnext.php?id=${teamId}`
        const response1 = await fetch(endpoint1, API_OPTIONS)
        const response2 = await fetch(endpoint2, API_OPTIONS)

        if (!response1.ok || !response2.ok) { 
            throw new Error('Failed to fetch teams')
        }

        const data1 = await response1.json();
        const data2 = await response2.json();

        console.log(data1)
        console.log(data2)

        setpreviousFixtures(data1.results || data1.events || [])
        setnextFixtures(data2.results || data2.events || [])
        
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
        <h3>Fixtures</h3>
      </header>
      <section>
        {isLoading ? (
          <Spinner />
        ) : errorMessage ? (
          <p className='text-red-600'>{errorMessage}</p>
        ) : (
          <div>
            {previousFixtures.map((fixture) => ( 
              <FixtureCard eventid={fixture.idEvent} fixture={fixture}/>
            ))}

            {nextFixtures.map((fixture) => (     
              <FixtureCard eventid={fixture.idEvent} fixture={fixture}/>
            ))}
          </div>
        )}
      </section>
    </main>
  )
}

export default Fixturelist