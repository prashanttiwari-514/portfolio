import React from 'react'
import "../Styles/Home.css"
import {useState,useEffect,useRef} from 'react';
import { Link } from 'react-router-dom';
import img from "../assets/pic.png";
function Home() {
    let vantaRef = useRef(null);
    let [vantaEffect,setVantaEffect] = useState(null);

    useEffect(()=>{
      if(!vantaEffect && window.VANTA && window.THREE && vantaRef.current){
        const effect = window.VANTA.BIRDS({
           el:vantaRef.current,
           mouseControls: true,
           touchControls: true,
           gyroControls: false,
           minHeight: 200.00,
           minWidth: 200.00,
           scale: 1.00,
           scaleMobile: 1.00,
           backgroundColor: 0x3232c,
           backgroundAlpha:1,
          color1:0xff0000,
          color2:0xd1ff,
        });
        setVantaEffect(effect);
      }
     return () => {
  if (vantaEffect) vantaEffect.destroy();
};
    },[vantaEffect])
  return (
    <div className='home-vanta' ref={vantaRef}>
      <div className='home-content'>
        <div className='text-section'>
          <h1>Hello I'm <span className='highlight'>Prashant</span></h1>
          <h2>Full Stack Developer | AI/ML Engineer</h2>
          <p>I am Buliding intractive web application using modern frontend Technologies (React js)</p>
          <Link to="/resume" className='resume-button'>View Resume</Link>
        </div>
        <div className="image-section">
          <div className='"profile-image-wrapper"'>
          <img src={img} alt="profile-image"style={{ width: "350px", height: "350px",  }} className="profile-image"/>
          </div>
        </div> 
      </div>
    </div>
  )
}

export default Home;
