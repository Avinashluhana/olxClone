import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import PageviewIcon from "@mui/icons-material/Pageview";

export const Header = () => {
  return (
    <div className="main">
      <img
        src="https://www.olx.com.pk/assets/logo_noinline.1cdf230e49c0530ad4b8d43e37ecc4a4.svg"
        alt="logo image"
      />
      <div className="location-input">
        <SearchIcon fontSize="large" />
        <input type="" placeholder="Location" />
      </div>
      <input type="search" className="search-input" placeholder="Search" />
      {/* <button className="search-button"> */}
        <PageviewIcon className="search-icon"
          fontSize="large"
          style={{ fontSize: 70 }}
        />
      {/* </button> */}

      <a className="login-button">Login</a>
      <button>Sell</button>
    </div>
  );
};
