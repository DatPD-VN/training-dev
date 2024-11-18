import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Registration from "./components/Registration/Registration.jsx";
import React from "react";
import Login from "./components/login/Login.jsx";
import InputItem from "./components/InputItem/InputItem.jsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <InputItem />,
        },
        {
          path: "/register",
          element: <Registration />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/todo",
          element: <InputItem />,
        },
      ],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
      v7_normalizeFormMethod: true,
      v7_fetcherPersist: true,
    },
  }
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider
      future={{
        v7_startTransition: true,
      }}
      router={router}
    />
  </React.StrictMode>
);
