import React from 'react'

function SchoolTiming() {
  return (
    <div>
      <div className='my-10'>
      <div className='flex items-center  w-[100%] mx-auto lg:p-4 md:p-4 sm:p-3 p-3 m-5 text-center bg-blue-900 mb-10 '>
          <h1 className='text-center text-2xl mx-auto text-white font-bold'>SCHOOL TIMINGS</h1>
        </div>
        <div >
          <table className='border-collapse border border-black mx-auto lg:w-[80%] md:w-[80%] sm:w-[95%] w-[95%] text-center shadow-3xl'>
            <caption className='border border-black lg:p-4 md:p-4 sm:p-2 p-2 lg:text-2xl md:text-2xl sm:text-xl text-xl font-bold bg-blue-900 text-white'>SUMMER SCHOOL</caption>
            <tr>
              
              <td className='border border-black lg:p-4 md:p-4 sm:p-2 p-2 ' rowSpan={3}> <img className='lg:w-[100px] md:w-[100px] sm:w-[80px] w-[80px] lg:h-[100px] md:h-[100px] sm:h-[80px] h-[80px] rounded-[50%] mx-auto' src="https://res.cloudinary.com/dcxlcy6ls/image/upload/v1727505708/ahjizb2btnwgqk74ovvp.jpg" alt="Summer Img" /></td>
              <td className='border border-black lg:p-4 md:p-4 sm:p-2 p-2 font-semibold bg-blue-300'>08:20 am to 12:00 Noon</td>
              <td className='border border-black lg:p-4 md:p-4 sm:p-2 p-2 font-semibold bg-blue-300'>	Pre Nursery, Nursery, LKG, UKG</td>
            </tr>
            <tr>
              
             
              <td className='border border-black lg:p-4 md:p-4 sm:p-2 p-2 font-semibold'>07:20 am to 01:00 pm</td>
              <td className='border border-black lg:p-4 md:p-4 sm:p-2 p-2 font-semibold'><p>	( I to X )</p></td>
            </tr>
            <tr>
              
             
              <td className='border border-black lg:p-4 md:p-4 sm:p-2 p-2 font-semibold bg-blue-300'>07:20 am to 12:00 Noon</td>
              <td className='border border-black lg:p-4 md:p-4 sm:p-2 p-2 font-semibold bg-blue-300'>XI & XII</td>
            </tr>

          </table>
          <table className='border-collapse border border-black mx-auto lg:w-[80%] md:w-[80%] sm:w-[95%] w-[95%] text-center shadow-3xl'>
            <caption className='border border-black lg:p-4 md:p-4 sm:p-2 p-2 lg:text-2xl md:text-2xl sm:text-xl text-xl font-bold bg-blue-900 text-white'>WINTER SCHOOL</caption>
            <tr>
              
              <td rowSpan={3} className='border border-black lg:p-4 md:p-4 sm:p-2 p-2'> <img className='w-[100px] h-[100px] rounded-[50%] mx-auto'src="https://res.cloudinary.com/dcxlcy6ls/image/upload/v1727505773/te0juxaxviwlb37pxqqo.jpg" alt="Winter Img" /></td>
              <td className='border border-black lg:p-4 md:p-4 sm:p-2 p-2 font-semibold bg-blue-300'>08:20 am to 02:20 pm</td>
              <td className='border border-black lg:p-4 md:p-4 sm:p-2 p-2 font-semibold bg-blue-300'>( I to XII )</td>
            </tr>
            <tr>
              
             
              <td className='border border-black lg:p-4 md:p-4 sm:p-2 p-2 font-semibold'>09:20 Am to 12:00 Noon</td>
              <td className='border border-black lg:p-4 md:p-4 sm:p-2 p-2 font-semibold' rowSpan={2}><p>		Pre Nursery, Nursery, LKG, UKG</p></td>
            </tr>
            <tr>
              
             
              <td className='border border-black lg:p-4 md:p-4 sm:p-2 p-2 font-semibold '>08:20 Am to 01:20 Pm</td>
              
            </tr>

          </table>
        </div>

      </div>
    </div>
  )
}

export default SchoolTiming