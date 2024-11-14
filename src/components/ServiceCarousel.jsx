import React, { useState, useEffect } from 'react';

function ServiceCarousel() {
  const descriptions = [
    'Social Media Management',
    'Website Management',
    'Administrative Support',
    'Research Analysis',
    'Visual Design',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [letters, setLetters] = useState([]);
  const [letterIndex, setLetterIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false); // To handle fade out
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false); // To manage initial visibility

  // Reset the state when changing descriptions
  useEffect(() => {
    setLetters(descriptions[currentIndex].split(''));
    setLetterIndex(0); // Start from the first letter
    setFadeOut(false); // Start with no fade-out
    setIsDescriptionVisible(false); // Hide description initially
  }, [currentIndex]);

  // Change descriptions every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setFadeOut(true); // Start fading out the current text
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % descriptions.length); // Switch to next description
      }, 1000); // Delay description switch until fade-out is done
    }, 5000); // Switch description every 10 seconds

    return () => clearInterval(interval);
  }, []);

  // Letter-by-letter fade-in effect
  useEffect(() => {
    if (!fadeOut && letterIndex < letters.length) {
      const timeout = setTimeout(() => {
        setLetterIndex(letterIndex + 1); // Reveal next letter
      }, 100); // 100ms delay between each letter
      return () => clearTimeout(timeout);
    }
  }, [fadeOut, letterIndex, letters.length]);

  // Start fading in the new description after fade-out is complete
  useEffect(() => {
    if (!fadeOut && letterIndex === 0) {
      setIsDescriptionVisible(true); // Start the fade-in process
    }
  }, [fadeOut, letterIndex]);

  return (
    <h2>
      {/* Apply fade-in and fade-out effect */}
      <span
        className={`inline-block transition-opacity duration-1000 ease-in-out ${
          fadeOut || !isDescriptionVisible ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {letters.map((letter, index) => (
          <span
            key={index}
            className={`inline-block transition-opacity duration-1000 ${
              index <= letterIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {letter === ' ' ? '\u00A0' : letter} {/* Handle space correctly */}
          </span>
        ))}
      </span>
    </h2>
  );
}

export default ServiceCarousel;
