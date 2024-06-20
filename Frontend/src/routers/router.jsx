import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Shop from "../shop/Shop";
import About from "../components/About";
import Blog from "../components/Blog";
import SinglePhone from "../shop/SinglePhone";
import DashBoardLayout from "../dashboard/DashBoardLayout";
import Dashboard from "../dashboard/Dashboard";
import UploadPhone from "../dashboard/UploadPhone";
import ManagePhone from "../dashboard/ManagePhone";
import EditPhone from "../dashboard/EditPhone";
import SignUp from "../components/SignUp";
import Login from "../components/Login";
import Logout from "../components/Logout";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/phone/:id",
        element: <SinglePhone />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/phone/${params.id}`),
      },
    ],
  },
  {
    path: "/admin/dashboard",
    element: <DashBoardLayout />,
    children: [
      {
        path: "/admin/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/admin/dashboard/upload",
        element: <UploadPhone />,
      },
      {
        path: "/admin/dashboard/manage",
        element: <ManagePhone />,
      },
      {
        path: "/admin/dashboard/edit-phones/:id",
        element: <EditPhone />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/phone/${params.id}`),
      },
    ],
  },
  {
    path: "sign-up",
    element: <SignUp />,
  },
  {
    path: "login",
    element: <Login />,
  },{
    path:"logout",
    element:<Logout/>
  }
]);

export default router;
