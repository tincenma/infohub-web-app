import Navbar from './components/Navbar.jsx'
import NewsBoard from './pages/NewsBoard.jsx'
import MainPage from './pages/MainPage.jsx';
import WeatherForecast from './pages/WeatherForecast.jsx';

import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


export default function App() {

  const [category, setCategory] = useState("general");
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("Astana");

  return (
    <Router>
      <Navbar setCategory={setCategory} setSearchQuery={setSearchQuery} setLocation={setLocation} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/news" element={<NewsBoard category={category} searchQuery={searchQuery} />} />
        <Route path="/weather" element={<WeatherForecast location={location} />} />
      </Routes>
    </Router>
  )
}
