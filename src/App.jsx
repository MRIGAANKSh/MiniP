import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import About from './About';
import Listings from './Listings';
import Contact from './Contact';
import Footer from './Footer';
import ListingDetails from './Details';
import Results from './result';
import { HashLoader, ScaleLoader } from 'react-spinners';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set a timeout to turn off the loader after 5 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    // Cleanup timer in case the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        // Show loader while loading is true
        <div className="flex items-center justify-center min-h-screen">
          <HashLoader loading={true} />
        </div>
      ) : (
        // Show the main app once loading is false
        <Router>
          <div className="flex flex-col min-h-screen">
            <Navigation />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/listings" element={<Listings />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/details/:listingId" element={<ListingDetails />} />
                <Route path="/result" element={<Results />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      )}
    </div>
  );
}
