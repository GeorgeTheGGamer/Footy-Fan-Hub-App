const SeasonStats = ({team}) => {

const { dateUpdated, idLeague, idStanding, idTeam, intDraw, intGoalDifference, intGoalsAgainst, intGoalsFor, intLoss, intPlayed, intPoints, intRank, intWin, strForm, strLeague, strSeason, strDescription } = team;
  const getFormBadge = (result) => {
    const baseClass = "w-17 h-17 rounded-full flex items-center justify-center text-xs font-bold text-white";
    switch(result) {
      case 'W': return `${baseClass} bg-green-500`;
      case 'D': return `${baseClass} bg-yellow-500`;
      case 'L': return `${baseClass} bg-red-500`;
      default: return `${baseClass} bg-gray-500`;
    }
  };

  return (
    <main className="stats-container">
      <header className="stats-header">
        <h3><span>{strSeason}</span> Season Stats</h3>
      </header>
      
      <section className="p-8 ">
        {/* Form Section */}
        {strForm && (
          <div className="mt-3 mb-8">
            <div className="flex gap-2 justify-center flex-wrap">
              {strForm.split('').map((result, index) => (
                <div key={index} className={getFormBadge(result)}>
                  {result}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Horizontal Stats Table */}
        <div className="overflow-x-auto rounded-lg hover:scale-105 mb-8">
          <table className="w-full border-collapse bg-white rounded-lg shadow">
            <thead>
              <tr className="bg-gray-100">
                <th className="stats-style stats-info">P</th>
                <th className="stats-style stats-info">MP</th>
                <th className="stats-style stats-info">W</th>
                <th className="stats-style stats-info">D</th>
                <th className="stats-style stats-info">L</th>
                <th className="stats-style stats-info">GF</th>
                <th className="stats-style stats-info">GA</th>
                <th className="stats-style stats-info">GD</th>
                <th className="stats-style stats-info">Pts</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="stats-style font-bold text-purple-600">#{intRank}</td>
                <td className="stats-style">{intPlayed}</td>
                <td className="stats-style text-green-600 font-semibold">{intWin}</td>
                <td className="stats-style text-yellow-600 font-semibold">{intDraw}</td>
                <td className="stats-style text-red-600 font-semibold">{intLoss}</td>
                <td className="stats-style text-green-600 font-semibold">{intGoalsFor}</td>
                <td className="stats-style text-red-600 font-semibold">{intGoalsAgainst}</td>
                <td className={`stats-style font-semibold ${
                  intGoalDifference > 0 ? 'text-green-600' : 
                  intGoalDifference < 0 ? 'text-red-600' : 'text-gray-600'
                }`}>
                  {intGoalDifference > 0 ? '+' : ''}{intGoalDifference}
                </td>
                <td className="stats-style text-blue-600 font-bold">{intPoints}</td>
              </tr>
            </tbody>
          </table>
        </div>

      {/* League and Position Info */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-4 mt-5">
        <div className="text-center">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">{strLeague}</h4>
          {strDescription && (
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">

              {strDescription}
            </div>
          )}
        </div>
      </div>

      </section>
    </main>
  )
}

export default SeasonStats