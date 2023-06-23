import React from "react";
import "./About.css";
import ProgressBar from "../component/ProgressBar"
import Topbar from "../component/Topbar";
import Side from "../component/Side";

const About = () => {

  const handleDownload = () => {
    
    const resumeUrl = 'https://drive.google.com/file/d/1wf2MXQODkah12Dg68JBCmuNXGviqcBuL/view?usp=sharing'; 

    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'resume.pdf';
    link.click();
  };

  return (
    <>
    <Topbar />
    <Side/>
    <div className="about">
      <div className="a-title">About Me <div className="loader"></div></div>
      <div className="a-desc">
        I am Sweta Padhy, currently pursuing BTech from VSSUT, Burla, Odisha
        from the department of Computer Science and Engineering. I am passionate
        about creating robust and engaging websites that deliver an exceptional
        user experience. I can develop responsive and cross-platform websites,
        implement intuitive user interfaces, and create seamless interactions
        between the front-end and back-end components. I am committed to staying
        updated with the latest web technologies and best practices to deliver
        high-quality and performant web solutions.
      </div>
      <div className="a-skill">My Skills</div>
      <div className="dev">Web Development Skills</div>
        <div className="a-skills">
        <div className="skill"> HTML <ProgressBar value="70" /></div>
        <div className="skill"> CSS <ProgressBar value="70" /></div>
        <div className="skill"> MaterialUI <ProgressBar value="70" /></div>
        <div className="skill"> Bootstrap <ProgressBar value="70" /></div>
        <div className="skill"> Styled Component <ProgressBar value="70" /></div>
        <div className="skill"> Javascript <ProgressBar value="70" /></div>
        <div className="skill"> ReactJS <ProgressBar value="70" /></div>
        <div className="skill"> NodeJS <ProgressBar value="60" /></div>
        <div className="skill"> ExpressJS <ProgressBar value="60" /></div>
        <div className="skill"> MongoDB <ProgressBar value="60" /></div>
        <div className="skill"> REST API <ProgressBar value="50" /></div>
        <div className="skill"> Firebase <ProgressBar value="70" /></div>
        <div className="skill"> GIT <ProgressBar value="60" /></div>
      </div>
      <div className="dev">Programming Skills</div>
      <div className="a-skills">
        <div className="skill"> C <ProgressBar value="60" /></div>
        <div className="skill"> C++ <ProgressBar value="70" /></div>
        <div className="skill"> DSA <ProgressBar value="70" /></div>
    </div>
    <div className="resume">
      Download My Resume here..
      <button className='r-button' onClick={handleDownload}>Download</button>
    </div>
  </div>
  </>
  );
};

export default About;
