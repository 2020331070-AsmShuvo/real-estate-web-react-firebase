import React, { useContext, useEffect, useState } from "react";
import regbg from "../../../public/regbg.jpg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import "firebase/auth";
import { updateProfile } from "firebase/auth";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Register = () => {
  const { createUser, user } = useContext(AuthContext);
  const [passdata, setPassdata] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleInput = (e) => {
    setPassdata(e.target.value);
  };

  const handleShowPass = () => {
    setShowPass(!showPass);
  };

  useEffect(() => {
    document.title = "Majestic Mansion | Register";
  }, []);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const photo = form.get("photo");
    const password = form.get("password");
    const confirmPassword = form.get("confirmPassword");

    console.log(name, email, password, confirmPassword, photo);
    if (password.length < 6) {
      setErrorMessage("Password should contain at least 6 characters");
      return;
    }
    if (!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)) {
      setErrorMessage("Must have an Uppercase and a Lowercase letter");
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage("Passwords don't match");
      return;
    }

    // create user
    createUser(email, password)
      .then((res) => {
        const user = res.user;
        console.log("get user: ", user);
        // update displayname and photoURL
        updateProfile(user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            console.log("profile updated");
            console.log("Created User: ", user);
            setSuccessMessage("Registration successful!");
            setErrorMessage("");
            setTimeout(() => {
              setSuccessMessage("");
            }, 2000);
          })
          .catch((err) => {
            console.log("error while adding name and photoURL : ", err.message);
          });
      })
      .catch((err) => {
        console.log("ERROR!!! ", err);
        setErrorMessage("Registration Unsuccessful. Your email may already in use");
        return;
      });
  };

  const handleLogin = () => {
    googleLogin();
  };

  return (
    <div>
      <div
        className="hero  min-h-screen "
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.9)), url(${regbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-content h-[1000px] md:h-[700px] flex-col md:w-full  ">
          <h1 className=" text-2xl text-[#695747] -mt-36">Register Here</h1>
          <div className="card border border-gray-600 rounded-none shrink-0 md:w-1/2 bg-base-100">
            <form
              onSubmit={handleRegister}
              className="card-body bg-gradient-to-r from-[#101B2F] to-[#190606]"
            >
              {/* Display error message if there's any */}
              {errorMessage && (
                <div role="alert" className="alert alert-warning">
                  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                  <span>{errorMessage}</span>
                </div>
              )}
              {/* Display success message if registration is successful */}
              {successMessage && (
                <div role="alert" className="alert alert-success">
                  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  <span>{successMessage}</span>
                </div>
              )}
              <div className="flex flex-col lg:flex-row justify-between">
                <div className="form-control  md:w-full">
                  <label className="label">
                    <span className="text-[#a6886d] font-semibold label-text">
                      Name
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="input input-bordered bg-gray-600"
                    name="name"
                    required
                  />
                </div>
                <div className="form-control w-full lg:ml-2">
                  <label className="label">
                    <span className="text-[#a6886d] font-semibold label-text">
                      Email
                    </span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered bg-gray-600"
                    name="email"
                    required
                  />
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-[#a6886d] font-semibold label-text">
                    Photo URL
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URL"
                  className="input input-bordered bg-gray-600"
                  name="photo"
                  required
                />
              </div>
              <div className="flex flex-col md:flex-row">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="text-[#a6886d] font-semibold label-text">
                      Password
                    </span>
                  </label>
                  <div className="flex items-center relative">
                    <input
                      placeholder="password"
                      className="input input-bordered w-full bg-gray-600 "
                      name="password"
                      value={passdata}
                      onChange={handleInput}
                      type={showPass ? "text" : "password"}
                      required
                    />
                    <span className="text-grany-200 absolute right-4 borde text-gray-400">
                      {showPass ? (
                        <FaRegEyeSlash onClick={handleShowPass} />
                      ) : (
                        <FaRegEye onClick={handleShowPass} />
                      )}
                    </span>
                  </div>
                </div>
                <div className="form-control w-full md:ml-2">
                  <label className="label">
                    <span className="text-[#a6886d] font-semibold label-text">
                      Confirm Password
                    </span>
                  </label>
                  <div className="flex items-center">
                    <input
                      placeholder="Confirm password"
                      className="input w-full input-bordered bg-gray-600 "
                      name="confirmPassword"
                      type={showPass ? "text" : "password"}
                      required
                    />
                  </div>
                </div>
              </div>
              <label className="label">
                <div>
                  <span className="mr-2 text-gray-500">
                    Already have an account?
                  </span>
                  <Link
                    to="/login"
                    className="text-info font-semibold label-text-alt link link-hover"
                  >
                    Login
                  </Link>
                </div>
              </label>
              <div className="form-control mt-6">
                <button className=" border text-center py-2 font-semibold rounded-none text-[#a6886d] border-[#a6886d]  w-full">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
