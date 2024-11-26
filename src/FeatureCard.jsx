import React from 'react';

export default function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Increased height of the icon container */}
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-orange-100">
        <Icon className="h-8 w-8 text-orange-500" /> {/* Increased icon size */}
      </div>
      {/* Increased text size */}
      <h3 className="mb-4 text-xl font-semibold">{title}</h3> {/* Increased title font size */}
      <p className="text-base text-gray-600">{description}</p> {/* Increased description font size */}
    </div>
  );
}
