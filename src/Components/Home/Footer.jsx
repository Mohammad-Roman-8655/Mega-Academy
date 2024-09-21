import React from 'react'

function Footer() {
  return (
    <div className='w-full mt-20 h-[40vh] bg-gradient-to-r from-sky-500 to-gray-700 text-white p-10'>
        <div className='flex justify-around items-center'>
            <div className='flex items-center gap-2'>
                <img className='w-20 h-20' src="https://res.cloudinary.com/dcxlcy6ls/image/upload/v1726293382/yhpdbi2y3dcplciev0oz.png" alt="mega-logo" />
                <p className='text-4xl font-bold'>Mega Academy</p>
            </div>
            <div>
                <h1 className='text-2xl font-semibold text-white mb-5'>QUICK NAVIGATION</h1>                             
                <div className='flex justify-between'>
                    <ul className='text-[20px] '>
                        <li className='mb-2 hover:underline'> <a href="">About</a></li>
                        <li className='mb-2 hover:underline'><a href="">Academics</a></li>
                        <li className='mb-2 hover:underline'><a href="">Students</a></li>
                        <li className='mb-2 hover:underline'><a href="">Parents</a></li>
                    </ul>
                    <ul className='text-[20px] '>
                        <li className='mb-2 hover:underline'><a href="">News</a></li>
                        <li className='mb-2 hover:underline'><a href="">Events</a></li>
                        <li className='mb-2 hover:underline'><a href="">Admissions</a></li>
                        <li className='mb-2 hover:underline'><a href="">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div>
                <h1 className='text-2xl font-semibold text-white mb-5'>STAY CONNECTED</h1>
                <ul className='text-[20px] '>
                    <li className='mb-2 hover:underline'><a href="">Facebook</a></li>
                    <li className='mb-2 hover:underline'><a href="">Twitter</a></li>
                    <li className='mb-2 hover:underline'><a href="">Instagram</a></li>
                    <li className='mb-2 hover:underline'><a href="">Youtube</a></li>
                </ul>
            </div>
            <div>
                <h1 className='text-2xl font-semibold text-white mb-5'>GET IN TOUCH</h1>
                <div className='text-[20px] '>
                    <p>Aijaz Nagar, Near Kisaan Path, Achramau Road,</p>
                    <p>Lucknow, Uttar Pradesh</p>
                    <p className='mb-2 hover:underline'>Tel:- +91 6386663632</p>
                    <p className='mb-2 hover:underline'>megaacademy9878@gmail.com</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer