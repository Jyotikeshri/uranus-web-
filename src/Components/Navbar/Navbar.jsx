import React from "react";
import "./Navbar.css";
import { IoSearch } from "react-icons/io5";
import { MdMoreHoriz } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="nav-logo">
        <img
          src="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/53679/new-moon-face-emoji-clipart-md.png"
          alt=""
        />
        $URANUS Web
      </div>

      <div className="nav-user">
        <div className="nav-item">
          <IoSearch size={20} />
        </div>
        <div className="nav-item">
          <MdMoreHoriz size={20} />
        </div>
        <div className="nav-item built">Build by Jyoti</div>
      </div>
    </div>
  );
};

export default Navbar;
