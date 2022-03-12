import { useDispatch } from "react-redux";

const SearchBar = () => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch({ type: "SET_SEARCH_QUERY", payload: e.target.value })
  }
  return (
    <input type="text" className="w-2/12 border-2 border-sky-300" placeholder="Search..." onChange={(event) => handleChange(event)} />
  )
}

export default SearchBar;