import { useLocation, useNavigate } from 'react-router-dom'
import SeasonStats from './SeasonStats';
import Playerviewer from './Playerviewer';
import Fixturelist from './Fixturelist';
import Newsfeed from './Newsfeed';


const Teampage = () => {
  
  // Functionality for Homepage button 
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/`)   
  }


  // useLocation hook allow access to state object at url location 
  const location = useLocation()
  const team = location.state?.team
  // Deconstruct team object for easier use of variables
  const { dateUpdated, idLeague, idStanding, idTeam, intDraw, intGoalDifference, intGoalsAgainst, intGoalsFor, intLoss, intPlayed, intPoints, intRank, intWin, strBadge, strDescription, strForm, strLeague, strSeason, strTeam } = team;

  return (
      <main>
        <header className='team-banner'>
          <img src={strBadge} alt="Badge Image" />
          <h1>{strTeam}</h1>
          <button onClick={handleClick}>HOMEPAGE</button>
        </header>
        <section className='content-container'>
          <SeasonStats team={team}/>
          <Playerviewer teamId={idTeam}/>
          <Fixturelist teamId={idTeam}/>
          <Newsfeed />
        </section>
      </main>
  )
}

export default Teampage