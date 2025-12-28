import React from 'react';
import "../Styles/certificates.css"
import img from "../assets/certificate.png"
function Certificates() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Certificates</h2>
      <div>
        <img src={img} alt="img loading" style={{ marginTop:"50px"   }}/>
      </div>
    </div>
  );
}

export default Certificates;
