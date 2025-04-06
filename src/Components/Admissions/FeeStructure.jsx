import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';

// Core viewer



function FeeStructure() {
  let [isOpen,setOpen]=useState(true);
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
    <div className='w-full mb-10'>
      <div className='flex items-center  w-[100%] mx-auto lg:p-4 md:p-4 sm:p-3 p-3 m-5 text-center bg-blue-900 mb-10 '>
             <h1 className='text-center text-2xl mx-auto text-white font-bold'>Fees Rules</h1>
       </div>
       <div className='lg:w-[80%] md:w-[80%] sm:w-[90%] w-[90%] shadow-xl shadow-slate-500 mx-auto my-30 lg:h-[80%] md:h-[90%] sm:h-[100%] h-[100%]'>
        <div className='p-6'>
        <div className='mb-10'>
          <h3 className='text-xl font-bold mb-4 text-blue-700'>Important Rules Regarding Fees Deposit</h3>
          <ul className='list-disc ml-5'>
            <li className='mb-2'>Fee will be deposited</li>
            <li className='mb-2'>At the school counter by cheques/cash</li>
            <li className='mb-2'>Fees will be collected from 1st to 15th of every month.</li>
            <li className='mb-2'>After 15th a late fee as prescribed per month will be charged.</li>
            <li className='mb-2'>In case the fee Book is lost, a fine shall be charged.</li>
            <li className='mb-2'>Parents are permitted to deposit fees in the lump sum at rebate of 4% on the tuition fees will be given.</li>
            <li className='mb-2'>If the child fails to pay her/his fees for three months his/her name will be taken off the rolls.</li>
            <li className='mb-2'>A clear one month’s notice in written must be given to the office before the parent wishes to withdraw their child.</li>
            <li className='mb-2'>Fee defaulters will not be allowed to sit for exams.</li>
            <li className='mb-2'>Bus fees also to be deposited along with the school fees.</li>
          </ul>
        </div>
        <div className=' text-white '>
         <div className='flex justify-between text-lg font-bold bg-blue-700 p-2'>
          <p className='ml-3'>Fee structure 2024-25</p>
          <div className='flex justify-between'>
       {   isOpen ? <i className="fa-solid fa-plus text-xl font-bold mr-2" onClick={()=>{setOpen(!isOpen)}}></i> : <i className="fa-solid fa-minus text-xl font-bold mr-2" onClick={()=>{setOpen(!isOpen)}}></i>}
          </div>
         </div>
          {
            isOpen &&   <div className='flex lg:flex-row md:flex-row sm:flex-col flex-col mb-10  gap-4 items-center w-[100%] justify-center my-10'>
            {
              DownloadForms.map((DownloadForm,idx) => {
                return (
                  <a  href={DownloadForm.feeStructure} className='lg:w-[30%] md:w-[30%] sm:w-[70%] w-[70%]  text-center border-2 hover:border-black rounded-lg p-5  text-xl  bg-blue-700 hover:bg-pink-300 text-white font-semibold hover:underline shadow-2xl '>Download Fee Structure</a>
                )
              })
            }
             
      
          </div>
          }
        </div>
        <div>
     
        </div>
        </div>
       </div>
      
    </div>
  )
}

export default FeeStructure