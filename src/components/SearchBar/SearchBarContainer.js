// You do not need to change any code in this file
import React from "react";
import "./SearchBar.css";
import logo from "../../assets/insta.png";

const SearchBar = () => {
  return (
    <form className="search-bar-wrapper">
      <div className="image-wrapper">
        <i className="fab fa-instagram" />
        <img src={ logo } />
      </div>
      <form className="search-form">
        <input
          type="text"
          placeholder="Search"
        />
      </form>
      <div className="social-wrapper">
        <div className="social">
          <i className="far fa-compass" />
        </div>
        <div className="social">
          <i className="far fa-heart" />
        </div>
        <div className="social">
          <i className="far fa-user-circle" />
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
