import React from "react";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
import "./header.css";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/ide");
  };

  return (
    <div className="header section__padding" id="home">
      <div className="header-content">
        <h1 className="gradient__text">
          Improve your Coding skills with Code Hive!
        </h1>
        <p>
          Providing a platform for users to practice coding problems and
          challenges to improve their skills and prepare for technical
          interviews.
        </p>

        <div className="header-content__input">
          <button type="button" onClick={() => handleClick()}>
            Get Started
          </button>
        </div>

        <div className="header-content__people">
          <img src={people} />
          <p>Get an opportunity to get placed in top companies.</p>
        </div>
      </div>

      <div className="header-image">
        <img src={ai} />
      </div>
    </div>
  );
};

export default Header;
