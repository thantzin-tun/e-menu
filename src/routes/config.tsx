import React from "react";
import { Layout } from "pages";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { Preloader } from "services";
import NotFound from "pages/404";
import HomePage from "pages/home/Home";
import Cart from "pages/cart/Cart";
import MenuPage from "pages/menu/Menu";
// const MenuPage = lazy(() => import("../pages/menu/Menu"));
// const HomePage = lazy(() => import("../pages/home/Home"));
// const CardPage = lazy(() => import("../pages/cart/Cart"));

export const pageRoutes = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/e-menu",
        element: (
          // <React.Suspense fallback={<Preloader />}>
          <HomePage />
        ),
        // </React.Suspense>
      },
      {
        path: "/e-menu/cart",
        element: (
          // <React.Suspense fallback={<Preloader />}>
          <Cart />
        ),
        // </React.Suspense>
      },
      {
        path: "/e-menu/menu",
        element: (
          // <React.Suspense fallback={<Preloader />}>
          <MenuPage />
        ),
        // </React.Suspense>
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
