import React from 'react'

function ConnectForm() {
  return (
    <div className='m-10 '>
        <div className='flex justify-center  w-full'>
            <div className='w-[50%] pt-10 pr-10 border-2 rounded-tl-lg rounded-bl-xl border-r-0 bg-gradient-to-r from-sky-500 to-gray-700'>
                <h1 className='text-2xl text-center mb-10 ml-20 font-bold  text-white'>Make Appointment</h1>
               <div className='ml-20'>
               <div className='flex items-center gap-4 '>
                    <input className='w-[50%] mb-10 px-5 py-5 rounded-lg border-2 hover:border-black' type="text" placeholder='Guardian name' />
                    <input className='w-[50%] mb-10 px-5 py-5 rounded-lg border-2 hover:border-black' type="text" placeholder='Guardian email' />
                </div>
                <div className='flex items-center gap-4'>
                    <input className='w-[50%] mb-10 px-5 py-5 rounded-lg border-2 hover:border-black' type="text" placeholder='Child name'/>
                    <input className='w-[50%] mb-10 px-5 py-5 rounded-lg border-2 hover:border-black' type="text" placeholder='Age name' />
                </div>
                <div className='mb-5 '>
                    <textarea className='w-[100%] px-5 py-5 rounded-md border-2 hover:border-black' name="meassage" id="" placeholder='Message'></textarea>
                </div>
               </div>
                <button className='w-[88%] px-5 py-5 rounded-md font-bold text-xl border-2 ml-20 hover:border-black text-white'>Submit</button>
            </div>
            <div className='w-[50%] '>
                <img className="h-[600px] rounded-tr-lg rounded-br-xl" src="https://res.cloudinary.com/dcxlcy6ls/image/upload/v1726984675/cytzakgxyvqao0nx4vnr.jpg" alt="girl-photo" />
            </div>
        </div>
    </div>
  )
}

export default ConnectForm