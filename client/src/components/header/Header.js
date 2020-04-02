import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Header.scss";

const Header = () => {
  return (
    <header>
        <figure>
            <Link to="/">
                <img src={logo} alt="logo" />
            </Link>
        </figure>
    </header>
  );
};

export default Header;
