import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import banner from "../../../../public/banner.jpg";
import { updateProfile } from "firebase/auth";
const UpdateProfile = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [updatedName, setUpdatedName] = useState("");
  const [photo, setPhoto] = useState(user?.photoURL || "");
  const [updatedPhoto, setUpdatedPhoto] = useState("");
  console.log("user in update profile: ", user);

  useEffect(() => {
    // Update local state with user's profile data after component mounts
    setName(user?.displayName || "");
    setPhoto(user?.photoURL || "");
  }, [user]);

  useEffect(()=>{
    document.title = "Majestic Mansion | Update Profile"
  },[]);

  const updateName = (e) => {
    setUpdatedName(e.target.value);
  };
  const updatePhoto = (e) => {
    setUpdatedPhoto(e.target.value);
  };
  const handleUpdate = () => {
    if (updatedName || updatedPhoto) {
      updateProfile(user, {
        displayName: updatedName || name,
        photoURL: updatedPhoto || photo,
      })
        .then(() => {
          if (updatedName) setName(updatedName);
          if (updatedPhoto) setPhoto(updatedPhoto);
          setUpdatedName("");
          setUpdatedPhoto("");
          console.log("Profile Updated user:", user);
          alert("prodile updated Succesfuly");
        })
        .catch((err) =>
          console.log("Error while updating profile: ", err.message)
        );
    }
  };

  console.log("User in update profile: ", user);
  return (
    <div className="my-10 shadow-2xl rounded-lg bg-gradient-to-r from-[#371616] to-[#431d1de5] border h-[700px] w-[380px] mx-auto text-center flex flex-col items-center justify-start">
      <div className="bg-gray-400 w-full">
        <div className="space-y-2">
          <div
            className="flex rounded justify-center items-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), url(${banner})`,

              backgroundPosition: "center",
              backgroundSize: "cover",
              height: "400px",
            }}
          >
            <div className="">
              <p className="text-gray-400 mb-8 border p-2 jul">USER PROFILE</p>
              <img
                src={photo}
                className="w-36 bg-gray-500 h-36 border-4  rounded-full mx-auto mb-4"
                alt="user-image"
              />
              <div className="">
                <p className="text-xljul border-b text-[#d1b5b5] py-2 px-4  ">
                  Name: {name}
                </p>
                <div className="text-[#d5a6a6] text-sm  px-4 rounded-md my-2 bg-[#ffffff45] ">
                   {user?.email ? <p className="py-2">Email : {user.email}</p>:""}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* update profile----------------------- */}

      <div className="w-full px-4">
        <p className="text-gray-900 font-semibold mb-2 border-2 bg-gray-200 border-[#a6886d] p-2 jul my-4">
          UPDATE PROFILE
        </p>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text text-gray-300">Name</span>
          </div>
          <input
            type="text"
            placeholder="Updated Name"
            className="input rounded-none bg-gray-200 input-bordered w-full "
            name="name"
            onChange={updateName}
            required
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-gray-300">PHOTO URL</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input rounded-none bg-gray-200 input-bordered w-full "
            name="photo"
            onChange={updatePhoto}
            required
          />
        </label>
        <button
          onClick={handleUpdate}
          className="btn my-2 btn-outline border rounded-full text-gray-200 border-[#b25b65]"
        >
          UPDATE
        </button>
      </div>
    </div>
  );
};

export default UpdateProfile;
