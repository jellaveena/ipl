import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeamLogo, competingTeam, matchStatus, result} = matchDetails
  let resultStatusClassName

  if (matchStatus === 'Won') {
    resultStatusClassName = 'won'
  } else {
    resultStatusClassName = 'lost'
  }

  return (
    <li className="match-item">
      <img
        src={competingTeamLogo}
        className="competing-team-logo"
        alt={`competing team ${competingTeam}`}
      />
      <p className="competing-team-name">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={resultStatusClassName}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
