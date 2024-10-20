import React from 'react'
import { NavLink } from 'react-router-dom'

function Admissions() {
  return (
    <div className='w-full my-20'>
      <div className='flex items-center  w-[80%] mx-auto p-5 m-5 text-center bg-blue-900 rounded-lg'>
          <h1 className='text-center text-2xl mx-auto text-white font-bold'>ADMISSIONS</h1>
        </div>
      <div className='w-full '>

        
        <div className='flex lg:flex-row md:flex-row sm:flex-col flex-col  gap-4 items-center w-[100%] justify-center my-10'>
          <NavLink className='lg:w-[40%] md:w-[40%] sm:w-[70%] w-[70%]  text-center border-2 hover:border-black rounded-lg p-5  text-xl  bg-blue-700 hover:bg-pink-300 text-white font-semibold hover:underline shadow-2xl ' to='/Admission/PrimarySchool' >PRIMARY SCHOOL</NavLink>
          <NavLink className='lg:w-[40%] md:w-[40%] sm:w-[70%] w-[70%] text-center border-2 hover:border-black rounded-lg p-5 text-xl bg-blue-700 hover:bg-purple-400 text-white font-semibold hover:underline shadow-2xl' to='/Admission/DownloadAdmissionForm'>DOWNLOAD APPLICATION FORM</NavLink>
        </div>
        <div className='flex lg:flex-row md:flex-row sm:flex-col flex-col gap-4 items-center w-[100%] justify-center my-10'>
           <NavLink className='lg:w-[40%] md:w-[40%] sm:w-[70%] w-[70%] text-center border-2 hover:border-black rounded-lg p-5 text-xl bg-blue-700 hover:bg-lime-300 text-white font-semibold hover:underline shadow-2xl' to='/Admission/SecondrySchool'>SECONDRY SCHOOL</NavLink>
           <NavLink className='lg:w-[40%] md:w-[40%] sm:w-[70%] w-[70%] text-center border-2 hover:border-black rounded-lg p-5 text-xl bg-blue-700 hover:bg-green-300 text-white font-semibold hover:underline shadow-2xl' to='/Admission/OnlineAdmissionForm'>ONLINE APPLICATION FORM</NavLink>
        </div>
        <div className='flex lg:flex-row md:flex-row sm:flex-col flex-col gap-4 items-center w-[100%] justify-center my-10'>
           <NavLink className='lg:w-[40%] md:w-[40%] sm:w-[70%] w-[70%] text-center border-2 hover:border-black rounded-lg p-5 text-xl bg-blue-700 hover:bg-yellow-300 text-white font-semibold hover:underline shadow-2xl' to='/Admission/SeniorSchool'>SENIOR SCHOOL</NavLink>
           <NavLink className='lg:w-[40%] md:w-[40%] sm:w-[70%] w-[70%] text-center border-2 hover:border-black rounded-lg p-5 text-xl bg-blue-700 hover:bg-teal-300 text-white font-semibold hover:underline shadow-2xl' to='/Admission/AdmissionProcedure'>ADMISSION PROCEDURE</NavLink>
        </div>
        <div className='flex lg:flex-row md:flex-row sm:flex-col flex-col gap-4 items-center w-[100%] justify-center my-10'>
           <NavLink className='lg:w-[40%] md:w-[40%] sm:w-[70%] w-[70%] text-center border-2 hover:border-black rounded-lg p-5 text-xl bg-blue-700 hover:bg-emerald-500 text-white font-semibold hover:underline shadow-2xl' to='/Admission/FeeStructure'>FEE STRUCTURE/RULES</NavLink>
           <NavLink className='lg:w-[40%] md:w-[40%] sm:w-[70%] w-[70%] text-center border-2 hover:border-black rounded-lg p-5 text-xl bg-blue-700 hover:bg-cyan-400 text-white font-semibold hover:underline shadow-2xl' to='/Admission/GeneralRules'>GENERAL RULES</NavLink>
        </div>
     
       
      </div>
      
    </div>
  )
}

export default Admissions