import React from 'react'

function PrimarySchool() {
  return (
    <div className='w-full'>
       <div className='flex items-center  w-[100%] mx-auto lg:p-4 md:p-4 sm:p-3 p-3 m-5 text-center bg-blue-900 mb-10 '>
             <h1 className='text-center text-2xl mx-auto text-white font-bold'>PRIMARY SCHOOL</h1>
          </div>
      <div>
        
          <div className='lg:w-[70%] md:w-[70%] sm:w-[90%] w-[90%] lg:mx-auto md:mx-auto sm:mx-5 mx-5  border-2 px-10 py-5 rounded-xl shadow-xl my-2'>
            <div>
              <p className='my-2 font-bold text-blue'>Primary School - (Class I - V)</p>
              <p className=''>The Primary School programme aims to:</p>
            </div>
            <div>
             
              <ul className='mb-2 list-disc list-inside'>
                <li className=''>Foster an all round development of the growing child.</li>
                <li className=''>Create a relevant, challenging and integrated academic curriculum.</li>
                <li className=''>Develop key concepts, skills, attitudes, actions and knowledge as students are encouraged to explore academic subjects and create network transcending conventional subject boundaries. The focus is on developing thinking skills and help students to 'learn to learn'.</li>
                <li className=''>The Primary School programme focuses on the following areas for an all-round development through a variety of activities, projects and integrated approach following the Xseed curriculum on the underlying belief that children learn best by action followed by reflection and feedback.</li>
              </ul>
            </div>
            <div>
              <p className='mt-2 font-bold text-black text-center '>Integrated Approach to Learning</p>
              
              <ul className='my-1 text-center '>
                <li className=''>Mathematics</li>
                <li className=''>Information Technology</li>
                <li className=''>Languages</li>
                <li className=''>Hindi, English</li>
                <li className=''>Aesthetics</li>
                <li className=''>Art, Music, Dance, Craft</li>
                <li className=''>Environmental Studies</li>
                <li className=''>Science, Social Studies</li>
                <li className=''>Physical / Personal / social Education</li>
                <li className="">Yoga, Games and Life Skills</li>
              </ul>
            </div>

          </div>
      </div>
    </div>
  )
}

export default PrimarySchool