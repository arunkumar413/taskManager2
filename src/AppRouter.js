import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from "./App";
import { ContactPage } from "./pages/ContactPage";
import { Layout } from "./Layout";
import { AboutPage } from "./pages/AboutPage";



export const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [{
            path: '/',
            element: <App />
        },
        {
            path: "/contact",
            element: <ContactPage />,
        },
        {
            path: "/about",
            element: <AboutPage />,
        },
        ]
    },
]);