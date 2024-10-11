import React, { useState } from 'react'

const listings = [
  { id: 1, name: 'Sunshine PG', type: 'PG', price: 500, image: '/placeholder.svg?height=200&width=300&text=Sunshine PG' },
  { id: 2, name: 'Green Meadows Hostel', type: 'Hostel', price: 450, image: '/placeholder.svg?height=200&width=300&text=Green Meadows' },
  { id: 3, name: 'City Center Apartments', type: 'Apartment', price: 700, image: '/placeholder.svg?height=200&width=300&text=City Center' },
  { id: 4, name: 'Lakeside Dorms', type: 'Dorm', price: 400, image: '/placeholder.svg?height=200&width=300&text=Lakeside Dorms' },
  { id: 5, name: 'University Heights PG', type: 'PG', price: 550, image: '/placeholder.svg?height=200&width=300&text=University Heights' },
  { id: 6, name: 'Tech Park Residences', type: 'Apartment', price: 750, image: '/placeholder.svg?height=200&width=300&text=Tech Park' },
]

export default function Listings() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterType, setFilterType] = useState('All')

  const filteredListings = listings.filter(listing => 
    listing.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filterType === 'All' || listing.type === filterType)
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Listings</h1>
      <div className="mb-8 flex flex-col md:flex-row justify-between items-center">
        <input
          type="text"
          placeholder="Search listings..."
          className="border rounded-lg px-4 py-2 mb-4 md:mb-0 md:mr-4 w-full md:w-auto"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="border rounded-lg px-4 py-2 w-full md:w-auto"
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="All">All Types</option>
          <option value="PG">PG</option>
          <option value="Hostel">Hostel</option>
          <option value="Apartment">Apartment</option>
          <option value="Dorm">Dorm</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredListings.map(listing => (
          <div key={listing.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={listing.image} alt={listing.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{listing.name}</h2>
              <p className="text-gray-600 mb-2">Type: {listing.type}</p>
              <p className="text-blue-600 font-bold">₹{listing.price} / month</p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}