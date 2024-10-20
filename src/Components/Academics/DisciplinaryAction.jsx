import React from 'react'

function DisciplinaryAction() {
  return (
    <div className='w-full'>
      <div >
         <div className='flex items-center  w-[100%] mx-auto lg:p-4 md:p-4 sm:p-3 p-3 m-5 text-center bg-blue-900 mb-10 '>
             <h1 className='text-center text-2xl mx-auto text-white font-bold'>Disciplinary Action</h1>
          </div>
        <div className='lg:w-[70%] md:w-[70%] sm:w-[90%] w-[90%] lg:mx-auto md:mx-auto sm:mx-5 mx-5  border-2 p-10 rounded-xl shadow-xl my-10 bg-blue-100 '>

            <p className='font-semibold text-blue-800'>Disciplinary action will be taken against students on the following basis:</p>
            <ul className='my-3 list-disc list-inside  '>
              <li className='mb-2'>Students absenting themselves without proper leave letter or medical reasons,</li>
              <li className='mb-2'>Students are found using abusive language and are guilty of indiscipline.</li>
              <li className='mb-2'>Students present in School but has bunked classes/ any period.</li>
              <li className='mb-2'>Not paid fees for 2 quarters.</li>
              <li className='mb-2'>Found quarrelling, smoking, destroying School property, teasing, showing discourtesy & disrespect to teachers.</li>
              <li className='mb-2'>Not doing homework regularly and not bringing books/notebooks, lazy, not progressing, caught stealing, bursting crackers sharp things to School.</li>
              <li className='mb-2'>Not bringing diary to School.</li>
            </ul>
            <p className='font-semibold text-blue-800'>The Principal can rusticate any student on disciplinary grounds.</p>
      
        </div>
      </div>
    </div>
  )
}

export default DisciplinaryAction