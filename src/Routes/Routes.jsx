
import Root from "../Layout/Root/Root";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Home/Home";
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import ContactUs from "../ContactUs/ContactUs";
import PrivateRoute from "./PrivateRoute";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>
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
            path:"/contactus",
            element: <ContactUs></ContactUs>
        }
    ],
    },
  ]);


export default router;