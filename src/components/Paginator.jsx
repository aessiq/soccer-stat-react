import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Paginator = (props) => {
  const dispatch = useDispatch();
  const page = props.page;
  const totalCompetitions = useSelector(state => state.totalCompetitions);
  const competitionsPerPage = useSelector(state => state.competitionsPerPage);
  const lastPage = Math.ceil(totalCompetitions / competitionsPerPage);
  const nextPage = () => {
    dispatch({ type: 'NEXT_PAGE' });
  }
  const prevPage = () => {
    dispatch({ type: 'PREV_PAGE' });
  }
  return (
    <div className="flex flex-col items-center justify-center pt-6 pb-6">
      <h1>Paginator, page: {page}</h1>
      <div className="buttons flex gap-3">
        <Link to={Number(page) === 1 ? '#' : `/competitionsPage/${page - 1}`} onClick={() => prevPage()}>Prev page</Link>
        <Link to={`/competitionsPage/${+page}`}>{+page}</Link>
        <Link to={`/competitionsPage/${+page + 1}`}>{+page + 1}</Link>
        <Link to={`/competitionsPage/${+page + 2}`}>{+page + 2}</Link>
        <Link to={`/competitionsPage/${+page + 3}`}>{+page + 3}</Link>
        <Link to={`/competitionsPage/${+page + 4}`}>{+page + 4}</Link>
        <Link to={`/competitionsPage/${lastPage}`}>{lastPage}</Link>
        <Link to={Number(page) === lastPage ? '#' : `/competitionsPage/${+page + 1}`} onClick={() => nextPage()}>Next page</Link>
      </div>
    </div>
  )
}

export default Paginator;