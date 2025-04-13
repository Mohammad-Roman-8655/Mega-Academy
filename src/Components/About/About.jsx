import React from 'react'


function About() {
  return (
    <div className='w-full'>
       <div className='flex items-center  w-[100%] mx-auto lg:p-4 md:p-4 sm:p-3 p-3 m-5 text-center bg-blue-900 mb-10 '>
             <h1 className='text-center text-2xl mx-auto text-white font-bold'>ABOUT US</h1>
          </div>
      <div className='lg:w-[80%] md:w-[90%] sm:w-[95%] w-[95%] mx-auto   p-5  my-10'>
        <div className="section w-full border-2 rounded-lg p-5 shadow-lg hover:shadow-xl my-5">
          <h1 className='text-center lg:text-2xl md:text-2xl sm:text-lg text-lg mb-5 bg-blue-700 text-white p-2 rounded-xl font-bold'>School Overview</h1>
          <p className='text-lg text-justify mx-5'>Founded in 2018, <span className='font-bold'>Mega Academy</span> is a primary school located in <span className='font-bold'>Anchramau Lucknow</span>. Our mission is to bring high-quality education to every village, making learning accessible and affordable for every child. We believe that education is a right, not a privilege.</p>

        </div>
        <div className="section w-full border-2 rounded-lg p-5 shadow-lg hover:shadow-xl my-5">
          <h1 className='text-center lg:text-2xl md:text-2xl sm:text-lg text-lg mb-5 bg-blue-700 text-white p-2 rounded-xl font-bold'>Principal’s Message</h1>
          <p className='text-lg text-justify mx-5 '>As the principal of <span className="font-bold">Mega Academy</span>, my vision is to inspire each student to achieve their highest potential in a supportive and nurturing environment. We are dedicated to fostering a love for learning and building strong moral values to empower our students to thrive and make a positive impact in society</p>

        </div>
        <div className="section w-full border-2 rounded-lg p-5 shadow-lg hover:shadow-xl my-5">
          <h1 className='text-center lg:text-2xl md:text-2xl sm:text-lg text-lg mb-5 bg-blue-700 text-white p-2 rounded-xl font-bold'>Mission & Vision</h1>
          <p className='text-lg text-justify mx-5'>Our mission is to ensure that every child, regardless of background, has access to affordable, quality education that prepares them for the future.</p>
          <p className='text-lg text-justify mx-5'>Our vision is to create a generation of empowered, compassionate, and knowledgeable individuals who contribute positively to society.</p>
        </div>
      </div>

      <div className='w-full mt-20 lg:h-[40vh] md:h-auto sm:h-auto h-auto lg:mx-0 md:mx-0 sm:mx-auto mx-auto bg-gradient-to-r from-sky-500 to-gray-700 text-white  p-10'>
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
      
    </div>
  )
}

export default About