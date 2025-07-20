const SeasonStats = ({team}) => {

    const { dateUpdated, idLeague, idStanding, idTeam, intDraw, intGoalDifference, intGoalsAgainst, intGoalsFor, intLoss, intPlayed, intPoints, intRank, intWin, strBadge, strDescription, strForm, strLeague, strSeason, strTeam } = team;


  return (
    <main className="stats-container">
      <header className="stats-header">
        <h3><span>{strSeason}</span> Season Stats</h3>
      </header>
      <section>

      </section>
    </main>
  )
}

export default SeasonStats