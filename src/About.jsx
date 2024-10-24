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
          src="https://www.campuscribs.co.uk/wp-content/uploads/2019/01/new-logo.png"
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
    {[
      { role: 'Frontend', image: 'https://media.licdn.com/dms/image/v2/D4E03AQE-zJyLS9CqOA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1729766161187?e=2147483647&v=beta&t=L2Lh5PuZirHKYaeQiUWn031s_KT_afbmSWhdxZbwkFg', description: 'Some info about Frontend.' },
      { role: 'UI/UX', image: 'https://media.licdn.com/dms/image/v2/D5603AQHA3Nuox-DR1g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1719035999600?e=2147483647&v=beta&t=g0fLSRuC18Ar0tkfENr3uQu0y41yyrJV5kO5x6JI3CI', description: 'Some info about UI/UX.' },
      { role: 'Backend', image: 'https://media.licdn.com/dms/image/v2/D5603AQFkp6FP80dAoQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1728202899334?e=2147483647&v=beta&t=xDQg96UJkiWkjtgHu7RQL7YcLVk8shBloGq3XynHFLQ', description: 'Some info about Backend.' },
      { role: 'Front/Backend', image: 'https://media.licdn.com/dms/image/v2/D5603AQEBHU3WIsUNAw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1724861271482?e=2147483647&v=beta&t=lyRpQ16N0p4Y2H1zetqkh9ZTvA0gaXXsoT44LL01p0k', description: 'Some info about Data Research.' }
    ].map((member, index) => (
      <div key={index} className="text-center">
        <div className="relative w-40 h-40 rounded-full overflow-hidden shadow-lg mx-auto mb-4">
          <img
            src={member.image}
            alt={member.role}
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-xl font-semibold text-gray-800">{member.role}</h3>
        <p className="text-gray-500 text-sm">{member.description}</p>
      </div>
    ))}
  </div>
</div>

    </div>
  );
}
