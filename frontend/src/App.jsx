import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your components here
import Landing from './components/Pages/Landing.jsx';
import { Generate } from './components/Pages/Generate.jsx';

import Footer from './components/ui/Footer.jsx';
function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Landing />} />
        <Route path="/generate" element={<Generate />} />
       
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;