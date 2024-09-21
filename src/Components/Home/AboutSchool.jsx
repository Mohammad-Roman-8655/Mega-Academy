import React from 'react'

function AboutSchool() {
  return (
    <div>
       
            <div className='flex gap-4 w-full my-20  '>
                <div className='w-[50%]  mx-10'>
                    <img className='h-[500px] ml-10' src="https://res.cloudinary.com/dcxlcy6ls/image/upload/v1726896964/dwjmcb6b1knwcvz3shoy.png" alt="about-img" />
                   
                </div>
                <div className='w-[50%] mx-5'>
                    <div className='flex items-center gap-2'>
                    <i className="fa-solid fa-graduation-cap text-xl font-semibold"></i>
                    <p className='text-xl font-semibold'>About Our School</p>
                    </div>
                    <div >
                        <h2 className='text-4xl text-black font-bold my-5'>Welcome to</h2>
                        <h2 className='text-6xl text-red-400 font-bold my-5'>Mega Academy</h2>
                        <p className='text-xl font-semibold '>Discover Lucknow's leading CBSE school, renowned for its commitment to excellence and embracing the innovative principles of the New Education Policy (NEP). Our institution stands out as the best school in Lucknow, offering a curriculum designed to foster academic success, critical thinking, and holistic development. We aim to provide an education that emphasizes conceptual understanding, encourages interdisciplinary learning, and promotes the development of key 21st-century skills. With state-of-the-art facilities, a dynamic learning environment, and a focus on preparing students for the future, we are dedicated to nurturing the leaders of tomorrow.</p>
                    </div>
                </div>
                
            
        </div>
    </div>
  )
}

export default AboutSchool