import { NavLink } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="container mx-auto mt-6 p-4">
      <div className="text-center font-bold text-xl mb-4">
        <h2>Your Dashboard</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* My Profile Card */}
        <div className="bg-blue-200 p-4 rounded-md shadow-md">
          <h3 className="text-lg font-semibold mb-2">My Profile</h3>
          <NavLink to="/my-profile" className="text-red-500 hover:underline">
            View Profile
          </NavLink>
        </div>

        {/* My Bookings Card */}
        <div className="bg-blue-100 p-4 rounded-md shadow-md">
          <h3 className="text-lg font-semibold mb-2">My Bookings</h3>
          <NavLink to="/my-bookings" className="text-blue-500 hover:underline">
            View Bookings
          </NavLink>
        </div>

        {/* My Wishlist Card */}
        <div className="bg-green-300 p-4 rounded-md shadow-md">
          <h3 className="text-lg font-semibold mb-2">My Wishlist</h3>
          <NavLink to="/my-wishlist" className="text-red-700 hover:underline">
            View Wishlist
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
