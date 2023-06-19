import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Topbar from "../component/Topbar";
import Side from "../component/Side";

const Home = () => {
  return (
    <div className="home">
      <div className="h-container">
        <Topbar />
        <Side/>
        <div className="h-content">
          <div className="hello">Hello !</div>
          <div className="name">My name is</div> 
          <h1>Sweta Padhy</h1>
          <div className="h-title">
                        <div className="h-title-wrapper">
                            <div className="h-title-item">I love coding</div>
                            <div className="h-title-item">I develop websites</div>
                            <div className="h-title-item">I'm a freelancer</div>
                        </div>
                    </div>
          <div className="explore">
            <div className="explore-content">Explore my projects here....</div>
            <Link to='/project' style={{textDecoration:"none", color:"inherit"}}>
            <button className="h-btn">Explore</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
