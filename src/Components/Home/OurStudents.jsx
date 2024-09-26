import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function OurStudents() {
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
        <h1 className="text-[60px] text-center font-bold">Our Students</h1>
       
       <div className=' mt-10 rounded-lg gap-6 bg-gray-300 px-7 py-7'>
       <Slider {...settings} className="slider-container">
       
       {
        data.map((tdata)=>{
          return (
            <div className='bg-white  lg:h-[450px] text-black rounded-xl border-2 shadow-xl hover:shadow-2xl'>
            <div className=' flex justify-center text-center items-center bg-blue-500  rounded-t-xl'>
              <img  className=" rounded-full"src={tdata.profile} alt="Teachers img" />
            </div>
            <div className="decs flex flex-col justify-center items-center lg:gap-4 md:gap-3 sm:gap-3 gap-2 lg:mt-7 md:mt-4 sm:mt-3 mt-3">
              <h1 className='lg:text-2xl md:text-xl sm:text-xl text-xl font-bold'> {tdata.Name}</h1>
              <h2 >Class : <span  className='font-semibold'>{tdata.Class}</span></h2>
              <h3>Division : <span className='font-bold'>{tdata.Division}</span></h3>
              <h3>City : <span className='font-semibold'>{tdata.City}</span></h3>
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
      Name:"Mohammad Roman",
      Class:"I",
      City:"Anchramau",
      Division:"First Division",
      
      profile:"https://img.freepik.com/free-vector/profile-picture-template-design_742173-22027.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725926400&semt=ais_hybrid"
    },
    {
        Name:"Mohammad Roman",
        Class:"I",
        City:"Anchramau",
        Division:"First Division",
        
        profile:"https://img.freepik.com/free-vector/profile-picture-template-design_742173-22027.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725926400&semt=ais_hybrid"
      },
      {
        Name:"Mohammad Roman",
        Class:"I",
        City:"Anchramau",
        Division:"First Division",
        
        profile:"https://img.freepik.com/free-vector/profile-picture-template-design_742173-22027.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725926400&semt=ais_hybrid"
      },
      {
        Name:"Mohammad Roman",
        Class:"I",
        City:"Anchramau",
        Division:"First Division",
        
        profile:"https://img.freepik.com/free-vector/profile-picture-template-design_742173-22027.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725926400&semt=ais_hybrid"
      },
      {
        Name:"Mohammad Roman",
        Class:"I",
        City:"Anchramau",
        Division:"First Division",
        
        profile:"https://img.freepik.com/free-vector/profile-picture-template-design_742173-22027.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725926400&semt=ais_hybrid"
      },
      {
        Name:"Mohammad Roman",
        Class:"I",
        City:"Anchramau",
        Division:"First Division",
        
        profile:"https://img.freepik.com/free-vector/profile-picture-template-design_742173-22027.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725926400&semt=ais_hybrid"
      },
      {
        Name:"Mohammad Roman",
        Class:"I",
        City:"Anchramau",
        Division:"First Division",
        
        profile:"https://img.freepik.com/free-vector/profile-picture-template-design_742173-22027.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725926400&semt=ais_hybrid"
      },
      {
        Name:"Mohammad Roman",
        Class:"I",
        City:"Anchramau",
        Division:"First Division",
        
        profile:"https://img.freepik.com/free-vector/profile-picture-template-design_742173-22027.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725926400&semt=ais_hybrid"
      },

 
  ]

export default OurStudents