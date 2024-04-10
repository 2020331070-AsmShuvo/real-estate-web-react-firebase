import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <div>ei page ti pawa jacche na vrata</div>,
      children: [
        {
            path: "/",
            element: <Home/>,
            loader: ()=> fetch('/estates.json')
        },
        {
            path: "/login",
            element: <Login/>
        },
        {
            path: "/register",
            element: <Register/>
        }
      ]
    },
  ]);


export default router;
