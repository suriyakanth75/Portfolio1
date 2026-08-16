import React from 'react'
import './App.css';
import { useLocation, useNavigate } from 'react-router-dom';
import ecom from './assets/e-commerce.jpg'
import {FaEnvelope, FaGithub,FaGraduationCap,FaLinkedin,FaMapMarkerAlt,FaPaperPlane,FaArrowRight} from "react-icons/fa";
function Project() {
  const navigate=useNavigate();
  const location=useLocation();
  return (
    <>
        <div className='ullist'>
        <h2>Suriyakanth</h2>
        <ul className='ullist1'>
            <li className={location.pathname === "/" ? "active" : ""} onClick={() => {navigate("/")}}>Home</li>
            <li className={location.pathname ==="/project" ? "active":"" } onClick={()=>{navigate("/project")}}>Project</li>
            <li className={location.pathname ==="/certificate" ? "active":"" } onClick={()=>{navigate("/certificate")}}>Certificate</li>
            <li className={location.pathname === "/education" ? "active":""} onClick={()=>{navigate("/education")}}>Resume</li>
            <li className={location.pathname === "/contact" ? "active":""} onClick={()=>{navigate("/contact")}}>Contact</li>
            <li className={location.pathname === "/about" ? "active":""} onClick={()=>{navigate("/about")}}>About</li>
        </ul>
        </div>
        <div className='navpro'>
          <div  className='proh1'>
            <h1>My  <span>Project</span></h1>
          </div>
          <div>
            <p className='prop'>Explore a collection of projects that demonstrate my experience
               in Java development, database management, responsive web design,
                and modern React applications.</p>
          </div>
          <div className='navdemo1'>
            <div className='navdemo'>
                <div className="navimg"><img src={ecom} alt="" /></div>
                <p>A desktop-based e-commerce management application developed using
                  Java, JDBC, and MySQL for managing products, customers, shopping carts, and orders.</p>
                <div className='probtn'>
                  <div><button>GitHub</button></div>
                  <div><button>Live Demo <FaArrowRight/></button></div>
                </div>
            </div>
            <div className='navdemo' >
                <div className="navimg"><img src={ecom} alt="" /></div>
                <p>A desktop-based e-commerce management application developed using
                  Java, JDBC, and MySQL for managing products, customers, shopping carts, and orders.</p>
                <div className='probtn'>
                  <div><button>GitHub</button></div>
                  <div><button>Live Demo<FaArrowRight/></button></div>
                </div>
            </div>
            <div className='navdemo' >
                <div className="navimg"><img src={ecom} alt="" /></div>
                <p>A desktop-based e-commerce management application developed using
                  Java, JDBC, and MySQL for managing products, customers, shopping carts, and orders.</p>
                <div className='probtn'>
                  <div><button>GitHub</button></div>
                  <div><button>Live Demo<FaArrowRight/></button></div>
                </div>
            </div>
            
          </div>
          <div className='navdemo1'>
            <div className='navdemo'>
                <div className="navimg"><img src={ecom} alt="" /></div>
                <p>A desktop-based e-commerce management application developed using
                  Java, JDBC, and MySQL for managing products, customers, shopping carts, and orders.</p>
                <div className='probtn'>
                  <div><button>GitHub</button></div>
                  <div><button>Live Demo <FaArrowRight/></button></div>
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

export default Project;