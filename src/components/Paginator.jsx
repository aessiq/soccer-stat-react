import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Paginator = (props) => {
  const dispatch = useDispatch();
  const page = props.page;
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
        <Link to={`/competitionsPage/${page - 1}`} onClick={() => prevPage()}>Prev page</Link>
        <Link to={`/competitionsPage/${+page + 1}`} onClick={() => nextPage()}>Next page</Link>
      </div>
    </div>
  )
}

export default Paginator;