import { useLocation, useNavigate } from "react-router-dom"
import resume from './assets/suriyakanth resume.pdf'
import './App.css'
import {FaEnvelope, FaGithub,FaGraduationCap,FaLinkedin,FaMapMarkerAlt,FaPaperPlane} from "react-icons/fa";
function Education(){
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
        <div className="educon">
            <div className="eduhed">
                <h1>My <span>Resume</span></h1>
            </div>
            <div className="edup">
                <p>A quick overview of my education,
                    technical skills, projects, and goals.</p>
            </div>
            <div className="edure">
                <button className="edubtn" onClick={() => window.open(resume, "_blank")}>View Resume</button>
            </div>
            <div className="eduwe">
                <div className="eduwr">
                    <div className="eduwr1">
                        <h2>Work Experience</h2>
                        <h3>FrontEnd Intern</h3>
                        <p className="edup1">TechVolt </p>
                        <p className="edup2">Developed features for an internal client database
                            dashboard using HTML5, CSS3, JavaScript, and Bootstrap. 
                            Improved page performance by 15% through front-end optimizations, 
                            and wrote SQL storage scripts under senior mentoring.
                        </p>
                    </div>
                    <div className="edued">
                        <h2>Education</h2>
                        <div className="edued1">
                            <p className="eduedp">2023 - 2027</p>
                            <h3>Bachelor of Engineering - Computer Science and Engineering</h3>
                            <p className="eduedp1">Erode Sengunthar Engineering College ,Perundurai</p>
                            <p className="eduedp2">Currently pursuing B.E. in Computer Science and Engineering 
                                with an interest in full-stack development and mern stack.</p>
                        </div>
                        <div className="edued2">
                            <p className="eduedp">2021 - 2023</p>
                            <h3>HSC - Maths Biology</h3>
                            <p className="eduedp1">Sri Vinayaga matric Higher Secondary School ,Pennagaram </p>
                        </div>
                    </div>
                </div>
                <div className="edutec">
                    <h2>TECK STACK</h2>
                    <h3>Programming</h3>
                    <p>JAVA</p>
                    <p>JAVA SCRIPT</p>
                    <h3>Front End</h3>
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>REACT JS</p>
                    <p>BOOTSTRAP</p>
                    <h3>Back End & DataBase</h3>
                    <p>NODE JS</p>
                    <p>EXPRESS JS</p>
                    <p>MONGO DB</p>
                    <h3>Tools</h3>
                    <p>GitHub</p>
                    <p>Vs Code</p>
                </div>
            </div>
            <div className="eduob">
                <h2>Career Goal</h2>
                <p>To become a skilled Full Stack Developer by continuously
                    improving my programming, problem-solving, and software
                    development skills while building reliable applications.
                </p>
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
export default Education;