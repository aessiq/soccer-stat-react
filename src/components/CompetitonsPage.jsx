import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CompetitionsList from "./CompetitionsList";
import Header from "./Header";
import Paginator from "./Paginator";
import SearchBar from "./SearchBar";

const CompetitionsPage = () => {
  const [page, setPage] = useState(useSelector(state => state.page));
  const params = useParams();
  const dispatch = useDispatch();
  if (params.page !== page) {
    dispatch({ type: "SET_PAGE", payload: params.page });
    setPage(params.page);
  }
  return (
    <>
      <Header />
      <SearchBar />
      <CompetitionsList page={page} />
      <Paginator page={page} />
    </>
  )
}

export default CompetitionsPage;