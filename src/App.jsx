import { useState } from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "primeflex/primeflex.css"; // flex
import Welcome from "./components/Welcome";
import Mainlayout from "./MainLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import About from "./pages/About";
import EditorPage from "./pages/EditorPage";
import LinkPage from "./pages/LinkPage";
import LoungPage from "./pages/LoungPage";
import AdminPage from "./pages/AdminPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Unauthorized from "./pages/Unauthorized";
import RequiredAuth from "./pages/RequiredAuth";

const ROLES = {
  User: 2001,
  Editor: 1984,
  Admin: 5150,
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    errorElement: <ErrorPage />,
    children: [
      // we want to protect these routes
      // {
      //   path: "/",
      //   element: <Home />,
      // },
      {
        element: <RequiredAuth allowedRoles={[ROLES.Admin]} />,
        children: [
          {
            path: "/",
            element: <Home />,
          },

          {
            path: "admin",
            element: <AdminPage />,
          },
        ],
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "editor",
        element: <EditorPage />,
      },

      {
        path: "loung",
        element: <LoungPage />,
      },
      // public routes
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "link",
        element: <LinkPage />,
      },
      {
        path: "unauthorized",
        element: <Unauthorized />,
      },
      // catch all
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
const App = () => <RouterProvider router={router} />;
export default App;
