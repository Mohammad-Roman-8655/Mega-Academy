import React from 'react'

function PTM() {
  return (
    <div className='w-full'>
      <div className='flex items-center  w-[100%] mx-auto lg:p-4 md:p-4 sm:p-3 p-3 m-5 text-center bg-blue-900 mb-10 '>
          <h1 className='text-center text-2xl mx-auto text-white font-bold'>PARENT TEACHER MEETING</h1>
        </div>
      <div className='w-[80%] p-10 shadow-xl mx-auto lg:h-[90vh] md:h-[60vh] sm:h-[80vh] h-[80vh] my-10 border-2 border-slate-200 rounded-lg'>
      
        <div>
          <div className='flex lg:flex-row md:flex-row sm:flex-col-reverse flex-col-reverse gap-5 '>
            <div className='lg:w-[50%] md:w-[50%] sm:w-[100%] w-[100%] mx-auto'>
                    <p className='font-semibold'>Parents are requested to meet the teachers on Parent Teacher’s meeting day regularly. They should not disturb them on other working days. However if they wish to meet the teachers on other days they can by prior appointment with the administrator.</p>
            </div>
            <div className='lg:w-[50%] md:w-[50%] sm:w-[100%] w-[100%] mx-auto'>
              <img className='w-[100%] h-[100%]' src="https://res.cloudinary.com/dcxlcy6ls/image/upload/v1727508564/jb2gelj56dhh6u2ycxrz.jpg" alt="PTM img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PTM