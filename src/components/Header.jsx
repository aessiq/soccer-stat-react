import { useDispatch } from "react-redux";
import { Link } from "react-router-dom"

const Header = () => {
  const dispatch = useDispatch();
  const toFirstPage = () => {
    dispatch({ type: "FIRST_PAGE" })
  }
  return (
    <header className="flex h-20 items-center justify-evenly bg-sky-200">
      <Link to="/">Home</Link><br />
      <Link to="/competitionsPage/1" onClick={() => toFirstPage()}>to CompetitionsPage</Link><br />
    </header>
  )
}

export default Header;