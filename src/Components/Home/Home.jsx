import React from 'react'
import CarouselShow from './CarouselShow'
import NoticeBoard from './NoticeBoard'
import Managers from './Managers'
import OurTeacher from './OurTeacher'
import OurStudents from './OurStudents'

function Home() {
  return (
    <div>
         <CarouselShow/>
         <NoticeBoard/>
         <Managers/>
         <OurTeacher/>
         <OurStudents/>
    </div>
  )
}

export default Home