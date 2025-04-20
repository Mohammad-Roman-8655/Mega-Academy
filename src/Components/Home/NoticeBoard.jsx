import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../config/apiConfig';

function NoticeBoard() {
  const navigate = useNavigate();
  const [Notices, setNotices] = useState([]);
   
  const fetchNotices = async () => {
    try {
      const response = await fetch(`${API_URL}/api/notice`);
      const data = await response.json();
      setNotices(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
   
  useEffect(() => {
    fetchNotices();
  }, []);

  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let scrollInterval;

    const startScrolling = () => {
      if (!isPaused && scrollRef.current) {
        scrollInterval = setInterval(() => {
          let scrollContainer = scrollRef.current;
          scrollContainer.scrollTop += 1; // Move down

          // If scrolled to the bottom, reset smoothly
          if (
            scrollContainer.scrollTop + scrollContainer.clientHeight >=
            scrollContainer.scrollHeight
          ) {
            setTimeout(() => {
              scrollContainer.scrollTop = 0; // Restart from top
            }, 1000); // 1 sec delay before restarting
          }
        }, 50); // Adjust speed
      }
    };
    
    startScrolling();
    
    return () => clearInterval(scrollInterval); // Cleanup
  }, [isPaused]);

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col lg:flex-row md:flex-row gap-6 w-full bg-gradient-to-r from-sky-500 to-gray-700 rounded-xl shadow-2xl p-4 lg:p-6">
        {/* Notice Board Section */}
        <div className="w-full lg:w-1/2 md:w-1/2">
          <div className="mb-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-center text-white flex items-center justify-center">
              <span className="bg-white text-blue-600 rounded-full p-2 mr-3 shadow-md flex items-center justify-center w-10 h-10">
                <i className="fa-solid fa-bullhorn"></i>
              </span>
              Notices Board
            </h3>
          </div>

          <div
            ref={scrollRef}
            className="bg-white rounded-lg shadow-lg p-4 h-64 md:h-72 overflow-y-auto"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {Notices.length === 0 ? (
              <div className="flex justify-center items-center h-full">
                <p className="text-gray-500">Loading notices...</p>
              </div>
            ) : (
              <>
                {Notices.map((notice, idx) => (
                  <div 
                    key={idx} 
                    className="mb-3 p-3 border-l-4 border-blue-500 rounded-md hover:bg-blue-50 transition-all duration-200 flex flex-col sm:flex-row justify-between items-start sm:items-center"
                  >
                    <div className="flex items-center flex-wrap mb-2 sm:mb-0">
                      <span className="mr-2 bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0">
                        {idx + 1}
                      </span>
                      <a 
                        className="hover:text-blue-800 hover:underline mr-2 font-medium text-blue-600"
                        href={notice.link}
                      >
                        {notice.title}
                      </a>
                      <span className="text-xs font-semibold px-2 py-1 rounded-full bg-blue-100 text-blue-800 mt-1 sm:mt-0">
                        {notice.status}
                      </span>
                    </div>
                    <span className="text-gray-500 text-sm">{notice.publishDate}</span>
                  </div>
                ))}
                <div className="text-center text-xs text-gray-400 mt-3 italic">
                  Hover to pause scrolling
                </div>
              </>
            )}
          </div>
        </div>
        
        {/* Admission Section */}
        <div className="w-full lg:w-1/2 md:w-1/2">
          <div className="mb-4">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-white">
              Admission Open for 2024-25!
            </h3>
          </div>
          
          <div className="bg-white bg-opacity-95 rounded-lg shadow-lg p-4 md:p-5 h-64 md:h-72 flex flex-col justify-between">
            <div className="overflow-y-auto mb-4">
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                Mega Academy, located at Aijaz Nagar, Near Kisaan Path, Achramau Road, Kisan Path, 
                Ancharamau, Uttar Pradesh, is pleased to announce that admissions are now open for 
                the academic session 2024-25. As an English medium school, we offer a vibrant and 
                nurturing learning environment from Nursery to 8th class. With limited seats available, 
                this is a fantastic opportunity for your child to receive quality education with a focus 
                on academic excellence and overall development. Don't miss out—hurry and secure your 
                child's admission today!
              </p>
            </div>
            
            <div className="mt-auto">
              <button 
                onClick={() => navigate('/Admission/OnlineAdmissionForm')}
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-md shadow-md transition-all duration-300 flex items-center justify-center"
                aria-label="Apply for admission"
              >
                <span>Apply here!</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoticeBoard;