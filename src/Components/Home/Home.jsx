import React from 'react'
import CarouselShow from './CarouselShow'
import NoticeBoard from './NoticeBoard'
import Managers from './Managers'
import OurTeacher from './OurTeacher'

function Home() {
  return (
    <div>
         <CarouselShow/>
         <NoticeBoard/>
         <Managers/>
         <OurTeacher/>
    </div>
  )
}

export default Home