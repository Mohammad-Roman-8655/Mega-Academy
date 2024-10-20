import React from 'react'

function LabRules() {
  return (
    <div className='w-full'>
       <div className='flex items-center  w-[100%] mx-auto lg:p-4 md:p-4 sm:p-3 p-3 m-5 text-center bg-blue-900 mb-10 '>
             <h1 className='text-center text-2xl mx-auto text-white font-bold'>LAB RULES</h1>
          </div>
      <div>
        
          <div className='lg:w-[70%] md:w-[70%] sm:w-[90%] w-[90%] lg:mx-auto md:mx-auto sm:mx-5 mx-5  border-2 p-10 rounded-xl shadow-xl my-10 bg-blue-100 '>
            <div>
              <p className='my-2 font-bold text-blue-800'>Computer Lab Rules</p>
              <p>School imparts computer knowledge to children right from UKG to XII and forms one of the main subjects in Boards. Before entering the computer lab students must remove their shoes and keep them outside the lab. Students must maintain discipline in the Lab.</p>
            </div>
            <div>
              <p className='my-2 font-bold text-blue-800'>Library Rules</p>
              <p>The school has a well equipped library for the benefit of students. The books will be issued under following conditions</p>
              <ul className='my-3 list-disc list-inside'>
                <li className='mb-2'>Student must avail a library card from the office on payment of Rs 100/-. It will be renewed every year.</li>
                <li className='mb-2'>The books will be issued for a period of one week. Only one book will be issued at a time.</li>
                <li className='mb-2'>If the book is not returned in time a fine of Rs 1/- per day will be charged.</li>
                <li className='mb-2'>Folding corners of pages, tearing pages and writing in books will be treated as damage and will be fined accordingly.</li>
                <li className='mb-2'>In case of loss of book, student will be required to pay the cost of book or replace the book.</li>
                <li className='mb-2'>Books should be returned to the library before the commencement of final exams/ Board exams.</li>
                <li className='mb-2'>Digital E-Library of 30,000 books on all subjects are available for projects and assignments.</li>
              </ul>
            </div>
            <div>
              <p className='my-2 font-bold text-blue-800'>Science Laboratory Rules</p>
              <p>The school has a well equipped laboratories to facilitate experimental work in various sciences.</p>
              <ul className='my-3 list-disc list-inside'>
                <li className='mb-2'>Students are expected to be disciplined while in labs.</li>
                <li className='mb-2'>Any damage to the equipments during practical session will be borne by students.</li>
                <li className='mb-2'>No student should enter the labs without permission from the concerned teachers.</li>
              </ul>
            </div>

          </div>
      </div>
    </div>
  )
}

export default LabRules