
import React, { useState, useEffect } from 'react';



function NavBarTop() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // Cleanup on component unmount
  }, []);

  const formatDateTime = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const time = date.toLocaleTimeString();
    const formattedDate = date.toLocaleDateString(undefined, options);
    return `${formattedDate}, ${time}`;
  };
  return (
    <div className='lg:flex md:flex sm:hidden hidden justify-between items-center border-b-[1px]  border-b-blue w-full bg-gradient-to-r from-sky-500 to-gray-700 text-white h-5 px-5 py-4'>
        <div className="contact flex items-center gap-8 ">
           <div className='flex items-center gap-2'>
           <i className="fa-regular fa-envelope"></i>
            <p>megaacademy@gmail.com</p>
           </div>
           <p>|</p>
           <div className='flex items-center gap-1'>
           <i className="fa-solid fa-phone"></i>
            <p>+91 6386663632</p>
             <p className='ml-10'>|</p>
             <p className='ml-10'>Academic Year 2024-25</p>
             <p className='ml-10'>|</p>
             <p className='ml-10'>{formatDateTime(currentDateTime)}</p>
           </div>

        </div>
        <div className="social-media flex items-center gap-10">
           

            <a href="https://www.instagram.com/mega.academy12?igsh=bDZvOTkwNXVodzlo"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://www.facebook.com/mega.acedmy?mibextid=ZbWKwL"><i className="fa-brands fa-facebook"></i></a>
            <a href="https://www.google.com/maps/place/Mega+Academy/@26.9899584,80.9755348,17z/data=!3m1!4b1!4m6!3m5!1s0x3999513cb1060f97:0x561392727c3b4e53!8m2!3d26.9899584!4d80.9755348!16s%2Fg%2F11qn6tk0jx?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D"><i className="fa-solid fa-location-dot"></i></a>

         
        </div>
        
    </div>
  )
}

export default NavBarTop