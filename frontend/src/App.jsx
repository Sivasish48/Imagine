import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your components here
import { Landing } from './components/Pages/Landing.jsx';
import { Generate } from './components/Pages/Generate.jsx';
import HomePage from './components/Pages/Home.jsx';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<Landing />} />
        <Route path="/generate" element={<Generate />} />
        {/* Add more routes here as needed */}
      </Routes>
    </Router>
  );
}

export default App;