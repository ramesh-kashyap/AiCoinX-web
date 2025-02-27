import React, { useState,useRef } from "react";

import { Link } from "react-router-dom";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google"; // Chrome
import ScreenShareIcon from "@mui/icons-material/ScreenShare"; // Quick Share
import TelegramIcon from "@mui/icons-material/Telegram"; // Telegram

export default function ReferralProgram() {
  const inputRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);
  const shareUrl = "https://yourwebsite.com/invite?ref=USERNAME"; // Replace with actual referral link


  const handleShare = (platform) => {
    let url = "";
    switch (platform) {
      case "whatsapp":
        url = `https://wa.me/?text=Join%20now%20using%20my%20referral%20link:%20${encodeURIComponent(shareUrl)}`;
        break;
      case "instagram":
        url = `https://www.instagram.com/?url=${encodeURIComponent(shareUrl)}`;
        break;
      case "twitter":
        url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=Join%20now!`;
        break;
      case "facebook":
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case "chrome":
        url = `https://www.google.com/search?q=${encodeURIComponent(shareUrl)}`;
        break;
      case "quickshare":
        navigator.share
          ? navigator.share({ title: "Join Now!", url: shareUrl })
          : alert("Quick Share not supported on this device.");
        return;
      case "skype":
        url = `https://web.skype.com/share?url=${encodeURIComponent(shareUrl)}`;
        break;
      case "telegram":
        url = `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}`;
        break;
      default:
        return;
    }
    window.open(url, "_blank");
  };

  // Copy Function
  const copyToClipboard = () => {
    if (inputRef.current) {
      inputRef.current.select();
      navigator.clipboard.writeText(inputRef.current.value);
      alert("Referral link copied! ✅");

    }
  };

  return (
    <div 
      style={{ backgroundColor: "#fff" }} 
      className="container bg-n900 h-dvh relative flex justify-start items-start text-white"
    >
      {/* Page Content */}
      <div   style={{ backgroundColor: "rgba(17, 24, 32, 1)" }}  className="w-full max-w-md mx-auto p-5">
        {/* Header */}
        <div className="flex justify-start items-center pb-8 mr-8">
          <Link to="/account" className="flex justify-center items-center p-2 rounded-full bg-g300 text-n900">
            <i className="ph-bold ph-caret-left"></i>
          </Link>
          <div className="flex justify-center items-center w-full">
            <h1 style={{ color: "#fff" }} className="font-semibold text-2xl">Referral Program</h1>
          </div>
        </div>

        {/* Referral Card */}




        {showPopup && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          onClick={() => setShowPopup(false)} 
        >
          <div
            style={{ backgroundColor: "#fff", width: 429, height: 420, marginBottom: -39,marginBottom:"-200px",borderTopLeftRadius: "38px",borderTopRightRadius: "38px" }}
            className="fixed bottom-10 bg-n900 text-white p-6 shadow-lg rounded-t-lg transition-transform transform translate-y-0"
            onClick={(e) => e.stopPropagation()} 
          >
            <div className="h-1 w-16 bg-gray-300 rounded mx-auto mb-3"></div>
            <h2 style={{ marginBottom:"30px",marginLeft:130,color:"#000" }} className="text-lg font-bold mb-4">Invite Friends</h2>

            <div className="grid grid-cols-4 gap-4 justify-center">
              <button onClick={() => handleShare("whatsapp")}>
                <WhatsAppIcon style={{ color: "#25D366", fontSize: "40px" }} />

              </button>
              <button onClick={() => handleShare("instagram")}>
                <InstagramIcon style={{ color: "#E4405F", fontSize: "40px" }} />
              </button>
              <button onClick={() => handleShare("twitter")}>
                <TwitterIcon style={{ color: "#1DA1F2", fontSize: "40px" }} />
              </button>
              <button onClick={() => handleShare("facebook")}>
                <FacebookIcon style={{ color: "#1877F2", fontSize: "40px" }} />
              </button>
              <button onClick={() => handleShare("chrome")}>
                <GoogleIcon style={{ color: "#4285F4", fontSize: "40px" }} />
              </button>
              <button onClick={() => handleShare("quickshare")}>
                <ScreenShareIcon style={{ color: "#ff9800", fontSize: "40px" }} />
              </button>
            
              <button onClick={() => handleShare("telegram")}>
                <TelegramIcon style={{ color: "#0088cc", fontSize: "40px" }} />
              </button>
            </div>

            <button style={{backgroundColor:"#ccc",borderRadius: "44px",color:"#444",fontSize:""}} className="mt-6 w-full py-2 bg-gray-700 rounded" onClick={() => setShowPopup(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}
        {/* Referral Card */}




        <div
  style={{
    background: "linear-gradient(to left, rgb(112 92 229), rgb(116 94 243 / 50%))"
  }}
  className="bg-purple-700 p-5 rounded-lg mt-5 text-center"
>
 



  <img src="/assets/images/referral-3272324_1280.webp" alt="Referral" className="mx-auto mb-4 w-32 h-32" />
  
  <h2 className="text-lg font-bold">Invite friends and earn up to</h2>

  {/* 100 USDT with icon in one line */}
  <p className="text-2xl font-bold text-green-400 flex items-center justify-center">
    <img src="\assets\images\crypto_icon.png" alt="Crypto Icon" className="w-8 h-8 mr-2" />
    100 USDT
  </p>

  <p style={{ marginBottom: "17px",marginTop: "10px" }} className="text-sm text-gray-200 mt-2">
    Earn a permanent bonus based on your friend's earnings for every successful referral.
  </p>

          {/* Referral Link */}
          <div style={{ backgroundColor: "#aca1eff7" }} className="bg-white text-black p-2 rounded-md flex justify-between items-center mt-4">
            <input style={{ color: "#fff" }} type="text" ref={inputRef} value="http://localhost:3000/ref" className="bg-transparent w-full text-sm px-2" readOnly />
            <button onClick={copyToClipboard} className="text-blue-600">
              <i style={{ color: "#fff" }} className="ph-bold ph-copy"></i>
            </button>
          </div>

          {/* Invite Button */}
          <button           onClick={() => setShowPopup(true)} style={{ backgroundColor: "rgba(0, 0, 0, 1)", marginTop: "16px" }} className="bg-black px-5 py-2 rounded-full text-white mt-3 w-full">
            Invite Friends
          </button>
        </div>
        <p style={{ marginBottom: "14px",marginTop: "12px",fontStyle:"oblique",fontSize:"17px",marginLeft:"75px" }} className="text-sm text-gray-200 mt-2">
    *Invite must use your unique link.
  </p>
        {/* Referral Performance */}
        <div className="mt-6">
          <h2 style={{ color: "#fff" }} className="text-lg font-semibold mb-3">Referral Performance</h2>
          <div style={{ marginTop: "10px" }} className="grid grid-cols-2 gap-4">
            <div  style={{ backgroundColor: "#1d252b" }} className="p-4 rounded-lg text-center">
              <p style={{ color: "rgb(207 211 215)" }} className="text-sm text-gray-400">Referral Earnings</p>
              <p style={{ color: "#fff" }} className="text-xl font-bold">10 USDT</p>
            </div>
            <div style={{ backgroundColor: "#1d252b" }} className="p-4 rounded-lg text-center">
              <p style={{ color: "rgb(207 211 215)" }} className="text-sm text-gray-400">Successful Referrals</p>
              <p style={{ color: "#1d8711" }} className="text-xl font-bold">40 USDT</p>
            </div>
          </div>
        </div>

        {/* How to Earn USDT Payouts */}
        <div className="mt-6">
  <h2 style={{ color: "#fff" }} className="text-lg font-semibold text-center mb-3">
    How to earn USDT payouts
  </h2>

  {/* Combined Steps in One Div */}
  <div
  style={{
    backgroundColor: "transparent", // Background hata diya
    marginTop: "10px",
    border: "2px solid", // Border width set kiya
    borderImage: "linear-gradient(to left, rgb(149, 131, 255), rgba(149, 131, 255, 0.5)) 1", // Border ke liye gradient
    borderRadius: "10px", // Border ko rounded banane ke liye
    padding: "16px" // Andar ka space maintain karne ke liye
  }}
  className="mb-3"
>
  <div className="flex items-center mb-3">
    <img src="\assets\images\tet.png" alt="Task Icon" className="w-8 h-8 mr-3" />
    <p style={{ color: "rgba(169, 172, 175, 1)", marginLeft: "10px" }} className="text-sm text-gray-700">
      Your invited friend must earn <strong>10 USDT</strong> by completing featured offer quests.
    </p>
  </div>

  <div style={{ marginTop: "30px" }} className="flex items-center">
    <img src="\assets\images\bin.png" alt="Bonus Icon" className="w-8 h-8 mr-3" />
    <p style={{ color: "rgba(169, 172, 175, 1)", marginLeft: "10px" }} className="text-sm text-gray-700">
      You and your friend both earn <strong>5 USDT bonus</strong> for every <strong>10 USDT</strong> earned by your friend.
    </p>
  </div>
</div>


  {/* Note */}
  <p  style={{ color: "#a4abc5",marginTop:'20px' }} className="text-xs text-gray-500 text-center mt-3">
    *Repeatable up to 20 times for each friend (100 USDT bonus).
  </p>
</div>

      </div>
    </div>
  );
}
