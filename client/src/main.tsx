import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import APOLLOProvider from "./providers/ApolloProvider.tsx";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Login from "./components/Login.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<App />}
      // loader={rootLoader}
      // action={rootAction}
      // errorElement={<ErrorPage />}
    ></Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <APOLLOProvider>
      <RouterProvider router={router} />
    </APOLLOProvider>
  </React.StrictMode>
);
