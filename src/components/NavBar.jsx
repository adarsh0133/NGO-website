import { RiMenu3Fill, RiCloseLine } from "@remixicon/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuClickHandler = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <div className="fixed w-full h-20 flex justify-between items-center pl-4 pr-4 bg-[#FFBA01]">
      {showMenu && (
        <div className="menu-overlay w-full h-full bg-black opacity-95 fixed top-0 left-0 z-10 text-white p-10">
          <RiCloseLine
            size={40}
            className="absolute top-5 right-5 cursor-pointer"
            onClick={menuClickHandler}
          />
          <div className="menu-content w-full h-full flex flex-col justify-center items-center gap-5 text-3xl">
            <h1>
              <Link to="/" onClick={closeMenu}>Home</Link>
            </h1>
            <h1>
              <Link to="/about" onClick={closeMenu}>About</Link>
            </h1>
            <h1>
              <Link to="/approach" onClick={closeMenu}>Our Approach</Link>
            </h1>
          </div>
        </div>
      )}
      <div className="logo size-16 rounded-full flex justify-center items-center overflow-hidden">
        <img
          className="size-16 object-cover"
          src="/images/nerdyBinders.jpeg"
          alt=""
        />
      </div>
      <div className="menu lg:hidden text-white">
        <RiMenu3Fill onClick={menuClickHandler} size={30} />
      </div>
      <div className="links hidden lg:flex lg:gap-8 lg:text-xl lg:font-bold text-white lg:mr-20">
        <h1>
          <Link to="/" onClick={closeMenu}>Home</Link>
        </h1>
        <h1>
          <Link to="/about" onClick={closeMenu}>About</Link>
        </h1>
        <h1>
          <Link to="/approach" onClick={closeMenu}>Our Approach</Link>
        </h1>
      </div>
    </div>
  );
};

export default NavBar;