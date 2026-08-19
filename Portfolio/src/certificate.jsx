import './App.css'
import { useLocation, useNavigate } from "react-router-dom";
import {FaEnvelope, FaGithub,FaGraduationCap,FaLinkedin,FaMapMarkerAlt,FaPaperPlane,FaEye} from "react-icons/fa";
import Certificate1 from './assets/certificate1.png'
import Certificate2 from './assets/certificate2.png'
import Certificate3 from './assets/certificate3.png'
import Certificate4 from './assets/certificate4.png'
import Certificate5 from './assets/certificate5.png'
import HtmlCertificate from './assets/html certificate.pdf'
import CssCertificate from './assets/css certificate.pdf'
import OopsCertificate from './assets/oops certificate.pdf'
import FsdCertificate from './assets/fsd certificate.pdf'
import HackathonCertificate from './assets/hackathon.pdf'
function Certificate(){
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
        <div className='cercon'>
            <div className="cerhed">
                <h1>My <span>Certificate</span></h1>
            </div>
            <div>
                <p className='cerp'>Professional certifications validate my learning journey.
                     Click "View Certificate" to view full credentials inside the lightbox.</p>
            </div>
            <div className="cerdemo">
                <div className="cercard">
                    <div className="cerimg"><img src={Certificate1} alt="" /></div>
                    <h2>HTML</h2>
                    <h3>Infosys SpringBoard</h3>
                    <div className="cerbtn">
                        <a href={HtmlCertificate} target="_blank" rel="noopener noreferrer" ><button>View Certificate<FaEye /></button></a>
                    </div>
                </div>
                <div className="cercard">
                    <div className="cerimg"><img src={Certificate2} alt="" /></div>
                    <h2>CSS</h2>
                    <h3>Infosys SpringBoard</h3>
                    <div className="cerbtn">
                        <a href={CssCertificate} target="_blank" rel="noopener noreferrer" ><button>View Certificate<FaEye /></button></a>
                    </div>
                </div>
                <div className="cercard">
                    <div className="cerimg"><img src={Certificate3} alt="" /></div>
                    <h2>OOPs in JAVA</h2>
                    <h3>Simplilearn</h3>
                    <div className="cerbtn">
                        <a href={OopsCertificate} target="_blank" rel="noopener noreferrer" ><button>View Certificate<FaEye /></button></a>
                    </div>
                </div>
                
            </div>
            <div className="cerdemo">
                <div className="cercard">
                    <div className="cerimg"><img src={Certificate4} alt="" /></div>
                    <h2>Full Stack Developer</h2>
                    <h3>Simplilearn</h3>
                    <div className="cerbtn">
                        <a href={FsdCertificate} target="_blank" rel="noopener noreferrer" ><button>View Certificate<FaEye /></button></a>
                    </div>
                </div>
                <div className="cercard">
                    <div className="cerimg"><img src={Certificate5} alt="" /></div>
                    <h2>Hackathon</h2>
                    <h3>Sathyabama Institution</h3>
                    <div className="cerbtn">
                        <a href={HackathonCertificate} target="_blank" rel="noopener noreferrer" ><button>View Certificate<FaEye /></button></a>
                    </div>
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
export default Certificate;
