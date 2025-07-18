import React from 'react'

const Teamcard = ({team : {strTeam, strBadge}}) => {
  return (
    <div className='team-card'>
        <div>
            <img src={strBadge} alt="Spurs Image" />
            <p>{strTeam}</p>
        </div>
    </div>
  )
}

export default Teamcard