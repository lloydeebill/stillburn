// HomePage.js
import React from 'react';
import InfoContainer from '../components/InfoContainer';
// Replace these GIFs with video imports
import video1 from '../assets/video1.mp4'; // Example video file
import video2 from '../assets/video2.mp4'; // Another video file
import logoVideo from '../assets/logo-video.mp4';
import ServiceCarousel from '../components/ServiceCarousel';

function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="w-full max-w-screen-lg mx-10 px-5 py-20">
          <div className="mb-6">
            <h1 className="text-xl font-semibold text-text-color">
              Virtual Solutions Operations
            </h1>
          </div>

          <div className="text-2xl md:text-8xl">
            <p className="mb-6">
              Igniting{' '}
              <span className="font-bold text-primary-color">solutions,</span>{' '}
              delivering{' '}
              <span className="font-bold text-secondary-color">excellence</span>{' '}
              with our{' '}
              <span className="font-bold text-accent-color">assistance.</span>
            </p>
          </div>
        </div>
      </section>

      <section className="media-section">
        <div className="mx-10 px-4 flex flex-wrap gap-6">
          <div className="w-full sm:flex-1 sm:w-1/3 md:w-1/3">
            {/* Replaced gif1 with video1 */}
            <InfoContainer media={video1} />
          </div>
          <div className="w-full sm:flex-1 sm:w-1/3 md:w-1/3">
            {/* Replaced gif4 with video4 */}
            <InfoContainer media={logoVideo} />
          </div>
          <div className="w-full sm:flex-1 sm:w-1/3 md:w-1/3">
            {/* Replaced gif3 with video3 */}
            <InfoContainer media={video2} />
          </div>
        </div>
      </section>

      <div className="mx-10 px-5 py-20 text-2xl font-semibold mb-2 flex">
        <ServiceCarousel />
      </div>
    </>
  );
}

export default HomePage;
