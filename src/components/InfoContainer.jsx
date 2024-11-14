import React from 'react';

function InfoContainer({ media }) {
  const isVideo = media.endsWith('.mp4') || media.endsWith('.webm'); // Check if the media is a video

  return (
    <div className="info-container flex justify-center items-center rounded-2xl">
      {isVideo ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-auto object-cover rounded-2xl"
        >
          <source src={media} type="video/mp4" />
          <source src={media.replace('.mp4', '.webm')} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img
          src={media}
          alt="Media"
          className="w-full h-auto object-cover rounded-2xl"
        />
      )}
    </div>
  );
}

export default InfoContainer;
