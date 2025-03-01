import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/footer';
import { useNavigate } from "react-router-dom";
import Api from "../../service/Api";


function Account() {
  const [showPopup, setShowPopup] = useState(false);
  const [showPopupLogout, setShowPopupLogout] = useState(false);
  const [selectedButton, setSelectedButton] = useState("no");
  const navigate = useNavigate(); // Redirect function
   const [newName, setNewName] = useState(null); // User data store karne ke liye state
     const [UserData, setUserData] = useState(null); // User data store karne ke liye state
     const [user, setUser] = useState(null);

  const handleLogout = () => {
    localStorage.removeItem("token"); // Token remove
    setShowPopupLogout(false); // Popup hide
    navigate("/login"); // Redirect to login
  };


  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await Api.get("getUsername"); // API call to fetch user data
        if (response.data) {
          setNewName(response.data); 
          setUserData(response.data.fullname); 


        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);


  const handleUpdateProfile = async () => {
    try {
        const response = await Api.put("updateFullName", { fullname: UserData });

        if (response.data) {
            setUser((prevUser) => ({ ...prevUser, fullname: UserData }));
             console.log("Profile Updated Successfully");
             
        }
       
    } catch (error) {
        console.error("Error updating profile:", error);
    } 
};
  
  return (
    <div className="container bg-n900 min-h-dvh relative overflow-hidden flex justify-start items-start text-white pb-28">
    {/* Background Circle */}
    <div className="w-[582px] h-[582px] rounded-full bg-g300 absolute -top-32 -left-20 blur-[575px]"></div>

    <div className="relative z-20 p-6 w-full">

          {/* Popup Form */}
          {showPopup && (
  <div 
    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-end z-20"
    onClick={() => setShowPopup(false)} // Click se close hoga
  >
    <div 
      style={{ 
        backgroundColor: "rgb(32 37 57)", 
        width: 429, 
        height: 313,
        borderTopLeftRadius: "38px",
        borderTopRightRadius: "38px"
      }}
      className="fixed bottom-20 bg-n900 text-white p-6 shadow-lg rounded-t-lg transition-transform transform translate-y-0 z-30"
      onClick={(e) => e.stopPropagation()} // Yeh ensure karega ki popup par click karne se close na ho
    >
      <div className="flex justify-center items-center">
                <div style={{backgroundColor:"#fff"}} className="w-16 h-1 bg-white bg-opacity-5 rounded-full"></div>
              </div>
      <h1 style={{marginTop:"18px"}} className="text-lg font-bold mb-4 text-center">
        Edit Username
      </h1>
      <p style={{marginTop:"10px",marginBottom:"20px"}} className="text-gray-500 text-center mb-4">
        Please fill in the field to continue
      </p>

      <form className="flex flex-col gap-3">
        <div className="relative w-full">
          <i style={{marginTop:"24px",marginLeft:"10px"}} className="ph ph-user absolute inset-y-0 left-3 flex items-center text-white text-lg"></i>

          <input  
            style={{ 
              backgroundColor: "rgb(88 102 89)", 
              color: "#fff", 
              borderColor: "#292c3d",
              paddingLeft: "40px", // Left padding taaki text icon se overlap na ho
marginTop:"13px"
            }}
            type="text"
            value={UserData}        
            onChange={(e) => setUserData(e.target.value)} 
            className="w-full p-3 border rounded-md text-black"
            required
          />
        </div>

        <button onClick={handleUpdateProfile} 
          style={{ backgroundColor: "#9583ff",marginTop:"16px" }}
          type="submit"
          className="w-full p-3 font-bold mb-4 bg-purple-500 text-white rounded-md hover:bg-purple-600"
        >
          Save Changes
        </button>
      </form>
    </div>
  </div>
)}




{/* Logout Popup */}
{showPopupLogout && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-end z-20"
          onClick={() => setShowPopupLogout(false)} // Click outside to close
        >
          <div
            style={{ backgroundColor: "#202338", width: 425, height: 351, marginBottom: -39, borderTopLeftRadius: "38px",
              borderTopRightRadius: "38px" }}
            className="fixed bottom-10 bg-n900 text-white p-6 shadow-lg rounded-t-lg transition-transform transform translate-y-0"
            onClick={(e) => e.stopPropagation()} // Prevent closing on click inside
          >
            {/* Info Icon */}
            <div className="h-1 w-16 bg-gray-300 rounded mx-auto mb-3"></div>
            <div className="flex justify-center items-center">
                <div style={{backgroundColor:"#fff"}} className="w-16 h-1 bg-white bg-opacity-5 rounded-full"></div>
              </div>
            {/* Rounded Image */}
            <div className="flex justify-center mb-4">
              <img style={{marginTop:"36px"}}
                src="/assets/images/dc113b39-e659-4e08-be93-ca29058dc0dc.webp"
                alt="Info"
                className="w-16 h-16 rounded-full"
              />
            </div>

            {/* Confirmation Message */}
            <h2 style={{ marginTop: "10px", marginBottom: "10px" }} className="text-lg font-bold mb-4 text-center">
              Are you sure?
            </h2>

            {/* Yes & No Buttons with 12px gap */}
            <div className="flex flex-col gap-3">
              <button
                style={{
                  backgroundColor: selectedButton === "yes" ? "#9583ff" : "white",
                  color: selectedButton === "yes" ? "white" : "black",
                  border: "1px solid gray",
                  borderRadius:"12px"
                }}
                className="w-full py-3 font-semibold rounded"
                onClick={handleLogout} // Logout on Yes click
              >
                Yes
              </button>

              <button
                style={{
                  backgroundColor: selectedButton === "no" ? "#9583ff" : "white",
                  color: selectedButton === "no" ? "white" : "black",borderRadius:"12px",marginTop:"14px"

                }}
                className="w-full py-3 font-semibold rounded"
                onClick={() => setShowPopupLogout(false)}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}


      <div className="flex justify-start items-center pb-8 mr-8">
          <Link to="/home" className="flex justify-center items-center p-2 rounded-full bg-g300 text-n900">
            <i className="ph-bold ph-caret-left"></i>
          </Link>
          <div className="flex justify-center items-center w-full">
            <h1 style={{ color: "#fff" }} className="font-semibold text-2xl">Profile</h1>
          </div>
        </div>
   <div className="flex items-center mb-4">

    <img alt="Profile picture of a person with sunglasses" className="w-12 h-12 rounded-full" height="50" src="\assets\images\userIcon.edc1c75ce595e5bb3b239b6d69ec9cf4.svg" width="50"/>
    <div style={{marginLeft:"10px"}} className="ml-4">
     <h2 className="text-lg font-bold">
     {UserData}  </h2>
     <p style={{color:"rgba(169, 172, 175, 1)"}} className="text-gray-500">
      sagartyagi1024@gmail.com
     </p>
    </div>
    <button style={{ marginLeft:"100px" }} onClick={() => setShowPopup(true)} className="text-purple-500 text-2xl">
            <i style={{ color: "#9583ff" }} className="ph ph-pencil-simple"></i>
          </button>
   </div>
   
    
   <div
      style={{ borderColor: "#9583ff", marginTop: "30px" }}
      className="border border-purple-300 rounded-lg p-4 flex items-center justify-between shadow-md"
    >
      {/* Left Side: Parachute Image */}
      <img
        alt="Parachute with a logo"
        className="w-12 h-12"
        style={{ borderRadius: "32px" }}
        src="\assets\images\SxSoOaFiKKPtK5BDitkmVcvn2HTgm69wuHAJeJzcjmQ.jpg"
      />

      {/* Middle Content */}
      <div className="flex flex-col">
        <h3   style={{ color: "#fff" }} className="font-bold text-black text-lg">Earn more $KLINK!</h3>
        <div className="text-gray-500 flex items-center">
          <span style={{ color: "#9583ff" }} className="text-xl font-bold text-black">70,000.00</span>
          <img 
            alt="Logo"
            className="w-5 h-5 mx-2"
            style={{ borderRadius: "16px",marginLeft:"5px",height:"15px"}} // Adjust as needed

            src="\assets\images\CN4qG6TV3-Wa_6LmTOhuis9qBStFL6tljoDrSm4MNnk.jpg"
          />
          <span style={{ marginLeft:"5px"}}>points earned so far</span>
        </div>
      </div>

      {/* Right Side: Arrow Icon */}
      <i className="fas fa-chevron-right text-gray-400"></i>
    </div>
        {/* Account Card */}
        <div className="mt-6 space-y-3">

        <Link to="/security/refferals-user" >
          <a className="w-full flex justify-between items-center gap-6 bg-white bg-opacity-5 p-4 rounded-xl">
            <div className="flex justify-start items-center gap-3">
            <img
  alt="Referrals"
  className="w-12 h-12"
  style={{ borderRadius: "32px" }}
  src="\assets\images\Task.61fab7c74b5700a23bb5c33281136ac7.svg"  // Replace with the actual image path
/>
              <div>
                <p className="font-semibold">Refer Friends</p>
                <p  className="text-n70 text-sm">Refer and earn up to 100 USDT per friend</p>
              </div>
            </div>
            <i className="ph ph-caret-right text-g300"></i>
          </a>
          </Link>
          <a 
  href="https://www.youtube.com" 
  target="_blank" 
  rel="noopener noreferrer"
  style={{ marginTop: "10px" }} 
  className="w-full flex justify-between items-center gap-6 bg-white bg-opacity-5 p-4 rounded-xl"
>
  <div className="flex justify-start items-center gap-3">
    <img src="\assets\images\Youtube.svg" alt="DigitalNomad" />
    <div>
      <p className="font-semibold">Learn How Klink Works</p>
      <p className="text-n70 text-sm">Gain insights on how to use Klink</p>
    </div>
  </div>
  <i className="ph ph-caret-right text-g300"></i>
</a>
        </div>
         {/* Language and Localization Section */}
         <div className="pt-8">
          <p className="text-n70 font-semibold pb-5">Account</p>
          <div className="flex flex-col gap-5">
            
            <Link
              to="/currency"
              className="rounded-lg p-3 border border-white border-opacity-5 flex justify-between items-center hover:bg-white hover:bg-opacity-5 duration-300 group"
            >
              <div className="flex justify-start items-center gap-3">
              <div className="p-2.5 bg-white bg-opacity-5 flex justify-center items-center rounded-full text-g300 text-xl group-hover:bg-g300 group-hover:text-white group-hover:bg-opacity-100 duration-300">
              <i className="ph ph-user-circle"></i>
                </div>
                <p className="font-semibold">Personal Details</p>
              </div>
              <div className="flex justify-start items-center gap-2">
                <i className="ph ph-caret-right text-g300"></i>
              </div>
            </Link>
          </div>
        </div>

        {/* Support Section */}
        <div className="pt-8">
          <p className="text-n70 font-semibold pb-5">Support</p>
          <div className="flex flex-col gap-5">
            <Link
              to="/help-center"
              className="rounded-lg p-3 border border-white border-opacity-5 flex justify-between items-center hover:bg-white hover:bg-opacity-5 duration-300 group"
            >
              <div className="flex justify-start items-center gap-3">
                <div className="p-2.5 bg-white bg-opacity-5 flex justify-center items-center rounded-full text-g300 text-xl group-hover:bg-g300 group-hover:text-white group-hover:bg-opacity-100 duration-300">
                  <i className="ph ph-question"></i>
                </div>
                <p className="font-semibold">Help Center</p>
              </div>
              <i className="ph ph-caret-right text-g300"></i>
            </Link>
            <Link
              to="/privacy-policy"
              className="rounded-lg p-3 border border-white border-opacity-5 flex justify-between items-center hover:bg-white hover:bg-opacity-5 duration-300 group"
            >
              <div className="flex justify-start items-center gap-3">
                <div className="p-2.5 bg-white bg-opacity-5 flex justify-center items-center rounded-full text-g300 text-xl group-hover:bg-g300 group-hover:text-white group-hover:bg-opacity-100 duration-300">
                  <i className="ph ph-file-lock"></i>
                </div>
                <p className="font-semibold">Privacy Policy</p>
              </div>
              <i className="ph ph-caret-right text-g300"></i>
            </Link>
            <Link
              to="/about"
              className="rounded-lg p-3 border border-white border-opacity-5 flex justify-between items-center hover:bg-white hover:bg-opacity-5 duration-300 group"
            >
              <div className="flex justify-start items-center gap-3">
                <div className="p-2.5 bg-white bg-opacity-5 flex justify-center items-center rounded-full text-g300 text-xl group-hover:bg-g300 group-hover:text-white group-hover:bg-opacity-100 duration-300">
                  <i className="ph ph-paper-plane-tilt"></i>
                </div>
                <p className="font-semibold">About</p>
              </div>
              <i className="ph ph-caret-right text-g300"></i>
            </Link>
          </div>
        </div>

 {/* Security Section */}
 <div className="pt-8">
          <p className="text-n70 font-semibold pb-5">Security</p>
          <div className="flex flex-col gap-5">
            <Link
              to="/security/change-password"
              className="rounded-lg p-3 border border-white border-opacity-5 flex justify-between items-center hover:bg-white hover:bg-opacity-5 duration-300 group"
            >
              <div className="flex justify-start items-center gap-3">
                <div className="p-2.5 bg-white bg-opacity-5 flex justify-center items-center rounded-full text-g300 text-xl group-hover:bg-g300 group-hover:text-white group-hover:bg-opacity-100 duration-300">
                  <i className="ph ph-cardholder"></i>
                </div>
                <p className="font-semibold">Change Password</p>
              </div>
              <i className="ph ph-caret-right text-g300"></i>
            </Link>
      
           
            
          </div>
        </div>

         {/* Support Section */}
         <div className="pt-8">
          <p className="text-n70 font-semibold pb-5">Promotions</p>
          <div className="flex flex-col gap-5">
            <Link
              to="/promotion/promocode"
              className="rounded-lg p-3 border border-white border-opacity-5 flex justify-between items-center hover:bg-white hover:bg-opacity-5 duration-300 group"
            >
              <div className="flex justify-start items-center gap-3">
                <div className="p-2.5 bg-white bg-opacity-5 flex justify-center items-center rounded-full text-g300 text-xl group-hover:bg-g300 group-hover:text-white group-hover:bg-opacity-100 duration-300">
                <i className="ph ph-plus-circle"></i>
                </div>
                <p className="font-semibold">Add Promo Code</p>
              </div>
              <i className="ph ph-caret-right text-g300"></i>
            </Link>
            <Link
              to="/security/refferals-user"
              className="rounded-lg p-3 border border-white border-opacity-5 flex justify-between items-center hover:bg-white hover:bg-opacity-5 duration-300 group"
            >
              <div className="flex justify-start items-center gap-3">
                <div className="p-2.5 bg-white bg-opacity-5 flex justify-center items-center rounded-full text-g300 text-xl group-hover:bg-g300 group-hover:text-white group-hover:bg-opacity-100 duration-300">
                <i className="ph ph-user-plus"></i> 
                </div>
                <p className="font-semibold">Refer a Friend</p>
              </div>
              <i className="ph ph-caret-right text-g300"></i>
            </Link>
           
          </div>
        </div>

        {/* Social Section */}
        <div className="pt-8">
  <p className="text-n70 font-semibold pb-5">Follow Us</p>
  <div className="flex flex-col gap-5">
    {/* Telegram */}
    <Link
              to="https://t.me/yourtelegramchannel"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-3 border border-white border-opacity-5 flex justify-between items-center hover:bg-white hover:bg-opacity-5 duration-300 group"
>
      <div className="flex justify-start items-center gap-3">
        <div className="p-2.5 bg-white bg-opacity-5 flex justify-center items-center rounded-full text-g300 text-xl group-hover:bg-g300 group-hover:text-white group-hover:bg-opacity-100 duration-300">
          <i className="ph ph-telegram-logo"></i>
        </div>
        <p className="font-semibold">Telegram</p>
      </div>
      <i className="ph ph-caret-right text-g300"></i>
      </Link>
    {/* YouTube */}
    

<Link
              to="https://youtube.com/yourchannel"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-3 border border-white border-opacity-5 flex justify-between items-center hover:bg-white hover:bg-opacity-5 duration-300 group"
>
      <div className="flex justify-start items-center gap-3">
        <div className="p-2.5 bg-white bg-opacity-5 flex justify-center items-center rounded-full text-g300 text-xl group-hover:bg-g300 group-hover:text-white group-hover:bg-opacity-100 duration-300">
          <i className="ph ph-youtube-logo"></i>
        </div>
        <p className="font-semibold">YouTube</p>
      </div>
      <i className="ph ph-caret-right text-g300"></i>
      </Link>

    {/* LinkedIn */}
    

    {/* Facebook */}
    <Link
              to="https://facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-3 border border-white border-opacity-5 flex justify-between items-center hover:bg-white hover:bg-opacity-5 duration-300 group"
>
   
      <div className="flex justify-start items-center gap-3">
        <div className="p-2.5 bg-white bg-opacity-5 flex justify-center items-center rounded-full text-g300 text-xl group-hover:bg-g300 group-hover:text-white group-hover:bg-opacity-100 duration-300">
          <i className="ph ph-facebook-logo"></i>
        </div>
        <p className="font-semibold">Facebook</p>
      </div>
      <i className="ph ph-caret-right text-g300"></i>
    </Link>

    {/* Instagram */}
    <Link
      href="https://instagram.com/yourprofile"
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-lg p-3 border border-white border-opacity-5 flex justify-between items-center hover:bg-white hover:bg-opacity-5 duration-300 group"
    >
      <div className="flex justify-start items-center gap-3">
        <div className="p-2.5 bg-white bg-opacity-5 flex justify-center items-center rounded-full text-g300 text-xl group-hover:bg-g300 group-hover:text-white group-hover:bg-opacity-100 duration-300">
          <i className="ph ph-instagram-logo"></i>
        </div>
        <p className="font-semibold">Instagram</p>
      </div>
      <i className="ph ph-caret-right text-g300"></i>
    </Link>

    {/* Twitter */}
    <Link
      href="https://twitter.com/yourhandle"
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-lg p-3 border border-white border-opacity-5 flex justify-between items-center hover:bg-white hover:bg-opacity-5 duration-300 group"
    >
      <div className="flex justify-start items-center gap-3">
        <div className="p-2.5 bg-white bg-opacity-5 flex justify-center items-center rounded-full text-g300 text-xl group-hover:bg-g300 group-hover:text-white group-hover:bg-opacity-100 duration-300">
          <i className="ph ph-twitter-logo"></i>
        </div>
        <p className="font-semibold">Twitter</p>
      </div>
      <i className="ph ph-caret-right text-g300"></i>
    </Link>

    {/* Discord */}
    <Link
      href="https://discord.gg/yourinvite"
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-lg p-3 border border-white border-opacity-5 flex justify-between items-center hover:bg-white hover:bg-opacity-5 duration-300 group"
    >
      <div className="flex justify-start items-center gap-3">
        <div className="p-2.5 bg-white bg-opacity-5 flex justify-center items-center rounded-full text-g300 text-xl group-hover:bg-g300 group-hover:text-white group-hover:bg-opacity-100 duration-300">
          <i className="ph ph-discord-logo"></i>
        </div>
        <p className="font-semibold">Discord</p>
      </div>
      <i className="ph ph-caret-right text-g300"></i>
    </Link>

    {/* Logout Button */}
    <button 
               onClick={() => setShowPopupLogout(true)}

        className="rounded-lg p-3 border border-white border-opacity-5 flex justify-between items-center hover:bg-white hover:bg-opacity-5 duration-300 group logoutModalOpenButton"
      >
        <div className="flex justify-start items-center gap-3">
          <div className="p-2.5 bg-white bg-opacity-5 flex justify-center items-center rounded-full text-g300 text-xl group-hover:bg-g300 group-hover:text-white group-hover:bg-opacity-100 duration-300">
            <i className="ph ph-arrows-down-up"></i>
          </div>
          <p className="font-semibold">Logout</p>
        </div>
      </button>
  </div>
</div>


        {/* Tab Area (Footer Navigation) */}
        <Footer />
        {/* End Tab Area */}

        {/* Hidden Modals */}
        <div className="hidden inset-0 z-40 checkBiometrics">
          <div className="container bg-white bg-opacity-10 flex justify-end items-end h-full">
            <div className="bg-n900 px-6 pt-3 pb-6 w-full rounded-t-[31px] relative">
              <div className="flex justify-center items-center">
                <div className="w-16 h-1 bg-white bg-opacity-5 rounded-full"></div>
              </div>
              <h2 className="text-xl font-semibold text-center pt-8">
                Check your biometrics
              </h2>
              <button className="absolute top-4 right-4 text-2xl text-g300 checkBiometricsCloseButton">
                <i className="ph ph-x-circle"></i>
              </button>
              <div className="flex flex-col gap-4 pt-8">
                <div className="text-[100px] text-g300 flex justify-center items-center">
                  <i className="ph ph-fingerprint"></i>
                </div>
                <div className="text-center">
                  <p className="text-xs text-n70">Touch the fingerprint sensor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden inset-0 z-40 logoutModal">
          <div className="container bg-white bg-opacity-10 flex justify-end items-end h-full">
            <div className="bg-n900 px-6 pt-3 pb-6 w-full rounded-t-[31px] relative">
              <div className="flex justify-center items-center">
                <div className="w-16 h-1 bg-white bg-opacity-5 rounded-full"></div>
              </div>
              <h2 className="text-2xl font-semibold text-center pt-8 text-g300 pb-5">
                Logout
              </h2>
              <div className="pt-5 border-t border-dashed border-white border-opacity-10">
                <p className="text-n70 text-center">
                  Are you sure you want to log out of your account?
                </p>
              </div>
              <div className="w-full pt-12 flex justify-between items-center gap-3">
                <button className="block text-g300 border border-g300 bg-white bg-opacity-5 font-semibold text-center py-3 rounded-lg w-full logoutModalCloseButton">
                  Cancel
                </button>
                <a href="" className="block bg-g300 font-semibold text-center py-3 rounded-lg w-full">
                  Yes, Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const styles = {
  container: {
    maxWidth: '100%',
    maxHeight: '50%',
    marginTop:'20px',
    border: '2px solid #6633cc',
    borderRadius: '12px',
    padding: '12px',
    fontFamily: 'sans-serif',
    background: 'linear-gradient(90deg, #6633cc, #9b59b6)',
    color: '#fff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.08)',
    position: 'relative',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    margin: 0,
    fontSize: '1rem',
    fontWeight: 700,
  },
  arrow: {
    fontSize: '1.25rem',
    color: '#6633cc',
    cursor: 'pointer',
    userSelect: 'none',
  },
  subtitle: {
    margin: '8px 0 16px',
    fontSize: '0.875rem',
    lineHeight: 1.2,
    color: '#fff',
  },
  pointsRow: {
    marginBottom: '16px',
  },
  pointsValue: {
    display: 'inline-flex',
    alignItems: 'center',
    backgroundColor: '#6633cc',
    padding: '6px 10px',
    borderRadius: '8px',
    fontWeight: 600,
    fontSize: '0.75rem',
  },
  klinkSymbol: {
    display: 'inline-block',
    marginLeft: '4px',
    fontWeight: 600,
    fontSize: '0.75rem',
    color: '#fff',
  },
  progressSteps: {
    display: 'flex',
    gap: '4px',
  },
  step: {
    flex: 1,
    height: '6px',
    backgroundColor: '#eee',
    borderRadius: '4px',
  },
  stepCompleted: {
    flex: 1,
    height: '6px',
    backgroundColor: '#6633cc',
    borderRadius: '4px',
  },
};

export default Account;
