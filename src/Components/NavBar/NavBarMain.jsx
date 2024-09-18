import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'



function NavBarMain() {

  



  return (
    <div className=' flex items-center justify-between px-5 pt-5 lg:pb-2 md:pb-2 sm:pb-4 pb-4 w-full bg-gradient-to-r from-sky-500 to-gray-700 text-white sticky'>
        <div className='lg:flex md:flex sm:flex flex items-center gap-3'>
            <img className=" h-12 w-12" src="https://res.cloudinary.com/dcxlcy6ls/image/upload/v1726293382/yhpdbi2y3dcplciev0oz.png" alt="" />
            <h3 className="school-name lg:text-[40px] md:text-[40px] sm:text-[30px] text-[30px] font-bold ">Mega Academy</h3>
        </div>
 
   <div className='lg:flex md:hidden sm:hidden  hidden items-center gap-5 text-[20px] pr-4 text-white'>
            <NavLink  className="hover:text-black " to="/">Home</NavLink>
            <NavLink className="hover:text-black " to="/Academics">Academics</NavLink>
            <NavLink className="hover:text-black " to="/Admissions">Admissions</NavLink>
            <NavLink className="hover:text-black " to="/Resources">Resources</NavLink>
            <NavLink className="hover:text-black " to="/Facilities">Facilities</NavLink>
            <NavLink className="hover:text-black " to="/About">About</NavLink>
            <NavLink className="hover:text-black " to="/Contact">Contact</NavLink>
            <NavLink className='lg:text-[20px] md:text-[20px] sm:text-[10px] text-[10px] border-[2px]  className="hover:text-black " border-white  lg:px-2 md:px-2 sm:px-1 px-1 py-1 rounded-md' to="/Login">Login/Register</NavLink>


       
   </div>
       <i className="fa-solid fa-bars lg:hidden md:block sm:block block lg:text-[40px] md:text-[40px] sm:text-[30px] text-[30px] " ></i>
           <i class="fa-solid fa-xmark lg:hidden md:block sm:block block lg:text-[40px] md:text-[40px] sm:text-[30px] text-[30px]" ></i>
        
    </div>
  )
}

export default NavBarMain