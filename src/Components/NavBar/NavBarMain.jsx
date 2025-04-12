import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';
import { Menu, X, ChevronDown, User, LogOut } from 'lucide-react';

function NavBarMain() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const { user, logout } = useContext(AuthContext);

    const closeMenu = () => setIsMenuOpen(false);
    const toggleProfileMenu = () => setIsProfileOpen(!isProfileOpen);

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Academics', path: '/Academics' },
        { name: 'Admissions', path: '/Admissions' },
        { name: 'Resources', path: '/Resources' },
        { name: 'Facilities', path: '/Facilities' },
        { name: 'About', path: '/About' },
        { name: 'Contact', path: '/Contact' },
    ];

    return (
        <div className='relative'>
            <nav className='bg-white shadow-md sticky top-0 z-50'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='flex justify-between h-16'>
                        {/* Logo and brand name */}
                        <div className='flex items-center'>
                            <div className='flex-shrink-0 flex items-center'>
                                <img
                                    className='h-10 w-10'
                                    src='https://res.cloudinary.com/dcxlcy6ls/image/upload/v1726293382/yhpdbi2y3dcplciev0oz.png'
                                    alt='Mega Academy Logo'
                                />
                                <span className='ml-3 text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
                                    Mega Academy
                                </span>
                            </div>
                        </div>

                        {/* Desktop Navigation */}
                        <div className='hidden md:flex items-center space-x-1'>
                            <div className='flex space-x-4'>
                                {navItems.map((item) => (
                                    <NavLink
                                        key={item.name}
                                        to={item.path}
                                        className={({ isActive }) =>
                                            `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                                                isActive
                                                    ? 'text-blue-600 bg-blue-50'
                                                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                                            }`
                                        }
                                    >
                                        {item.name}
                                    </NavLink>
                                ))}
                            </div>

                            {/* User menu desktop */}
                            <div className='ml-4 relative flex items-center'>
                                {user ? (
                                    <div className='relative'>
                                        <button
                                            onClick={toggleProfileMenu}
                                            className='flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-md hover:from-blue-600 hover:to-indigo-700 transition-colors duration-200'
                                        >
                                            <span className='font-medium'>
                                                {user.username}
                                            </span>
                                            <ChevronDown className='h-4 w-4' />
                                        </button>

                                        {isProfileOpen && (
                                            <div className='absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200'>
                                                <div className='px-4 py-2 text-sm text-gray-500 border-b border-gray-200'>
                                                    Signed in as{' '}
                                                    <span className='font-semibold text-gray-700'>
                                                        {user.username}
                                                    </span>
                                                </div>
                                                <a
                                                    href='/profile'
                                                    className='flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                                                >
                                                    <User className='h-4 w-4 mr-2' />
                                                    Your Profile
                                                </a>
                                                <button
                                                    onClick={logout}
                                                    className='flex items-center w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100'
                                                >
                                                    <LogOut className='h-4 w-4 mr-2' />
                                                    Sign out
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <div className='flex space-x-2'>
                                        <NavLink
                                            to='/login'
                                            className='text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium'
                                        >
                                            Login
                                        </NavLink>
                                        <NavLink
                                            to='/register'
                                            className='bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:from-blue-600 hover:to-indigo-700 transition-colors duration-200'
                                        >
                                            Register
                                        </NavLink>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Mobile menu button */}
                        <div className='flex md:hidden items-center'>
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className='text-gray-700 hover:text-blue-600 focus:outline-none'
                                aria-expanded={isMenuOpen}
                            >
                                {isMenuOpen ? (
                                    <X className='h-6 w-6' />
                                ) : (
                                    <Menu className='h-6 w-6' />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
                <div
                    className={`${
                        isMenuOpen ? 'block' : 'hidden'
                    } md:hidden bg-white border-t border-gray-200`}
                >
                    <div className='pt-2 pb-4 space-y-1 px-4'>
                        {navItems.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.path}
                                onClick={closeMenu}
                                className={({ isActive }) =>
                                    `block px-3 py-2 rounded-md text-base font-medium ${
                                        isActive
                                            ? 'text-blue-600 bg-blue-50'
                                            : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                                    }`
                                }
                            >
                                {item.name}
                            </NavLink>
                        ))}
                    </div>

                    {/* User section mobile */}
                    <div className='pt-4 pb-3 border-t border-gray-200'>
                        {user ? (
                            <div className='space-y-1 px-4'>
                                <div className='text-base font-medium text-gray-800 mb-3'>
                                    Welcome, {user.username}
                                </div>
                                <NavLink
                                    to='/profile'
                                    onClick={closeMenu}
                                    className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                                >
                                    Your Profile
                                </NavLink>
                                <button
                                    onClick={() => {
                                        logout();
                                        closeMenu();
                                    }}
                                    className='block w-full text-left px-3 py-2 rounded-md text-base font-medium text-red-600 hover:bg-red-50'
                                >
                                    Sign out
                                </button>
                            </div>
                        ) : (
                            <div className='space-y-2 px-4 pb-3'>
                                <NavLink
                                    to='/login'
                                    onClick={closeMenu}
                                    className='block w-full px-3 py-2 rounded-md text-base font-medium text-center bg-white text-blue-600 border border-blue-600 hover:bg-blue-50'
                                >
                                    Login
                                </NavLink>
                                <NavLink
                                    to='/register'
                                    onClick={closeMenu}
                                    className='block w-full px-3 py-2 rounded-md text-base font-medium text-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700'
                                >
                                    Register
                                </NavLink>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBarMain;
