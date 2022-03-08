import { useState } from "react";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <input type="text" className="w-2/12 border-2 border-sky-300" placeholder="Search..." onChange={(event) => setSearchQuery(event.target.value)} />
  )
}

export default SearchBar;