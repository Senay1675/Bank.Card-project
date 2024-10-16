import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Settings from './Pages/Settings';
import AddCard from './Pages/AddCard/AddCard';
import NavBar from './Components/Navbar';
import CardDetails from './Pages/Card'; // Se till att filen har rätt namn
import CardComponent from './Components/Cardcomponent';
import './App.css';

function App() {
  const [cards, setCards] = useState([]); // Håller alla kort

  // Funktion för att lägga till ett nytt kort
  const addCard = (newCard) => {
    setCards([...cards, { ...newCard, isActive: false }]);
  };

  const toggleActiveStatus = (cardNumber) => {
    setCards(cards.map(card => ({
      ...card, 
      isActive: card.cardNumber === cardNumber
    })));
  };

  const deleteCard = (cardNumber) => {
    setCards(cards.filter(card => card.cardNumber !== cardNumber));
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage cards={cards} />} /> {/* Skicka korten till HomePage */}
        <Route path='/AddCard' element={<AddCard addCard={addCard} />} /> {/* Skicka addCard funktionen till AddCard */}
        <Route path='/settings' element={<Settings />} />
        <Route path='/card/:id' element={<CardDetails cards={cards} toggleActiveStatus={toggleActiveStatus} deleteCard={deleteCard} />} /> 
      </Routes>
    </Router>
  );
}

export default App;

