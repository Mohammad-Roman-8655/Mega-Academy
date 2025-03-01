import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';



function NavBarMain() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex items-center justify-between px-5 pt-5 pb-4 w-full bg-gradient-to-r from-sky-500 to-gray-700 text-white sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <img
          className="h-12 w-12"
          src="https://res.cloudinary.com/dcxlcy6ls/image/upload/v1726293382/yhpdbi2y3dcplciev0oz.png"
          alt="Logo"
        />
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">Mega Academy</h3>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-5 text-lg">
        <NavLink className="hover:text-black transition" to="/">Home</NavLink>
        <NavLink className="hover:text-black transition" to="/Academics">Academics</NavLink>
        <NavLink className="hover:text-black transition" to="/Admissions">Admissions</NavLink>
        <NavLink className="hover:text-black transition" to="/Resources">Resources</NavLink>
        <NavLink className="hover:text-black transition" to="/Facilities">Facilities</NavLink>
        <NavLink className="hover:text-black transition" to="/About">About</NavLink>
        <NavLink className="hover:text-black transition" to="/Contact">Contact</NavLink>
        <NavLink
          className="text-sm md:text-lg border-2 border-white px-2 py-1 rounded-md hover:text-black transition"
          to="/Login"
        >
          Login/Register
        </NavLink>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-2xl focus:outline-none"
        >
          {isMenuOpen ? (
            <i className="fa-solid fa-xmark"></i>
          ) : (
            <i className="fa-solid fa-bars"></i>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-gradient-to-r from-sky-500 to-gray-700 text-white flex flex-col items-center gap-4 py-4 z-40">
          <NavLink className="hover:text-black transition" to="/" onClick={() => setIsMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink className="hover:text-black transition" to="/Academics" onClick={() => setIsMenuOpen(false)}>
            Academics
          </NavLink>
          <NavLink className="hover:text-black transition" to="/Admissions" onClick={() => setIsMenuOpen(false)}>
            Admissions
          </NavLink>
          <NavLink className="hover:text-black transition" to="/Resources" onClick={() => setIsMenuOpen(false)}>
            Resources
          </NavLink>
          <NavLink className="hover:text-black transition" to="/Facilities" onClick={() => setIsMenuOpen(false)}>
            Facilities
          </NavLink>
          <NavLink className="hover:text-black transition" to="/About" onClick={() => setIsMenuOpen(false)}>
            About
          </NavLink>
          <NavLink className="hover:text-black transition" to="/Contact" onClick={() => setIsMenuOpen(false)}>
            Contact
          </NavLink>
          <NavLink
            className="text-sm border-2 border-white px-2 py-1 rounded-md hover:text-black transition"
            to="/Login"
            onClick={() => setIsMenuOpen(false)}
          >
            Login/Register
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default NavBarMain