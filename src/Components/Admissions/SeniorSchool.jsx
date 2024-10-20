import React from 'react'

function SeniorSchool() {
  return (
    <div className='w-full'>
       <div className='flex items-center  w-[100%] mx-auto lg:p-4 md:p-4 sm:p-3 p-3 m-5 text-center bg-blue-900 mb-10 '>
             <h1 className='text-center text-2xl mx-auto text-white font-bold'>SENIOR SCHOOL</h1>
       </div>
       <div className='lg:w-[80%] md:w-[80%] sm:w-[90%] w-[90%] shadow-xl shadow-slate-500 mx-auto my-30 lg:h-[80%] md:h-[90%] sm:h-[100%] h-[100%]'>
       <div className='p-5'>
       <div className='mb-5'>
          <h3 className='text-lg text-blue-600 font-bold mb-1'>Senior School - (Class IX - XII) Class IX & X</h3>
          <div>
            <div className='flex gap-2'>
              <p className='font-bold mb-1'>Subjects:</p> 
               <p>All compulsory</p>
            </div>
           <div className='flex gap-2'>
               <p className='font-bold mb-1'>Languages:</p> 
               <p>English, Hindi</p>
           </div>
           <div className='flex gap-2'>
           <p className='font-bold mb-1'>Science & Technology:</p> 
           <p>Integrated Science with Physics, Chemistry, Biology</p>
           </div>
           <div className='flex gap-2'>
           <p className='font-bold mb-1'>Social Science:</p> 
           <p>History, Civics, Geography, Economics, Information Technology, Work Education, Art Education, Physical Education,  Personal & Social Education</p>
           </div>
          </div>
        </div>
        <div className='mb-5'>
          <h3 className='text-lg text-blue-600 font-bold mb-1'>Class XI & XII</h3>
          <div>
             <p className='font-semibold mb-2'>Elective subjects are offered in Science & Commerce</p>
           <div className='flex gap-2'>
           <p className='font-bold mb-1'>Elective Subjects:</p> 
           <p>Any of the two streams Science or Commerce</p>
           </div>
            <div className='flex gap-2'>
            <p className='font-bold mb-1'>Compulsory: </p> 
            <p>English Core, Physical Education, Work Experience, General Studies.</p>
            </div>
         
          </div>
        </div>
       </div>
       </div>
    </div>
  )
}

export default SeniorSchool