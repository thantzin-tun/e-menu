import React, { useEffect, useState } from "react";
import "./App.css";
import { GlobalStyle, ThemeProviderContext } from "theme";
import { Route, RouterProvider, Routes } from "react-router-dom";
import { Preloader } from "services";
import { AnimatePresence } from "framer-motion";
import Aos from "aos";
import { RoutingPath } from "routes";

import { Footer } from "components";
import { useThemeStore } from "store";
import { pageRoutes } from "routes/config";

function App() {
  // useEffect(() => {
  //   Aos.init({
  //     easing: "ease-out-back",
  //     once: true,
  //     duration: 500,
  //     delay: 0,
  //   });
  // });
  return (
    <>
      <GlobalStyle />
      <ThemeProviderContext>
        <div className={"theme-light"}>
          <div id="page">
            <RouterProvider router={pageRoutes} />
          </div>
        </div>
      </ThemeProviderContext>
    </>
  );
}

export default App;
