import React, { useState } from 'react'

const listings = [
  { id: 1, name: 'Krishna PG', type: 'PG', price: 3000, image: 'https://content.jdmagicbox.com/v2/comp/delhi/n5/011pxx11.xx11.240629154541.u8n5/catalogue/krishna-pg-chhaprola-ghaziabad-paying-guest-accommodations-sya7v71193.jpg?imwidth=128' },
  { id: 2, name: 'Shree Radha Krishna Palace', type: 'Hostel', price: 3599, image: 'https://content.jdmagicbox.com/v2/comp/delhi/v6/011pxx11.xx11.210804084718.z6v6/catalogue/shree-radha-krishna-palace-noida-extension-noida-guest-house-4br920pmiy.jpg?imwidth=128' },
  { id: 3, name: 'Milestone', type: 'Apartment', price: 7500, image: 'https://content.jdmagicbox.com/comp/ghaziabad/e8/011pxx11.xx11.200709173908.p6e8/catalogue/milestone-indirapuram-ghaziabad-estate-agents-for-residential-rental-sf2gmeppdb.jpg?imwidth=128' },
  { id: 4, name: 'Star PG', type: 'PG', price: 6500, image: 'https://content.jdmagicbox.com/v2/comp/delhi/p9/011pxx11.xx11.190518132554.j4p9/catalogue/star-pg-indirapuram-ghaziabad-ac-paying-guest-accommodations-for-men-hbs4ql4t44.jpg?imwidth=128' },
  { id: 5, name: 'Bharat Girls PG', type: 'PG', price: 3500, image: 'https://content.jdmagicbox.com/v2/comp/delhi/d7/011pxx11.xx11.180719111045.c4d7/catalogue/bharat-girls-pg-noida-noida-paying-guest-accommodations-uvgy1mmvi9.jpg?imwidth=128' },
  { id: 6, name: 'Kalpana Cottage', type: 'HOSTEL', price: 5000, image: 'https://content.jdmagicbox.com/v2/comp/delhi/j4/011pxx11.xx11.221217224957.i7j4/catalogue/ezstays-kalpana-cottage-b2-delhi-hostels-sqv0ebyuk6.jpg?imwidth=128' },
  { id: 6, name: 'Shivam Hostel and PG', type: 'HOSTEL', price: 4600, image: 'https://content.jdmagicbox.com/comp/ghaziabad/w2/011pxx11.xx11.180524162604.c4w2/catalogue/shivam-hostel-and-pg-govindpuram-ghaziabad-hostels-0p8s82ip5o.jpg?imwidth=128' },
  { id: 6, name: 'Krishna Girls PG', type: 'Apartment', price: 4800, image: 'https://content.jdmagicbox.com/comp/ghaziabad/p4/011pxx11.xx11.190927215419.l1p4/catalogue/krishna-girls-pg-ghaziabad-1yculrcenw.jpg?imwidth=128' },
  { id: 6, name: 'Nehru Nagar Ghaziabad', type: 'Apartment', price: 7000, image: 'https://is1-2.housingcdn.com/01c16c28/1fcd3ad16021d23e1c53c118fe01c10a/v0/fs/3_bhk_apartment-for-rent-pandav_nagar_ghaziabad-Ghaziabad-hall.jpg' },
  { id: 6, name: 'PG', type: 'Apartment', price: 8500, image: '/https://is1-2.housingcdn.com/01c16c28/1fcd3ad16021d23e1c53c118fe01c10a/v0/fs/3_bhk_apartment-for-rent-pandav_nagar_ghaziabad-Ghaziabad-hall.jpg' },
  
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