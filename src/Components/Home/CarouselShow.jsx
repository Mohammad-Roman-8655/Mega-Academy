
import React from 'react';
import ImageCarousel from './ImageCarousel';
import { useState,useEffect } from 'react';

function CarouselShow() {
  // const [data,setData]=useState({});

  // useEffect(()=>{
  //         fetchData();
  // },[]);

  // const fetchData = async () => {
  //   try {
  //     // Make a GET request using the Fetch API
  //     const Carousel = await fetch('http://localhost:8080/api/ImageCarousel');
      
  //     // Check if the response is successful (status code 200-299)
  //     if (!Carousel.ok) {
  //       throw new Error('Network response was not ok');
  //     }

  //     // Parse the JSON data from the response
  //     const result = await Carousel.json();
  //     console.log(result);

  //     // Update the state with the fetched data
  //     setData(result);
  //   } catch (error) {
  //     console.error('Error fetching data:', error.message);
  //   }
  // };
    const slides = [
        {
          img: 'https://res.cloudinary.com/dcxlcy6ls/image/upload/v1726388151/dvsomzznh8uvv8xmz6lf.png',
          title: 'Beautiful Sunset',
          description: 'A beautiful sunset over the mountains.',
        },
        {
          img: 'https://res.cloudinary.com/dcxlcy6ls/image/upload/v1726388230/ebooxlfxgmgakwjn6q95.png',
          title: 'Ocean Breeze',
          description: 'Relax by the ocean with the sound of waves.',
        },
        {
          img: 'https://res.cloudinary.com/dcxlcy6ls/image/upload/v1726388277/fj9ndhjnapefznqtbppi.png',
          title: 'Majestic Forest',
          description: 'Explore the dense forest and its wonders.',
        },
        {
            img: 'https://res.cloudinary.com/dcxlcy6ls/image/upload/v1726388479/swzmebyopgzupre9brrj.png',
            title: 'Majestic Forest',
            description: 'Explore the dense forest and its wonders.',
          },
          {
            img: 'https://res.cloudinary.com/dcxlcy6ls/image/upload/v1726388626/j2vhyccan96j92l9dps9.png',
            title: 'Majestic Forest',
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