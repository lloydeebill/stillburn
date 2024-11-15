// HomePage.js
import React from 'react';
import InfoContainer from '../components/InfoContainer';
// Replace these GIFs with video imports
import video1 from '../assets/video1.mp4'; // Example video file
import video2 from '../assets/video2.mp4'; // Another video file
import logoVideo from '../assets/logo-video.mp4';

function HomePage() {
  return (
    <>
      <section className="hero flex justify-center mx-10 px-4 md:my-16 lg:my-36 py-20">
        <div>
          <div className="text-4xl md:text-4xl">
            <h1 className="mb-6 text-primary-color ">
              Igniting solutions, burning with{' '}
              <span className="font-bold">excellence</span> through our{' '}
              <span className="font-bold text-secondary-color">assistance</span>
              .
            </h1>
          </div>
        </div>
      </section>

      <section className="media-section">
        <div className="mx-10 px-4 flex flex-wrap gap-6">
          <div className="w-full sm:flex-1 sm:w-1/3 md:w-1/3">
            <InfoContainer media={video1} />
          </div>
          <div className="w-full sm:flex-1 sm:w-1/3 md:w-1/3">
            <InfoContainer media={logoVideo} />
          </div>
          <div className="w-full sm:flex-1 sm:w-1/3 md:w-1/3">
            <InfoContainer media={video2} />
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
