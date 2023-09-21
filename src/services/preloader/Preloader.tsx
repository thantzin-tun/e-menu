import React, { useEffect, useState } from "react";
import "./Preloader.scss";
// import { TypeAnimation } from "react-type-animation";
export function Preloader() {
  const [isPreloader, setIsPreloader] = useState(true);
  // setTimeout(() => {
  //   setIsPreloader(false);
  // }, 1000);
  return (
    <>
      {/* <div className="custom_container">
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "Code2LAB",
            2000, // wait 1s before replacing "Mice" with "Hamsters"
            "I am Frontend Developer",
            2000,
          ]}
          wrapper="span"
          speed={15}
          className="text"
          repeat={Infinity}
        /> */}
      {isPreloader ? (
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "75vh" }}
        >
          <div className="spinner-border color-highlight" role="status"></div>
        </div>
      ) : null}
    </>
  );
}
