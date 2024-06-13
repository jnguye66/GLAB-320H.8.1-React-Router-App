import { useState } from 'react'
import './App.css'

// Import Routes and components
import { Route, Routes } from 'react-router-dom';
import Currencies from './pages/currencies';
import Main from './pages/main';
import Price from './pages/prices';

import Nav from './components/nav';

function App() {

  return (
    <div className='App'>
      <h1>React Router Lab</h1>
      <h2>Crypto Currencies</h2>
      <Nav />
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/currencies' element={<Currencies/>} />
        <Route path="/price/:symbol" element={<Price/>}/>
      </Routes>
    </div>
  )
}

export default App
