import React from 'react'
import CarouselShow from './CarouselShow'
import NoticeBoard from './NoticeBoard'
import Managers from './Managers'
import OurTeacher from './OurTeacher'
import OurStudents from './OurStudents'
import EnrollStatus from './EnrollStatus'

function Home() {
  return (
    <div>
         <CarouselShow/>
         <NoticeBoard/>
         <Managers/>
         <OurTeacher/>
         <OurStudents/>
         <EnrollStatus/>
    </div>
  )
}

export default Home