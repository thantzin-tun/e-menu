import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// import "animate.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Preloader } from "services";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      {/* <React.Suspense fallback={<div></div>}> */}
      <App />
      {/* </React.Suspense> */}
    </React.StrictMode>
  </QueryClientProvider>
);
