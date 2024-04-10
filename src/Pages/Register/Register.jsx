import React from 'react';
import regbg from "../../../public/regbg.jpg";
import { Link } from 'react-router-dom';

const Register = () => {
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
         
        <div className="hero-content  flex-col w-full  ">
        <h1 className=" text-4xl text-[#695747] -mt-36">Register Here</h1>
          <div className="card border border-gray-600 rounded-none shrink-0 md:w-1/2 bg-base-100">
            
            <form className="card-body bg-gradient-to-r from-[#101B2F] to-[#190606]">
                
              <div className="form-control">
                <label className="label">
                  <span className="text-[#a6886d] font-semibold label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered bg-gray-600"
                  
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-[#a6886d] font-semibold label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered bg-gray-600"
                  
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-[#a6886d] font-semibold label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URL"
                  className="input input-bordered bg-gray-600"
                  
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
                  
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-[#a6886d] font-semibold label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Confirm password"
                  className="input input-bordered bg-gray-600 "
                  
                  required
                />
                <label className="label">
                  <div >
                  <span className='mr-2 text-gray-500' >Already have an account?</span>
                  <Link to='/login' className="text-info font-semibold label-text-alt link link-hover">
                    Login
                  </Link>
                  </div>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className=" border text-center py-2 font-semibold rounded-none text-[#a6886d] border-[#a6886d]  w-full">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Register;