import React from 'react'

function EnrollStatus() {
  return (
     <div>
           <div>
        <h1 className="text-[60px] text-center font-bold my-10">Our Facilities</h1>
        <div className='w-full ml-[40px]'>
            <div className=' w-[90%] flex justify-center items-center mx-10 text-justify'>
                <div className=' h-[270px] w-1/4 text-center m-5 border-2 p-7 rounded-md border-blue-400 hover:text-white  hover:bg-red-500 hover:border-black'>
                   <i className="fa-solid fa-school text-5xl animate-bounce"></i>
                    <p className='text-2xl font-bold my-3'>Classrooms</p>
                    <p className='text-justify font-semibold'>The spacious and wellventilated classrooms with natural light provide a conducive environment for learning.</p>
                </div>
                <div className='h-[270px] w-1/4 text-center m-5 border-2 p-7 rounded-md border-blue-400 hover:text-white hover:bg-green-500 hover:border-black'>
                    <i className="fa-solid fa-flask text-5xl animate-bounce"></i>
                    <p className='text-2xl font-bold my-3'>Science Labs</p>
                    <p className='text-justify font-semibold'>The school has spacious, well-equipped Physics, Chemistry, Biology and General Science Laboratories.</p>
                </div>
                <div className='h-[270px] w-1/4 text-center m-5 border-2 p-7 rounded-md border-blue-400 hover:text-white hover:bg-yellow-300 hover:border-black'>
                    <i className="fa-solid fa-computer text-5xl animate-bounce"></i>
                    <p className='text-2xl font-bold my-3'>Computer Labs</p>
                    <p className='text-justify font-semibold'>The school has two air-conditioned Computer Laboratories with high-speed broadband connectivity and audio-visual facilities</p>
                </div>
                <div className='h-[270px] w-1/4 text-center m-5 border-2 p-7 rounded-md border-blue-400 hover:text-white hover:bg-blue-500 hover:border-black'>
                <i className="fa-solid fa-book-open-reader text-5xl animate-bounce"></i>
                    <p className='text-2xl font-bold my-3'>Library</p>
                    <p className='text-justify font-semibold'>Well-resourced, aesthetically designed Primary School Library that creates an inviting ambience for the young readers.</p>
                </div>
            </div>
            <div  className=' w-[90%] flex justify-center items-center mx-10 text-justify'>
                <div className='h-[270px] w-1/4 text-center m-5 border-2 p-7 rounded-md border-blue-400 hover:text-white hover:bg-blue-500 hover:border-black'>
                    <i className="fa-solid fa-palette text-5xl animate-bounce"></i>
                    <p className='text-2xl font-bold my-3'>Art Room</p>
                    <p className='text-justify font-semibold'>The Art Room is a spacious facility, with a dedicated workshop space, designed to spark the imagination of young students.</p>
                </div>
                <div className='h-[270px] w-1/4 h-90 text-center m-5 border-2 p-7 rounded-md border-blue-400 hover:text-white  hover:bg-yellow-300 hover:border-black'>
                    <i className="fa-regular fa-futbol text-5xl animate-bounce"></i>
                    <p className='text-2xl font-bold my-3'>Outdoor Play Areas</p>
                    <p className='text-justify font-semibold'>The Pre-Primary section and Primary section have their exclusive outdoor play areas, with ageappropriate, and colourful play equipment.</p>
                </div>
                <div className='h-[270px] w-1/4 text-center m-5 border-2 p-8 rounded-md border-blue-400 hover:text-white  hover:bg-green-500 hover:border-black'>
                   <i className="fa-solid fa-medal text-5xl animate-bounce"></i>
                    <p className='text-2xl font-bold my-3'>Sports Facilities</p>
                    <p className='text-justify font-semibold'>The school has a well-laid, lush green playground, a multipurpose court and an indoor multi-sports complex.</p>
                </div>
               
                <div className='h-[270px] w-1/4 text-center m-5 border-2 p-7 rounded-md border-blue-400 hover:text-white hover:bg-red-500 hover:border-black'>
                <i className="fa-solid fa-bus text-5xl animate-bounce "></i>
                    <p className='text-2xl font-bold my-3'>School Transport</p>
                    <p className='text-justify font-semibold'>The school has a well-maintained, dedicated fleet of buses with the required safety measures that include CCTV surveillance.</p>
                </div>
            </div>
        </div>
        


    </div>
     <div className="my-20 bg-blue-500 h-80 pt-20">
        <div className='flex justify-around items-start'>
            <div className='text-center'>
            <i className="fa-solid fa-person-chalkboard text-6xl"></i>
            <p className='text-4xl font-bold my-5' >15+</p>
            <p className='text-3xl font-semibold'>TEACHERS</p>
            </div>
            <div className='text-center'>
            <i className="fa-solid fa-school text-6xl"></i>
                <p className='text-4xl font-bold my-5'>1</p>
                <p className='text-3xl font-semibold'>CAMPUS</p>


            </div>
            <div className='text-center'>
                 <i className="fa-solid fa-people-group text-6xl"></i>
                <p className='text-4xl font-bold my-5'>1500+</p>
                <p className='text-3xl font-semibold'>STUDENTS</p>
            </div>
            <div className='text-center'>
            <i className="fa-solid fa-graduation-cap text-6xl"></i>
            <p className='text-4xl font-bold my-5'>300+</p>
            <p className='text-3xl font-semibold'>ALUMNI</p>
            </div>
        </div>

      </div>
     </div>
  )
}

export default EnrollStatus