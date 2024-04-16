import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import banner from "../../../../public/userbg.jpg";
import { updateProfile } from "firebase/auth";
const UserProfile = () => {
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
    document.title = "Majestic Mansion | User Info"
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
    <div className="min-h-screen bg-[#000000]">
      <div className=" shadow-2xl  bg-gradient-to-r from-[#371616] to-[#431d1de5] md:w-[500px] mx-auto text-center flex flex-col items-center justify-start">
        <div className="bg-gray-400 w-full">
          <div className="space-y-2">
            <div
              className="flex  justify-center items-center"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(${banner})`,

                backgroundPosition: "center",
                backgroundSize: "cover",
                height: "400px",
              }}
            >
              <div className="">
                <p className="text-gray-200 bg-[#2121219c] mb-8 border p-2 jul">
                  USER PROFILE
                </p>
                <img
                  src={photo}
                  className="w-36 bg-gray-500 h-36  rounded-full mx-auto mb-4"
                  alt="user-image"
                />
                <div className="">
                  <p className="text-xljul border-b text-[#d1b5b5] py-2 px-4  ">
                    Name: {name}
                  </p>
                  <div className="text-[#230e0e] text-sm  px-4  my-2 bg-[#ffffff8e] ">
                    {user?.email ? (
                      <p className="py-2 font-bold">Email : {user.email}</p>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* update profile----------------------- */}
      </div>
    </div>
  );
};

export default UserProfile;
