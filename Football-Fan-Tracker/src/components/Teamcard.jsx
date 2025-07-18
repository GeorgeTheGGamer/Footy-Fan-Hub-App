import React from 'react'

const Teamcard = ({team : {strTeam, strBadge}}) => {
  return (
    <div className='team-card'>
        <img src={strBadge} alt="Spurs Image" />
        <p>{strTeam}</p>
        <button>SELECT</button>
    </div>
  )
}

export default Teamcard