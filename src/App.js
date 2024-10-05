import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Tennis from './Tennis';
import './style.css';
import Academics from './Academics';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tennis" element={<Tennis />} />
        <Route path="/academics" element={<Academics />} />
      </Routes>
    </Router>
  );
}

export default App;