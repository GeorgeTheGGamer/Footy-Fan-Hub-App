import { useLocation } from 'react-router-dom'



const Teampage = () => {

  // useLocation hook allow access to state object at url location 
  const location = useLocation()
  const team = location.state?.team

  // Deconstruct team object for easier use of variables
  const { dateUpdated, idLeague, idStanding, idTeam, intDraw, intGoalDifference, intGoalsAgainst, intGoalsFor, intLoss, intPlayed, intPoints, intRank, intWin, strBadge, strDescription, strForm, strLeague, strSeason, strTeam } = team;



  return (
    <div>
      <img src={strBadge} alt="Badge Image" />
    </div>
  )
}

export default Teampage