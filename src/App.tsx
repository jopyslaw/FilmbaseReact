import React from 'react';
import './App.scss';
import { 
  BrowserRouter as Router, 
  Route, 
  Routes 
} from "react-router-dom";
import Footer from './components/Footer';
import MainPage from './pages/MainPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<MainPage />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
