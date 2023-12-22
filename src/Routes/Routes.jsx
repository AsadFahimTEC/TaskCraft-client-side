
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
import Register from "../Registration/Registration";
import Login from "../Login/Login"
import MyProfile from "../Dashboard/MyProfile";
import MyBookings from "../Dashboard/MyBookings";
import MyWishList from "../Dashboard/MyWishList";
import TourGuideProfile from "../Service/TourGuideProfie";
import BookingForm from "../Service/ServiceDetails/BookingForm";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: () => fetch("/packages.json"),
        },
        {
            path: "/service/:id",
            element: (
              <PrivateRoute>
                <Service></Service>
               </PrivateRoute>
            ),
            loader: () => fetch("/packages.json"),
          },
          {
            path: "/services",
            
            element: ( 
            <PrivateRoute>
            <AllService></AllService>
             </PrivateRoute>
            ),
            loader: () => fetch("/AllService.json"),
          },
          {
            path: "/services/:service_id",
            element: (
              <PrivateRoute>
            <SingleService></SingleService>
            </PrivateRoute>
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
            path:"/tourguideprofile",
            
            element: (
                <PrivateRoute>
            <TourGuideProfile></TourGuideProfile>
            </PrivateRoute>
        ),
        },
        {
            path:"/booking-form",
            
            element: (
                <PrivateRoute>
            <BookingForm></BookingForm>
            </PrivateRoute>
        ),
        },
        {
            path:"/my-bookings",
            
            element: (
                <PrivateRoute>
              
            <MyBookings></MyBookings>
          
            </PrivateRoute>
        ),
        },
        {
            path:"/contactus",
            element: <ContactUs></ContactUs>
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/dashboard",
          element: (
            <PrivateRoute>
              <Dashboard></Dashboard>
            </PrivateRoute>
          )
        },
        {
          path: "/my-profile",
          element: (
            <PrivateRoute>
              <MyProfile></MyProfile>
            </PrivateRoute>
          ) 
        },
        {
          path: "/my-bookings",
          element: (
            <PrivateRoute>
              <MyBookings></MyBookings>
            </PrivateRoute>
          ) 
        },
        {
          path: "/my-wishlist",
          element: (
            <PrivateRoute>
              <MyWishList></MyWishList>
            </PrivateRoute>
          ) 
        },
        {
          path: "/my-wishlist/:id",
          element: (
            <PrivateRoute>
              <MyWishList></MyWishList>
            </PrivateRoute>
          ),
        },
    ],
    },
  ]);


export default router;