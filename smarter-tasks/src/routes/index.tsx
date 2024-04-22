import { Navigate, createBrowserRouter } from "react-router-dom";

import AccountLayout from "../layouts/account";
import NotFound from "../pages/Notfound";
import Logout from "../pages/logout";
import Members from "../pages/members";
import Projects from "../pages/projects";
import Signin from "../pages/signin";
import Signup from "../pages/signup";
import ProtectedRoute from "./ProtectedRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/account/projects" replace />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/logout",
    element: <Logout />,
  },
  {
    path: "account",
    element: (
      <ProtectedRoute>
        <AccountLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Navigate to="/account/projects" replace /> },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "members",
        element: <Members />,
      },
    ],
  },
  {
    path: "notfound",
    element: <NotFound />,
  },
]);
export default router;
