import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter, useLocation } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "font-awesome/css/font-awesome.min.css";
import Home from "./pages/Home/Home";
import AboutUS from "./pages/AboutUS/AboutUS";
import OurTeam from "./pages/OurTeam/OurTeam";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home /> ,
    errorElement: <h1> Sorry .........................</h1>,
  },
  {
    path: "/AboutUS",
    element: <AboutUS />,
    
  },
  {
    path: "/OurTeam",
    element: <OurTeam />,
    
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
