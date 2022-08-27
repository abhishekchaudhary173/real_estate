import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const navigate1 = useNavigate();

  function handleClick() {
    navigate("/");
  }
  function handleClick1() {
    navigate1("/favourite");
  }

  return (
    <div>
      <div className="container">
        <div className="navbar">
          <span className="link_container">
            <a className="links" onClick={handleClick}>
              RentUp
            </a>
          </span>
          <span className="link_container">
            <a className="links" onClick={handleClick}>
              Buy
            </a>
          </span>
          <span className="link_container">
            <a className="links" onClick={handleClick}>
              Sell
            </a>
          </span>
          <span className="link_container">
            <a className="links" onClick={handleClick}>
              Manage Property
            </a>
          </span>
          <span className="link_container">
            <a className="links" onClick={handleClick}>
              Resources
            </a>
          </span>
          <span className="link_container">
            <a className="links" onClick={handleClick1}>
              Favourite
            </a>
          </span>
        </div>
        <div className="btn_container">
          <button className="btn1"> Login</button>
          <button className="btn2"> Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
