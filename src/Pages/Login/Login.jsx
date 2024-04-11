import React, { useContext } from "react";
import loginbg from "../../../public/loginbg.jpg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
const Login = () => {

  const {signIn} = useContext(AuthContext);

  const handleLogin = e =>{
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get('email')
    const password = form.get('password')

    signIn(email, password)
    .then(res=>{
      console.log("Loged in user: ",res.user);
      alert("Login Successful!")
    })
    .catch(err=>{
      console.log("ERROR IN LOGIN: ", err.message);
      alert(err.message);
      return;
    })

  }

  return (
    <div>
       
      <div
        className="hero  min-h-screen "
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.9)), url(${loginbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
         
        <div className="hero-content  flex-col w-full  ">
        <h1 className=" text-4xl text-[#a6886d] -mt-36">Login Here</h1>
          <div className="card rounded-none shrink-0 md:w-1/2 bg-base-100">
            
            <form 
            onSubmit={handleLogin}
            className="card-body bg-gradient-to-r from-[#16100B] to-[#130C08]">
                
              <div className="form-control">
                <label className="label">
                  <span className="text-[#a6886d] font-semibold label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered bg-gray-600"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-[#a6886d] font-semibold label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered bg-gray-600 "
                  name="password"
                  required
                />
                <label className="label">
                  <a href="#" className="text-[#a6886d] font-semibold label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
                <label className="label">
                  <div>
                  <span className="mr-2 text-gray-400">Don't have an account?</span>
                  <Link to="/register" className="text-info font-semibold label-text-alt link link-hover">
                    Register
                  </Link>
                  </div>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className=" border text-center py-2 font-semibold rounded-none text-[#a6886d] border-[#a6886d]  w-full">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
