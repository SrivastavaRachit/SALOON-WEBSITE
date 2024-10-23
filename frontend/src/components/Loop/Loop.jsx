import React, { useEffect, useRef } from "react";
import "../Loop/Loop.css"; // Import custom styles

// Import logos from assets
import windowsLogo from "../../assets/l1.png";
import mitLogo from "../../assets/l2.png";
import robinhoodLogo from "../../assets/l3.png";
import sapLogo from "../../assets/l4.png";
import krogerLogo from "../../assets/l5.png";
import mediumLogo from "../../assets/l6.png";

const logos = [
  windowsLogo,
  mitLogo,
  robinhoodLogo,
  sapLogo,
  krogerLogo,
  mediumLogo,
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
    <div className="carousel-container relative overflow-hidden bg-coral w-full max-w-full py-4">
      <div
        ref={trackRef}
        className="carousel-track flex space-x-8 sm:space-x-10 md:space-x-16 items-center w-full"
      >
        {logos.concat(logos).map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index}`}
            className="carousel-item h-10 sm:h-12 md:h-16 transition-opacity duration-300 ease-in-out"
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
