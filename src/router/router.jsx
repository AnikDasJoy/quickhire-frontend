import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import AuthLayout from "../layouts/AuthLayout";

import Home from "../pages/Home/Home/Home";
import Login from "../pages/Authentication/Login/Login";
import Register from "../pages/Authentication/Register/Register";
import Admin from "../pages/Admin";

import PrivateRoute from "../routes/PrivateRoute";
import JobDetail from "../pages/JobDetail";
import Homes from "../pages/Homes";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home
      }

      
    ]
  },

  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: Login
      },
      {
        path: "register",
        Component: Register
      }
    ]
  },

  {
    path: "/admin",
    element: (
      <PrivateRoute>
        <Admin />
      </PrivateRoute>
    )
  },

  // USER DASHBOARD PAGE
      {
        path: "user",
        element: (
          <PrivateRoute>
            <Homes />
          </PrivateRoute>
        )
      },

      // JOB DETAIL
      {
        path: "jobs/:id",
        Component: JobDetail
      }
]);