import React from 'react'

function NoticeBoard() {
  return (
   <div className=' lg:flex md:flex sm:block block justify-between w-[98%] lg:h-[50vh] md:h-[65vh] sm:h-[80vh]  h-[110vh] py-5 rounded-md lg:mx-5 md:mx-5 sm:mx-2 mx-2 lg:my-5 md:my-5 sm:my-2 my-2 bg-gradient-to-r from-sky-500 to-gray-700'>
         <div className='left-side lg:w-[50%] md:w-[50%] sm:w-[100%] w-[100%]'>
             <div className=' items-center'>
   
                 <h3 className='text-[30px] font-semibold mx-auto text-center text-white'><i className="fa-solid fa-bullhorn mr-6 mx-auto"></i>Notices Board</h3>
              </div>
              <div className=' p-5 border-2 lg:m-5 md:mx-5 md:my-5 sm:mx-2 sm:my-5 mx-3 my-5 rounded hover:border-black overflow-scroll overflow-x-hidden h-[30vh] bg-white'>
                <p className='underline p-1 text-green-600'><a href="">Notice 1: Admission Open 24-25</a></p>
                <p className='underline p-1 text-green-600'><a href="https://drive.google.com/file/d/1lMYJlAukjciAxwi0GR2ZY3NEEI8WsUWu/view?usp=drive_link">Notice 2: Academic Calendar 2024-25</a></p>
                <p className='underline p-1 text-green-600'><a href="">Notice 3: School will remain closed on September 20th</a></p>
                <p className='underline p-1 text-green-600'><a href="">Notice 4: Parent-teacher meeting on September 25th.</a></p>
               <p className='underline p-1 text-red-500'> <a href="">Notice 5: Admission open for 2024-25 from Nursery to 8th class.</a></p>
               <p className='underline p-1 text-red-500'><a href="">Notice 6: Sports day event on October 10th.</a></p>
                <p className='underline p-1 text-red-500'><a href="">Notice 7: Annual cultural event on December 15th.</a></p>
               <p className='underline p-1 text-red-500'> <a href="">Notice 8: Admission Open 24-25</a></p>
               
              </div>
          <div>

       

   </div>
   </div>
   <div className='right-side lg:w-[50%] md:w-[50%] sm:w-[100%] w-[100%]  mr-7'>
             <div className=' items-center'>
   
                 <h3 className='lg:text-[30px] md:text-[25px] sm:text-[20px] text-[20px] lg:mr-0 md:mr-0 sm:mr-5 mr-5 lg:ml-0 md:ml-0 sm:ml-5 ml-5 font-semibold mx-auto text-center text-white'>Admission Open for 2024-25 at Mega Academy!</h3>
              </div>
              <div className=' text-justify mt-5  hover:border-black rounded lg:mx-5 md:mx-5 sm:mx-2 mx-2 h-[30vh]  text-gray-300'>
                <p className='p-5 text-wrap lg:text-md md:text-md sm:text-sm text-sm'>Mega Academy, located at Aijaz Nagar, Near Kisaan Path, Achramau Road, Kisan Path, Ancharamau, Uttar Pradesh, is pleased to announce that admissions are now open for the academic session 2024-25. As an English medium school, we offer a vibrant and nurturing learning environment from Nursery to 8th class. With limited seats available, this is a fantastic opportunity for your child to receive quality education with a focus on academic excellence and overall development. Don't miss out—hurry and secure your child’s admission today! </p>
                <button className='border-2 hover:border-black hover:bg-white hover:text-black text-lg font-bold ml-5 px-2 py-1 rounded-md'>Apply here!</button> 
             </div>
             
             
          <div>

       

   </div>
   </div>
   </div>
  )
}

export default NoticeBoard