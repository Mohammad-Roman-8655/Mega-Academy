import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { API_URL } from "../../config/apiConfig";

function OurTeacher() {
  const [Teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTeachers = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/api/teacher`);
      const data = await response.json();
      setTeachers(data);
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTeachers();
  }, []);

  const calculateExperience = (startDate) => {
    if (!startDate) return "0"; // Handle cases where startDate is not provided
    
    const start = new Date(startDate);
    const today = new Date();
    
    let years = today.getFullYear() - start.getFullYear();
    let months = today.getMonth() - start.getMonth();
    
    if (months < 0 || (months === 0 && today.getDate() < start.getDate())) {
      years--; // Reduce one year if the current month is before the start month
    }
    
    return years > 0 ? years : "0"; // Ensure it doesn't return negative values
  };

  // Custom arrow components for better styling
  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} !bg-indigo-600 rounded-full flex items-center justify-center w-10 h-10 z-10 before:!text-white`}
        style={{ ...style, display: "flex" }}
        onClick={onClick}
      />
    );
  };

  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} !bg-indigo-600 rounded-full flex items-center justify-center w-10 h-10 z-10 before:!text-white`}
        style={{ ...style, display: "flex" }}
        onClick={onClick}
      />
    );
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm font-medium mb-4">Our Faculty</span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
          Meet Our <span className="text-indigo-600">Expert Teachers</span>
        </h1>
        <p className="max-w-2xl mx-auto text-gray-600">
          Our dedicated teachers bring their expertise and passion to create an engaging 
          learning environment for all our students.
        </p>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-80">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-indigo-600"></div>
        </div>
      ) : (
        <div className="mt-10 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-6 md:p-8 shadow-lg">
          <Slider {...settings} className="teacher-carousel -mx-4">
            {Teachers.map((teacher, idx) => (
              <div key={idx} className="px-4 pb-8">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl h-full">
                  {/* Card Header with Image */}
                  <div className="relative">
                    <div className="h-40 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
                    <div className="absolute left-0 right-0 -bottom-16 flex justify-center">
                      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                        <img 
                          className="w-full h-full object-cover"
                          src={teacher.photo} 
                          alt={`${teacher.name} profile`} 
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Teacher Info */}
                  <div className="pt-20 pb-8 px-6">
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold text-gray-800">{teacher.name}</h3>
                      <p className="text-indigo-600 font-medium mt-1">{teacher.subject} Teacher</p>
                      <div className="flex justify-center mt-2">
                        <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-3 py-1 rounded-full">
                          {calculateExperience(teacher.experience)}+ years experience
                        </span>
                      </div>
                    </div>
                    
                    {/* Contact Details */}
                    <div className="space-y-3 border-t border-gray-100 pt-4">
                      <div className="flex items-center text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="text-sm truncate">{teacher.email}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span className="text-sm">{teacher.phoneNo}</span>
                      </div>
                    </div>
                    
                    {/* Connect Button */}
                    <div className="mt-6">
                      <button className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-300 flex items-center justify-center">
                        <span>Connect</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
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

export default OurTeacher;

const data=[
  {
    id:1,
    Name:"Mohammad Roman",
    Subject:"Hindi",
    Exp:3,
    profile:"https://img.freepik.com/free-vector/profile-picture-template-design_742173-22027.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725926400&semt=ais_hybrid"
  },
  {
    id:2,
    Name:"Mohammad Roman",
    Subject:"Hindi",
    Exp:3,
    profile:"https://img.freepik.com/free-vector/profile-picture-template-design_742173-22027.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725926400&semt=ais_hybrid"
  },
  {
    id:3,
    Name:"Mohammad Roman",
    Subject:"Hindi",
    Exp:3,
    profile:"https://img.freepik.com/free-vector/profile-picture-template-design_742173-22027.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725926400&semt=ais_hybrid"
  },
  {
    id:4,
    Name:"Mohammad Roman",
    Subject:"Hindi",
    Exp:3,
    profile:"https://img.freepik.com/free-vector/profile-picture-template-design_742173-22027.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725926400&semt=ais_hybrid"
  },
  {
    id:5,
    Name:"Mohammad Roman",
    Subject:"Hindi",
    Exp:3,
    profile:"https://img.freepik.com/free-vector/profile-picture-template-design_742173-22027.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725926400&semt=ais_hybrid"
  },
  {
    id:6,
    Name:"Mohammad Roman",
    Subject:"Hindi",
    Exp:3,
    profile:"https://img.freepik.com/free-vector/profile-picture-template-design_742173-22027.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725926400&semt=ais_hybrid"
  },
  {
    id:7,
    Name:"Mohammad Roman",
    Subject:"Hindi",
    Exp:3,
    profile:"https://img.freepik.com/free-vector/profile-picture-template-design_742173-22027.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725926400&semt=ais_hybrid"
  },
  {
    id:8,
    Name:"Mohammad Roman",
    Subject:"Hindi",
    Exp:3,
    profile:"https://img.freepik.com/free-vector/profile-picture-template-design_742173-22027.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725926400&semt=ais_hybrid"
  }
]