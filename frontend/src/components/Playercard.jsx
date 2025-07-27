const Playercard = ({player}) => {
  
  const { strPlayer, strCutout, strRender, strPoster, strThumb } = player;

  // Split the player name into first and last name
  const splitName = (fullName) => {
    const nameParts = fullName.trim().split(' ');
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(' ');
    return { firstName, lastName };
  };

  const { firstName, lastName } = splitName(strPlayer);

  return (
    <div className="bg-gradient-to-b from-blue-600 to-blue-800 rounded-xl hover:scale-105 hover:shadow-xl p-4 text-white relative overflow-hidden w-full">
      
      {/* Player Photo */}
      <div className="flex justify-center mb-3">
        <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm p-2 flex-shrink-0">
          <img 
            src={strCutout || strRender || strThumb || strPoster || '/placeholder-player.png'} 
            alt={`${strPlayer}`}
            className="w-full h-full object-cover rounded-full"
            onError={(e) => {e.target.src = '/placeholder-player.png'}}
          />
        </div>
      </div>

      {/* Player Name */}
      <div className="text-center px-2">
        <div className="text-sm font-bold text-white drop-shadow-lg leading-tight">
          <div className="truncate">{firstName}</div>
          {lastName && <div className="truncate">{lastName}</div>}
        </div>
      </div>
    </div>
  );
};

export default Playercard;