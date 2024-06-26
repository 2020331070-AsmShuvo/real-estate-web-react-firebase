import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import EstateDetails from "../Pages/EstateDetails/EstateDetails";
import PrivateRoutes from "./PrivateRoutes";
import UpdateProfile from "../Pages/Login/Profile/UpdateProfile";
import UserProfile from "../Pages/Login/Profile/UserProfile";
import JobOffers from "../Pages/JobsOffers/JobOffers";
import Faq from "../Pages/FAQ/Faq";
import AboutUs from './../Pages/About/AboutUs';
import ContactUs from './../Pages/Contact/ContactUs';
import Services from "../Pages/Services/Services";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/estates.json"),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/jobs",
        element: (
          <PrivateRoutes>
            <JobOffers />
          </PrivateRoutes>
        ),
        loader: () => fetch("jobs.json"),
      },
      {
        path: "/update",
        element: (
          <PrivateRoutes>
            <UpdateProfile />
          </PrivateRoutes>
        ),
      },
      {
        path: "/userprofile",
        element: (
          <PrivateRoutes>
            <UserProfile />
          </PrivateRoutes>
        ),
      },
      {
        path: "/estate/:id",
        element: (
          <PrivateRoutes>
            <EstateDetails />
          </PrivateRoutes>
        ),
        loader: () => fetch("/estates.json"),
      },
      {
        path: "/faq",
        element: <Faq/>
      }
    ],
  },
]);

export default router;
