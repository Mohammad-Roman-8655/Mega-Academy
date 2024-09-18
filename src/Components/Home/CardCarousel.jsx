import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const CardCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full max-w-xl mx-auto overflow-hidden">
      <div className="flex justify-center">
        <div className="w-3/4 h-64 block justify-center">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex}`}
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
         <div>
         <h1>Mohammad Roman</h1>
         <p>Experince : 5+ years</p>
         </div>
        </div>
      </div>

      {/* Left Arrow */}
      <div className="absolute top-1/2 transform -translate-y-1/2 left-4 text-gray-500 cursor-pointer">
        <FaChevronLeft size={30} onClick={prevSlide} />
      </div>

      {/* Right Arrow */}
      <div className="absolute top-1/2 transform -translate-y-1/2 right-4 text-gray-500 cursor-pointer">
        <FaChevronRight size={30} onClick={nextSlide} />
      </div>

      {/* Dots (for slide navigation) */}
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full mx-2 cursor-pointer ${
              currentIndex === index ? 'bg-gray-800' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CardCarousel;
