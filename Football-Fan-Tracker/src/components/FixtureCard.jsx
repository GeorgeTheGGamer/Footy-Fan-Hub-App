const FixtureCard = ({fixture}) => {
  
  // Destructure the fixture object
  const {
    strStatus,
    intHomeScore,
    intAwayScore,
    strLeague,
    intRound,
    dateEvent,
    strTime,
    strHomeTeamBadge,
    strHomeTeam,
    strAwayTeamBadge,
    strAwayTeam,
    strVenue,
    strCity,
    strCountry,
    strSeason,
    intSpectators,
    strPostponed
  } = fixture;

  const isMatchFinished = strStatus === "Match Finished";
  const hasScore = intHomeScore !== null && intAwayScore !== null;
  
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short', 
      day: 'numeric'
    });
  };

  const formatTime = (timeString) => {
    if (!timeString) return '';
    return timeString.slice(0, 5); // Convert "01:00:00" to "01:00"
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 mb-4 border hover:shadow-2xl hover:scale-105 transition-shadow m-5">
      {/* Match Header */}
      <div className="flex justify-between items-center mb-3">
        <div className="text-sm text-gray-600">
          <span className="font-medium">{strLeague}</span>
          {intRound && <span> • Round {intRound}</span>}
        </div>
        <div className="text-sm text-gray-500">
          {formatDate(dateEvent)} • {formatTime(strTime)}
        </div>
      </div>

      {/* Teams and Score */}
      <div className="flex items-center justify-between mb-3">
        {/* Home Team */}
        <div className="flex items-center flex-1">
          <img 
            src={strHomeTeamBadge} 
            alt={`${strHomeTeam} badge`}
            className="w-12 h-12 object-contain mr-3"
          />
          <div className="flex-1">
            <h3 className="font-semibold text-gray-800 text-[12px] lg:text-lg">{strHomeTeam}</h3>
            <p className="text-xs text-gray-500">Home</p>
          </div>
        </div>

        {/* Score */}
        <div className="px-4 text-center">
          {isMatchFinished && hasScore ? (
            <div className="bg-green-100 px-3 py-2 rounded-lg">
              <div className="text-2xl font-bold text-green-800">
                {intHomeScore} - {intAwayScore}
              </div>
              <div className="text-xs text-green-600">FT</div>
            </div>
          ) : (
            <div className="bg-blue-100 px-3 py-2 rounded-lg">
              <div className="text-lg font-semibold text-blue-800">VS</div>
              <div className="text-xs text-blue-600">
                {strStatus === "Match Finished" ? "Finished" : "Upcoming"}
              </div>
            </div>
          )}
        </div>

        {/* Away Team */}
        <div className="flex items-center flex-1 justify-end">
          <div className="flex-1 text-right">
            <h3 className="font-semibold text-gray-800 text-[12px] lg:text-lg">{strAwayTeam}</h3>
            <p className="text-xs text-gray-500">Away</p>
          </div>
          <img 
            src={strAwayTeamBadge} 
            alt={`${strAwayTeam} badge`}
            className="w-12 h-12 object-contain ml-3"
          />
        </div>
      </div>

      {/* Match Details with Status */}
      <div className="border-t pt-3">
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div>
            <span className="text-gray-500">Venue:</span>
            <p className="font-medium">{strVenue}</p>
            <p className="text-gray-600">{strCity}, {strCountry}</p>
          </div>
          <div>
            <span className="text-gray-500">Season:</span>
            <p className="font-medium">{strSeason}</p>
            {intSpectators && (
              <p className="text-gray-600">{intSpectators.toLocaleString()} spectators</p>
            )}
          </div>
          <div>
            <span className="text-gray-500">Status:</span>
            <div className="mt-1">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                strStatus === "Match Finished" 
                  ? "bg-green-100 text-green-800" 
                  : "bg-blue-100 text-blue-800"
              }`}>
                {strStatus}
              </span>
              {strPostponed === "yes" && (
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 mt-1 block">
                  Postponed
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FixtureCard