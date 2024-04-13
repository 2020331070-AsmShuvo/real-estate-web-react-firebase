import React, { useContext, useEffect } from "react";
import regbg from "../../../public/regbg.jpg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import "firebase/auth";
import { updateProfile } from "firebase/auth";
import auth from "../../Firebase/Firebase.config";

const Register = () => {
  const { createUser, user } = useContext(AuthContext);

  useEffect(()=>{
    document.title = "Majestic Mansion | Register"
  },[]);

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
      alert("Password should contain at least 6 character");
      return;
    }
    if (!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)) {
      alert("Must have an Uppercase a Lowercase letter ");
      return;
    }
    if (password != confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    // create user
    createUser(email, password)
      .then((res) => {
        const user = res.user;
        // update displayname and photoURL
        updateProfile(user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            console.log("profile updated");
            console.log("Created User: ", user);
          })
          .catch((err) => {
            console.log("error while adding name and photoURL : ", err.message);
          });
      })
      .then(() => {
        alert("REGISTRATION SUCCESSFUL !");
      })
      .catch((err) => {
        console.log("ERROR!!! ", err);
        alert(err.message);
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
              <div className="flex flex-col md:flex-row justify-between">
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
                <div className="form-control w-full md:ml-2">
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
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered bg-gray-600 "
                    name="password"
                    required
                  />
                </div>
                <div className="form-control w-full md:ml-2">
                  <label className="label">
                    <span className="text-[#a6886d] font-semibold label-text">
                      Confirm Password
                    </span>
                  </label>
                  <input
                    type="password"
                    placeholder="Confirm password"
                    className="input input-bordered bg-gray-600 "
                    name="confirmPassword"
                    required
                  />
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
