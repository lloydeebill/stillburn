// HomePage.js
import React from 'react';
import HeroSection from '../components/HeroSection';
// Replace these GIFs with video imports

function HomePage() {
  return (
    <>
      <section className="hero flex justify-center mx-10 px-4 md:my-16 lg:my-36 py-20">
        <HeroSection />
      </section>

      <section className="media-section">
        <div className="mx-10 px-4 flex flex-wrap gap-6">
          <div className="w-full sm:flex-1 sm:w-1/3 md:w-1/3"></div>
          <div className="w-full sm:flex-1 sm:w-1/3 md:w-1/3"></div>
          <div className="w-full sm:flex-1 sm:w-1/3 md:w-1/3"></div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
