import Navbar from './Components/Navbar.jsx'
import NewsBoard from './Components/NewsBoard.jsx'
import { useState } from 'react';

const App = () => {
  const [category, setCategory] = useState("general");

  return (
    <div>
      <Navbar setCategory={setCategory} />
      <NewsBoard category={category} />
    </div>
  )
}

export default App