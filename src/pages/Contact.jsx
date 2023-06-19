import React, { useRef, useState } from "react";
import "./Contact.css";
import { MdEmail } from "react-icons/md";
import { BsLinkedin, BsTelephoneFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { AiFillGithub } from "react-icons/ai";
import Topbar from "../component/Topbar";
import emailjs from '@emailjs/browser';
import Side from "../component/Side";

const Contact = () => {

  const formref = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_fjh0ekn', 'template_8rk0vso', formref.current, 'a4MTS0xEYqIA5DJge')
    .then((result) => {
        console.log(result.text);
        setDone(true);
        e.target.reset();
    }, (error) => {
        console.log(error.text);
    });
  }

  return (
    <>
      <Topbar/>
      <Side/>
      <div className="contact">
      <h1 className="contact-title">Contact me for your project.</h1>
      <form ref={formref} onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <input className="input-box" type="text" name='user_name' placeholder="Name" />
          <span className="underline"></span>
        </div>
        <div className="input-wrapper">
          <input className="input-box" type="text" name='user_email' placeholder="Email" />
          <span className="underline"></span>
        </div>
        <div className="input-wrapper">
          <input className="input-box" type="text" name='user_subject' placeholder="Subject" />
          <span className="underline"></span>
        </div>
        <div className="textarea">
        <textarea cols="30" rows="10" name='message' placeholder="Message" />
        </div>
        <div className="btn-wrapper">
      <button className="c-btn">Submit</button>
      </div>
      {done && <div className="btn-wrapper">Thank you...I will contact you soon.</div>}
        </form>
      <div className="c-info">
        <div className="c-info-item">
          <MdEmail className="c-icon" />
          swetapadhy123@gmail.com
        </div>
        <div className="c-info-item">
          <BsTelephoneFill className="c-icon" />
          +91-9692146264
        </div>
        <div className="c-info-item">
          <BsLinkedin className="c-icon" />
          https://www.linkedin.com/in/sweta-padhy-43921a205/
        </div>
        <div className="c-info-item">
          <AiFillGithub className="c-icon" />
          https://github.com/sweta-126
        </div>
        <div className="c-info-item">
          <IoLocationSharp className="c-icon" />
          Berhampur, Odisha, India
        </div>
      </div>
      </div>
    </>
  );
};

export default Contact;
