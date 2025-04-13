import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState,useEffect } from "react";



function OurTeacher() {

  const [Teachers, setTeachers] = useState([]);
  
  const fetchTeachers = async () => {
    try {
      const response = await fetch(`${API_URL}/api/teacher`);
      const data = await response.json();
      setTeachers(data);
    } catch (error) {
      console.error("Error:", error);
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
  

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
    
  };
  return (

      <div className='w-3/4 m-auto my-20 '>
      <h1 className="lg:text-[60px] md:text-[60px] sm:text-[40px] text-[40px] text-center font-bold">Our Teachers</h1>
     
     <div className='mt-10 rounded-lg gap-6 bg-gray-300 px-7 py-7'>
     <Slider {...settings} className="slider-container">
     
     {
      Teachers.map((teacher,idx)=>{
        return (
          <div key={idx} className='bg-white  h-[450px] text-black rounded-xl border-2 shadow-xl hover:shadow-2xl'>
          <div className='h-56 flex justify-center text-center items-center bg-blue-500  rounded-t-xl'>
            <img  className="h-44 w-44 rounded-full"src={teacher.photo} alt="Teachers img" />
          </div>
          <div className="decs flex flex-col justify-start items-start ml-8 gap-4 mt-4">
            <h1 className='text-2xl font-bold'>{teacher.name}</h1>
            <h2 >Subject Taught : <span  className='font-semibold'>{teacher.subject}</span></h2>
            <h2 >Email : <span  className='font-semibold'>{teacher.email}</span></h2>
            <h2 >Phone : <span  className='font-semibold'>{teacher.phoneNo}</span></h2>
            <h3>Experience: <span className="font-semibold">{calculateExperience(teacher.experience)}+ years</span></h3>
          </div>
        </div>
        )
      })
     }
      </Slider>
     
     </div>
    


    </div>
  
  )
}

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

export default OurTeacher