import React from 'react'

function AboutSchool() {
  return (
    <div>
       
            <div className='lg:flex md:flex sm:block block gap-4 w-full my-20  '>
                <div className='lg:w-[50%] md:w-[50%] sm:w-[100%] w-[100%]  lg:mx-10 md:mx-10 sm:mx-0 mx-0'>
                    <img className='lg:h-[500px] md:h-[500px] sm:h-[300px] h-[300px] ml-10' src="https://res.cloudinary.com/dcxlcy6ls/image/upload/v1726896964/dwjmcb6b1knwcvz3shoy.png" alt="about-img" />
                   
                </div>
                <div className='lg:w-[50%] md:w-[50%] sm:w-[100%] w-[100%] lg:mx-5 md:mx-5 sm:mx-3 mx-3 lg:mt-0 md:mt-0 sm:mt-5 mt-5'>
                    <div className='flex items-center gap-2'>
                    <i className="fa-solid fa-graduation-cap text-xl font-semibold"></i>
                    <p className='text-xl font-semibold'>About Our School</p>
                    </div>
                    <div >
                        <h2 className='lg:text-4xl md:text-4xl sm:text-2xl text-2xl text-black font-bold my-5'>Welcome to</h2>
                        <h2 className='lg:text-6xl md:text-6xl sm:text-3xl text-3xl text-red-400 font-bold my-5'>Mega Academy</h2>
                        <p className='lg:text-xl md:text-xl sm:text-[10px] text-[10px] font-semibold '>Discover Lucknow's leading CBSE school, renowned for its commitment to excellence and embracing the innovative principles of the New Education Policy (NEP). Our institution stands out as the best school in Lucknow, offering a curriculum designed to foster academic success, critical thinking, and holistic development. We aim to provide an education that emphasizes conceptual understanding, encourages interdisciplinary learning, and promotes the development of key 21st-century skills. With state-of-the-art facilities, a dynamic learning environment, and a focus on preparing students for the future, we are dedicated to nurturing the leaders of tomorrow.</p>
                    </div>
                </div>
                
            
        </div>
    </div>
  )
}

export default AboutSchool