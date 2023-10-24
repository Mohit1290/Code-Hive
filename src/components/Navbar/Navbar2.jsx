import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

import "./navbar.css";

const Navbar2 = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#wgpt3">What is CodeHive?</a>
          </p>
          <p>
            <a href="#possibility">Explore</a>
          </p>
          <p>
            <a href="#features">Features</a>
          </p>
        </div>
      </div>
      <div className="navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="navbar-menu_container scale-up-center">
            <div className="navbar-menu_container-links">
              <p>
                <a href="#home">Home</a>
              </p>
              <p>
                <a href="#wgpt3">What is Code Hive?</a>
              </p>
              <p>
                <a href="#possibility">Explore</a>
              </p>
              <p>
                <a href="#features">Case Studies</a>
              </p>
              <p>
                <a href="#blog">Library</a>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar2;
