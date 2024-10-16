import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Settings from './Pages/Settings';
import AddCard from './Pages/AddCard/AddCard';
import NavBar from './Components/Navbar';
import './App.css';

function App() {
  const [cards, setCards] = useState([]); // Håller alla kort

  // Funktion för att lägga till ett nytt kort
  const addCard = (newCard) => {
    setCards((prevCards) => [...prevCards, newCard]); // Lägger till nytt kort
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage cards={cards} />} /> {/* Skicka korten till HomePage */}
        <Route path='/AddCard' element={<AddCard addCard={addCard} />} /> {/* Skicka addCard funktionen till AddCard */}
        <Route path='/settings' element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;

