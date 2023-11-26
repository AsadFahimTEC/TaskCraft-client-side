import { useContext } from "react";
import { AuthContext } from "../Hook/AuthProvider";

const MyProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="container mx-auto mt-6 p-4">
      <div className="max-w-md mx-auto bg-red-200 rounded-md overflow-hidden shadow-md">
        <div className="text-center p-4">
            <h2 className="font-bold text-xl">My Profile</h2>
          <img
            className="mx-auto w-32 h-32 rounded-full"
            src={user.photoURL}
            alt=""
          />
          <h2 className="mt-2 text-xl font-semibold">{user.displayName}</h2>
          <p className="text-gray-500">{user.email}</p>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
