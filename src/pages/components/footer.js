import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="fixed left-0 right-0 bottom-0">
      <div className="container relative bg-white bg-opacity-5 py-5 flex justify-around items-center after:absolute after:bg-n700 after:inset-0">
        <div className="absolute left-[41%] bottom-[72px] z-40">
          <a href="#" className="bg-g300 text-2xl p-3.5 rounded-full flex justify-center items-center relative">
            <i className="ph ph-arrows-counter-clockwise"></i>
            <div className="absolute -bottom-2 -left-5 -right-5 -z-10">
              <img src="assets/images/reload-bg.png" alt="Reload" />
            </div>
          </a>
        </div>
        <Link to="/home" className="flex flex-col justify-center items-center gap-1 relative z-20">
       
          <i className="ph ph-house text-2xl text-g300"></i>
          <p className="text-xs font-semibold">Home</p>
        
        </Link>
        <Link to="/browser" className="flex flex-col justify-center items-center gap-1 z-20">
          <i className="ph ph-globe text-2xl"></i>
          <p className="text-xs font-semibold">Browser</p>
        </Link>
        <Link to="/market" className="flex flex-col justify-center items-center gap-1 z-20">
          <i className="ph ph-align-bottom text-2xl"></i>
          <p className="text-xs font-semibold">Marketplace</p>
        </Link>
        <Link to="/account" className="flex flex-col justify-center items-center gap-1 z-20">
          <i className="ph ph-user text-2xl"></i>
          <p className="text-xs font-semibold">Account</p>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
