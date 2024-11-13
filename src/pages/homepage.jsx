// HomePage.js
import React from 'react';
import InfoContainer from '../components/InfoContainer';
import gif1 from '../assets/gif1.gif';
import gif2 from '../assets/gif2.gif';
import gif3 from '../assets/gif3.gif';
import gif4 from '../assets/gif4.gif';

function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="w-full max-w-screen-lg mx-10 px-5 py-20">
          <div className="mb-6">
            <h1 className="text-xl font-semibold text-primary-color">
              Remote Solutions
            </h1>
          </div>

          <div className="text-2xl md:text-8xl">
            <p className="mb-6">
              Igniting Solutions, Still delivering{' '}
              <span className="font-bold text-secondary-color">excellence</span>{' '}
              with our virtual{' '}
              <span className="font-bold text-accent-color">assistance</span>.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-10 px-4 flex flex-wrap gap-6">
          <div className="w-full sm:flex-1 sm:w-1/3 md:w-1/3">
            <InfoContainer image={gif1} />
          </div>
          <div className="w-full sm:flex-1 sm:w-1/3 md:w-1/3">
            <InfoContainer image={gif4} />
          </div>
          <div className="w-full sm:flex-1 sm:w-1/3 md:w-1/3">
            <InfoContainer image={gif3} />
          </div>
        </div>
      </section>

      <section className="service-preview"></section>
    </>
  );
}

export default HomePage;
