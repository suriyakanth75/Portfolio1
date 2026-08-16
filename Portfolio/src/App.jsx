import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './navbar'
import Project from './project';
import Certificate from './certificate';
import Education from './education';
import Contact from './contact';
import About from './about';
function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>} />
        <Route path="/project" element={<Project/>} />
        <Route path="/certificate" element={<Certificate/>} />
        <Route path="/education" element={<Education/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
