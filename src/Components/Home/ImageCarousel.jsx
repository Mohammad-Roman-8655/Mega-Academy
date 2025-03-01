import React, { useState, useEffect } from 'react';

const ImageCarousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      goToNext();
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(timer);
  }, [currentIndex]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="relative w-full mb-20 max-w-7xl mx-auto my-5">
      {/* Image */}
      <div className="overflow-hidden rounded-lg shadow-lg aspect-video">
        <img
          src={slides[currentIndex].image}
          alt={slides[currentIndex].caption}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Caption and Description */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent p-4 text-white">
        <h2 className="text-xl md:text-2xl font-semibold text-center mb-2">{slides[currentIndex].caption}</h2>
        <p className="text-xs md:text-sm text-center mb-3">{slides[currentIndex].description}</p>
      </div>

      {/* Previous Button */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-30 p-3 rounded-full text-white hover:bg-opacity-60 transition focus:outline-none"
      >
        &#10094;
      </button>

      {/* Next Button */}
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-30 p-3 rounded-full text-white hover:bg-opacity-60 transition focus:outline-none"
      >
        &#10095;
      </button>

      {/* Dots for navigation */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-500'} transition focus:outline-none`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
