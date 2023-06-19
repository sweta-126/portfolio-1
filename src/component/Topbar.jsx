import React, { useState } from 'react'
import "./Topbar.css"
import { Link } from "react-router-dom";
import { AiOutlineMenu } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';

const Topbar = () => {

  const [click, setClick] = useState(false);
 const handleClick = () => setClick(!click);

  return (
    <div className='navbar'>
      <ol className={click ? "topbar active" : "topbar"}>
          <Link to='/' style={{textDecoration:"none", color:"inherit"}}><li>Home</li></Link>
          <Link to='/about' style={{textDecoration:"none", color:"inherit"}}><li>About Me</li></Link>
          <Link to='/project' style={{textDecoration:"none", color:"inherit"}}><li>Projects</li></Link>
          <Link to='/contact' style={{textDecoration:"none", color:"inherit"}}><li>Contact</li></Link>
     </ol>
     <div className="hamburger" onClick={handleClick} >
      {click ? (
        <IoMdClose size={20} style={{color:"rgb(234, 230, 230)"}}/>
      ):(
      <AiOutlineMenu size={20} style={{color:"rgb(16, 16, 16)"}}/>
      )}
     </div>
    </div>
  )
}

export default Topbar