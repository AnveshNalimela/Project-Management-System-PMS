import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./Pages/HomePage";

import Notfound from "./Pages/Notfound";
import Signin from "./Pages/Signin";
import TaskDetailsPage from "./Pages/TaskDetailsPage";
import TaskListPage from "./Pages/TaskListPage";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/signin" replace />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "tasks",
        element: <TaskListPage />,
      },
      {
        path: "tasks/:id",
        element: <TaskDetailsPage />,
      },
    ],
  },
  { path: "/notfound", element: <Notfound /> },
  { path: "*", element: <Notfound /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
