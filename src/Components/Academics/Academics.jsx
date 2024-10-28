import React from 'react'
import { NavLink } from 'react-router-dom'


function Academics() {
  return (
    <div >
      <div className='w-full my-20 '>

        <div className='flex items-center  w-[80%] mx-auto p-5 m-5 text-center bg-blue-900 rounded-lg'>
          <h1 className='text-center text-2xl mx-auto text-white font-bold'>ACADEMICS</h1>
        </div>
        <div className='flex lg:flex-row md:flex-row sm:flex-col flex-col  gap-4 items-center w-[100%] justify-center my-10'>
          <NavLink className='lg:w-[40%] md:w-[40%] sm:w-[70%] w-[70%]  text-center border-2 hover:border-black rounded-lg p-5  text-xl  bg-blue-700 hover:bg-pink-300 text-white font-semibold hover:underline shadow-2xl ' to='/Academics/AcademicCalender' >ACADEMIC CALENDER</NavLink>
          <NavLink className='lg:w-[40%] md:w-[40%] sm:w-[70%] w-[70%] text-center border-2 hover:border-black rounded-lg p-5 text-xl bg-blue-700 hover:bg-purple-400 text-white font-semibold hover:underline shadow-2xl' to='/Academics/SchoolTiming'>SCHOOL TIMING</NavLink>
        </div>
        <div className='flex lg:flex-row md:flex-row sm:flex-col flex-col gap-4 items-center w-[100%] justify-center my-10'>
           <NavLink className='lg:w-[40%] md:w-[40%] sm:w-[70%] w-[70%] text-center border-2 hover:border-black rounded-lg p-5 text-xl bg-blue-700 hover:bg-lime-300 text-white font-semibold hover:underline shadow-2xl' to='/Academics/PTM'>PARENTS & TEACHERS MEETING</NavLink>
           <NavLink className='lg:w-[40%] md:w-[40%] sm:w-[70%] w-[70%] text-center border-2 hover:border-black rounded-lg p-5 text-xl bg-blue-700 hover:bg-green-300 text-white font-semibold hover:underline shadow-2xl' to='/Academics/BookAndUniform'>BOOKS & UNIFORM</NavLink>
        </div>
        <div className='flex lg:flex-row md:flex-row sm:flex-col flex-col gap-4 items-center w-[100%] justify-center my-10'>
           <NavLink className='lg:w-[40%] md:w-[40%] sm:w-[70%] w-[70%] text-center border-2 hover:border-black rounded-lg p-5 text-xl bg-blue-700 hover:bg-yellow-300 text-white font-semibold hover:underline shadow-2xl' to='/Academics/BookList'>BOOK LIST</NavLink>
           <NavLink className='lg:w-[40%] md:w-[40%] sm:w-[70%] w-[70%] text-center border-2 hover:border-black rounded-lg p-5 text-xl bg-blue-700 hover:bg-teal-300 text-white font-semibold hover:underline shadow-2xl' to='/Academics/SubjectDistribution'>SUBJECT DISTRIBUTION</NavLink>
        </div>
        <div className='flex lg:flex-row md:flex-row sm:flex-col flex-col gap-4 items-center w-[100%] justify-center my-10'>
           <NavLink className='lg:w-[40%] md:w-[40%] sm:w-[70%] w-[70%] text-center border-2 hover:border-black rounded-lg p-5 text-xl bg-blue-700 hover:bg-emerald-500 text-white font-semibold hover:underline shadow-2xl' to='/Academics/DisciplinaryAction'>DISCIPLINARY ACTION</NavLink>
           <NavLink className='lg:w-[40%] md:w-[40%] sm:w-[70%] w-[70%] text-center border-2 hover:border-black rounded-lg p-5 text-xl bg-blue-700 hover:bg-cyan-400 text-white font-semibold hover:underline shadow-2xl' to='/Academics/LabRules'>LAB RULES</NavLink>
        </div>
        <div className='flex lg:flex-row md:flex-row sm:flex-col flex-col gap-4 items-center w-[100%] justify-center my-10'>
          <NavLink className='lg:w-[40%] md:w-[40%] sm:w-[70%] w-[70%] text-center border-2 hover:border-black rounded-lg p-5 text-xl bg-blue-700 hover:bg-rose-400 text-white font-semibold hover:underline shadow-2xl' to='/Academics/ArtEducation'>ART EDUCATION</NavLink>
          <NavLink className='lg:w-[40%] md:w-[40%] sm:w-[70%] w-[70%] text-center border-2 hover:border-black rounded-lg p-5 text-xl bg-blue-700 hover:bg-fuchsia-400 text-white font-semibold hover:underline shadow-2xl' to='/Academics/DetailsOfCurricullum'>DETAILS OF CURRICULLUM </NavLink>
        </div>
       
      </div>
      
    </div>
  )
}

export default Academics