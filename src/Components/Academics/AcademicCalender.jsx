import React from 'react'
import { useState,useEffect } from 'react';
import { API_URL } from '../../config/apiConfig';

function AcademicCalender() {
  const [AcademicCalenders, setAcademicCalenders] = useState([]);
      
  const fetchAcademicCalenders = async () => {
    try {
      const response = await fetch(`${API_URL}/api/AcademicCalender`);
      const data = await response.json();
      setAcademicCalenders(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  
  useEffect(() => {
    fetchAcademicCalenders();
  }, []);
  return (
    <div className='w-full'>
      <div className='w-[100%]'>
        <div className='w-full mt-20'>
          <table className='border-collapse border border-black mx-auto lg:w-[80%] md:w-[80%] sm:w-[95%] w-[95%] text-center shadow-3xl'>
            <caption className='border border-black lg:p-5 md:p-5 sm:p-2 p-2 lg:text-2xl md:text-2xl sm:text-xl text-xl font-bold bg-blue-900 text-white'>Academic Calender</caption>
           <thead>
           <tr>
            <th className='border border-black lg:p-5 md:p-5 sm:p-2 p-2 bg-blue-500 text-white ' >Serial No.</th>
              <th className='border border-black lg:p-5 md:p-5 sm:p-2 p-2 bg-blue-500 text-white ' >DATE</th>
              <th className='border border-black lg:p-5 md:p-5 sm:p-2 p-2 bg-blue-500 text-white'>DAY</th>
              <th className='border border-black lg:p-5 md:p-5 sm:p-2 p-2  bg-blue-500 text-white'>EVENT</th>
            </tr>
           </thead>
           <tbody>
            {
              AcademicCalenders.map((CData,idx)=>{
                return(
                 
                   <tr key={idx}>
                    <td className='border border-black lg:p-5 md:p-5 sm:p-2 p-2'>{idx+1}</td>
                    <td className='border border-black lg:p-5 md:p-5 sm:p-2 p-2'>{CData.eventName}</td>
                    <td className='border border-black lg:p-5 md:p-5 sm:p-2 p-2 '>{CData.dayName}</td>
                    <td className='border border-black lg:p-5 md:p-5 sm:p-2 p-2 '>{new Date(CData.date).toLocaleDateString("en-GB")}</td>
                  </tr>
                 
                )
              })
            }
            </tbody>
           

          </table>
        </div>
      </div>
    </div>
  )
}



export default AcademicCalender


