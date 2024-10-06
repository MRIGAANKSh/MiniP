import React from 'react'
import { MapPin, Search, Bed, UtensilsCrossed, Coffee, Facebook, Twitter, Instagram, Mail, Phone } from 'lucide-react'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <a className="flex items-center justify-center" href="/">
          <MapPin className="h-6 w-6" />
          <span className="ml-2 text-2xl font-bold">CampusCrib</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:underline underline-offset-4" href="/">
            Home
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="/listings">
            Listings
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="/about">
            About
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="/contact">
            Contact
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Find Your Perfect Campus Accommodation
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Discover affordable and comfortable living spaces near your campus. From PGs to mess facilities, we've got you covered.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <input
                    className="max-w-lg flex-1 px-3 py-2 bg-white text-black rounded-md"
                    placeholder="Search accommodations..."
                    type="text"
                  />
                  <button
                    type="submit"
                    className="bg-white text-black hover:bg-gray-200 px-4 py-2 rounded-md flex items-center justify-center"
                  >
                    <Search className="h-4 w-4" />
                    <span className="sr-only">Search</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Our Services</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4 text-center">
                <Bed className="h-12 w-12 text-gray-900" />
                <h3 className="text-xl font-bold">PG Accommodations</h3>
                <p className="text-gray-500 dark:text-gray-400">Find comfortable and affordable paying guest accommodations near your campus.</p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <UtensilsCrossed className="h-12 w-12 text-gray-900" />
                <h3 className="text-xl font-bold">Mess Facilities</h3>
                <p className="text-gray-500 dark:text-gray-400">Discover mess facilities offering delicious and nutritious meals for students.</p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <Coffee className="h-12 w-12 text-gray-900" />
                <h3 className="text-xl font-bold">Amenities</h3>
                <p className="text-gray-500 dark:text-gray-400">Explore accommodations with various amenities to make your stay comfortable.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Featured Listings</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="border rounded-lg overflow-hidden">
                  <img
                    alt="Accommodation"
                    className="object-cover w-full h-60"
                    height="300"
                    src={`my-project/public/img.jpg`}
                    style={{
                      aspectRatio: "400/300",
                      objectFit: "cover",
                    }}
                    width="400"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2">Cozy PG Near Campus</h3>
                    <p className="text-gray-500 mb-4">2 beds • Shared bathroom • Mess included</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold">₹8,000/mo</span>
                      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">View Details</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About CampusCrib</h3>
              <p className="text-sm">CampusCrib is your one-stop solution for finding the perfect student accommodation near your campus.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/" className="text-sm hover:underline">Home</a></li>
                <li><a href="/listings" className="text-sm hover:underline">Listings</a></li>
                <li><a href="/about" className="text-sm hover:underline">About Us</a></li>
                <li><a href="/contact" className="text-sm hover:underline">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-center"><Phone className="h-4 w-4 mr-2" /> <span className="text-sm">+91 1234567890</span></li>
                <li className="flex items-center"><Mail className="h-4 w-4 mr-2" /> <span className="text-sm">info@campuscrib.com</span></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-400"><Facebook className="h-6 w-6" /></a>
                <a href="#" className="hover:text-blue-400"><Twitter className="h-6 w-6" /></a>
                <a href="#" className="hover:text-blue-400"><Instagram className="h-6 w-6" /></a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-sm">&copy; 2024 CampusCrib. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App