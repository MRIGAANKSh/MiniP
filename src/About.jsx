import React from 'react';

export default function About() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-5xl font-bold mb-12 text-center text-gray-800">About Campus Crib</h1>

      {/* Intro Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
        <div>
          <p className="text-lg leading-relaxed text-gray-600 mb-6">
            Campus Crib is a leading student accommodation provider, dedicated to offering comfortable and affordable living spaces for students. Our mission is to create a home away from home, providing all the amenities students need to focus on their studies and enjoy their college experience.
          </p>
          <p className="text-lg leading-relaxed text-gray-600">
            Founded in 2024, we have grown to become one of the most trusted names in student housing, with properties located near major universities nationwide.
          </p>
        </div>
        <img
          src="/images/campus-crib-building.jpg"
          alt="Campus Crib Building"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Values Section */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-10 rounded-lg mb-16 shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Values</h2>
        <ul className="list-disc list-inside space-y-3 text-lg text-gray-600">
          <li>Providing safe and comfortable living spaces</li>
          <li>Fostering a sense of community among students</li>
          <li>Offering affordable housing options</li>
          <li>Supporting academic success with dedicated study areas</li>
          <li>Promoting sustainability in our operations</li>
        </ul>
      </div>

      {/* Team Section */}
      <div>
        <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {['Frontend', 'Ui-Ux', 'Backend ', 'Data-Research'].map((role, index) => (
            <div key={index} className="text-center">
              <div className="relative w-40 h-40 rounded-full overflow-hidden shadow-lg mx-auto mb-4">
                <img
                  src={`/images/team-${role.toLowerCase().replace(' ', '-')}.jpg`}
                  alt={role}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{role}</h3>
              <p className="text-gray-500 text-sm">Some quick info about the {role} role here.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
