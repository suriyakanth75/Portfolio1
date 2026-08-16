import { useLocation, useNavigate } from "react-router-dom"
import './App.css';
import {FaEnvelope, FaGithub,FaGraduationCap,FaLinkedin,FaMapMarkerAlt,FaPaperPlane, FaPhone} from "react-icons/fa";
function Contact(){
    const navigate=useNavigate();
    const location=useLocation();
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message submitted!");
    };
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
        <div className="concon">
                <div className="conhed">
                    <div className="conh">
                        <h1>Let's Work <span>Together</span></h1>
                    </div>
                    <div className="conp">
                        <p>I'm always open to discussing new opportunities, interesting projects, 
                            internships, and collaborations. If you'd like to connect, 
                            feel free to reach out through the contact details below.</p>
                    </div>
                </div>
                <div className="conl">
                    <div className="conli">
                        <div className="conh1">
                            <h2>Contact <span>Information</span></h2>
                        </div>
                        <div className="concard">
                            <div className="conicon">
                                <FaEnvelope />
                            </div>
                            <div>
                                <h3>Email</h3>
                                <p>suriyakanthsuriyakanth4@gmail.com</p>
                            </div>
                        </div>
                        <div className="concard">
                            <div className="conicon">
                                <FaPhone />
                            </div>
                            <div>
                                <h3>Phone</h3>
                                <p>9003649999</p>
                            </div>
                        </div>
                        <div className="concard">
                            <div className="conicon">
                                <FaMapMarkerAlt />
                            </div>
                            <div>
                                <h3>Location</h3>
                                <p>Dharmapuri, TamilNadu</p>
                            </div>
                        </div>
                        <div className="consoc">
                            <a href="https://github.com/suriyakanth75" target="_blank" rel="noopener noreferrer" ><FaGithub /></a>
                            <a href="https://www.linkedin.com/in/suriyakanth-jm-1689402a3/" target="_blank"><FaLinkedin /></a>
                        </div>
                    </div>
                    <div className="conform">
                        <h2>Send Me a Message</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="conin">
                                <label>Your Name</label>
                                <input type="text"placeholder="Enter your name" required/>
                            </div>
                            <div className="conin">
                                <label>Email Address</label>
                                <input type="email" placeholder="Enter your email" required/>
                            </div>
                            <div className="conin">
                                <label>Subject</label>
                                <input type="text" placeholder="Enter subject" required />
                            </div>
                            <div className="conin">
                                <label>Message</label>
                                <textarea rows="6" placeholder="Write your message..." required ></textarea>
                            </div>
                            <button type="submit" className="send-btn" > Send Message <FaPaperPlane /> </button>
                        </form>
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
export default Contact;