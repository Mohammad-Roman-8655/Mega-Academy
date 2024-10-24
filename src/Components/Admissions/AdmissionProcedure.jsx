import React from 'react'

function AdmissionProcedure() {
  return (
    <div className='w-full my-10'>
      <div className='flex items-center  w-[100%] mx-auto lg:p-4 md:p-4 sm:p-3 p-3 m-5 text-center bg-blue-900 mb-10 '>
             <h1 className='text-center text-2xl  mx-auto text-white font-bold'>Admission Procedure </h1>
     </div>
     <div className="admission-process lg:w-[80%] md:w-[85%] sm:w-[90%] w-[90%] mx-auto">
      <div className="roadmap mb-20 w-full ">
        <img className="w-[90%] mx-auto h-[450px]" src="https://res.cloudinary.com/dcxlcy6ls/image/upload/v1729762572/dqx5ax0qojs1zadvjm9m.png" alt="admission-roadmap" />
      </div>
      <div className="admission-process-roadmap lg:my-40 md:my-40 sm:my-30 my-30">
        <h1 className='lg:text-2xl md:text-2xl sm:text-xl text-xl font-bold mb-20 leading-10'>TAKING THE STEPS TO APPLY TO OUR SCHOOL IS AS EASY AS 1-2-3! THE TYPICAL ADMISSION PROCEDURES ENTAIL THE FOLLOWING:</h1>
        <div className="row-1 w-full flex lg:flex-row md:flex-col sm:flex-col flex-col justify-between mb-10">
         <div className="card-1 lg:w-[30%]  hover:shadow-2xl hover:shadow-red-300 md:w-[100%] sm:w-[100%] w-[100%] mb-10 border-2  p-5 rounded-lg">
           <h2 className='text-xl font-bold mb-5 '>1. Fill A Form To Enroll</h2>
           <p className='text-justify'>When considering enrolling your child at the DWPS , your first point of contact will be our Admission Desk. You can collect the admission form from the desk between 9:00 AM to 4:00 PM, Monday to Saturday.</p>
         </div>
         <div className="card-2  lg:w-[30%] md:w-[100%] sm:w-[100%] w-[100%] mb-10 border-2 hover:shadow-2xl hover:shadow-blue-300 p-5 rounded-lg">
           <h2 className='text-xl font-bold mb-5 '>2. Submit Documents</h2>
          <p className='text-justify'>Next, you will need to submit the admission form duly-filled along with the required document set (detailed below) to initiate the registration process. Please note, any application that is submitted without these supporting documents cannot be processed.</p>        
         </div>
         <div className="card-3  lg:w-[30%] md:w-[100%] sm:w-[100%] w-[100%] mb-10 border-2 hover:shadow-2xl hover:shadow-yellow-300 p-5 rounded-lg">
           <h2 className='text-xl font-bold mb-5 '>3. Interaction Session</h2>
          <p className='text-justify'>A formal interaction session will be booked with the admission officer/coordinator or the school’s principal.</p>
         </div>
        </div>
        <div className="row-2 w-full flex lg:flex-row md:flex-col sm:flex-col flex-col justify-between mb-10">
         <div className="card-1  lg:w-[30%] md:w-[100%] sm:w-[100%] w-[100%] mb-10 border-2 hover:shadow-2xl hover:shadow-pink-300 p-5 rounded-lg">
           <h2 className='text-xl font-bold mb-5 '>4. Admission Fees</h2>
          <p className='text-justify'>For those parents who wish to proceed with registration, the admission fee will need to be paid as per the fee structure.</p>
         </div>
         <div className="card-2  lg:w-[30%] md:w-[100%] sm:w-[100%] w-[100%] mb-10 border-2 hover:shadow-2xl hover:shadow-green-300 p-5 rounded-lg">
           <h2 className='text-xl font-bold mb-5 '>5. Processing The Form</h2>
           <p className='text-justify'>Following that, the application will be processed and a decision will be made regarding the admission of your ward in our school. This decision will be communicated within two days.</p>
         </div>
         <div className="card-3  lg:w-[30%] md:w-[100%] sm:w-[100%] w-[100%] mb-10 border-2 hover:shadow-2xl hover:shadow-sky-300 p-5 rounded-lg">
           <h2 className='text-xl font-bold mb-5 '>6. Confirmation</h2>
           <p className='text-justify'>Once the admission has been confirmed and the offer accepted, you will be required to complete the fee formalities for the school’s first term within a week’s time.</p>
         </div>
        </div>
      </div>
     </div>
    </div>
  )
}

export default AdmissionProcedure