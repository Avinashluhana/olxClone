import React from "react";
import "./Header.css";

export const Header = () => {
  return (
    <div className="main">
      <img
        src="https://www.olx.com.pk/assets/logo_noinline.1cdf230e49c0530ad4b8d43e37ecc4a4.svg"
        alt="logo image"
      />
      <input type="" className="location-input" placeholder="Location" />
      <input type="search" className="search-input" placeholder="Search"/>
      <a className="login-button">Login</a>
      <button>Sell</button>
    </div>
  );
};
