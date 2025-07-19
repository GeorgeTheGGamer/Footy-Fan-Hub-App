import { useNavigate } from 'react-router-dom'


const Teamcard = ({team}) => {

  // Navigate to different route in react router 
  const navigate = useNavigate()

  const handleClick = () => {
    // Specific for team Id and pass the team by state to new teamPage
    navigate(`/team/${team.idTeam}`, {state: {team}})   
  }

  return (
    <div className='team-card'>
        <img src={team.strBadge} alt="Spurs Image" />
        <p>{team.strTeam}</p>
        {/* Call the onclick function  */}
        <button onClick={handleClick}>SELECT</button>

    </div>
  )
}

export default Teamcard