import React, { useState, useEffect } from 'react';
import {
    Mail,
    Phone,
    Clock,
    Calendar,
    MapPin,
    Instagram,
    Facebook,
} from 'lucide-react';

function NavBarTop() {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    const [isMobileInfoOpen, setIsMobileInfoOpen] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatDate = (date) => {
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        };
        return date.toLocaleDateString(undefined, options);
    };

    const formatTime = (date) => {
        return date.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        });
    };

    return (
        <>
            {/* Desktop top bar */}
            <div className='hidden sm:block w-full bg-gradient-to-r from-sky-500 to-gray-700 text-white py-2 px-4 md:px-6 shadow-md'>
                <div className='max-w-7xl mx-auto flex flex-wrap justify-between items-center'>
                    {/* Contact info */}
                    <div className='flex items-center space-x-4 text-sm'>
                        <a
                            href='mailto:megaacademy@gmail.com'
                            className='flex items-center hover:text-blue-200 transition-colors duration-200'
                        >
                            <Mail className='h-4 w-4 mr-1' />
                            <span>megaacademy@gmail.com</span>
                        </a>
                        <div className='hidden md:flex items-center'>
                            <span className='mx-2 text-blue-300'>|</span>
                            <a
                                href='tel:+916386663632'
                                className='flex items-center hover:text-blue-200 transition-colors duration-200'
                            >
                                <Phone className='h-4 w-4 mr-1' />
                                <span>+91 6386663632</span>
                            </a>
                        </div>
                    </div>

                    {/* Center info */}
                    <div className='hidden lg:flex items-center space-x-4 text-sm'>
                        <div className='flex items-center'>
                            <Calendar className='h-4 w-4 mr-1' />
                            <span>Academic Year 2024-25</span>
                        </div>
                        <span className='mx-1 text-blue-300'>|</span>
                        <div className='flex items-center'>
                            <Clock className='h-4 w-4 mr-1' />
                            <span className='font-medium'>
                                {formatTime(currentDateTime)}
                            </span>
                            <span className='mx-1 text-blue-300'>•</span>
                            <span>{formatDate(currentDateTime)}</span>
                        </div>
                    </div>

                    {/* Social media */}
                    <div className='flex items-center space-x-4'>
                        <a
                            href='https://www.instagram.com/mega.academy12?igsh=bDZvOTkwNXVodzlo'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='hover:text-pink-300 transition-colors duration-200'
                            aria-label='Instagram'
                        >
                            <Instagram className='h-4 w-4' />
                        </a>
                        <a
                            href='https://www.facebook.com/mega.acedmy?mibextid=ZbWKwL'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='hover:text-blue-300 transition-colors duration-200'
                            aria-label='Facebook'
                        >
                            <Facebook className='h-4 w-4' />
                        </a>
                        <a
                            href='https://www.google.com/maps/place/Mega+Academy/@26.9899584,80.9755348,17z/data=!3m1!4b1!4m6!3m5!1s0x3999513cb1060f97:0x561392727c3b4e53!8m2!3d26.9899584!4d80.9755348!16s%2Fg%2F11qn6tk0jx?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='hover:text-red-300 transition-colors duration-200'
                            aria-label='Location'
                        >
                            <MapPin className='h-4 w-4' />
                        </a>
                    </div>
                </div>
            </div>

            {/* Mobile expandable info bar */}
            <div className='sm:hidden w-full bg-gradient-to-r from-blue-600 to-indigo-800 text-white'>
                <div className='flex justify-between items-center px-4 py-2'>
                    <a
                        href='mailto:megaacademy@gmail.com'
                        className='flex items-center text-sm'
                    >
                        <Mail className='h-4 w-4 mr-1' />
                        <span className='text-xs'>megaacademy@gmail.com</span>
                    </a>

                    <div className='flex items-center space-x-3'>
                        <a
                            href='https://www.instagram.com/mega.academy12?igsh=bDZvOTkwNXVodzlo'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='hover:text-pink-300 transition-colors duration-200'
                            aria-label='Instagram'
                        >
                            <Instagram className='h-4 w-4' />
                        </a>
                        <a
                            href='https://www.facebook.com/mega.acedmy?mibextid=ZbWKwL'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='hover:text-blue-300 transition-colors duration-200'
                            aria-label='Facebook'
                        >
                            <Facebook className='h-4 w-4' />
                        </a>
                        <button
                            onClick={() =>
                                setIsMobileInfoOpen(!isMobileInfoOpen)
                            }
                            className='text-xs bg-blue-700 hover:bg-blue-800 px-2 py-1 rounded transition-colors duration-200'
                        >
                            {isMobileInfoOpen ? 'Hide Info' : 'More Info'}
                        </button>
                    </div>
                </div>

                {/* Expandable info section */}
                {isMobileInfoOpen && (
                    <div className='border-t border-blue-500 px-4 py-2 text-xs space-y-2 bg-blue-700 bg-opacity-30'>
                        <div className='flex items-center'>
                            <Phone className='h-3 w-3 mr-1' />
                            <a href='tel:+916386663632'>+91 6386663632</a>
                        </div>
                        <div className='flex items-center'>
                            <Calendar className='h-3 w-3 mr-1' />
                            <span>Academic Year 2024-25</span>
                        </div>
                        <div className='flex items-center'>
                            <Clock className='h-3 w-3 mr-1' />
                            <span>{formatTime(currentDateTime)}</span>
                        </div>
                        <div className='flex items-center'>
                            <MapPin className='h-3 w-3 mr-1' />
                            <a
                                href='https://www.google.com/maps/place/Mega+Academy/@26.9899584,80.9755348,17z/data=!3m1!4b1!4m6!3m5!1s0x3999513cb1060f97:0x561392727c3b4e53!8m2!3d26.9899584!4d80.9755348!16s%2Fg%2F11qn6tk0jx?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                View Location
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default NavBarTop;
