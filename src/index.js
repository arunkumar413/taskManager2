import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import App from "./App";
import { AppRouter } from "./AppRouter";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
        <RouterProvider router={AppRouter} />

    {/* <App /> */}
  </StrictMode>
);
