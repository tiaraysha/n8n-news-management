import React from "react";
import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import NewsPage from "../pages/NewsPage";
import ProfilePage from "../pages/ProfilePage";
import Register from "../pages/Register";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />
    },
    {
        path: "/news",
        element: <NewsPage />
    },
    {
        path: "/profile",
        element: <ProfilePage />
    },
    {
        path: "/register",
        element: <Register />
    }
])