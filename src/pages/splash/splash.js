import React from 'react';

function Splash() {
  return (
    <>
      {/* Splash Modal */}
      {/* <div className="fixed inset-0 z-20 splashModal">
        <div className="container bg-n900 h-dvh relative overflow-hidden flex justify-center items-center text-white">
          <div className="w-[582px] h-[582px] rounded-full bg-g300 absolute -top-24 -left-20 blur-[575px]"></div>

          <div className="size-[105px] rounded-full bg-white opacity-5 top-40 -left-14 absolute"></div>
          <div className="size-[105px] rounded-full bg-white opacity-5 top-20 -right-14 absolute"></div>
          <div className="size-[105px] rounded-full bg-white opacity-5 bottom-10 -left-14 absolute"></div>
          <div className="size-[105px] rounded-full bg-white opacity-5 bottom-40 -right-14 absolute"></div>

          <div className="flex flex-col justify-center items-center gap-4">
            <img src="assets/images/logo.png" alt="Logo" />
            <p className="text-3xl font-bold">
              Chain <span className="text-g300">Master</span>
            </p>
          </div>
        </div>
      </div> */}

      {/* Main Content */}
      <div className="container bg-n900 h-dvh relative overflow-hidden flex justify-center items-center text-white">
        <div className="w-[582px] h-[582px] rounded-full bg-g300 absolute -top-32 -left-20 blur-[575px]"></div>
        <div className="swiper onboarding-steps-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="p-6 relative z-20">
                <img src="assets/images/onboarding-slider-img-1.png" alt="Slide 1" />
                <div className="pt-8">
                  <p className="text-3xl font-bold">
                    Top Web3 <span className="text-g300"> Crypto Solution </span> Today
                  </p>
                  <p className="text-n70 text-sm pt-5">
                    Discover the leading Web3 crypto solution for secure and efficient transactions.
                  </p>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="p-6 relative z-20">
                <img src="assets/images/onboarding-slider-img-2.png" alt="Slide 2" />
                <div className="pt-8">
                  <p className="text-3xl font-bold">
                    Premier Choice <span className="text-g300">Crypto Web3 </span> App
                  </p>
                  <p className="text-n70 text-sm pt-5">
                    Explore our premier choice crypto web3 app for seamless transactions and security.
                  </p>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="p-6 relative z-20">
                <img src="assets/images/onboarding-slider-img-3.png" alt="Slide 3" />
                <div className="pt-8">
                  <p className="text-3xl font-bold">
                    Trending <span className="text-g300"> Crypto Made Simple </span> Now
                  </p>
                  <p className="text-n70 text-sm pt-5">
                    Experience streamlined crypto trading with our intuitive platform. Start trading effortlessly today!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center w-full px-6">
            <div className="swiper-pagination onBoardingsliderPagingation"></div>
            <div className="nextButton">
              <div className="ara-next">
                <button className="text-white flex justify-center items-center bg-g300 rounded-full text-2xl p-4">
                  <i className="ph ph-caret-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Splash;

