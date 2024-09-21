import React from 'react'
import CarouselShow from './CarouselShow'
import NoticeBoard from './NoticeBoard'
import Managers from './Managers'
import OurTeacher from './OurTeacher'
import OurStudents from './OurStudents'
import EnrollStatus from './EnrollStatus'
import AboutSchool from './AboutSchool'
import Footer from './Footer'

function Home() {
  return (
    <div>
         <CarouselShow/>
         <NoticeBoard/>
         <AboutSchool/>
         <Managers/>      
         <OurTeacher/>
         <OurStudents/>
         <EnrollStatus/>
         <Footer/>
    </div>
  )
}

export default Home