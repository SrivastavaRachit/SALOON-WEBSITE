// src/BlurCarousel.jsx
import React, { useEffect, useRef } from "react";
import "../Loop/Loop.css"; // Import custom styles

const logos = [
  "https://upload.wikimedia.org/wikipedia/commons/6/6a/Windows_logo_-_2021.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/0c/MIT_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/b/b9/Robinhood_Logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/5/51/Kroger_logo_%282019%29.svg",
  "https://upload.wikimedia.org/wikipedia/commons/4/45/Medium_logo_M.png",
];

const BlurCarousel = () => {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    let animationFrame;
    let scrollLeft = 0;

    const smoothScroll = () => {
      scrollLeft += 0.5; // Control speed here
      if (scrollLeft >= track.scrollWidth / 2) { 
        scrollLeft = 0; // Reset scroll to loop seamlessly
      }
      track.scrollLeft = scrollLeft;
      animationFrame = requestAnimationFrame(smoothScroll);
    };

    animationFrame = requestAnimationFrame(smoothScroll);
    return () => cancelAnimationFrame(animationFrame); // Cleanup on unmount
  }, []);

  return (
    <div className="carousel-container relative overflow-hidden bg-coral">
      <div
        ref={trackRef}
        className="carousel-track flex space-x-16 items-center"
      >
        {logos.concat(logos).map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index}`}
            className="carousel-item h-16 transition-opacity duration-300 ease-in-out"
          />
        ))}
      </div>

      {/* Peach gradient mask on both sides */}
      <div className="gradient-mask left-0"></div>
      <div className="gradient-mask right-0"></div>
    </div>
  );
};

export default BlurCarousel;