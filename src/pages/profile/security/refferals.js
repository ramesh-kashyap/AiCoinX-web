import { useRef } from "react";
import { Link } from "react-router-dom";

export default function ReferralProgram() {
  const inputRef = useRef(null);

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
        <div style={{ backgroundColor: "#9583ff" }} className="bg-purple-700 p-5 rounded-lg mt-5 text-center">
  <img src="/assets/images/referral-3272324_1280.webp" alt="Referral" className="mx-auto mb-4 w-32 h-32" />
  
  <h2 className="text-lg font-bold">Invite friends and earn up to</h2>

  {/* 100 USDT with icon in one line */}
  <p className="text-2xl font-bold text-green-400 flex items-center justify-center">
    <img src="\assets\images\crypto_icon.png" alt="Crypto Icon" className="w-8 h-8 mr-2" />
    100 USDT
  </p>

  <p style={{ marginBottom: "10px" }} className="text-sm text-gray-200 mt-2">
    Earn a permanent bonus based on your friend's earnings for every successful referral.
  </p>

          {/* Referral Link */}
          <div className="bg-white text-black p-2 rounded-md flex justify-between items-center mt-4">
            <input type="text" ref={inputRef} value="http://localhost:3000/ref" className="bg-transparent w-full text-sm px-2" readOnly />
            <button onClick={copyToClipboard} className="text-blue-600">
              <i className="ph-bold ph-copy"></i>
            </button>
          </div>

          {/* Invite Button */}
          <button style={{ backgroundColor: "rgba(0, 0, 0, 1)", marginTop: "16px" }} className="bg-black px-5 py-2 rounded-full text-white mt-3 w-full">
            Invite Friends
          </button>
        </div>

        {/* Referral Performance */}
        <div className="mt-6">
          <h2 style={{ color: "#fff" }} className="text-lg font-semibold mb-3">Referral Performance</h2>
          <div style={{ marginTop: "10px" }} className="grid grid-cols-2 gap-4">
            <div  style={{ backgroundColor: "#1d252b" }} className="p-4 rounded-lg text-center">
              <p style={{ color: "rgba(169, 172, 175, 1)" }} className="text-sm text-gray-400">Referral Earnings</p>
              <p style={{ color: "#fff" }} className="text-xl font-bold">0</p>
            </div>
            <div style={{ backgroundColor: "#1d252b" }} className="p-4 rounded-lg text-center">
              <p style={{ color: "rgba(169, 172, 175, 1)" }} className="text-sm text-gray-400">Successful Referrals</p>
              <p style={{ color: "#1d8711" }} className="text-xl font-bold">0</p>
            </div>
          </div>
        </div>

        {/* How to Earn USDT Payouts */}
        <div className="mt-6">
  <h2 style={{ color: "#fff" }} className="text-lg font-semibold text-center mb-3">
    How to earn USDT payouts
  </h2>

  {/* Combined Steps in One Div */}
  <div style={{ backgroundColor: "#1d252b",marginTop:'10px' }} className="p-4 rounded-lg mb-3">
    <div className="flex items-center mb-3">
      <img src="\assets\images\tet.png" alt="Task Icon" className="w-8 h-8 mr-3" />
      <p style={{ color: "rgba(169, 172, 175, 1)",marginLeft:'10px' }} className="text-sm text-gray-700">
        Your invited friend must earn <strong>10 USDT</strong> by completing featured offer quests.
      </p>
    </div>

    <div style={{ marginTop: "30px" }} className="flex items-center">
      <img src="\assets\images\bin.png" alt="Bonus Icon" className="w-8 h-8 mr-3" />
      <p style={{ color: "rgba(169, 172, 175, 1)",marginLeft:'10px'}} className="text-sm text-gray-700">
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
