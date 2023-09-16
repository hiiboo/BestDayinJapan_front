// src/components/App.js
import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home'; // ホームページコンポーネント
import TouristPage from './components/TouristPage'; // Touristページコンポーネント
import GuidePage from './components/GuidePage'; // ガイドページコンポーネント

function App() {
  return (
    <Router>
      <div className="App">
        <img src="/logo.png" alt="Logo" className="logo" />
        <h1>
          <Link to="/tourist">Tourist</Link>
        </h1>
        <h2>
          <Link to="/guide">現地人ガイド</Link>
        </h2>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/guide" element={<GuidePage />} />
          <Route path="/tourist" element={<TouristPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;