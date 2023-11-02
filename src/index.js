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
import { RecoilRoot } from "recoil";
import { Provider } from "react-redux";
import appStore from "./appState/appStore";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
        <RecoilRoot>
        <Provider store={appStore}>
        <RouterProvider router={AppRouter} />
        </Provider>
        </RecoilRoot>

    {/* <App /> */}
  </StrictMode>
);
