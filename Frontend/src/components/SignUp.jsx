import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import googleLogo from "../assets/google-logo.svg";
import backgroundImage from "../assets/images/loginimage.png";

const SignUp = () => {
  const { createUser, loginWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState("error");

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        alert("Sign up successfully!");
        navigate(from, { replace: true });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        // ..
      });

    //console.log(email, password);
  };

  //signup using goolgr
  const handleRegister = () => {
    loginWithGoogle()
      .then((result) => {
        const user = result.user;
        alert("Sign up successfully!");
        navigate(from, { replace: true });
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
            <form onSubmit={handleSignUp}>
              <h1 className=" text-2xl text-gray-600 font-bold">Create an Account</h1>
              <div>
                <p className=" text-gray-600">
                  If you have an Account. Please
                  <Link to="/login" className="text-blue-700 underline">
                    Login
                  </Link>
                </p>
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
                  name="email"
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
                  name="password"
                  type="password"
                  placeholder="Your password"
                />
              </div>
              <div className="flex w-full mt-8">
                <button
                  className="w-full bg-gray-800 hover:bg-grey-900 text-white text-sm py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline h-10"
                  type="button"
                >
                  Sign up
                </button>
              </div>
            </form>
            <div className=" flex w-full text-black items-center flex-col mt-5 gap-3">
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

export default SignUp;
