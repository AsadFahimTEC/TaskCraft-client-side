
import Root from "../Layout/Root/Root";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Home/Home";
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import ContactUs from "../ContactUs/ContactUs";
import PrivateRoute from "./PrivateRoute";
import Service from "../Service/Service";
import AllService from "../SingleService/AllService";
import SingleService from "../SingleService/SingleService";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: () => fetch("/services.json"),
        },
        {
            path: "/service/:service_id",
            element: (
              // <PrivateRoute>
                <Service></Service>
              // </PrivateRoute>
            ),
            loader: () => fetch("/services.json"),
          },
          {
            path: "/services",
            
            element: ( 
            // <PrivateRoute>
            <AllService></AllService>
            // </PrivateRoute>
            ),
            loader: () => fetch("/AllService.json"),
          },
          {
            path: "/services/:service_id",
            element: (
              // <PrivateRoute>
            <SingleService></SingleService>
            // </PrivateRoute>
            ),
            loader: () => fetch("/AllService.json"),
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