import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CompetitionCard from "./CompetitionCard";

const CompetitionsList = (props) => {
  const [list, setList] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  const page = props.page;
  const competitionsPerPage = useSelector(state => state.competitionsPerPage);
  const start = (page - 1) * competitionsPerPage;
  const end = page * competitionsPerPage;
  const API_KEY = 'ef55462bc54543f8bfb945288b37be4c';
  const dispatch = useDispatch();
  const searchQuery = useSelector(state => state.searchQuery);

  const headers = {
    'X-Auth-Token': API_KEY,
  }

  const options = {
    headers,
  }

  useEffect(() => {
    if (!isLoaded) {
      fetch('http://api.football-data.org/v2/competitions/', options)
        .then(res => res.json())
        .then(result => {
          setList(result.competitions);
          setLoaded(true);
          dispatch({ type: "SET_TOTAL_COMPETITIONS", payload: result.competitions.length });
        })
    }
  }, []);

  if (searchQuery.length > 0) {
    dispatch({ type: "SET_TOTAL_COMPETITIONS", payload: list.filter(item => item.name.includes(searchQuery)).length });
  }

  return (
    <div className="grid grid-cols-3 gap-3 w-9/12 justify-center m-auto">
      {isLoaded
        ? list.filter(item => item.name.includes(searchQuery)).slice(start, end).map((item) => <CompetitionCard title={item.name} country={item.area.name} key={item.id} />)
        : <h1>Loading...</h1>}
    </div>
  )
}

export default CompetitionsList;