import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FaBell } from "react-icons/fa";
import { CgDisplayGrid } from "react-icons/cg";

const MyNavbar = ({ postCount }) => {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <div>
          <img src={logo} alt="" width="150px" />
        </div>
        <Link className="d-flex gap-2 img-thumbnail">
          <p className="post">posts: {postCount}</p>
          <FaBell />
          <CgDisplayGrid />
        </Link>
      </div>
    </nav>
  );
};

export default MyNavbar;
