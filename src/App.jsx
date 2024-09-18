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
    
    </Routes>
</BrowserRouter>

    </>
  )
}

export default App
