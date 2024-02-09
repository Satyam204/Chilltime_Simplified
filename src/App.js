import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import SimpleBottomNavigation from './components/MainNv';
import Header from './components/header/header';
import Trending from './pages/trending/trending';
import Movies from './pages/movies/movies';
import Search from './pages/search/search';
import Series from './pages/series/series';
import { Container } from '@mui/material';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <div className="app">
      <Container>
        <Routes>
          <Route path="/" element={<Trending />} exact />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<Series />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Container>
    </div>
    <SimpleBottomNavigation />
  </BrowserRouter>
  );
}

export default App;
