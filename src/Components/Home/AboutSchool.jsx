import React from 'react';

function AboutSchool() {
  return (
    <div className="bg-gradient-to-b from-white to-blue-50 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row md:flex-row gap-8 items-center">
          {/* Image Section with Animation */}
          <div className="lg:w-1/2 md:w-1/2 w-full">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-400 to-blue-500 rounded-xl blur opacity-30 transform -rotate-2"></div>
              <div className="relative overflow-hidden rounded-xl shadow-2xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                <img 
                  className="w-full object-cover rounded-xl" 
                  src="https://res.cloudinary.com/dcxlcy6ls/image/upload/v1726896964/dwjmcb6b1knwcvz3shoy.png" 
                  alt="Mega Academy school building" 
                />
              </div>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="lg:w-1/2 md:w-1/2 w-full">
            <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-xl p-8 shadow-lg">
              {/* Section Title */}
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-red-400 rounded-full p-2 text-white">
                  <i className="fa-solid fa-graduation-cap text-xl"></i>
                </div>
                <p className="text-xl font-semibold text-gray-700 uppercase tracking-wide">About Our School</p>
              </div>
              
              {/* School Name and Description */}
              <div>
                <h2 className="text-2xl lg:text-4xl md:text-4xl text-gray-800 font-bold mb-2">Welcome to</h2>
                <h2 className="text-3xl lg:text-6xl md:text-5xl font-bold bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent mb-6">
                  Mega Academy
                </h2>
                
                <div className="relative overflow-hidden">
                  <p className="text-sm lg:text-lg md:text-lg text-gray-600 leading-relaxed text-justify">
                    Discover Lucknow's leading CBSE school, renowned for its commitment to excellence and 
                    embracing the innovative principles of the New Education Policy (NEP). 
                    Our institution stands out as the best school in Lucknow, offering a curriculum designed to 
                    foster academic success, critical thinking, and holistic development.
                  </p>
                  
                  <p className="text-sm lg:text-lg md:text-lg text-gray-600 leading-relaxed mt-4 text-justify">
                    We aim to provide an education that emphasizes conceptual understanding, encourages 
                    interdisciplinary learning, and promotes the development of key 21st-century skills. 
                    With state-of-the-art facilities, a dynamic learning environment, and a focus on preparing 
                    students for the future, we are dedicated to nurturing the leaders of tomorrow.
                  </p>
                </div>
                
                {/* Call to Action */}
                <div className="mt-8">
                  <button className="px-6 py-3 bg-red-400 hover:bg-red-500 text-white font-medium rounded-lg transition-all shadow-md hover:shadow-lg flex items-center gap-2">
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSchool;