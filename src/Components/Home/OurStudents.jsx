import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState,useEffect } from "react";
import { API_URL } from "../../config/apiConfig";

function OurStudents() {

  const [Students, setStudents] = useState([]);

  // Fetch students with optional filtering by standard
  const fetchStudents = async () => {
    try {
     
      const response = await fetch(`${API_URL}/api/student`);
      const data = await response.json();
      setStudents(data);
    } catch (error) {
      console.error("Error:", error);
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
        slidesToScroll: 4,
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
        <h1 className="lg:text-[60px] md:text-[60px] sm:text-[40px] text-[40px] text-center font-bold">Our Students</h1>
       
       <div className=' mt-10 rounded-lg gap-6 bg-gray-300 px-7 py-7'>
       <Slider {...settings} className="slider-container">
       
       {
        Students.map((student,idx)=>{
          return (
            <div key={idx} className='bg-white  lg:h-[380px] text-black rounded-xl border-2 shadow-xl hover:shadow-2xl'>
            <div className=' flex justify-center text-center items-center bg-blue-500  rounded-t-xl'>
              <img  className=" rounded-full w-40 h-40 p-3"src={student.photo} alt="Teachers img" />
            </div>
            <div className="decs flex flex-col justify-start ml-5 lg:gap-2 md:gap-2 sm:gap-2 gap-1 lg:mt-5 md:mt-4 sm:mt-3 mt-3">
              <h1 className='lg:text-2xl md:text-xl sm:text-xl text-xl font-bold'> {student.studentName}</h1>
              <h2 >Class : <span  className='font-semibold'>{student.standard}</span></h2>
              <h3>Division : <span className='font-bold'>{student.division}</span></h3>
              <h3>City : <span className='font-semibold text-[13px]'>{student.address}</span></h3>
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

export default OurStudents