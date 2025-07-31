import { useNavigate } from 'react-router-dom'
import api from "../api"


const Teamcard = ({team}) => {

  // Navigate to different route in react router 
  const navigate = useNavigate()

  const handleClick = async (e) => {
  
  try {
    await api.post("/api/team/", {
      team_data: team                 // Store entire JSON Object
    });
    
    navigate(`/team/${team.idTeam}`, {state: {team}})
    
  } catch (error) {
    console.error("Failed to save team choice:", error)
    alert("Failed to save team selection. Please try again.")
  }
}

  return (
    <div className='team-card'>
        <img src={team.strBadge} alt="Team Image" />
        <p>{team.strTeam}</p>
        {/* Call the onclick function  */}
        <button onClick={handleClick}>SELECT</button>

    </div>
  )
}

export default Teamcard