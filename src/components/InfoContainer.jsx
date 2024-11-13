// InfoContainer.js
import React from 'react';

function InfoContainer({ image }) {
  return (
    <div className="info-container flex justify-center items-center rounded-2xl">
      <img
        src={image}
        alt="Gif"
        className="w-full h-auto object-cover rounded-2xl"
      />
    </div>
  );
}

export default InfoContainer;
