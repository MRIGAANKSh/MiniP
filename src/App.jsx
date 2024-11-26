import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navigation from './Navigation'
import Home from './Home'
import About from './About'
import Listings from './Listings'
import Contact from './Contact'
import Footer from './Footer'
import ListingDetails from './Details'
import Results from './result'

export default function App() {
  return (
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
  )
}