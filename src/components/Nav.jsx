import { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logo from '../assets/logo.png';

function Nav() {
  // Dynamically wrap each letter in <span> tag when the component mounts
  useEffect(() => {
    const links = document.querySelectorAll('nav a');
    links.forEach((link) => {
      // Wrap each letter in a <span> tag
      link.innerHTML = link.textContent
        .split('')
        .map(
          (letter) => `<span class="HoverAnimation_character">${letter}</span>`
        )
        .join('');
    });
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div className="flex items-center justify-between mx-10 my-10 px-5">
      {/* Logo Section */}
      <h1 className="text-xs sm:text-xl md:text-2xl text-text-color font-semibold">
        StillBurn Global
      </h1>
      {/* <img src={logo} alt="Logo" className="w-20 h-auto" /> */}

      {/* Navigation Links and Button Section */}
      <div className="flex items-center">
        {/* Navigation Links */}
        <nav className="flex justify-end space-x-2 md:space-x-10 text-xs md:text-2xl ">
          {/* Using Link from react-router-dom instead of <a> */}
          <Link to="/service" className="text-text-color">
            Features
          </Link>
          <Link to="/project" className="text-text-color">
            Works
          </Link>
          <Link to="/about" className="text-text-color">
            Team
          </Link>
          <Link to="/contact" className="text-text-color">
            Connect
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
