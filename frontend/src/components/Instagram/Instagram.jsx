// InstagramSection.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import bg from '../../assets/bgInsta.jpg';
import img1 from '../../assets/i1.jpg';
import img2 from '../../assets/i2.jpg';
import img3 from '../../assets/i3.jpg';
import img4 from '../../assets/i4.jpg';
import img5 from '../../assets/i5.jpg';
import img6 from '../../assets/i6.jpg';



const InstagramSection = () => {
  const imagesRef = useRef([]);

  // GSAP effect: Image follows the cursor
  useEffect(() => {
    imagesRef.current.forEach((img) => {
      img.addEventListener('mousemove', (e) => {
        const { offsetX, offsetY, target } = e;
        const { offsetWidth, offsetHeight } = target;
        const moveX = (offsetX / offsetWidth) * 10 - 5;
        const moveY = (offsetY / offsetHeight) * 10 - 5;

        gsap.to(target, {
          x: moveX,
          y: moveY,
          duration: 0.3,
        });
      });

      img.addEventListener('mouseleave', (e) => {
        gsap.to(e.target, { x: 0, y: 0, duration: 0.3 });
      });
    });
  }, []);

  return (
    <div className="relative min-h-screen bg-cover bg-center instagram-section">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center " style={{ backgroundImage: `url(${bg})` }}></div>

      {/* Blur Box */}
      <div className="relative mx-auto max-w-5xl p-10  bg-white/30 backdrop-blur-lg rounded-lg shadow-lg">
        <h2 className="text-center text-3xl font-semibold text-dark mb-6" style={{ fontFamily: 'Zeyada' }}>INSTAGRAM</h2>

        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          <div
            className="instagram-image overflow-hidden rounded-md cursor-pointer"
            ref={(el) => imagesRef.current.push(el)}
          >
            <img src={img1} alt="Makeup" className="w-full h-full object-cover" />
          </div>
          <div
            className="instagram-image overflow-hidden rounded-md cursor-pointer"
            ref={(el) => imagesRef.current.push(el)}
          >
            <img src={img2} alt="Hair Styling" className="w-full h-full object-cover" />
          </div>
          <div
            className="instagram-image overflow-hidden rounded-md cursor-pointer"
            ref={(el) => imagesRef.current.push(el)}
          >
            <img src={img3} alt="Manicure" className="w-full h-full object-cover" />
          </div>
          <div
            className="instagram-image overflow-hidden rounded-md cursor-pointer"
            ref={(el) => imagesRef.current.push(el)}
          >
            <img src={img4} alt="Salon Items" className="w-full h-full object-cover" />
          </div>
          <div
            className="instagram-image overflow-hidden rounded-md cursor-pointer"
            ref={(el) => imagesRef.current.push(el)}
          >
            <img src={img5} alt="Floral Design" className="w-full h-full object-cover" />
          </div>
          <div
            className="instagram-image overflow-hidden rounded-md cursor-pointer"
            ref={(el) => imagesRef.current.push(el)}
          >
            <img src={img6} alt="Brushes" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Follow Button */}
        <div className="text-center mt-8">
          <button className="border-2 border-dark font-bold text-dark px-8 py-3 rounded-lg hover:bg-coral hover:text-black transition duration-300">
            FOLLOW US on Instagram @salon_insta
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstagramSection;
