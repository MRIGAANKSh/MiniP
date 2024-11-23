import express from 'express';
import cors from 'cors';

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const listings = [
  {
    id: 1,
    name: 'Krishna PG',
    type: 'PG',
    price: 3000,
    image: 'https://content.jdmagicbox.com/v2/comp/delhi/n5/011pxx11.xx11.240629154541.u8n5/catalogue/krishna-pg-chhaprola-ghaziabad-paying-guest-accommodations-sya7v71193.jpg?imwidth=128',
    address: '123 Krishna Street, Ghaziabad, Uttar Pradesh',
    bedrooms: 2,
    bathrooms: 1,
    amenities: ['Wi-Fi', 'AC', 'Laundry', 'Meals'],
    description: 'Comfortable PG accommodation with all modern amenities.',
    phone: '+91 98765 43210',
    email: 'info@krishnapg.com',
    location: { lat: 28.6692, lng: 77.4538 }
  },
  {
    id: 2,
    name: 'Shree Radha Krishna Palace',
    type: 'Hostel',
    price: 3599,
    image: 'https://content.jdmagicbox.com/v2/comp/delhi/v6/011pxx11.xx11.210804084718.z6v6/catalogue/shree-radha-krishna-palace-noida-extension-noida-guest-house-4br920pmiy.jpg?imwidth=128',
    address: '456 Radha Krishna Road, Noida, Uttar Pradesh',
    bedrooms: 3,
    bathrooms: 2,
    amenities: ['Wi-Fi', 'AC', 'Gym', 'Study Room'],
    description: 'Luxurious hostel accommodation for students and working professionals.',
    phone: '+91 98765 43211',
    email: 'info@radhakrishnapalace.com',
    location: { lat: 28.5355, lng: 77.3910 }
  },
  {
    id: 3,
    name: 'Milestone',
    type: 'Apartment',
    price: 7500,
    image: 'https://content.jdmagicbox.com/comp/ghaziabad/e8/011pxx11.xx11.200709173908.p6e8/catalogue/milestone-indirapuram-ghaziabad-estate-agents-for-residential-rental-sf2gmeppdb.jpg?imwidth=128',
    address: '789 Milestone Avenue, Indirapuram, Ghaziabad',
    bedrooms: 3,
    bathrooms: 2,
    amenities: ['Wi-Fi', 'AC', 'Parking', 'Security'],
    description: 'Modern apartment complex with spacious rooms and excellent amenities.',
    phone: '+91 98765 43212',
    email: 'info@milestoneapartments.com',
    location: { lat: 28.6431, lng: 77.3739 }
  },
  {
    id: 4,
    name: 'Star PG',
    type: 'PG',
    price: 6500,
    image: 'https://content.jdmagicbox.com/v2/comp/delhi/p9/011pxx11.xx11.190518132554.j4p9/catalogue/star-pg-indirapuram-ghaziabad-ac-paying-guest-accommodations-for-men-hbs4ql4t44.jpg?imwidth=128',
    address: '101 Star Street, Indirapuram, Ghaziabad',
    bedrooms: 1,
    bathrooms: 1,
    amenities: ['Wi-Fi', 'AC', 'Meals', 'Laundry'],
    description: 'Comfortable PG for men with all necessary facilities.',
    phone: '+91 98765 43213',
    email: 'info@starpg.com',
    location: { lat: 28.6372, lng: 77.3755 }
  },
  {
    id: 5,
    name: 'Bharat Girls PG',
    type: 'PG',
    price: 3500,
    image: 'https://content.jdmagicbox.com/v2/comp/delhi/d7/011pxx11.xx11.180719111045.c4d7/catalogue/bharat-girls-pg-noida-noida-paying-guest-accommodations-uvgy1mmvi9.jpg?imwidth=128',
    address: '202 Bharat Road, Noida, Uttar Pradesh',
    bedrooms: 2,
    bathrooms: 1,
    amenities: ['Wi-Fi', 'AC', 'Meals', 'Security'],
    description: 'Safe and comfortable PG for girls with homely environment.',
    phone: '+91 98765 43214',
    email: 'info@bharatgirlspg.com',
    location: { lat: 28.5708, lng: 77.3260 }
  },
  // New Listings
  {
    id: 6,
    name: 'Elite Residency',
    type: 'Apartment',
    price: 12000,
    image: 'https://via.placeholder.com/1280x720.png?text=Elite+Residency',
    address: '203 Elite Road, Greater Noida, Uttar Pradesh',
    bedrooms: 4,
    bathrooms: 3,
    amenities: ['Wi-Fi', 'AC', 'Swimming Pool', 'Gym', 'Security'],
    description: 'High-end apartments with luxurious amenities and 24/7 security.',
    phone: '+91 98765 43215',
    email: 'info@eliteresidency.com',
    location: { lat: 28.5293, lng: 77.4343 }
  },
  {
    id: 7,
    name: 'Sunny Hostel',
    type: 'Hostel',
    price: 4200,
    image: 'https://via.placeholder.com/1280x720.png?text=Sunny+Hostel',
    address: '88 Sunny Lane, Noida, Uttar Pradesh',
    bedrooms: 3,
    bathrooms: 2,
    amenities: ['Wi-Fi', 'AC', 'Meals', 'Laundry'],
    description: 'Affordable hostel with a homely feel and excellent connectivity.',
    phone: '+91 98765 43216',
    email: 'info@sunnyhostel.com',
    location: { lat: 28.5812, lng: 77.3590 }
  },
  {
    id: 8,
    name: 'The Royal PG',
    type: 'PG',
    price: 5500,
    image: 'https://via.placeholder.com/1280x720.png?text=The+Royal+PG',
    address: '45 Royal Street, Delhi, India',
    bedrooms: 1,
    bathrooms: 1,
    amenities: ['Wi-Fi', 'AC', 'Meals', 'Laundry', 'Security'],
    description: 'Premium PG accommodation with a focus on comfort and security.',
    phone: '+91 98765 43217',
    email: 'info@royalpg.com',
    location: { lat: 28.6139, lng: 77.2090 }
  },
  {
    id: 9,
    name: 'Metro Apartments',
    type: 'Apartment',
    price: 9000,
    image: 'https://via.placeholder.com/1280x720.png?text=Metro+Apartments',
    address: '55 Metro Road, Delhi, India',
    bedrooms: 2,
    bathrooms: 1,
    amenities: ['Wi-Fi', 'AC', 'Parking', 'Security'],
    description: 'Modern apartments with a city view and all essential amenities.',
    phone: '+91 98765 43218',
    email: 'info@metroapartments.com',
    location: { lat: 28.7074, lng: 77.2095 }
  },
  {
    id: 10,
    name: 'Shree Krishna Residency',
    type: 'PG',
    price: 4000,
    image: 'https://via.placeholder.com/1280x720.png?text=Shree+Krishna+Residency',
    address: '100 Krishna Street, Ghaziabad, Uttar Pradesh',
    bedrooms: 2,
    bathrooms: 1,
    amenities: ['Wi-Fi', 'AC', 'Meals', 'Laundry'],
    description: 'Comfortable PG for students with all the required facilities.',
    phone: '+91 98765 43219',
    email: 'info@shreekrishnaresidency.com',
    location: { lat: 28.6690, lng: 77.4210 }
  }
];

app.get('/api/listings', (req, res) => {
  res.json(listings);
});

app.get('/api/listings/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const listing = listings.find(l => l.id === id);
  if (listing) {
    res.json(listing);
  } else {
    res.status(404).json({ message: 'Listing not found' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
