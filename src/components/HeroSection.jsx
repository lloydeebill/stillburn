import React from 'react';
import '../index.css';

function HeroSection() {
  return (
    <div className="text-4xl md:text-4xl">
      <h1 className="mb-6 text-primary-color ">
        A universe of <span className="animated-gradient">solutions</span> ,
        tailored to your <span className="animated-gradient">business </span>{' '}
        needs.
      </h1>
    </div>
  );
}

export default HeroSection;
