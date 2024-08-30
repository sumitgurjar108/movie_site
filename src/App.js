import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import LandingPage from './LandingPage';
import MovieList from './MovieList';
import Footer from './Footer';
import Contact from './Contact'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/movies" element={<MovieList />} />
          <Route path="/contact" element={<Contact />} /> {/* Add this if you have a Contact page */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
