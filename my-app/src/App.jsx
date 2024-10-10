import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Settings from './Pages/Settings'
import AddCard from './Pages/AddCard'
import NavBar from './Components/Navbar'
import Card from './Pages/Card'
import './App.css'



function App() {
  
  return (
<Router>
    <NavBar />
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/AddCard' element={<AddCard/>}/>
      <Route path='/Settings' element={<Settings/>}/>
      <Route path='/Card' element={<Card/>} />

    </Routes>
</Router>
  )
}

export default App
