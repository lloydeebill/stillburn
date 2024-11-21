import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

function Nav() {
  useEffect(() => {
    const links = document.querySelectorAll('nav a');
    links.forEach((link) => {
      link.innerHTML = link.textContent
        .split('')
        .map(
          (letter) => `<span class="HoverAnimation_character">${letter}</span>`
        )
        .join('');
    });
  }, []);

  return (
    <div className="flex items-center justify-between mx-5 my-5 px-5 text-primary-color">
      {/* Logo Section with SVG as React component */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="w-32 h-auto" />
      </div>

      {/* Navigation Links */}
      <div className="flex items-center">
        <nav className="flex items-center justify-end space-x-2 mt-2 md:space-x-10 text-xs md:text-xl">
          <Link to="/service">Service</Link>
          <Link to="/project">Works</Link>
          <Link to="/about">Team</Link>
          <Link to="/contact">Connect</Link>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
