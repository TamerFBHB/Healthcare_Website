import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './component/Home/Home';
import AboutUS from './component/About/AboutUS';
import 'font-awesome/css/font-awesome.min.css';


const router =createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement : <h1> Sorry .........................</h1>
  },
  {
    path: "/AboutUS",
    element: <AboutUS />,
    errorElement : <h1> Sorry .........................</h1>
  },
  
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>
);


