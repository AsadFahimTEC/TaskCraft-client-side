import Root from "../Layout/Root/Root";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Home/Home";
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import Register from "../Registration/Registration";
import Login from "../Login/Login"


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: () => fetch("/users.json"),
        },
       
        {
            path:"/dashboard",
            element: (
                <PrivateRoute>
            <Dashboard></Dashboard>
            </PrivateRoute>
        ),
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
    ],
    },
  ]);


export default router;