import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import googleLogo from "../assets/google-logo.svg";
import backgroundImage from "../assets/images/loginimage.jpg";

const Login = () => {
  const { login, loginWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert("Login successfull!!");
        navigate("/");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  //signup using goolgr
  const handleRegister = () => {
    loginWithGoogle()
      .then((result) => {
        const user = result.user;
        alert("Sign up successfully!");
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        // ..
      });
  };

  return (
    <div>
      <div className="min-h-screen flex">
        <div className="container mx-auto my-auto max-w-3xl h-full flex  bg-white rounded-lg shadow overflow-hidden">
          <div className="relative hidden flex-1 lg:block md:block xl:w-1/2 md:w-1/2 h-full">
            <img
              className=" mt-16 w-full object-cover my-auto"
              src="https://m.media-amazon.com/images/I/51h5pDV1YSL._AC_UF1000,1000_QL80_.jpg"
              alt="my zomato"
            />
          </div>
          <div className="w-full xl:w-1/2 p-8 flex-1">
            <form onSubmit={handleLogin}>
              <h1 className=" text-2xl font-bold">Sign in to your account</h1>
              <div>
                <span className="text-gray-600 text-sm">
                  Don't have an account?
                </span>
                <Link to="/sign-up" className="text-blue-700 underline">
                  Create Account
                </Link>
              </div>
              <div className="mb-4 mt-6">
                <label
                  className="block text-gray-700 text-sm font-semibold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10"
                  id="email"
                  type="text"
                  placeholder="Your email address"
                />
              </div>
              <div className="mb-6 mt-6">
                <label
                  className="block text-gray-700 text-sm font-semibold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="text-sm bg-gray-200 appearance-none rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
                  id="password"
                  type="password"
                  placeholder="Your password"
                />
                <a
                  class="inline-block align-baseline text-sm text-gray-600 hover:text-gray-800"
                  href="#"
                >
                  Forgot Password?
                </a>
              </div>
              <div className="flex w-full mt-8">
                <button
                  className="w-full bg-gray-800 hover:bg-grey-900 text-white text-sm py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline h-10"
                  type="button"
                >
                  Log In
                </button>
              </div>
            </form>
            <div className=" flex w-full items-center flex-col mt-5 gap-3">
              <button onClick={handleRegister} className="block">
                <img
                  src={googleLogo}
                  alt=""
                  className=" w-12 h-12 inline-block"
                />
                Login with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
