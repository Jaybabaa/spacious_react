import './App.css';
import { Route, Routes } from 'react-router';
import { BrowserRouter as Router, } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Planets from './components/Planets';
import Characters from './components/Characters';

function App() {
  return (
    <Router>
        <div className="App">
          <Header/>
          <Navbar/>
          <Routes>
                <Route exact path='/Planets' element={<Planets />} />
                <Route exact path='/Characters' element={<Characters />} />
          </Routes>
        </div>
    </Router>
  );
}

export default App;
