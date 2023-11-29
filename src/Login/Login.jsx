import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Hook/AuthProvider";
import toast from "react-hot-toast";
import axios from "axios";

const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  // console.log('location in the login page', location);

  // google login
  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);

        // navigate after login
        navigate(location?.state ? location.state : "/");
        return toast.success("google login successfully");
      })
      .catch((error) => {
        console.log(error);
        return toast.error("password or email not match");
      });
  };

  const handleLogin = (e) => {
    // access the form data
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    // console.log(name, photo, email, password);

    // sign in a user
    signIn(email, password).then((result) => {
      console.log(result.user);
      e.target.reset();
      const user = { email };

      // get access token
      axios
        .post("https://b8-a12-server-side.vercel.app/jwt", user, {
          withCredentials: true,
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.success) {
            // navigate after login
            navigate(location?.state ? location.state : "/");
            return toast.success("google login successfully");
          }
        })

        //   // navigate after login
        //   navigate(location?.state ? location.state : "/");
        //   return toast.success("user login successfully");
        // })
        .catch((error) => {
          console.log(error);
          return toast.error("password or email not match");
        });
    });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left"></div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <h1 className="text-3xl text-[#403F3F] text-center font-semibold">
                  Login your account
                </h1>
                <hr className="mt-4" />
                <label className="label">
                  <span className="label-text text-[#403F3F] text-sm font-semibold">
                    Email address
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  name="email"
                  className="input input-bordered text-[#9F9F9F] text-xs font-normal "
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#403F3F] text-sm font-semibold">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered text-[#9F9F9F] text-xs font-normal "
                  required
                />
              </div>
              <div className="form-control mt-1">
                <button className="p-2 rounded bg-red-600 text-white">
                  Login
                </button>
              </div>
              <div className="form-control mt-1">
                <button
                  onClick={handleGoogleLogin}
                  className="p-2 rounded bg-green-600 text-white"
                >
                  Login With Google
                </button>
              </div>
              <p className="text-center text-[#000] font-semibold text-xs mt-4">
                Don't Have An Account ?
                <Link className="text-[#F75B5F]" to="/register">
                  {" "}
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
