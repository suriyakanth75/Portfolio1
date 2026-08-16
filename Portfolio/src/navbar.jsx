import './App.css'
import suriya from './assets/Suriyakanth.png';
import { useLocation, useNavigate } from "react-router-dom";
import resume from './assets/suriyakanth resume.pdf'
import {FaEnvelope, FaGithub,FaGraduationCap,FaLinkedin,FaMapMarkerAlt,FaPaperPlane} from "react-icons/fa";
function Navbar(){
    const navigate=useNavigate();
    const location =useLocation();
    return(
        <>
        <div className='ullist'>
        <h2>Suriyakanth</h2>
        <ul className='ullist1'>
            <li className={location.pathname ==="/" ? "active":"" } onClick={()=>{navigate("/")}}>Home</li>
            <li className={location.pathname ==="/project" ? "active":"" } onClick={()=>{navigate("/project")}}>Project</li>
            <li className={location.pathname ==="/certificate" ? "active":"" } onClick={()=>{navigate("/certificate")}}>Certificate</li>
            <li className={location.pathname === "/education" ? "active":""} onClick={()=>{navigate("/education")}}>Resume</li>
            <li className={location.pathname === "/contact" ? "active":""} onClick={()=>{navigate("/contact")}}>Contact</li>
            <li className={location.pathname === "/about" ? "active":""} onClick={()=>{navigate("/about")}}>About</li>
        </ul>
        </div>
        <div className='navcon'>
            <div className='content'>
            <div className='text'>
            <h1>Suriyakanth</h1>
            <p>
                A passionate Computer Science student and software developer based in Tamil Nadu, India.
                 I specialize in building high-quality desktop applications in Java and modern,
                  user-centric web applications.
            </p>
            <div className='btn'>
                <button onClick={()=>{navigate("/contact")}}>Hire me</button>
                <button onClick={() => {
                    const link = document.createElement("a");
                    link.href = resume;
                    link.download = "Suriyakanth.pdf";
                    link.click();
                }}
                >Download Resume</button>
            </div>
            </div>
            <div className='image'>
                <img src={suriya} alt="" />
            </div>
            </div>
        </div>
        <footer className='footer'>
                <div className="fotd">
                    <h2>Suriyakanth</h2>
                    <p>Computer Science Engineering Student & Aspiring Full Stack Developer</p>
                    <div className="fotsoc">
                        <a href="https://github.com/suriyakanth75" target="_blank" rel="noopener noreferrer" ><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/suriyakanth-jm-1689402a3/" target="_blank"><FaLinkedin /></a>
                    </div>
                </div>
                <div className="fotq">
                    <h2>Quick Links</h2>
                    <p onClick={()=>{navigate("/")}}>Home</p>
                    <p onClick={()=>{navigate("/project")}}>Project</p>
                    <p onClick={()=>{navigate("/contact")}}>Contact</p>
                    <p onClick={()=>{navigate("/about")}}>About</p>
                </div>
                <div className="fotc">
                    <h2>Contact Info</h2>
                    <p><FaEnvelope /> <span>suriyakanthsuriyakanth4@gmail.com</span></p>
                    <p><FaGraduationCap /> <span> B.E. Computer Science and Engineering</span></p>
                    <p><FaMapMarkerAlt /> <span>Dharmapuri, TamilNadu</span></p>
                </div>
        </footer>
        </>
    )
}
export default Navbar;