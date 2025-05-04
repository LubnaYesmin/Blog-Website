import React from 'react'
import Logo from "../img/greenlogo.jpg"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>

        <div className="links">

          <Link className='link' to="/?cat=art">
            <h6>ART</h6>
          </Link>

          <Link className='link' to="/?cat=science">
            <h6>SCIENCE</h6>
          </Link>

          <Link className='link' to="/?cat=technology">
            <h6>TECHNOLOGY</h6>
          </Link>

          <Link className='link' to="/?cat=skincare">
            <h6>SKINCARE</h6>
          </Link>

          <Link className='link' to="/?cat=food">
            <h6>FOOD</h6>
          </Link>

          <Link className='link' to="/?cat=design">
            <h6>DESIGN</h6>
          </Link>

          <span>LUBNA</span>
          <span>Logout</span>

          <span className="write">
            <Link className="link" to="/write">Write</Link>
          </span>
        </div>
      </div>
     
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/28508906/pexels-photo-28508906/free-photo-of-charming-blue-tit-perched-on-forest-branch.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt=""
      />
    </div>
  );
};

export default Navbar
