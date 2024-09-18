import React from 'react'

function Managers() {
  return (
    <div>
        <div>
            <h1 className='text-5xl text-center font-semibold '>Our Managers</h1>

            <div className='row-1 flex justify-around my-7 mt-10'>
                <div className='w-[30%]  rounded-md border-2 shadow-md hover:shadow-lg'>
                    <img  className="mb-5  " src="https://freerangestock.com/sample/120140/business-man-profile-vector.jpg" alt="Photo" />
                    <div className="info pb-5">
                        <h1 className='text-3xl font-bold text-center '>Professor Ashfaque</h1>
                        <h3 className='text-2xl font-semibold text-center'>Manager</h3>
                        
                    </div>
                
                </div>
            
               
            </div>
            <div className='row-2 flex justify-around items-center my-8'>
                 <div className='w-[30%] rounded-md border-2 shadow-md hover:shadow-lg'>
                    <img className="mb-5  "  src="https://freerangestock.com/sample/120140/business-man-profile-vector.jpg" alt="" />
                    <div className="info pb-5">
                        <h1 className='text-3xl font-bold text-center '>Mohd Gyas</h1>
                        <h3 className='text-2xl font-semibold text-center'>Assistant Manager</h3>
                        
                    </div>
                
                </div>
                <div className='w-[30%] rounded-md border-2 shadow-md hover:shadow-lg'>
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