import React from 'react'

function Managers() {
  return (
    <div>
        <div>
            <h1 className='lg:text-5xl md:text-5xl sm:text-3xl text-3xl text-center font-semibold mb-5 '>Our Managers</h1>

            <div className='row-1 lg:flex md:flex sm:block block justify-around my-7 mt-10'>
                <div className='lg:w-[3
                0%] md:w-[30%] sm:w-[80%] w-[80%] lg:mx-0 md:mx-0 sm:mx-auto mx-auto rounded-md border-2 shadow-md hover:shadow-lg'>
                    <img  className="mb-5  " src="https://freerangestock.com/sample/120140/business-man-profile-vector.jpg" alt="Photo" />
                    <div className="info pb-5">
                        <h1 className='lg:text-3xl md:text-3xl sm:text-2xl text-2xl font-bold text-center '>Professor Ashfaque</h1>
                        <h3 className='lg:text-2xl md:text-2xl sm:text-xl text-xl font-semibold text-center'>Manager</h3>
                        
                    </div>
                
                </div>
            
               
            </div>
            <div className='row-2 lg:flex md:flex sm:block block justify-around items-center my-8'>
                 <div className='lg:w-[30%] md:w-[30%] sm:w-[80%] w-[80%] lg:mx-0 md:mx-0 sm:mx-auto mx-auto rounded-md border-2 shadow-md hover:shadow-lg'>
                    <img className="mb-5  "  src="https://freerangestock.com/sample/120140/business-man-profile-vector.jpg" alt="" />
                    <div className="info pb-5">
                        <h1 className='lg:text-3xl md:text-3xl sm:text-2xl text-2xl font-bold text-center '>Mohd Gyas</h1>
                        <h3 className='lg:text-2xl md:text-2xl sm:text-xl text-xl font-semibold text-center'>Assistant Manager</h3>
                        
                    </div>
                
                </div>
                <div className='lg:w-[30%] md:w-[30%] sm:w-[80%] w-[80%] lg:mx-0 md:mx-0 sm:mx-auto mx-auto lg:mt-0 md:mt-0 sm:mt-5 mt-5 rounded-md border-2 shadow-md hover:shadow-lg'>
                    <img className=" mb-5 "  src="https://freerangestock.com/sample/120140/business-man-profile-vector.jpg" alt="" />
                    <div className="info pb-5">
                        <h1 className='text-3xl font-bold text-center '>Asfaq</h1>
                        <h3 className='text-2xl font-semibold text-center'>IT Manager</h3>
                        
                    </div>
                
                </div>
            </div>
        </div>
    </div>
  )
}

export default Managers