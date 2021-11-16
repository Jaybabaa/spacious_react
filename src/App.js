import React, {useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router';
import { BrowserRouter as Router, } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Planets from './components/Planets';
import Characters from './components/Characters';
import Loader from './components/Loader';
import { useState } from 'react';

function App() {

  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])


  return (
    <>
    {loading === false ? (
    <Router>
        <div className="App">
          <Header/>
          <Navbar/>
          <Routes>
                <Route exact path='/' element={<Planets/>} />
                <Route exact path='/Characters' element={<Characters/>} />
          </Routes>
        </div>
    </Router>
     ) : (
      <Loader />
    )}
    </>
  );
}

export default App;
