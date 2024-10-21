import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Settings from './Pages/Settings';
import AddCard from './Pages/AddCard/AddCard';
import NavBar from './Components/Navbar';
import CardDetails from './Pages/Card'; 

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
        <Route path='/' element={<HomePage cards={cards} />} /> 
        <Route path='/AddCard' element={<AddCard addCard={addCard} />} /> 
        <Route path='/settings' element={<Settings />} />
        <Route path='/card/:id' element={<CardDetails cards={cards} toggleActiveStatus={toggleActiveStatus} deleteCard={deleteCard} />} /> 
      </Routes>
    </Router>
  );
}

export default App;

