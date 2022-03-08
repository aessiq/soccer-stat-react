import { Link } from "react-router-dom";

const CompetitionCard = (props) => {
  return (
    <Link to="/competitionCard" className="competition-card flex h-32 bg-sky-500 items-center justify-center border-solid border-2 border-sky-700">
      <h3>{props.title || 'Default title'}</h3>
    </Link>
  )
}

export default CompetitionCard;