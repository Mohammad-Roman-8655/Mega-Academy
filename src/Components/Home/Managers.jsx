import React from 'react'
import { useState,useEffect } from 'react';
function Managers() {
    const [managers, setManagers] = useState([]);

const fetchManagers = async () => {
  try {
    const response = await fetch("http://localhost:8080/Manager");
    const data = await response.json();
    setManagers(data);
  } catch (error) {
    console.error("Error:", error);
  }
};

useEffect(() => {
  fetchManagers();
}, []);
  return (
    <div>
        <div>
            <h1 className='lg:text-5xl md:text-5xl sm:text-3xl text-3xl text-center font-semibold mb-5 '>Our Managers</h1>

            <div className='row-1 lg:flex md:flex sm:block block justify-around my-7 mt-10'>
               {
                managers.map((manager,idx) => {
                             return(
                                <div key={idx} className='lg:w-[20%] md:w-[20%] sm:w-[80%] w-[80%] lg:mx-0 md:mx-0 sm:mx-auto mx-auto rounded-md border-2 shadow-md hover:shadow-lg'>
                                <img  className="mb-5  " src={manager.photo} alt="Photo" />
                                <div className="info pb-5">
                                    <h1 className='lg:text-2xl md:text-2xl sm:text-xl text-xl font-bold text-center '>{manager.name}</h1>
                                    <h3 className='lg:text-xl md:text-xl sm:text-lg text-lg font-semibold text-center'>{manager.position}</h3>
                                   
                                </div>
                            
                            </div>
                             )
                })
               }
            
               
            </div>
          
        </div>
    </div>
  )
}

export default Managers