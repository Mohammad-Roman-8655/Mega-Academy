import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function OurTeacher() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    
  };
  return (

      <div className='lg:w-[75%] m-auto my-20 '>
      <h1 className="lg:text-[60px] md:text-[60px] sm:text-[40px] text-[40px] text-center font-bold">Our Teachers</h1>
     
     <div className='mt-10 rounded-lg gap-6 bg-gray-300 px-7 py-7'>
     <Slider {...settings}>
     
     {
      data.map((tdata)=>{
        return (
          <div className='bg-white  h-[450px] text-black rounded-xl border-2 shadow-xl hover:shadow-2xl'>
          <div className='h-56 flex justify-center text-center items-center bg-blue-500  rounded-t-xl'>
            <img  className="h-44 w-44 rounded-full"src={tdata.profile} alt="Teachers img" />
          </div>
          <div className="decs flex flex-col justify-center items-center gap-4 mt-7">
            <h1 className='text-2xl font-bold'>{tdata.Name}</h1>
            <h2 >Subject Taught : <span  className='font-semibold'>{tdata.Subject}</span></h2>
            <h3>Experience : <span className='font-semibold'>{tdata.Exp}+ years</span></h3>
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
    Subject:"Hindi",
    Exp:3,
    profile:"https://img.freepik.com/free-vector/profile-picture-template-design_742173-22027.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725926400&semt=ais_hybrid"
  },
  {
    Name:"Mohammad Roman",
    Subject:"Hindi",
    Exp:3,
    profile:"https://img.freepik.com/free-vector/profile-picture-template-design_742173-22027.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725926400&semt=ais_hybrid"
  },
  {
    Name:"Mohammad Roman",
    Subject:"Hindi",
    Exp:3,
    profile:"https://img.freepik.com/free-vector/profile-picture-template-design_742173-22027.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725926400&semt=ais_hybrid"
  },
  {
    Name:"Mohammad Roman",
    Subject:"Hindi",
    Exp:3,
    profile:"https://img.freepik.com/free-vector/profile-picture-template-design_742173-22027.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725926400&semt=ais_hybrid"
  },
  {
    Name:"Mohammad Roman",
    Subject:"Hindi",
    Exp:3,
    profile:"https://img.freepik.com/free-vector/profile-picture-template-design_742173-22027.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725926400&semt=ais_hybrid"
  },
  {
    Name:"Mohammad Roman",
    Subject:"Hindi",
    Exp:3,
    profile:"https://img.freepik.com/free-vector/profile-picture-template-design_742173-22027.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725926400&semt=ais_hybrid"
  },
  {
    Name:"Mohammad Roman",
    Subject:"Hindi",
    Exp:3,
    profile:"https://img.freepik.com/free-vector/profile-picture-template-design_742173-22027.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725926400&semt=ais_hybrid"
  },
  {
    Name:"Mohammad Roman",
    Subject:"Hindi",
    Exp:3,
    profile:"https://img.freepik.com/free-vector/profile-picture-template-design_742173-22027.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725926400&semt=ais_hybrid"
  }
]

export default OurTeacher