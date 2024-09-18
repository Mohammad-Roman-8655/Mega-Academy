
import React from 'react';
import CardCarousel from './CardCarousel';





function OurTeacher() {
    const images = [
        'https://via.placeholder.com/600x400?text=Slide+1',
        'https://via.placeholder.com/600x400?text=Slide+2',
        'https://via.placeholder.com/600x400?text=Slide+3',
        'https://via.placeholder.com/600x400?text=Slide+4',
      ];
    
      return (
        <div className="App">
          <h1 className="text-center text-3xl font-bold my-6">Our Teachers</h1>
          <CardCarousel images={images} />
        </div>
      );
    }
export default OurTeacher;