import React from 'react'
import { useState,useEffect } from 'react'
import Search from './Search'
import Teamcard from './Teamcard'

const API_BASE_URL = `https://www.thesportsdb.com/api/v1/json/123`
const API_KEY = import.meta.env.VITE_SPORTSDB_API_KEY

const API_OPTIONS = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
}


const Findteam = ({onClose }) => {


// All useStates for change and their initial states 
  const [isExit, setisExit] = useState(false)
  const [isLoading, setisLoading] = useState(false)
  const [errorMessage, seterrorMessage] = useState('second')

  const premierLeague2025Teams = [
    'Arsenal',
    'Aston Villa',
    'Bournemouth',
    'Brentford',
    'Brighton & Hove Albion',
    'Burnley',
    'Chelsea',
    'Crystal Palace',
    'Everton',
    'Fulham',
    'Leeds United',
    'Liverpool',
    'Manchester City',
    'Manchester United',
    'Newcastle United',
    'Nottingham Forest',
    'Sunderland',
    'Tottenham',
    'West Ham',
    'Wolverhampton'
];

  const fetchTeams = async () => {
    setisLoading(true);
    seterrorMessage('');
    const teamIds = [];
    
    for (const teamName of premierLeague2025Teams) {
        try {
            const response = await fetch(`${API_BASE_URL}/searchteams.php?t=${teamName}`, API_OPTIONS);
            const data = await response.json();
            
            if (data.teams && data.teams[0]) {
                teamIds.push({
                    name: data.teams[0].strTeam,
                    id: data.teams[0].idTeam
                });
                console.log(`${data.teams[0].strTeam}: ${data.teams[0].idTeam}`);
            }
            
            // Add delay to avoid rate limiting
            await new Promise(resolve => setTimeout(resolve, 200));
            
        } catch (error) {
            console.log(`Error fetching ${teamName}:`, error);
        }
    }
    
    console.log('All team IDs:', teamIds);
    setisLoading(false);
    return teamIds;
};

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
            
            <div>
                <Teamcard/>
            </div>

        </section>
        
        {/* Your team selection content here */}
    </main>
  )
}

export default Findteam