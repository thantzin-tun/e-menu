import { hambuger, hotel } from "assets";
import { relative } from "path";
import React, { useEffect, useRef, useState } from "react";
import { Parallax } from "react-parallax";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useThemeStore } from "store";
import { Card, ImgBackground, InnerCard, Typo } from "theme";
import "./header.scss";
import { useScroll, useTransform } from "framer-motion";

export const Header: React.FC = () => {
  // const primaryHeaderRef = useRef<any>();
  // const secondaryHeaderRef = useRef<any>();

  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0", "100%"]);
  const upperCard = useTransform(scrollYProgress, [0, 1], ["0", "100%"]);

  const [isShowSideBar, setIsShowSideBar] = useState<boolean>(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     var total_scroll_height = document.documentElement.scrollTop;
  //     var passed_header = total_scroll_height >= 80;
  //     if (passed_header) {
  //       secondaryHeaderRef.current.classList.add("header-active");
  //       primaryHeaderRef.current.setAttribute("style", "opacity: 0;");
  //     } else {
  //       secondaryHeaderRef.current.classList.remove("header-active");
  //       primaryHeaderRef.current.setAttribute("style", "opacity: 1;");
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <>
      {/* Old Header Style */}
      {/* <div
        ref={primaryHeaderRef}
        className="page-title page-title-fixed"
        style={{ borderBottom: "1px solid rgba(0, 0, 0, 0.05)", zIndex: 30 }}
      >
        <h1 className="font-30 font-700">Restaurant</h1>
        <a
          className="page-title-icon shadow-xl bg-theme color-theme"
          data-menu="menu-main"
          onClick={() => setIsShowSideBar(!isShowSideBar)}
        >
          <i className="fa fa-bars" />
        </a>
      </div>
      <div className="page-title-clear"></div>
      <div
        className={`menu-hider ${isShowSideBar ? "menu-active" : ""}`}
        onClick={() => setIsShowSideBar(false)}
      ></div>

      <div
        id="menu-main"
        className={`menu menu-box-left rounded-0 ${
          isShowSideBar ? "menu-active" : ""
        }`}
        data-menu-width="280"
        data-menu-active="nav-welcome"
        data-menu-load="menu-main.html"
      >
        <div>
          <div className="mt-4" />
          <h1 className="menu-divider fs-4">Restaurant</h1>
          <div className="list-group list-custom-small list-menu">
            <NavLink
              id="nav-welcome"
              to="/contact"
              className="mb-2"
              onClick={() => setIsShowSideBar(false)}
            >
              <i className="fa fa-solid fa-phone gradient-red color-white" />
              <span className="fs-6 fw-bold">Contact</span>
              <i className="fa fa-angle-right" />
            </NavLink>

            <NavLink
              id="nav-components"
              to="/menu"
              className="mb-2"
              onClick={() => setIsShowSideBar(false)}
            >
              <i className="fa fa-bars gradient-blue color-white" />
              <span className="fs-6 fw-bold">Menu</span>
              <i className="fa fa-angle-right" />
            </NavLink>
          </div>
          <h6 className="menu-divider mt-4">Settings</h6>
          <div className="list-group list-custom-small list-menu">
            <a href="" data-toggle-theme data-trigger-switch="switch-dark-mode">
              <i className="fa fa-moon gradient-dark color-white" />
              <span>Dark Mode</span>
              <div className="custom-control small-switch ios-switch">
                <input
                  data-toggle-theme
                  type="checkbox"
                  className="ios-input"
                  id="toggle-dark-menu"
                />
                <label
                  className="custom-control-label"
                  htmlFor="toggle-dark-menu"
                />
              </div>
            </a>
          </div>
        </div>
      </div> */}

      {/* 
      Shop Address Card */}
      <Parallax
        bgImage={hotel}
        bgImageAlt="shop_address"
        strength={200}
        className="parallax_image"
      ></Parallax>
      {/* <ImgBackground src={hotel} /> */}
      <Card className="ms-0 me-0 rounded-0">
        <InnerCard>
          <div className="content">
            <h1>Oishii Sushi - Sayarsab</h1>
            <div className="list-group list-custom-small">
              <a href="">
                <i className="fa font-14 fa-location bg-danger rounded-xl shadow-xl color-white" />
                <span>Shwegone Daing, Excel Tower</span>
              </a>
              <a href="">
                <i className="fa font-14 fa-phone bg-primary rounded-xl shadow-xl color-white" />
                <span>09 951591844, 09 983455678</span>
              </a>
              <a href="">
                <i className="fa font-14 fa-utensils bg-success rounded-xl shadow-xl color-white" />
                <span>Hotel and Restaurant</span>
              </a>
            </div>
          </div>
        </InnerCard>
      </Card>
    </>
  );
};
