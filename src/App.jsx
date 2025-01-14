import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import About from './About';
import Listings from './Listings';
import Contact from './Contact';
import Footer from './Footer';
import ListingDetails from './Details';
import Results from './result';
import { HashLoader } from 'react-spinners';
import Booking from './booking';
import Cursor from './cursor';
import Login from './Login';
import SignUp from './SignUp';
import Portal from './portal';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track authentication state

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  // Function to handle login
  const handleLogin = () => {
    setIsAuthenticated(true); // Set authentication to true after successful login
  };

  // Function to handle logout
  const handleLogout = () => {
    setIsAuthenticated(false); // Set authentication to false on logout
  };

  return (
    <div>
      <Cursor />
      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
          <HashLoader loading={true} />
        </div>
      ) : (
        <Router>
          <div className="flex flex-col min-h-screen">
            <Navigation isAuthenticated={isAuthenticated} onLogout={handleLogout} />
            <main className="flex-grow">
              <Routes>
                <Route
                  path="/"
                  element={
                    isAuthenticated ? (
                      <Navigate to="/home" /> // Redirect to home if authenticated
                    ) : (
                      <Login onLogin={handleLogin} /> // Show login page if not authenticated
                    )
                  }
                />
                <Route
                  path="/home"
                  element={
                    isAuthenticated ? (
                      <Home />
                    ) : (
                      <Navigate to="/" /> // Redirect to login if not authenticated
                    )
                  }
                />
                <Route
                  path="/about"
                  element={
                    isAuthenticated ? (
                      <About />
                    ) : (
                      <Navigate to="/" /> // Redirect to login if not authenticated
                    )
                  }
                />
                <Route
                  path="/listings"
                  element={
                    isAuthenticated ? (
                      <Listings />
                    ) : (
                      <Navigate to="/" /> // Redirect to login if not authenticated
                    )
                  }
                />
                <Route
                  path="/contact"
                  element={
                    isAuthenticated ? (
                      <Contact />
                    ) : (
                      <Navigate to="/" /> // Redirect to login if not authenticated
                    )
                  }
                />
                <Route
                  path="/details/:listingId"
                  element={
                    isAuthenticated ? (
                      <ListingDetails />
                    ) : (
                      <Navigate to="/" /> // Redirect to login if not authenticated
                    )
                  }
                />
                <Route
                  path="/booking/:listingId"
                  element={
                    isAuthenticated ? (
                      <Booking />
                    ) : (
                      <Navigate to="/" /> // Redirect to login if not authenticated
                    )
                  }
                />
                <Route
                  path="/result"
                  element={
                    isAuthenticated ? (
                      <Results />
                    ) : (
                      <Navigate to="/" /> // Redirect to login if not authenticated
                    )
                  }
                />
                <Route path="/signup" element={<SignUp />} />
                <Route
                  path="/portal"
                  element={
                    isAuthenticated ? (
                      <Portal />
                    ) : (
                      <Navigate to="/" /> // Redirect to login if not authenticated
                    )
                  }
                />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      )}
    </div>
  );
}