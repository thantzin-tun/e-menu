import React, { lazy } from "react";
import { pageRoutes } from "./config";
import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import { Preloader } from "services";

// const NotFound = lazy(() => import("../pages/404"));
// const Menu = lazy(() => import("../pages/menu/Menu"));
// const Contact = lazy(() => import("../pages/contact/Contact"));

export const RoutingPath = () => {
  return (
    <h1>route</h1>
    // <Routes>
    //   {pageRoutes.map((route, index) =>
    //     route.nested ? (
    //       route.protected ? (
    //         <Route
    //           path={route.path}
    //           key={index}
    //           element={<ProtectedRoute>{route.element}</ProtectedRoute>}
    //         >
    //           <Route index element={route.nested[0].element}></Route>
    //           {route.nested.map(({ path, element }, index) => (
    //             <Route path={path} element={element} key={index} />
    //           ))}
    //         </Route>
    //       ) : (
    //         <Route path={route.path} element={route.element} key={index}>
    //           {route.nested.map(({ path, element }, index) => (
    //             <Route path={path} element={element} key={index} />
    //           ))}
    //         </Route>
    //       )
    //     ) : route.protected ? (
    //       <Route
    //         path={route.path}
    //         key={index}
    //         element={<ProtectedRoute>{route.element}</ProtectedRoute>}
    //       />
    //     ) : (
    //       <Route
    //         path={route.path}
    //         element={
    //           <React.Suspense fallback={<Preloader />}>
    //             {route.element}
    //           </React.Suspense>
    //         }
    //         key={index}
    //       />
    //     )
    //   )}
    //   <Route path="*" element={<NotFound />} />
    // </Routes>
  );
};
