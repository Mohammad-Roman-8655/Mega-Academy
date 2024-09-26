import React from 'react'

function Footer() {
  return (
    <div className='w-full mt-20 lg:h-[40vh] md:h-auto sm:h-auto h-auto lg:mx-0 md:mx-0 sm:mx-auto mx-auto bg-gradient-to-r from-sky-500 to-gray-700 text-white lg:mx-0 md:mx-0 sm:mx-auto mx-auto p-10'>
        <div className='lg:flex md:block sm:block block justify-around items-center  text-center '>
            <div className='flex items-center gap-2   lg:mb-20 md:mb-20 sm:mb-10 mb-10 lg:ml-[0%] md:ml-[30%] sm:ml-[5%] ml-[5%]'>
                <img className='w-20 h-20' src="https://res.cloudinary.com/dcxlcy6ls/image/upload/v1726293382/yhpdbi2y3dcplciev0oz.png" alt="mega-logo" />
                <p className='text-4xl font-bold text-center'>Mega Academy</p>
            </div>
            <div>
                <h1 className='text-2xl font-semibold text-white mb-5  text-center'>QUICK NAVIGATION</h1>                             
                <div className='lg:flex md:flex sm:block block lg:justify-between md:justify-evenly  lg:mb-0 md:mb-0 sm:mb-10 mb-10'>
                    <ul className='text-[20px]'>
                        <li className='mb-2 hover:underline '> <a href="">About</a></li>
                        <li className='mb-2 hover:underline '><a href="">Academics</a></li>
                        <li className='mb-2 hover:underline '><a href="">Students</a></li>
                        <li className='mb-2 hover:underline '><a href="">Parents</a></li>
                    </ul>
                    <ul className='text-[20px]  '>
                        <li className='mb-2 hover:underline '><a href="">News</a></li>
                        <li className='mb-2 hover:underline '><a href="">Events</a></li>
                        <li className='mb-2 hover:underline '><a href="">Admissions</a></li>
                        <li className='mb-2 hover:underline '><a href="">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div>
                <h1 className='text-2xl font-semibold text-white mb-5  text-center'>STAY CONNECTED</h1>
                <ul className='text-[20px]  lg:mb-0 md:mb-0 sm:mb-10 mb-10'>
                    <li className='mb-2 hover:underline '><a href="">Facebook</a></li>
                    <li className='mb-2 hover:underline '><a href="">Twitter</a></li>
                    <li className='mb-2 hover:underline '><a href="">Instagram</a></li>
                    <li className='mb-2 hover:underline '><a href="">Youtube</a></li>
                </ul>
            </div>
            <div>
                <h1 className='text-2xl font-semibold text-white mb-5  text-center'>GET IN TOUCH</h1>
                <div className='text-[20px]  lg:mb-0 md:mb-0 sm:mb-10 mb-10 '>
                    <p className='mb-2 '>Aijaz Nagar, Near Kisaan Path, Achramau Road,</p>
                    <p className='mb-2 '>Lucknow, Uttar Pradesh</p>
                    <p className='mb-2 '>Tel:- <span className='hover:underline'>+91 6386663632</span></p>
                    <p className='mb-2  '>Email:- <span className='hover:underline'>megaacademy9878@gmail.com</span></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer