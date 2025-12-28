import React, { useState } from 'react';
import '../Styles/Contact.css';

function Contact() {
  let [formData,setFormData] = useState({
    name:'',
    email:'',
    message:'',
  });
  function handleSubmit(e){
     e.preventDefault();
     alert("Thank You for your respone");
     setFormData({name:'',email:'',message:''})
  }
  function changeHandler(e){
    setFormData({...formData,[e.target.name] : e.target.value})
  }

  return (
    <div className='warp'>
      <div className='contact-wrapper'>
        <h2>Contact Us</h2>
    <div className="contact-section">
    <div className="contact-map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.8557985169896!2d78.3402620053596!3d17.52305494852455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8d833e3047bd%3A0x389097bdfe5f2e29!2sSrivani%20Nagar%2C%20Ganesh%20Nagar%2C%20Ameenpur%2C%20Miyapur%2C%20Hyderabad%2C%20Telangana%20502032!5e0!3m2!1sen!2sin!4v1753934989522!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    <div className="contact-form">
      <form onSubmit={handleSubmit}> 
        <label>Name: </label>
      <input
      type="text"
      name='name'
      placeholder='Enter your name'
      value={formData.name}
      onChange={changeHandler}
      ></input>
      <label>Email:</label>
      <input type='email' name='email' onChange={changeHandler} value={formData.email} placeholder='Enter your mail'></input>
      <label>Message</label>
     <textarea name='message' value={formData.message} onChange={changeHandler} placeholder='Enetr your message'></textarea>
     <button type="submit">Submit</button>
      </form>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Contact;
