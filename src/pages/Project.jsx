import React from "react";
import "./Project.css";
import Card from "../component/Card";
import { products } from "../Data";
import Topbar from "../component/Topbar";
import Side from "../component/Side";

const Project = () => {
  return (
    <>
    <Topbar />
    <Side/>
    <div className="project">
      <div className="p-title">My Projects</div>
      <div className="p-desc"> I can develop diverse web applications, ranging from simple static websites to complex web applications.</div>
       <div className="p-list">
        {products.map((item)=>(
          <Card  key={item.id} i={item.img} link={item.link} title={item.title} desc={item.desc}/>
        ))}
      </div>
    </div>
    </>
  );
};

export default Project;
