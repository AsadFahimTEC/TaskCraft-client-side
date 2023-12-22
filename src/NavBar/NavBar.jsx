import { useContext } from "react";
import { AuthContext } from "../Hook/AuthProvider";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  // sign out a user
  const handleLogOut = () => {
    logOut().then().catch();
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/community">Community</NavLink>
      </li>
      <li>
        <NavLink to="/blogs">Blogs</NavLink>
      </li>
      <li>
        <NavLink to="/aboutus">About US</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact Us</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-blue-300 text-blue-900">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost text-red-500 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu font-avenir menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-green-400 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <h6 className="normal-case text-[#000] font-montserrat font-bold text-xl">
          TaskCraft
        </h6>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu font-avenir menu-horizontal px-1">{navLinks}</ul>
      </div>

      <div className="navbar-end">
        {user?.displayName ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user.photoURL} alt={user.displayName} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <button className="btn btn-sm  btn-ghost">
                  {user.displayName}
                </button>
              </li>
              <li>
                <button className="btn btn-sm  btn-ghost">{user.email}</button>
              </li>
              
              <li>
                <div className="relative inline-block">
                  <Link to="/dashboard"></Link>
                </div>
                <button
                  onClick={handleLogOut}
                  className="font-avenir mt-2 mr-10 px-2 py-1 rounded bg-purple-800 text-white"
                >
                  Log out
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login">
            <button className="font-avenir mr-10 px-3 py-1 rounded bg-purple-800 text-white">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
