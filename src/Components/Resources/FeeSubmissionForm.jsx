import { useEffect } from "react";
import React, {useState} from 'react'

function FeeSubmissionForm() {
   const [DownloadForms, setDownloadForm] =useState([]);
        
          const fetchDownloadForm = async () => {
            const response = await fetch("http://localhost:8080/api/download-form");
            const data = await response.json();
            setDownloadForm(data);
          }
        
          useEffect(() => {
            fetchDownloadForm();
            console.log()
          },[]);
  return (
    <div className='w-full '>
    <div className='flex items-center  w-[100%] mx-auto lg:p-4 md:p-4 sm:p-3 p-3 m-5 text-center bg-blue-900 mb-10 '>
        <h1 className='text-center lg:text-2xl md:text-2xl sm:text-xl text-xl mx-auto text-white font-bold'>FEE SUBMISSION FORM</h1>
    </div>
    <div className='flex lg:flex-row md:flex-row sm:flex-col flex-col  gap-4 items-center w-[100%] justify-center my-10'>
    {
            DownloadForms.map((DownloadForm,idx) => {
             return (
              <a  href={DownloadForm.feeSubmissionForm} className='lg:w-[30%] md:w-[30%] sm:w-[70%] w-[70%]  text-center border-2 hover:border-black rounded-lg p-5  text-xl  bg-blue-700 hover:bg-pink-300 text-white font-semibold hover:underline shadow-2xl '>Download Fee Submission Form</a> 
             )
            })
           }
    </div>
</div>
  )
}

export default FeeSubmissionForm