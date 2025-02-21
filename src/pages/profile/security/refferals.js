import React, { useState } from "react";
import { Clipboard } from "react-copy-to-clipboard";
import { CheckCircle, Clipboard as ClipboardIcon } from "lucide-react";

const ReferralProgram = () => {
  const [copied, setCopied] = useState(false);
  const referralLink = "https://join.klinkfinance.com/n...";

  return (
    <div className="flex flex-col items-center bg-gray-100 p-6 min-h-screen">
      {/* Header */}
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-5">
        <h1 className="text-lg font-semibold text-center">Referral Program ℹ️</h1>

        {/* Banner */}
        <div className="bg-purple-600 text-white rounded-lg p-6 mt-4 text-center">
          <h2 className="text-xl font-bold mt-3">Invite friends and earn up to</h2>
          <h2 className="text-2xl font-bold mt-1 text-green-300">💲100 USDT</h2>
          <p className="text-sm mt-2 opacity-80">
            Earn a permanent bonus based on your friend's earnings for every successful referral.
          </p>

          {/* Referral Link */}
          <div className="bg-white flex justify-between items-center px-4 py-2 rounded-md mt-4">
            <input
              type="text"
              value={referralLink}
              className="w-full text-sm text-gray-900 outline-none bg-transparent"
              readOnly
            />
            <Clipboard text={referralLink} onCopy={() => setCopied(true)}>
              <button>{copied ? <CheckCircle size={24} color="green" /> : <ClipboardIcon size={24} color="purple" />}</button>
            </Clipboard>
          </div>

          {/* Invite Button */}
          <button className="mt-4 bg-black text-white w-full py-2 rounded-lg font-semibold">
            Invite Friends
          </button>

          <p className="text-xs mt-2 opacity-75">*Invite must use your unique link.</p>
        </div>

        {/* Referral Performance */}
        <div className="mt-6">
          <h3 className="text-md font-semibold">Referral Performance</h3>
          <div className="flex justify-between mt-3">
            <div className="bg-gray-200 p-4 rounded-lg w-1/2 mr-2 text-center">
              <p className="text-gray-600 text-sm">Referral Earnings</p>
              <p className="text-lg font-bold">0</p>
            </div>
            <div className="bg-gray-200 p-4 rounded-lg w-1/2 ml-2 text-center">
              <p className="text-gray-600 text-sm">Successful Referrals</p>
              <p className="text-lg font-bold">0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralProgram;
