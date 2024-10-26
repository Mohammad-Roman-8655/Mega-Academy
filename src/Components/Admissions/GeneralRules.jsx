import React from 'react'

function GeneralRules() {
  return (
    <div className='w-full'>
           <div className='flex items-center  w-[100%] mx-auto lg:p-4 md:p-4 sm:p-3 p-3 m-5 text-center bg-blue-900 mb-10 '>
             <h1 className='text-center text-2xl mx-auto text-white font-bold'>GENERAL RULES</h1>
          </div>
          <div className='lg:w-[80%] md:w-[90%] sm:w-[90%] w-[90%] mx-auto border-2 shadow-md p-5 rounded-lg mb-10'>
            <div className='section-1'>
              <h1 className='text-lg text-blue-900 font-bold mb-2'>General Rules</h1>
              
              <ul className='list-disc ml-5' >
                <li className='mb-3 text-justify'><span className='text-lg font-bold text-black mr-2'>Punctuality:</span>Students should observe punctuality which is an important aspect of personality development. All students should reach school fifteen minutes before the bell. They should be picked up within the ten minutes after school</li>
                <li className='mb-3 text-justify'><span className='text-lg font-bold text-black mr-2'>School Assembly:</span>The school conducts morning assembly daily for all the students and staff. News headlines, a topic for discussion, Quiz, Drill, Prayer, Pledge and National Anthem are conducted everyday.</li>
              </ul>

            </div>
            <div className='section-2 mb-5'>
              <h1 className='text-lg text-blue-900 font-bold mb-2'>Caution</h1>
                <p className='text-justify font-normal'>Children must not be sent to school with toys, money, ornaments, mobiles etc. The school will not be responsible if any of these articles are lost. Fees should be sent by cheque along with the bill books or done Online.</p>

            </div>
            <div className='section-3 mb-5'>
              <h1 className='text-lg text-blue-900 font-bold mb-2'>English conversation</h1>
                <p className='text-justify font-normal'>It is compulsory for all students to converse in English within the school campus with teachers and co-students. Students who do not make an attempt to speak in English will be taken to task. Regular English conversation classes will be conducted during summer and spring camps.</p>
            </div>
            <div className='section-4 mb-5'>
              <h1 className='text-lg text-blue-900 font-bold mb-2'>Verbal Assurances</h1>
                <p className='text-justify font-normal mb-2'>Children must not be sent to school with toys, money, ornaments, mobiles etc. The school will not be responsible if any of these articles are lost. Fees should be sent by cheque along with the bill books or done Online.</p>
                <p className='text-justify font-normal'>Similarly no verbal statements made by parents will be accepted. Parents must always write an application to the principal on any points they wish to make.</p>
            </div>
            <div className='section-5 mb-5'>
              <h1 className='text-lg text-blue-900 font-bold mb-2'>Home Work</h1>
                <p className='text-justify font-normal'>Parents are requested to read the school diary of their ward daily and see that the homework is done neatly. Parents must sign the homework everyday in the diary.</p>
            </div>
            <div className='section-6'>
              <h1 className='text-lg text-blue-900 font-bold mb-2'>School Bus Facility</h1> 
              <ul className='list-disc ml-5' >
                <li className='mb-3 text-justify'>Bus facility will be available with the parents request in the office.</li>
                <li className='mb-3 text-justify'>Students will be picked up and left only from points fixed by the school authorities</li>
                <li className='mb-3 text-justify'>The Bus fees will be charged quarterly along with the fees.</li>
                <li className='mb-3 text-justify'>Students must not misbehave and disobey the conductor, if found so will not be allowed to use the school bus.</li>
              </ul>
            </div>
            <div className='section-6'>
              <h1 className='text-lg text-blue-900 font-bold mb-2'>Techno Education</h1> 
              <ul className='list-disc ml-5' >
                <li className='mb-3 text-justify'>All the schools have special studies for science, visual and performing arts & well equipped computer Science, Math, Physics, Chemistry, Biology and English Labs.</li>
                <li className='mb-3 text-justify'>Smart classrooms encourage students to revise, research, assimilate the syllabus done in class.</li>
              </ul>
            </div>


          </div>
    </div>
  )
}

export default GeneralRules