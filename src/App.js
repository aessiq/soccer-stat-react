import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import CompetitionCard from './components/CompetitionCard';
import CompetitionsList from './components/CompetitionsList';
import CompetitionsPage from './components/CompetitonsPage';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Header/>} />
          <Route path="/competitionCard" element={<CompetitionCard/>}/>
          <Route path="/competitionsList" element={<CompetitionsList/>}/>
          <Route path="/competitionsPage/:page" element={<CompetitionsPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
