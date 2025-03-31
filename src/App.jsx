import Navbar from './components/Navbar.jsx'
import NewsBoard from './components/NewsBoard.jsx'
import { useState } from 'react';

export default function App() {
  
  const [category, setCategory] = useState("general");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <Navbar setCategory={setCategory} setSearchQuery={setSearchQuery} />
      <NewsBoard category={category} searchQuery={searchQuery} />
    </div>
  )
}
