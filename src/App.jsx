import NavBarTop from "./Components/NavBar/NavBarTop"
import NavBarMain from "./Components/NavBar/NavBarMain"
import Home from "./Components/Home/Home"
import About from "./Components/About/About"
import Academics from "./Components/Academics/Academics"
import Admissions from "./Components/Admissions/Admissions"
import Contact from "./Components/Contact/Contact"
import Facilities from "./Components/Facilities/Facilities"
import Resources from "./Components/Resources/Resources"
import Login from "./Components/LoginPage/Login"
import AcademicCalender from "./Components/Academics/AcademicCalender"
import ArtEducation from "./Components/Academics/ArtEducation"
import BookAndUniform from "./Components/Academics/BookAndUniform"
import BookList from "./Components/Academics/BookList"
import DetailsOfCurricullum from "./Components/Academics/DetailsOfCurricullum"
import DisciplinaryAction from "./Components/Academics/DisciplinaryAction"
import LabRules from "./Components/Academics/LabRules"
import PTM from "./Components/Academics/PTM"
import SchoolTiming from "./Components/Academics/SchoolTiming"
import SubjectDistribution from "./Components/Academics/SubjectDistribution"
import { BrowserRouter,Route ,Routes } from "react-router-dom"

function App() {
  return (
    <>
<BrowserRouter>
<NavBarTop/>
       <NavBarMain/>
       <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Academics" element={<Academics/>}/>
      <Route path="/Admissions" element={<Admissions/>}/>
      <Route path="/Resources" element={<Resources/>}/>
      <Route path="/Facilities" element={<Facilities/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Academics/AcademicCalender" element={<AcademicCalender/>}/>
      <Route path="/Academics/ArtEducation" element={<ArtEducation/>}/>
      <Route path="/Academics/BookAndUniform" element={<BookAndUniform/>}/>
      <Route path="/Academics/BookList" element={<BookList/>}/>
      <Route path="/Academics/DetailsOfCurricullum" element={<DetailsOfCurricullum/>}/>
      <Route path="/Academics/DisciplinaryAction" element={<DisciplinaryAction/>}/>
      <Route path="/Academics/LabRules" element={<LabRules/>}/>
      <Route path="/Academics/PTM" element={<PTM/>}/>
      <Route path="/Academics/SchoolTiming" element={<SchoolTiming/>}/>
      <Route path="/Academics/SubjectDistribution" element={<SubjectDistribution/>}/>
      
    
    </Routes>
</BrowserRouter>

    </>
  )
}

export default App
