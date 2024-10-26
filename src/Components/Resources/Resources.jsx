import React from 'react'
import { NavLink } from 'react-router-dom'

function Resources() {
  return (
    <div className='w-full'>
        <div className='flex items-center  w-[100%] mx-auto lg:p-4 md:p-4 sm:p-3 p-3 m-5 text-center bg-blue-900 mb-10 '>
             <h1 className='text-center text-2xl mx-auto text-white font-bold'>RESOURCES</h1>
          </div>
          <div className='flex lg:flex-row md:flex-row sm:flex-col flex-col  gap-4 items-center w-[100%] justify-center my-10'>
          <NavLink className='lg:w-[40%] md:w-[40%] sm:w-[70%] w-[70%]  text-center border-2 hover:border-black rounded-lg p-5  text-xl  bg-blue-700 hover:bg-pink-300 text-white font-semibold hover:underline shadow-2xl ' to='/Resources/StudyNotes' >STUDY NOTES</NavLink>
          <NavLink className='lg:w-[40%] md:w-[40%] sm:w-[70%] w-[70%] text-center border-2 hover:border-black rounded-lg p-5 text-xl bg-blue-700 hover:bg-purple-400 text-white font-semibold hover:underline shadow-2xl' to='/Resources/Pyq'>PREVIOUS YEAR QUESTION PAPERS</NavLink>
        </div>
        <div className='flex lg:flex-row md:flex-row sm:flex-col flex-col gap-4 items-center w-[100%] justify-center my-10'>
           <NavLink className='lg:w-[40%] md:w-[40%] sm:w-[70%] w-[70%] text-center border-2 hover:border-black rounded-lg p-5 text-xl bg-blue-700 hover:bg-lime-300 text-white font-semibold hover:underline shadow-2xl' to='/Resources/MockPapers'>MOCK PAPERS</NavLink>
           <NavLink className='lg:w-[40%] md:w-[40%] sm:w-[70%] w-[70%] text-center border-2 hover:border-black rounded-lg p-5 text-xl bg-blue-700 hover:bg-green-300 text-white font-semibold hover:underline shadow-2xl' to='/Resources/Syllabus'>SYLLABUS</NavLink>
        </div>
        <div className='flex lg:flex-row md:flex-row sm:flex-col flex-col gap-4 items-center w-[100%] justify-center my-10'>
           <NavLink className='lg:w-[40%] md:w-[40%] sm:w-[70%] w-[70%] text-center border-2 hover:border-black rounded-lg p-5 text-xl bg-blue-700 hover:bg-yellow-300 text-white font-semibold hover:underline shadow-2xl' to='/Resources/Textbook'>TEXT BOOKS</NavLink>
           <NavLink className='lg:w-[40%] md:w-[40%] sm:w-[70%] w-[70%] text-center border-2 hover:border-black rounded-lg p-5 text-xl bg-blue-700 hover:bg-teal-300 text-white font-semibold hover:underline shadow-2xl' to='/Resources/Assignments'>ASSIGNMENTS</NavLink>
        </div>
        <div className='flex lg:flex-row md:flex-row sm:flex-col flex-col gap-4 items-center w-[100%] justify-center my-10'>
           <NavLink className='lg:w-[40%] md:w-[40%] sm:w-[70%] w-[70%] text-center border-2 hover:border-black rounded-lg p-5 text-xl bg-blue-700 hover:bg-emerald-500 text-white font-semibold hover:underline shadow-2xl' to='/Resources/LessonPlans'>LESSION PLANS</NavLink>
           <NavLink className='lg:w-[40%] md:w-[40%] sm:w-[70%] w-[70%] text-center border-2 hover:border-black rounded-lg p-5 text-xl bg-blue-700 hover:bg-cyan-400 text-white font-semibold hover:underline shadow-2xl' to='/Resources/ReferenceBooks'>REFERENCE BOOKS</NavLink>
        </div>
        <div className='flex lg:flex-row md:flex-row sm:flex-col flex-col gap-4 items-center w-[100%] justify-center my-10'>
          <NavLink className='lg:w-[40%] md:w-[40%] sm:w-[70%] w-[70%] text-center border-2 hover:border-black rounded-lg p-5 text-xl bg-blue-700 hover:bg-rose-400 text-white font-semibold hover:underline shadow-2xl' to='/Resources/VideoTutorials'>VIDEO TUTORIALS</NavLink>
          <NavLink className='lg:w-[40%] md:w-[40%] sm:w-[70%] w-[70%] text-center border-2 hover:border-black rounded-lg p-5 text-xl bg-blue-700 hover:bg-fuchsia-400 text-white font-semibold hover:underline shadow-2xl' to='/Resources/ExamSchedules'>EXAM SCHEDULES </NavLink>
        </div>
        <div className='flex lg:flex-row md:flex-row sm:flex-col flex-col  gap-4 items-center w-[100%] justify-center my-10'>
          <NavLink className='lg:w-[40%] md:w-[40%] sm:w-[70%] w-[70%]  text-center border-2 hover:border-black rounded-lg p-5  text-xl  bg-blue-700 hover:bg-pink-300 text-white font-semibold hover:underline shadow-2xl ' to='/Resources/ExamTimetables' >EXAM TIME TABLES</NavLink>
          <NavLink className='lg:w-[40%] md:w-[40%] sm:w-[70%] w-[70%] text-center border-2 hover:border-black rounded-lg p-5 text-xl bg-blue-700 hover:bg-purple-400 text-white font-semibold hover:underline shadow-2xl' to='/Resources/ProjectGuides'>PROJECT GUIDES</NavLink>
        </div>
        <div className='flex lg:flex-row md:flex-row sm:flex-col flex-col gap-4 items-center w-[100%] justify-center my-10'>
           <NavLink className='lg:w-[40%] md:w-[40%] sm:w-[70%] w-[70%] text-center border-2 hover:border-black rounded-lg p-5 text-xl bg-blue-700 hover:bg-lime-300 text-white font-semibold hover:underline shadow-2xl' to='/Resources/SchoolPolicies'>SCHOOL POLICIES</NavLink>
           <NavLink className='lg:w-[40%] md:w-[40%] sm:w-[70%] w-[70%] text-center border-2 hover:border-black rounded-lg p-5 text-xl bg-blue-700 hover:bg-green-300 text-white font-semibold hover:underline shadow-2xl' to='/Resources/ParentalGuides'>PARENTAL GUIDES</NavLink>
        </div>
        <div className='flex lg:flex-row md:flex-row sm:flex-col flex-col gap-4 items-center w-[100%] justify-center my-10'>
           <NavLink className='lg:w-[40%] md:w-[40%] sm:w-[70%] w-[70%] text-center border-2 hover:border-black rounded-lg p-5 text-xl bg-blue-700 hover:bg-yellow-300 text-white font-semibold hover:underline shadow-2xl' to='/Resources/CareerGuides'>CAREER GUIDES</NavLink>
           <NavLink className='lg:w-[40%] md:w-[40%] sm:w-[70%] w-[70%] text-center border-2 hover:border-black rounded-lg p-5 text-xl bg-blue-700 hover:bg-teal-300 text-white font-semibold hover:underline shadow-2xl' to='/Resources/HealthAndWellnessGuides'>HEALTH AND WELLNESS GUIDES</NavLink>
        </div>
        <div className='flex lg:flex-row md:flex-row sm:flex-col flex-col gap-4 items-center w-[100%] justify-center my-10'>
           <NavLink className='lg:w-[40%] md:w-[40%] sm:w-[70%] w-[70%] text-center border-2 hover:border-black rounded-lg p-5 text-xl bg-blue-700 hover:bg-emerald-500 text-white font-semibold hover:underline shadow-2xl' to='/Resources/ExtracurricularMaterials'>EXTRA CURRICULAR MATERIALS</NavLink>
           <NavLink className='lg:w-[40%] md:w-[40%] sm:w-[70%] w-[70%] text-center border-2 hover:border-black rounded-lg p-5 text-xl bg-blue-700 hover:bg-cyan-400 text-white font-semibold hover:underline shadow-2xl' to='/Resources/ScholarshipInfo'>SCHOLARSHIPS INFORMATION</NavLink>
        </div>
        <div className='flex lg:flex-row md:flex-row sm:flex-col flex-col gap-4 items-center w-[100%] justify-center my-10'>
          <NavLink className='lg:w-[40%] md:w-[40%] sm:w-[70%] w-[70%] text-center border-2 hover:border-black rounded-lg p-5 text-xl bg-blue-700 hover:bg-rose-400 text-white font-semibold hover:underline shadow-2xl' to='/Resources/AttendanceCertificate'>ATTENDANCE CERTIFICATE</NavLink>
          <NavLink className='lg:w-[40%] md:w-[40%] sm:w-[70%] w-[70%] text-center border-2 hover:border-black rounded-lg p-5 text-xl bg-blue-700 hover:bg-fuchsia-400 text-white font-semibold hover:underline shadow-2xl' to='/Resources/MedicalCertificate'>MEDICAL CERTIFICATE</NavLink>
        </div>
         <div className='flex lg:flex-row md:flex-row sm:flex-col flex-col  gap-4 items-center w-[100%] justify-center my-10'>
          <NavLink className='lg:w-[40%] md:w-[40%] sm:w-[70%] w-[70%]  text-center border-2 hover:border-black rounded-lg p-5  text-xl  bg-blue-700 hover:bg-pink-300 text-white font-semibold hover:underline shadow-2xl ' to='/Resources/FeeSubmissionForm' >FEE SUBMISSION FORM</NavLink>
          <NavLink className='lg:w-[40%] md:w-[40%] sm:w-[70%] w-[70%] text-center border-2 hover:border-black rounded-lg p-5 text-xl bg-blue-700 hover:bg-purple-400 text-white font-semibold hover:underline shadow-2xl' to='/Resources/LeaveApplicationForm'>LEAVE APPLICATION FORM</NavLink>
        </div>
    </div>
  )
}

export default Resources