import React from 'react'
import img from "../assets/certificate.png"
function Badges() {
  return (
    <div>
      <h1>My Certificates</h1>
            <div className='images'>
            <img src={img} alt="Python Certificate" style={{width: '100%', maxWidth: '600px', borderRadius: '10px'}}/>
            </div>
    </div>
  )
}

export default Badges
