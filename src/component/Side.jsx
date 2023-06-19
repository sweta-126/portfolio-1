import React from "react";
import "./Side.css";
import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";

const Side = () => {
  return (
    <div className="icon-container">
      <a href="https://www.linkedin.com/in/sweta-padhy-43921a205/" target="_blank"><span className="icon"><BsLinkedin/></span></a>
      <a href="https://github.com/sweta-126" target="_blank"><span className="icon"><AiFillGithub/></span></a>
    </div>
  );
};

export default Side;
