import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { API_URL } from "../../config/apiConfig";

function OurStudents() {
  const [Students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch students with optional filtering by standard
  const fetchStudents = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/api/student`);
      const data = await response.json();
      setStudents(data);
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
    }
  };

  // Fetch all students on component mount
  useEffect(() => {
    fetchStudents();
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  // Custom arrow components for better styling
  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} bg-blue-600 rounded-full flex items-center justify-center w-10 h-10 z-10`}
        style={{ ...style, display: "flex" }}
        onClick={onClick}
      />
    );
  };

  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} bg-blue-600 rounded-full flex items-center justify-center w-10 h-10 z-10`}
        style={{ ...style, display: "flex" }}
        onClick={onClick}
      />
    );
  };

  settings.nextArrow = <NextArrow />;
  settings.prevArrow = <PrevArrow />;

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="text-center mb-12">
        <h2 className="inline-block text-blue-600 font-semibold text-lg mb-2">Meet Our Students</h2>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700">
          Our Bright Stars
        </h1>
        <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 mb-6 rounded-full"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our students represent the heart of our institution. Each one brings unique talents, 
          perspectives, and aspirations that contribute to our vibrant academic community.
        </p>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-80">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600"></div>
        </div>
      ) : (
        <div className="mt-10 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl p-8 shadow-lg">
          <Slider {...settings} className="student-carousel -mx-4">
            {Students.map((student, idx) => (
              <div key={idx} className="px-4 pb-8">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl h-full">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-600 pt-6 pb-10 px-2 relative">
                    <div className="relative z-10 flex justify-center">
                      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md">
                        <img
                          className="w-full h-full object-cover"
                          src={student.photo}
                          alt={`${student.studentName}`}
                        />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ borderTopLeftRadius: '50%', borderTopRightRadius: '50%' }}></div>
                  </div>
                  
                  <div className="px-6 py-6 text-center">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {student.studentName}
                    </h3>
                    <div className="flex justify-between items-center mb-3 border-b border-gray-100 pb-3">
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span className="ml-2 text-gray-600">Class {student.standard}</span>
                      </div>
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        <span className="ml-2 text-gray-600">Div {student.division}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="ml-2 text-gray-600 truncate">{student.address}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
}

export default OurStudents;
const data=[
    {
      id:1,
      Name:"Mohammad Roman",
      Class:"I",
      City:"Anchramau",
      Division:"First Division",
      
      profile:"https://img.freepik.com/free-vector/profile-picture-template-design_742173-22027.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725926400&semt=ais_hybrid"
    },
    {
        id:2,
        Name:"Mohammad Roman",
        Class:"I",
        City:"Anchramau",
        Division:"First Division",
        
        profile:"https://img.freepik.com/free-vector/profile-picture-template-design_742173-22027.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725926400&semt=ais_hybrid"
      },
      {
        id:3,
        Name:"Mohammad Roman",
        Class:"I",
        City:"Anchramau",
        Division:"First Division",
        
        profile:"https://img.freepik.com/free-vector/profile-picture-template-design_742173-22027.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725926400&semt=ais_hybrid"
      },
      {
        id:4,
        Name:"Mohammad Roman",
        Class:"I",
        City:"Anchramau",
        Division:"First Division",
        
        profile:"https://img.freepik.com/free-vector/profile-picture-template-design_742173-22027.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725926400&semt=ais_hybrid"
      },
      {
        id:5,
        Name:"Mohammad Roman",
        Class:"I",
        City:"Anchramau",
        Division:"First Division",
        
        profile:"https://img.freepik.com/free-vector/profile-picture-template-design_742173-22027.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725926400&semt=ais_hybrid"
      },
      {
        id:6,
        Name:"Mohammad Roman",
        Class:"I",
        City:"Anchramau",
        Division:"First Division",
        
        profile:"https://img.freepik.com/free-vector/profile-picture-template-design_742173-22027.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725926400&semt=ais_hybrid"
      },
      {
        id:7,
        Name:"Mohammad Roman",
        Class:"I",
        City:"Anchramau",
        Division:"First Division",
        
        profile:"https://img.freepik.com/free-vector/profile-picture-template-design_742173-22027.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725926400&semt=ais_hybrid"
      },
      {
        id:8,
        Name:"Mohammad Roman",
        Class:"I",
        City:"Anchramau",
        Division:"First Division",
        
        profile:"https://img.freepik.com/free-vector/profile-picture-template-design_742173-22027.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725926400&semt=ais_hybrid"
      },

 
  ]

