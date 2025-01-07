import React, { useEffect, useState } from 'react'
import CarouselShow from './CarouselShow'
import NoticeBoard from './NoticeBoard'
import Managers from './Managers'
import OurTeacher from './OurTeacher'
import OurStudents from './OurStudents'
import EnrollStatus from './EnrollStatus'
import AboutSchool from './AboutSchool'
import Footer from './Footer'
import ConnectForm from './ConnectForm'

function Home() {
  const [data , setData] = useState('');

  const test =async () => {
    const response = await fetch('api/v1');
    const data = await response.json();
    console.log(data);
    setData(data.message)
    
  }

  useEffect(()=> {
    test();
  }, [])

  return (
    <div>
      <div>{data}</div>
         <CarouselShow/>
         <NoticeBoard/>
         <AboutSchool/>
         <Managers/>      
         <OurTeacher/>
         <OurStudents/>
         <EnrollStatus/>
         <ConnectForm/>
         <Footer/>
    </div>
  )
}

export default Home