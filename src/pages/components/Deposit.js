import React from 'react';
import { Link } from 'react-router-dom';

function Deposit() {
  return (
    <div className="container bg-n900 min-h-dvh relative overflow-hidden flex justify-start items-start text-white">
      {/* Background Circle */}
      <div className="w-[582px] h-[582px] rounded-full bg-g300 absolute -top-32 -left-20 blur-[575px]"></div>

      <div className="relative z-20 w-full">
        {/* Swap Header Card */}
        <div className=" hidden px-6 pt-6 pb-8 bg-white bg-opacity-5 w-full rounded-b-[32px]">
          <div className="flex justify-center items-center flex-col gap-2 w-full pb-8">
            <h1 className="text-2xl font-semibold text-center">John Doe</h1>
            <div className="px-4 py-2 rounded-lg bg-white bg-opacity-5 flex justify-between items-center gap-2">
              <div className="flex justify-start items-center gap-1">
                <p className="text-n70 text-xs uppercase">USD</p>
              </div>
              <i className="ph ph-caret-down text-g300"></i>
            </div>
          </div>

          {/* Swap From */}
          <div className="flex justify-between items-start">
            <div>
              <p className="text-n70 text-sm">Swap From</p>
              <div className="flex justify-start items-center gap-2">
                <p className="text-[32px] font-bold text-white relative">
                  <span className="text-g300">$</span>210.44
                  <span className="text-sm font-normal text-g300 absolute top-1 -right-14">
                    (USDs)
                  </span>
                </p>
              </div>
            </div>
            <Link
              to="/invest/swap-from"
              className="px-4 py-2 rounded-lg bg-white bg-opacity-5 flex justify-between items-center gap-2"
            >
              <div className="flex justify-start items-center gap-1">
                <p className="text-n70 text-xs uppercase">USD</p>
              </div>
              <i className="ph ph-caret-right text-g300"></i>
            </Link>
          </div>

          {/* Divider */}
          <div className="flex justify-between items-start">
            <div className="my-6 w-full border border-white border-opacity-5 border-dashed"></div>
          </div>

          {/* Swap To */}
          <div className="flex justify-between items-start">
            <div>
              <p className="text-n70 text-sm">Swap To</p>
              <div className="flex justify-start items-center gap-2">
                <img src="/assets/images/1INCH_icon.png" alt="1INCH" />
                <p className="text-[32px] font-bold text-white relative">
                  0.18025
                  <span className="text-sm font-normal text-g300 absolute top-1 -right-14">
                    (1INCH)
                  </span>
                </p>
              </div>
            </div>
            <Link
              to="/invest/swap-from"
              className="px-4 py-2 rounded-lg bg-white bg-opacity-5 flex justify-between items-center gap-2"
            >
              <div className="flex justify-start items-center gap-1">
                <p className="text-n70 text-xs uppercase">1INCH</p>
              </div>
              <i className="ph ph-caret-right text-g300"></i>
            </Link>
          </div>
        </div>

        {/* Exchange Rate Display */}
        <p className="text-center pt-12 text-sm text-n70">
        </p>

        {/* Continue Button */}
        <div className="w-full pt-20 px-6">
         
        </div>

        {/* Swap Modal (Hidden by default; toggle via state/event handling) */}
        <div className=" inset-0 z-40 swapModal">
          <div className="container bg-white bg-opacity-10 flex justify-end items-end h-full" style={{background: '#48457e;'}}> 
            <div className="bg-n900 px-6 pt-3 pb-6 w-full rounded-t-[31px] relative">
              <div className="flex justify-center items-center">
                <div className="w-16 h-1 bg-white bg-opacity-5 rounded-full"></div>
              </div>
              <h2 className="text-xl font-semibold text-center pt-8 pb-5">Select Currency</h2>
              {/* <button className="absolute top-4 right-4 text-2xl text-g300 swapModalCloseButton">
                <i className="ph ph-x-circle"></i>
              </button> */}


              <div className="flex justify-between items-center p-4 rounded-xl bg-white bg-opacity-5" style={{marginBottom: '20px'}}>
                  <div className="flex justify-start items-start gap-3">
                    <div className="p-2 rounded-full bg-white bg-opacity-5 flex justify-center items-center size-12">
                      <img src="assets/images/tet.png" alt="Bitcoin" />
                    </div>
                    <div>
                      <p className="font-semibold pb-2">UsdtBep20</p>
                      {/* <p className="text-sm text-n70">0.01564 BTC</p> */}
                    </div>
                  </div>
                  <div>
                    {/* <p className="font-semibold">$140.00 USD</p> */}
                    {/* <p className="text-sm text-g300 pt-2">	UsdtBep20</p> */}
                  </div>
                </div>

                <div className="flex justify-between items-center p-4 rounded-xl bg-white bg-opacity-5">
                  <div className="flex justify-start items-start gap-3">
                    <div className="p-2 rounded-full bg-white bg-opacity-5 flex justify-center items-center size-12">
                      <img src="assets/images/tet.png" alt="Bitcoin" />
                    </div>
                    <div>
                      <p className="font-semibold pb-2">UsdtTrc20</p>
                    </div>
                  </div>
                  <div>
                  {/* <p className="text-sm text-g300 pt-2">UsdtTrc20</p> */}
                  </div>
                </div>

 <deposit/>
              
              <div className="w-full pt-8">
                <Link
                  to="/invest/depositconfirm"
                  className="block bg-g300 font-semibold text-center py-3 rounded-lg"
                >
                  Save
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Deposit;
