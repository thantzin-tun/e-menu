// import React, { useEffect, useRef, useState } from "react";
// import { Navigate } from "react-router-dom";
// import Storage from "../services/storage";
// import { UserAuth } from "../context/auth/Auth";

// export const ProtectedRoute = ({ children }) => {
//   const { setCurrentUser } = UserAuth();

//   const [loading, setLoading] = useState(true);
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const isLoginUser = Storage.getStorage();
//     if (isLoginUser !== null) {
//       setUser(isLoginUser);
//       setCurrentUser(isLoginUser);
//     }
//     setLoading(false);
//   }, []);

//   if (loading) {
//     return null;
//   }
//   return user !== null ? children : <Navigate to="/login" replace />;
// };
