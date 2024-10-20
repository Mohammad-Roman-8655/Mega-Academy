import React from 'react'

function ArtEducation() {
  return (
    <div>
         <div className='flex items-center  w-[100%] mx-auto lg:p-4 md:p-4 sm:p-3 p-3 m-2 text-center bg-blue-900 mb-10 '>
             <h1 className='text-center text-2xl mx-auto text-white font-bold'>Art Education</h1>
         </div>
         <div>
          <div className='lg:w-[80%] md:w-[80%] sm:w-[90%] w-[90%] lg:mx-auto md:mx-auto sm:mx-5 mx-5  border-2 p-10 rounded-xl shadow-xl my-10  '>
            <p className='mb-5 font-semibold'>Art education also fosters collaboration and group learning. Often times, it brings people and children together, helping them learn from, and aid each other as they persevere towards creating something. It improves emotional balance and helps kids become team players.</p>
            <div className='flex lg:flex-row md:flex-row sm:flex-col flex-col items-center mb-10  w-[98%]'>
              <img className='lg:w-[33%] md:w-[33%] sm:w-[100%] w-[100%] h-1/2 rounded-lg m-2 shadow-lg' src="https://res.cloudinary.com/dcxlcy6ls/image/upload/v1727758883/y32cl0xjwxlv5wucjubm.jpg" alt="art1" />
              <img className='lg:w-[33%] md:w-[33%] sm:w-[100%] w-[100%] h-1/2 rounded-lg m-2 shadow-lg' src="https://res.cloudinary.com/dcxlcy6ls/image/upload/v1727759015/nfuusaahqcbmdxw7dmvg.jpg" alt="art2" />
              <img className='lg:w-[33%] md:w-[33%] sm:w-[100%] w-[100%] h-1/2 rounded-lg m-2 shadow-lg' src="https://res.cloudinary.com/dcxlcy6ls/image/upload/v1727759107/j6aqprz4yibisbfllxeh.jpg" alt="art3" />
            </div>
            <div className='flex items-center lg:flex-row md:flex-row sm:flex-col flex-col  items-center w-[100%] '>
              <img className='lg:w-[33%] md:w-[33%] sm:w-[100%] w-[100%] h-1/2 rounded-lg m-2 shadow-lg' src="https://res.cloudinary.com/dcxlcy6ls/image/upload/v1727759276/rxcltba0ibjsv7euk3va.jpg" alt="art4" />
              <img className='lg:w-[33%] md:w-[33%] sm:w-[100%] w-[100%] h-1/2 rounded-lg m-2 shadow-lg' src="https://res.cloudinary.com/dcxlcy6ls/image/upload/v1727759176/csdbze7foeq4t7etzdmu.jpg" alt="art5" />
              <img className='lg:w-[33%] md:w-[33%] sm:w-[100%] w-[100%] lg:h-[500px] md:h-[300px] sm:h-[350px] h-[350px] rounded-lg m-2 shadow-lg'  src="https://res.cloudinary.com/dcxlcy6ls/image/upload/v1727759327/zysfgxclah60apxpjwvb.jpg" alt="art6" />
            </div>
          </div>
         </div>
           
    </div>
  )
}

export default ArtEducation