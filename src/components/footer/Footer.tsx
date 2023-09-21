import React from "react";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <div id="footer-bar" className="footer-bar-6">
        <NavLink to="/e-menu/contact">
          <i className="fa fa-solid fa-phone" />
          <span>Contact</span>
        </NavLink>
        {/* <NavLink to="/" className="circle-nav active-nav">
          <i className="fa fa-home" />
          <span>Home</span>
        </NavLink> */}
        <NavLink to="/e-menu/menu" data-menu="menu-main">
          <i className="fa fa-bars" />
          <span>Menu</span>
        </NavLink>
      </div>
    </>
  );
};
