import { useLocation, useNavigate } from "react-router-dom"
import suriya from './assets/Suriyakanth.png'
import './App.css'
import {FaEnvelope, FaGithub,FaGraduationCap,FaLinkedin,FaMapMarkerAlt,FaPaperPlane} from "react-icons/fa";
function About(){
    const navigate=useNavigate();
    const location=useLocation();
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
        <div className="abcon">
            <div className="abhd">
                <h1>About  <span> Me</span></h1>
            </div>
            <div className="abtp">
                <div className="abim">
                    <img src={suriya} alt="" />
                </div>
                <div className="abtpr">
                    <h2>Hello, I'm Suriyakanth</h2>
                    <p className="abtp1">I am a Computer Science Engineering student and an aspiring
                        Full Stack Developer with a strong interest in software and
                        web development.
                    </p>
                    <p className="abtp1">I enjoy building practical and user-friendly applications
                        using technologies such as Java, React, JavaScript, HTML,
                        CSS, MongoDB, and Node.</p>
                    <div className="abtd">
                        <div className="abtdt1">
                            <p className="adp1">FULL NAME</p>
                            <p className="adp2">Suriyakanth JM</p>
                        </div>
                        <div className="abtdt2">
                            <p className="adp3">DEGREE</p>
                            <p className="adp4">B.E. Computer Science and Engineering</p>
                        </div>
                    </div>
                    <div className="abtd">
                        <div className="abtdt1">
                            <p className="adp1">EMAIL</p>
                            <p className="adp2">suriyakanthsuriyakanth4@gmail.com</p>
                        </div>
                        <div className="abtdt3">
                            <p className="adp3">LOCATION</p>
                            <p className="adp4">Dharmapuri, TamilNadu</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="abb">
                <div className="abbh">
                    <h2>My Development Gourney</h2>
                    <p>My programming journey started with learning programming
                        fundamentals and gradually developed into an interest in
                        software and web development.</p>
                    <p>Through academic and personal projects, I have gained
                        practical experience in Java development, database
                        integration, responsive web design, and React applications.</p>
                    <p>I continuously practice programming, improve my problem-solving
                        skills, and explore new technologies to become a better developer.</p>
                </div>
            </div>
            <div className="abtec">
                <div className="abtecj">
                    <h2>Java</h2>
                    <p>Backend & Oops</p>
                </div>
                <div className="abtecj">
                    <h2>React</h2>
                    <p>FrontEnd UI</p>
                </div>
                <div className="abtecj">
                    <h2>Java Script</h2>
                    <p>Web Development</p>
                </div>
            </div>
            <div className="abtec">
                <div className="abtecj">
                    <h2>HTML & CSS</h2>
                    <p>Responsive Design</p>
                </div>
                <div className="abtecj">
                    <h2>MongoDB</h2>
                    <p>DataBase</p>
                </div>
                <div className="abtecj">
                    <h2>Node & Express</h2>
                    <p>BackEnd</p>
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
export default About;
