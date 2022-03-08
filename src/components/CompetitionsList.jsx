import { useEffect, useState } from "react";
import CompetitionCard from "./CompetitionCard";

const CompetitionsList = (props) => {
  const [list, setList] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  const page = props.page;
  const start = (page - 1) * 9;
  const end = page * 9;
  const API_KEY = 'ef55462bc54543f8bfb945288b37be4c';

  const headers = {
    'X-Auth-Token': API_KEY,
  }

  const options = {
    headers,
  }

  useEffect(() => {
    if (isLoaded) {
      fetch('http://api.football-data.org/v2/competitions/', options)
        .then(res => res.json())
        .then(result => {
          setList(result.competitions.slice(start, end));
          setLoaded(true);
        })
    }
  }, []);

  return (
    <div className="grid grid-cols-3 gap-3 w-9/12 justify-center m-auto">
      {isLoaded ? list.map((item) => <CompetitionCard title={item.name} key={item.id} />) : <h1>Loading...</h1>}
    </div>
  )
}

export default CompetitionsList;