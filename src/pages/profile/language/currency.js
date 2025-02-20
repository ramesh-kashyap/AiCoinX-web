import React from 'react';
// Uncomment the following line if you are using React Router for navigation
// import { Link } from 'react-router-dom';

function Currency() {
  return (
    <div className="container bg-n900 min-h-dvh relative overflow-hidden flex justify-start items-start text-white">
      <div className="w-[582px] h-[582px] rounded-full bg-g300 absolute -top-32 -left-20 blur-[575px]"></div>
      <div className="px-6 py-8 relative z-20 w-full">
        <div className="flex justify-start items-center pb-8 mr-8">
          {/* Replace with Link if needed */}
          <a
            href="import-seed.html"
            className="flex justify-center items-center p-2 rounded-full bg-g300 text-n900"
          >
            <i className="ph-bold ph-caret-left"></i>
          </a>
          <div className="flex justify-center items-center w-full">
            <h1 className="font-semibold text-2xl">Currency</h1>
          </div>
        </div>
        <div className="flex justify-between items-center gap-4 bg-white bg-opacity-5 rounded-lg py-3 px-4">
          <input
            type="text"
            placeholder="Search Crypto Network"
            className="outline-none bg-transparent w-full text-n70 placeholder:text-n70 text-sm"
          />
          <div>
            <i className="ph ph-magnifying-glass text-g300 text-xl"></i>
          </div>
        </div>
        <div className="py-6 border border-white border-opacity-10 flex flex-col gap-5 mt-8 rounded-2xl">
          <p className="border-b border-dashed border-white border-opacity-10 pb-5 px-6">
            USD : United States
          </p>
          <p className="border-b border-dashed border-white border-opacity-10 pb-5 px-6">
            EUR : Eurozone Germany, France, Italy
          </p>
          <p className="border-b border-dashed border-white border-opacity-10 pb-5 px-6">
            GBP : British Pound Sterling
          </p>
          <p className="border-b border-dashed border-white border-opacity-10 pb-5 px-6">
            JPY : Japanese Yen
          </p>
          <p className="border-b border-dashed border-white border-opacity-10 pb-5 px-6">
            CHF : Swiss Franc
          </p>
          <p className="border-b border-dashed border-white border-opacity-10 pb-5 px-6">
            CAD : Canadian Dollar
          </p>
          <p className="border-b border-dashed border-white border-opacity-10 pb-5 px-6">
            AUD : Australian Dollar
          </p>
          <p className="border-b border-dashed border-white border-opacity-10 pb-5 px-6">
            NZD : New Zealand Dollar
          </p>
          <p className="border-b border-dashed border-white border-opacity-10 pb-5 px-6">
            CNY : Chinese Yuan
          </p>
          <p className="border-b border-dashed border-white border-opacity-10 pb-5 px-6">
            INR : Indian Rupee
          </p>
          <p className="px-6">BRL : Brazilian Real</p>
        </div>
      </div>
    </div>
  );
}

export default Currency;
