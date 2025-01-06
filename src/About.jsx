import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl">
      <h1 className="text-4xl font-light mb-16 text-center text-gray-800">About Campus Crib</h1>

      {/* Intro Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
        <div>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Campus Crib is a premier student accommodation provider, committed to offering comfortable and affordable living spaces. We create a home away from home, equipping students with the amenities they need to excel in their studies and embrace their college experience.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Established in 2024, we have rapidly become a trusted name in student housing, with properties strategically located near major universities across the nation.
          </p>
        </div>
        <div className="relative">
          <img
            src="https://www.campuscribs.co.uk/wp-content/uploads/2019/01/new-logo.png"
            alt="Campus Crib Building"
            className="w-full h-auto rounded-lg shadow-xl"
          />
          <div className="absolute inset-0 bg-blue-500 mix-blend-multiply rounded-lg"></div>
        </div>
      </div>

      {/* Values Section */}
      <div className="mb-24">
        <h2 className="text-3xl font-light mb-8 text-gray-800 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            "Providing safe and comfortable living spaces",
            "Fostering a sense of community among students",
            "Offering affordable housing options",
            "Supporting academic success with dedicated study areas",
            "Promoting sustainability in our operations"
          ].map((value, index) => (
            <div key={index} className="flex items-center space-x-2 text-gray-600">
              <ChevronRight className="text-blue-500" size={20} />
              <span>{value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div>
        <h2 className="text-3xl font-light mb-12 text-gray-800 text-center">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { role: 'Frontend', image: 'https://media.licdn.com/dms/image/v2/D4E03AQE-zJyLS9CqOA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1729766161187?e=2147483647&v=beta&t=L2Lh5PuZirHKYaeQiUWn031s_KT_afbmSWhdxZbwkFg', description: 'Front-end development and design.' },
            { role: 'UI/UX', image: 'https://media.licdn.com/dms/image/v2/D5603AQHA3Nuox-DR1g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1719035999600?e=2147483647&v=beta&t=g0fLSRuC18Ar0tkfENr3uQu0y41yyrJV5kO5x6JI3CI', description: 'User experience and interface design.' },
            { role: 'Backend', image: 'https://media.licdn.com/dms/image/v2/D5603AQFkp6FP80dAoQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1728202899334?e=2147483647&v=beta&t=xDQg96UJkiWkjtgHu7RQL7YcLVk8shBloGq3XynHFLQ', description: 'Back-end development and server-side logic.' },
            { role: 'Full Stack', image: 'https://media.licdn.com/dms/image/v2/D5603AQEBHU3WIsUNAw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1724861271482?e=2147483647&v=beta&t=lyRpQ16N0p4Y2H1zetqkh9ZTvA0gaXXsoT44LL01p0k', description: 'Full-stack development and data research.' }
          ].map((member, index) => (
            <div key={index} className="text-center group">
              <div className="relative w-40 h-40 rounded-full overflow-hidden shadow-lg mx-auto mb-6 transition-transform duration-300 ease-in-out transform group-hover:scale-105">
                <img
                  src={member.image}
                  alt={member.role}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 ease-in-out"></div>
              </div>
              <h3 className="text-xl font-light text-gray-800 mb-2">{member.role}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

