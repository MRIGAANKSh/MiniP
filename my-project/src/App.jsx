import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListingPage from './comp/Listingpage';
import Navbar from './comp/Navbar';
import CenterBox from './comp/center';
import CenterBox2 from './comp/center2';
import MarqueeComponent from './comp/moving';
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<CenterBox/>} />
          <Route path="/listings" element={<ListingPage />} />
        </Routes>
        <Routes>
        <Route path="/" element={<MarqueeComponent/>} />
        </Routes>
        <Routes>
        <Route path="/" element={<CenterBox2/>} />
        </Routes>


      </div>
    </Router>
  );
}

export default App;
