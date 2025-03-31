import Navbar from './components/Navbar.jsx'
import NewsBoard from './pages/NewsBoard.jsx'
import MainPage from './pages/MainPage.jsx';
import Weather from './pages/Weather.jsx';

import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


export default function App() {

  const [category, setCategory] = useState("general");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Router>
      <Navbar setCategory={setCategory} setSearchQuery={setSearchQuery} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/news" element={<NewsBoard category={category} searchQuery={searchQuery} />} />
        <Route path="/weather" element={<Weather />} />
      </Routes>
    </Router>
  )
}
