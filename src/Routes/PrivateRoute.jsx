// import {useContext} from "react";
import { useContext } from "react";
import {Navigate, useLocation} from "react-router-dom";
import { AuthContext } from "../Hook/AuthProvider";
// import {AuthContext} from "../Hook/AuthProvider";

const PrivateRoute = ({children}) => {
  const {user, loading} = useContext(AuthContext);
  const location = useLocation();
  console.log(location.pathname);

  // logged in user page reload problem solve
  if (loading) {
    return <span className="loading loading-spinner text-secondary"></span>;
  }

  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;
