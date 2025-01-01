import React from 'react';

function Stats() {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '2rem',
      padding: '2rem 0',
      textAlign: 'center',
      fontSize: '1.2rem', // Increased font size for text
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
        <span><i className="fa-solid fa-location-dot" style={{ fontSize: '2rem' }}></i></span> {/* Increased icon size */}
        <span style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>24+ Cities</span> {/* Increased text size */}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
        <span><i className="fa-regular fa-building" style={{ fontSize: '2rem' }}></i></span> {/* Increased icon size */}
        <span style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>450+ Residences</span> {/* Increased text size */}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
        <span><i className="fa-solid fa-bed" style={{ fontSize: '2rem' }}></i></span> {/* Increased icon size */}
        <span style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>90,000+ Beds</span> {/* Increased text size */}
      </div>
    </div>
  );
}

export default Stats;
