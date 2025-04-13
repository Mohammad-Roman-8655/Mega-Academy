import React, { useState, useEffect } from 'react';
import { Calendar, Info, Search } from 'lucide-react';
import { API_URL } from '../../config/apiConfig';

function AcademicCalendar() {
    const [academicCalendars, setAcademicCalendars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentView, setCurrentView] = useState('all');

    const fetchAcademicCalendars = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${API_URL}/api/academic-calender`);
            const data = await response.json();
            setAcademicCalendars(data);
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAcademicCalendars();
    }, []);

    // Filter events based on search and current view
    const filteredEvents = academicCalendars.filter((event) => {
        const matchesSearch =
            event.eventName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            event.dayName.toLowerCase().includes(searchTerm.toLowerCase());

        const eventDate = new Date(event.date);
        const today = new Date();

        if (currentView === 'upcoming') {
            return matchesSearch && eventDate >= today;
        } else if (currentView === 'past') {
            return matchesSearch && eventDate < today;
        }

        return matchesSearch;
    });

    // Function to format date nicely
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    return (
        <div className='max-w-6xl mx-auto px-4 py-8'>
            {/* Header */}
            <div className='flex flex-col md:flex-row justify-between items-center mb-8'>
                <div className='flex items-center mb-4 md:mb-0'>
                    <Calendar className='h-8 w-8 text-blue-600 mr-2' />
                    <h1 className='text-3xl font-bold text-gray-800'>
                        Academic Calendar
                    </h1>
                </div>

                <div className='w-full md:w-auto flex flex-col sm:flex-row gap-3'>
                    {/* Search bar */}
                    <div className='relative'>
                        <Search className='absolute left-3 top-2.5 h-5 w-5 text-gray-400' />
                        <input
                            type='text'
                            placeholder='Search events...'
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className='pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                        />
                    </div>

                    {/* View selector */}
                    <div className='flex rounded-lg overflow-hidden border border-gray-300'>
                        <button
                            onClick={() => setCurrentView('all')}
                            className={`px-4 py-2 text-sm ${
                                currentView === 'all'
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-white text-gray-700 hover:bg-gray-100'
                            }`}
                        >
                            All
                        </button>
                        <button
                            onClick={() => setCurrentView('upcoming')}
                            className={`px-4 py-2 text-sm ${
                                currentView === 'upcoming'
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-white text-gray-700 hover:bg-gray-100'
                            }`}
                        >
                            Upcoming
                        </button>
                        <button
                            onClick={() => setCurrentView('past')}
                            className={`px-4 py-2 text-sm ${
                                currentView === 'past'
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-white text-gray-700 hover:bg-gray-100'
                            }`}
                        >
                            Past
                        </button>
                    </div>
                </div>
            </div>

            {/* Loading state */}
            {loading ? (
                <div className='flex justify-center items-center h-64'>
                    <div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500'></div>
                </div>
            ) : filteredEvents.length === 0 ? (
                <div className='bg-white rounded-lg shadow-lg p-6 text-center'>
                    <Info className='h-12 w-12 text-gray-400 mx-auto mb-4' />
                    <h3 className='text-lg font-medium text-gray-800'>
                        No events found
                    </h3>
                    <p className='text-gray-600 mt-2'>
                        {searchTerm
                            ? 'Try adjusting your search criteria'
                            : currentView === 'upcoming'
                            ? 'No upcoming events scheduled'
                            : 'No past events found'}
                    </p>
                </div>
            ) : (
                <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
                    <div className='overflow-x-auto'>
                        <table className='w-full'>
                            <thead>
                                <tr className='bg-gradient-to-r from-blue-600 to-blue-700 text-white'>
                                    <th className='px-4 py-4 text-left font-semibold w-16'>
                                        #
                                    </th>
                                    <th className='px-4 py-4 text-left font-semibold'>
                                        Event
                                    </th>
                                    <th className='px-4 py-4 text-left font-semibold'>
                                        Day
                                    </th>
                                    <th className='px-4 py-4 text-left font-semibold'>
                                        Date
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredEvents.map((event, idx) => {
                                    // Determine if event is upcoming, today, or past
                                    const eventDate = new Date(event.date);
                                    const today = new Date();
                                    today.setHours(0, 0, 0, 0);

                                    const isUpcoming = eventDate > today;
                                    const isToday =
                                        eventDate.toDateString() ===
                                        today.toDateString();

                                    return (
                                        <tr
                                            key={idx}
                                            className={`
                        border-b border-gray-200 hover:bg-blue-50 transition-colors
                        ${isToday ? 'bg-blue-50' : ''}
                      `}
                                        >
                                            <td className='px-4 py-4 text-gray-600'>
                                                {idx + 1}
                                            </td>
                                            <td className='px-4 py-4'>
                                                <div className='font-medium text-gray-800'>
                                                    {event.eventName}
                                                </div>
                                                {isToday && (
                                                    <span className='inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mt-1'>
                                                        Today
                                                    </span>
                                                )}
                                            </td>
                                            <td className='px-4 py-4 text-gray-600'>
                                                {event.dayName}
                                            </td>
                                            <td className='px-4 py-4'>
                                                <span
                                                    className={`
                          px-3 py-1 rounded-full text-sm font-medium
                          ${
                              isUpcoming
                                  ? 'bg-blue-100 text-blue-800'
                                  : isToday
                                  ? 'bg-green-100 text-green-800'
                                  : 'bg-gray-100 text-gray-800'
                          }
                        `}
                                                >
                                                    {formatDate(event.date)}
                                                </span>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            <div className='mt-4 text-sm text-gray-500 text-center'>
                Showing {filteredEvents.length} of {academicCalendars.length}{' '}
                events
            </div>
        </div>
    );
}

export default AcademicCalendar;
