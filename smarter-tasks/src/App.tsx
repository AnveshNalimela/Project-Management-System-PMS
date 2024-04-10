import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";
import Notfound from "./pages/Notfound";
import Signin from "./pages/Signin";
import TaskDetailsPage from "./pages/TaskDetailsPage";
import TaskListPage from "./pages/TaskListPage";
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
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/tasks",
        element: <TaskListPage />,
      },
      {
        path: "/tasks/:id",
        element: <TaskDetailsPage />,
      },
    ],
  },
  // { path: "/notfound", element: <Notfound /> },
  // { path: "*", element: <Navigate to="/notfound" replace /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
