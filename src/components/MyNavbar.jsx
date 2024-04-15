import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FaBell } from "react-icons/fa";
import { CgDisplayGrid } from "react-icons/cg";

const MyNavbar = ({postCount}) => {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <Link to="/">
          <img src={logo} alt="" width="150px" />
        </Link>
        <Link className="d-flex gap-2">
          <p className="post">posts {postCount}</p>
          <FaBell />
          <CgDisplayGrid />
        </Link>
        
      </div>
    </nav>
  );
};

export default MyNavbar;
