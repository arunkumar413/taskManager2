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
import { TaskPage } from "./pages/TaskPage";
import { CreateNewTaskPage } from "./pages/CreateNewTaskPage";



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
        {
            path: "/task/:task_id",
            element: <TaskPage />,
        },
        {
            path:'/add-new-task',
            element:<CreateNewTaskPage/>
        }
        ]
    },
]);