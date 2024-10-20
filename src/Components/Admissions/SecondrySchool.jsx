import React from 'react'

function SecondrySchool() {
  return (
    <div className='w-full'>
       <div className='flex items-center  w-[100%] mx-auto lg:p-4 md:p-4 sm:p-3 p-3 m-5 text-center bg-blue-900 mb-10 '>
             <h1 className='text-center text-2xl mx-auto text-white font-bold'>MIDDLE SCHOOL</h1>
          </div>
          <div className='lg:w-[80%] md:w-[80%] sm:w-[90%] w-[90%] shadow-xl shadow-slate-500 mx-auto my-30 lg:h-[80%] md:h-[90%] sm:h-[100%] h-[100%]'>
            <div className='w-full h-full px-5 py-6'>
              <div className='mb-2'>
                <h3 className='text-blue-600 font-bold mb-1 text-[17px]'>Middle School - (Class VI - VII)</h3>
                <div>
                  <p className='  mb-1'>The middle school programme promotes an integrated approach through cross curricular links with wide range of subjects, nurture communication and high order thinking skills, promote responsible and caring citizenship through study of the environment and community service.</p>
                  <p className='  mb-1'>Promote understanding of the importance of conservation through making right lifestyle choices.</p>
                  <p className='  mb-1'>Instill aesthetic sense and appreciation of art and creativity.</p>
                  <p className='  mb-1'>The programme accentuates the way subjects inter-relate and promotes a holistic view of knowledge. Students are encouraged to explore cross curricular links through creative learning and development of effective study skills - Learning to Learn.</p>
                </div>
              </div>
              <div>
                <h3 className='font-bold text-[17px]'>Learning to Learn</h3>
                <ul className="list-disc ml-6">
                  <li className='mb-1'>Mathematics</li>
                  <li className='mb-1'>Information Technology</li>
                  <li className='mb-1'>Languages:. English, Hindi,Sanskrit</li>
                  <li className='mb-1'>Creative Art, Work Education: Commercial Art, Fine Art, Paper Mache, Music, Dance, Conservation, Clay Modeling Instrumental Music</li>
                  <li className='mb-1'>Social Sciences, History, Geography, Economics & Civics</li>
                  <li className='mb-1'>Physical, Social, Personal Education Games, Sports, Yoga</li>
                  <li className='mb-1'>Integrated Sciences Environmental Education</li>
                  <li className='mb-1'>Life Skills Personal, Social Education</li>
                </ul>
              </div>
            </div>
          </div>
    </div>
  )
}

export default SecondrySchool