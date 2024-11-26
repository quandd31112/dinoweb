import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import DinoDetail from './pages/DinoDetail';
import SearchResults from './component/SearchResults';
import Habitat from './pages/DinoHabitat';
import Quiz from './pages/Quiz';
import Continent from './pages/DinoContinent';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dino/:id" element={<DinoDetail />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/habitat" element={<Habitat />} /> 
        <Route path='/quiz' element={<Quiz/>}/>
        <Route path='/continent' element={<Continent/>}/>
      </Routes>
    </Router>
  );
}

export default App;
