import React from 'react'

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">About Campus Crib</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
        <div>
          <p className="text-lg mb-4">
            Campus Crib is a leading student accommodation provider, dedicated to offering comfortable and affordable living spaces for students. Our mission is to create a home away from home for students, providing them with all the amenities they need to focus on their studies and enjoy their college experience.
          </p>
          <p className="text-lg">
            Founded in 2010, we have grown to become one of the most trusted names in student housing, with properties near major universities across the country.
          </p>
        </div>
        <img src="/placeholder.svg?height=400&width=600" alt="Campus Crib Building" className="w-full h-auto rounded-lg shadow-md" />
      </div>
      <div className="bg-blue-100 p-8 rounded-lg mb-12">
        <h2 className="text-2xl font-bold mb-4">Our Values</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Providing safe and comfortable living spaces</li>
          <li>Fostering a sense of community among students</li>
          <li>Offering affordable housing options</li>
          <li>Supporting academic success through dedicated study areas</li>
          <li>Promoting sustainability in our operations</li>
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['CEO', 'Operations Manager', 'Student Relations'].map((role, index) => (
            <div key={index} className="text-center">
              <img src={`/placeholder.svg?height=150&width=150&text=${role}`} alt={role} className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold">{role}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}