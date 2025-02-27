import React, { useEffect, useState,useRef } from "react";
import { Link } from "react-router-dom";
import { Camera, Image as Gallery } from "lucide-react";
import Api from "../../service/Api";

function Profile() {
  const [showPopup, setShowPopup] = useState(false);
  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState("/assets/images/referral-3272324_1280.webp"); 
  // const [users, setUsers] = useState([]); // ✅ Always start with an empty array
  // const [error, setError] = useState("");

  const [users, setUsers] = useState({
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    date_of_birth: ""
  }); 
  const [error, setError] = useState("");

  useEffect(() => {
    fetchUsers();
    
}, []);

const fetchUsers= async () => {
  try {
     const response = await Api.get('/user-details');
     setUsers(response.data);
  } catch (err) {
     setError(err.response?.data?.error || "Error fetching income");
  }
};




  const openCamera = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.capture = "environment"; // Opens mobile camera
    input.onchange = (event) => {
      const file = event.target.files[0];
      if (file) {
        const imageUrl = URL.createObjectURL(file);
        setSelectedImage(imageUrl); // Update Profile Picture
        setShowPopup(false); // Close popup
      }
    };
    input.click();
  };

  // 🖼️ Open Gallery / File Manager
  const openGallery = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="container bg-n900 h-dvh relative overflow-hidden flex justify-start items-start text-white">
      <div className="w-[582px] h-[582px] rounded-full bg-g300 absolute -top-32 -left-20 blur-[575px]"></div>

      <div className="px-6 py-8 relative z-20 w-full">
        {/* Popup for Edit Photo */}
        {showPopup && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
            onClick={() => setShowPopup(false)} // Click outside to close
          >
            <div
              style={{ backgroundColor: "#202338", width: 425, height: 313, marginBottom: -39 }}
              className="fixed bottom-10 bg-n900 text-white p-6 shadow-lg rounded-t-lg transition-transform transform translate-y-0"
              onClick={(e) => e.stopPropagation()} // Prevent closing on click inside
            >
              <div className="h-1 w-16 bg-gray-300 rounded mx-auto mb-3"></div>
              <h2 style={{ marginLeft: "109px", marginBottom: "4px" }} className="text-lg font-bold mb-4">
                Edit Photo
              </h2>

              <button className="w-full flex items-center gap-3 p-4 text-black border-b" onClick={openCamera}>
                <Camera style={{ color: "#fff" }} size={22} />
                <span style={{ color: "#fff" }}>Take Photo</span>
              </button>

              <button className="w-full flex items-center gap-3 p-4 text-black" onClick={openGallery}>
                <Gallery style={{ color: "#fff" }} size={22} />
                <span style={{ color: "#fff" }}>Choose from Library</span>
              </button>

              {/* Hidden File Input for Gallery Selection */}
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                className="hidden"
                onChange={(event) => {
                  const file = event.target.files[0];
                  if (file) {
                    const imageUrl = URL.createObjectURL(file);
                    setSelectedImage(imageUrl); // Update Profile Picture
                    setShowPopup(false); // Close popup
                  }
                }}
              />
            </div>
          </div>
        )}

        {/* Header */}
        <div className="flex justify-start items-center pb-8 mr-8">
          <Link to="/#" className="flex justify-center items-center p-2 rounded-full bg-g300 text-n900">
            <i className="ph-bold ph-caret-left"></i>
          </Link>
          <div className="flex justify-center items-center w-full">
            <h1 className="font-semibold text-2xl">Personal Details</h1>
          </div>
        </div>

        {/* Profile Image Section */}
        <div className="flex justify-center mb-6 relative">
          <img
            alt="Profile picture"
            className="rounded-full w-24 h-24"
            height="80"
            src={selectedImage}
            width="80"
          />
          <div className="absolute bottom-0 right-10 bg-black text-white rounded-full p-1">
            <button style={{ marginLeft: "100px" }} onClick={() => setShowPopup(true)} className="text-purple-500 text-2xl">
              <i style={{ color: "#9583ff" }} className="ph ph-pencil-simple"></i>
            </button>
          </div>
        </div>

        {/* Form */}
        <form className="pt-8 flex flex-col gap-4">



       
          <div>
            <p className="text-sm font-semibold pb-2">User Name</p>
            <div className="flex justify-between items-center gap-3 p-4 bg-white bg-opacity-5 rounded-lg text-n70 text-xl">
              <input type="text"    value={users.username || ""}  placeholder="Enter Username" className="bg-transparent outline-none placeholder:text-sm text-sm" />
            </div>
          </div>

        

          <div>
            <p className="text-sm font-semibold pb-2">First Name</p>
            <div className="flex justify-between items-center gap-3 p-4 bg-white bg-opacity-5 rounded-lg text-n70 text-xl">
              <input type="text" placeholder="Enter First Name" className="bg-transparent outline-none placeholder:text-sm text-sm" />
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold pb-2">Date of Birth</p>
            <div className="flex justify-between items-center gap-3 p-4 bg-white bg-opacity-5 rounded-lg text-n70 text-xl">
              <input type="date" className="bg-transparent outline-none text-sm" />
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold pb-2">Email</p>
            <div className="flex justify-between items-center gap-3 p-4 bg-white bg-opacity-5 rounded-lg text-n70 text-xl">
              <input type="email" placeholder="Enter Email" className="bg-transparent outline-none placeholder:text-sm text-sm" />
            </div>
          </div>
        </form>

        {/* Delete Account */}
        <div className="w-full pt-20">
          <a href="#" className="block bg-g300 font-semibold text-center py-3 rounded-lg">
            Delete account
          </a>
        </div>
      </div>
    </div>
  );
}

export default Profile;
