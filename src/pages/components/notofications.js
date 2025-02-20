import React from 'react';
import { Link } from 'react-router-dom'; // Uncomment if using React Router

function Notification() {
  return (
    <div className="container bg-n900 min-h-dvh relative overflow-hidden flex justify-start items-start text-white">
      <div className="w-[582px] h-[582px] rounded-full bg-g300 absolute -top-32 -left-20 blur-[575px]"></div>

      <div className="px-6 py-8 relative z-20 w-full">
        <div className="flex justify-start items-center pb-8 mr-8">
          {/* Replace with <Link> if using React Router */}
          <Link
            to="/home"
            className="flex justify-center items-center p-2 rounded-full bg-g300 text-n900"
          >
            <i className="ph-bold ph-caret-left"></i>
          </Link>
          <div className="flex justify-center items-center w-full">
            <h1 className="font-semibold text-2xl">Notification</h1>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center pt-6 text-center">
          <img src="assets/images/not-found-illus.png" alt="Not found illustration" />
          <h1 className="text-2xl font-semibold pt-10">Nothing to show here.</h1>
          <p className="text-sm text-n70 pt-10">
            Currently, there is nothing to show. Please check back later for updates or new content.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Notification;
