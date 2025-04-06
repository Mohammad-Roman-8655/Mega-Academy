import React from 'react'
import { useState,useEffect } from 'react';

function Assignments() {
  const [Assignments, setAssignments] = useState([]);
  const [selectedStandard, setSelectedStandard] = useState(""); // State to store selected class

    // Fetch students with optional filtering by standard
    const fetchAssignments = async (standard = "") => {
      try {
        const url = standard
          ? `http://localhost:8080/api/Assignment?standard=${standard}`
          : "";
        const response = await fetch(url);
        const data = await response.json();
        setAssignments(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
  
    // Fetch all students on component mount
    useEffect(() => {
      fetchAssignments();
    }, []);
  
    // Handle class selection change
    const handleStandardChange = (e) => {
      setSelectedStandard(e.target.value);
    };
  return (
    <div className='w-full '>
    <div className='flex items-center  w-[100%] mx-auto lg:p-4 md:p-4 sm:p-3 p-3 m-5 text-center bg-blue-900 mb-10 '>
       <h1 className='text-center lg:text-2xl md:text-2xl sm:text-xl text-xl mx-auto text-white font-bold'>ASSIGNMENTS</h1>
    </div>
    <div className=" w-[80%] mx-auto mt-15">
    <div className="row-1 flex justify-center lg:flex-row md:flex-col sm:flex-col flex-col w-full mb-5">
    <div className="Standards lg:w-[40%] md:w-[90%] sm:w-[90%] w-[90%] lg:mx-0 md:mx-auto sm:mx-auto mx-auto flex flex-col lg:mb-0 md:mb-5 sm:mb-5  mb-5">
    <label htmlFor="Standards" className='font-semibold mb-2'>Select Class<span className='text-red-600 font-bold'>*</span></label>

        <select id="Standards" className='border-2  h-10 rounded-md ' value={selectedStandard} onChange={handleStandardChange}>
                <option value="" className='p-2'>Select Class </option>
                <option value="Pre-Nursery">Pre-Nursery</option>
                <option value="Nursery">Nursery</option>
                <option value="LKG">LKG</option>
                <option value="UKG">UKG</option>
                <option value="1st">1st</option>
                <option value="2nd">2nd</option>
                <option value="3rd">3rd</option>
                <option value="4th">4th</option>
                <option value="5th">5th</option>
                <option value="6st">6th</option>
                <option value="7th">7th</option>
                <option value="8th">8th</option>
                <option value="9th">9th</option>
                <option value="10th">10th</option>
                <option value="11th">11th</option>
                <option value="12th">12th</option>
          </select>
    </div> 
  
    
             
    </div>
    <div className="row-1 flex  justify-center mt-[10%]  w-[100%] mb-[10%]">
      <button onClick={() => fetchAssignments(selectedStandard)} className='lg:w-[30%] md:w-[30%] sm:w-[80%] w-[80%] lg:text-xl md:text-xl sm:text-lg text-lg text-white font-bold lg:p-3 md:p-3 sm:p-1 p-1 border-2 rounded-md bg-blue-500 border-blue-950 hover:border-black '>Search</button>
    </div>
    </div>
    <div className='Notes-area my-20  lg:w-[100%] md:w-[100%] sm:w-[100%] w-[100%]'>
      <div className='individual-pdfs '>
        <table className='border-collapse border border-black  mx-auto lg:w-[85%] md:w-[85%] sm:w-[98%] w-[98%] text-center shadow-3xl'>
        
         <caption className='border border-black lg:p-5 md:p-5 sm:p-2 p-2 lg:text-2xl md:text-2xl sm:text-xl text-xl font-bold bg-blue-900 text-white'>Vacations Assignment List</caption>
            <thead>
            <tr>
            <th  rowSpan={2} className='border border-black lg:p-5 md:p-5 sm:p-2 p-2 bg-blue-500 text-white lg:text-lg md:text-lg sm:text-md text-md '> Serial No.</th>
            <th rowSpan={2} className='border border-black lg:p-5 md:p-5 sm:p-2 p-2 bg-blue-500 text-white lg:text-lg md:text-lg sm:text-md text-md '>Subject Name</th>
            <th  colSpan={2} className='border border-black lg:p-5 md:p-5 sm:p-2 p-2 bg-blue-500 text-white lg:text-lg md:text-lg sm:text-md text-md'>Download</th>
          </tr>
          <tr>
            <th   className='border border-black lg:p-5 md:p-5 sm:p-2 p-2 bg-blue-500 text-white lg:text-lg md:text-lg sm:text-md text-md '> Summer Assignments</th>
            <th  className='border border-black lg:p-5 md:p-5 sm:p-2 p-2 bg-blue-500 text-white lg:text-lg md:text-lg sm:text-md text-md '>Winter Assignments</th>
        
          </tr>
            </thead>
            <tbody>
          {
        Assignments.map((Assignment,idx)=>{
          return(
            <tr key={idx}>
              <td className='border border-black lg:p-5 md:p-5 sm:p-2 p-2 lg:text-lg md:text-lg sm:text-md text-md '>{idx+1}</td>
              <td className='border border-black lg:p-5 md:p-5 sm:p-2 p-2 lg:text-lg md:text-lg sm:text-md text-md '>{Assignment.subjectName}</td>
              <td className='border border-black lg:p-5 md:p-5 sm:p-2 p-2  font-bold '><a className="lg:text-lg md:text-lg sm:text-md text-md border-2 bg-blue-500 hover:border-black text-white lg:p-3 md:p-3 sm:p-1 p-1 rounded-lg" href={Assignment.subjectAssignmentSummerUrl}>Download</a></td>
              <td className='border border-black lg:p-5 md:p-5 sm:p-2 p-2  font-bold '><a className="lg:text-lg md:text-lg sm:text-md text-md border-2 bg-blue-500 hover:border-black text-white lg:p-3 md:p-3 sm:p-1 p-1 rounded-lg" href={Assignment.subjectAssignmentWinterUrl}>Download</a></td>
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

let AssinmentData=[
  {
    AssinmentNo:1,
    SubjectName:"Hindi",
    DownloadLinkA1:"https://drive.google.com/file/d/1SALX1y84zJ_cX1y3Z1LxuWevSlrYg031/view?usp=drivesdk",
    DownloadLinkA2:"https://drive.google.com/file/d/1SALX1y84zJ_cX1y3Z1LxuWevSlrYg031/view?usp=drivesdk"

  },
  {
    AssinmentNo:2,
    SubjectName:"English",
    DownloadLinkA1:"https://drive.google.com/file/d/1SALX1y84zJ_cX1y3Z1LxuWevSlrYg031/view?usp=drivesdk",
    DownloadLinkA2:"https://drive.google.com/file/d/1SALX1y84zJ_cX1y3Z1LxuWevSlrYg031/view?usp=drivesdk"

  },
  {
    AssinmentNo:3,
    SubjectName:"Science",
    DownloadLinkA1:"https://drive.google.com/file/d/1SALX1y84zJ_cX1y3Z1LxuWevSlrYg031/view?usp=drivesdk",
    DownloadLinkA2:"https://drive.google.com/file/d/1SALX1y84zJ_cX1y3Z1LxuWevSlrYg031/view?usp=drivesdk"

  },
  {
    AssinmentNo:4,
    SubjectName:"Social Science",
    DownloadLinkA1:"https://drive.google.com/file/d/1SALX1y84zJ_cX1y3Z1LxuWevSlrYg031/view?usp=drivesdk",
    DownloadLinkA2:"https://drive.google.com/file/d/1SALX1y84zJ_cX1y3Z1LxuWevSlrYg031/view?usp=drivesdk",

  },
  {
    AssinmentNo:5,
    SubjectName:"Art",
    DownloadLinkA1:"https://drive.google.com/file/d/1SALX1y84zJ_cX1y3Z1LxuWevSlrYg031/view?usp=drivesdk",
    DownloadLinkA2:"https://drive.google.com/file/d/1SALX1y84zJ_cX1y3Z1LxuWevSlrYg031/view?usp=drivesdk",

  },
  {
    AssinmentNo:6,
    SubjectName:"Introduction of Science",
    DownloadLinkA1:"https://drive.google.com/file/d/1SALX1y84zJ_cX1y3Z1LxuWevSlrYg031/view?usp=drivesdk",
    DownloadLinkA2:"https://drive.google.com/file/d/1SALX1y84zJ_cX1y3Z1LxuWevSlrYg031/view?usp=drivesdk",

  }
]

export default Assignments