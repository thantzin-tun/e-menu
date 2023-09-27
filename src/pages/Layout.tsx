import { Footer } from "components";
import React, { startTransition } from "react";
import { Outlet } from "react-router-dom";

export const Layout: React.FC = () => {
  return (
    <>
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};
