import React from "react";
import { Layout } from "pages";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { Preloader } from "services";
const MenuPage = lazy(() => import("../pages/menu/Menu"));
const HomePage = lazy(() => import("../pages/home/Home"));

export const pageRoutes = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/e-menu/menu",
        element: (
          <React.Suspense fallback={<Preloader />}>
            <MenuPage />
          </React.Suspense>
        ),
      },
      {
        path: "/e-menu",
        element: (
          <React.Suspense fallback={<Preloader />}>
            <HomePage />
          </React.Suspense>
        ),
      },
    ],
  },
]);
