
import React from 'react';
import ImageCarousel from './ImageCarousel';

function CarouselShow() {
    const slides = [
        {
          image: 'https://res.cloudinary.com/dcxlcy6ls/image/upload/v1726388151/dvsomzznh8uvv8xmz6lf.png',
          caption: 'Beautiful Sunset',
          description: 'A beautiful sunset over the mountains.',
        },
        {
          image: 'https://res.cloudinary.com/dcxlcy6ls/image/upload/v1726388230/ebooxlfxgmgakwjn6q95.png',
          caption: 'Ocean Breeze',
          description: 'Relax by the ocean with the sound of waves.',
        },
        {
          image: 'https://res.cloudinary.com/dcxlcy6ls/image/upload/v1726388277/fj9ndhjnapefznqtbppi.png',
          caption: 'Majestic Forest',
          description: 'Explore the dense forest and its wonders.',
        },
        {
            image: 'https://res.cloudinary.com/dcxlcy6ls/image/upload/v1726388479/swzmebyopgzupre9brrj.png',
            caption: 'Majestic Forest',
            description: 'Explore the dense forest and its wonders.',
          },
          {
            image: 'https://res.cloudinary.com/dcxlcy6ls/image/upload/v1726388626/j2vhyccan96j92l9dps9.png',
            caption: 'Majestic Forest',
            description: 'Explore the dense forest and its wonders.',
          },
         
      ];
    
  return (
    <div className="min-h-screen bg-gray-100 overflow-hidden  
     flex items-center justify-center">
    <ImageCarousel slides={slides} />
  </div>
   
  )
}

export default CarouselShow