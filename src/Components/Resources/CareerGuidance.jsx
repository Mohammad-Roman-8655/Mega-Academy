import React from 'react'

function CareerGuidance() {
  return (
    <div className='w-full '>
        <div className='flex items-center  w-[100%] mx-auto lg:p-4 md:p-4 sm:p-3 p-3 m-5 text-center bg-blue-900 mb-10 '>
            <h1 className='text-center lg:text-2xl md:text-2xl sm:text-xl text-xl mx-auto text-white font-bold'>CAREER GUIDE </h1>
        </div>
        <div className='flex lg:flex-row md:flex-row sm:flex-col flex-col  gap-4 items-center w-[100%] justify-center my-10'>
            <a  href="https://drive.google.com/file/d/1u5oxqWWwWoKc58f7VR6uEp5gcdown2vs/view?usp=drive_link" className='lg:w-[30%] md:w-[30%] sm:w-[70%] w-[70%]  text-center border-2 hover:border-black rounded-lg p-5  text-xl  bg-blue-700 hover:bg-pink-300 text-white font-semibold hover:underline shadow-2xl '>Download Career Guide</a>

        </div>
    </div>
  )
}

export default CareerGuidance