import React, { useState } from 'react';
import Navbar from './components/Navbar';
import NewsBoard from './pages/NewsBoard';
import MainPage from './pages/MainPage';
import WeatherForecast from './pages/WeatherForecast';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  const [category, setCategory] = useState<string>("general");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [location, setLocation] = useState<string>("Astana");

  return (
    <Router>
      <Navbar setCategory={setCategory} setSearchQuery={setSearchQuery} setLocation={setLocation} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/news" element={<NewsBoard category={category} searchQuery={searchQuery} />} />
        <Route path="/weather" element={<WeatherForecast location={location} />} />
      </Routes>
    </Router>
  );
};

export default App;
