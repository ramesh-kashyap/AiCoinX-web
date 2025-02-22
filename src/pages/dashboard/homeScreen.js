import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/footer';
function Home() {
  const [activeTab, setActiveTab] = useState('tokens');
  return (
    <div className="container bg-n900 relative overflow-hidden flex justify-start items-start text-white pb-36">
      <div className="w-[582px] h-[582px] rounded-full bg-g300/10 absolute -top-48 -left-20 blur-[575px]"></div>
      <div className="relative z-20 w-full">
        {/* Header Card */}
        <div className="bg-white bg-opacity-5 py-8 px-6 rounded-b-3xl">
          <div className="flex justify-between items-center">
            <div className="flex justify-start items-center gap-2">
              <img src="assets/images/account-img-1.png" alt="Account" />
              <p className="text-sm">Hello, TechWhiz</p>
            </div>
            <div className="flex justify-start items-center gap-2">
              <a
                href="#"
                className="flex justify-center items-center text-xl p-2 text-g300 rounded-full bg-white bg-opacity-5"
              >
                <i className="ph ph-scan"></i>
              </a>
              <Link
                to="/notification"
                className="flex justify-center items-center text-xl p-2 text-g300 rounded-full bg-white bg-opacity-5"
              >
                <i className="ph ph-bell"></i>
              </Link>
            </div>
          </div>
          <div className="py-8">
            <p className="text-n70 text-sm">Your available balance</p>
            <div className="flex justify-start items-center gap-2">
              <img src="assets/images/1INCH_icon.png" alt="1INCH Icon" />
              <p className="text-[32px] font-bold text-white relative">
                0.180275565
                <span className="text-sm font-normal text-g300 absolute top-1 -right-14">
                  (1INCH)
                </span>
              </p>
            </div>
            <p className="text-sm text-n70">
              <span className="text-g300">$</span>210.44 (USD)
            </p>
            <div className="my-6 w-full border border-white border-opacity-5 border-dashed"></div>
            <div className="flex justify-around items-center">
              <Link
                to="/token-transaction"
                className="flex flex-col justify-center items-center gap-2"
              >
                <div className="flex justify-center items-center p-4 text-xl bg-white bg-opacity-5 rounded-full text-g300">
                  <i className="ph-fill ph-paper-plane-tilt"></i>
                </div>
                <p className="text-white font-semibold text-sm">Send</p>
              </Link>
              <Link
                to="/invest"
                className="flex flex-col justify-center items-center gap-2"
              >
                <div className="flex justify-center items-center p-4 text-xl bg-white bg-opacity-5 rounded-full text-g300">
                  <i className="ph-fill ph-download-simple"></i>
                </div>
                <p className="text-white font-semibold text-sm">Deposit</p>
              </Link>
              <Link
                to="/invest/swaps"
                className="flex flex-col justify-center items-center gap-2"
              >
                <div className="flex justify-center items-center p-4 text-xl bg-white bg-opacity-5 rounded-full text-g300">
                  <i className="ph-fill ph-arrows-down-up"></i>
                </div>
                <p className="text-white font-semibold text-sm">Swap</p>
              </Link>
              <Link
                to="/invest/buysells"
                className="flex flex-col justify-center items-center gap-2"
              >
                <div className="flex justify-center items-center p-4 text-xl bg-white bg-opacity-5 rounded-full text-g300">
                  <i className="ph-fill ph-swap"></i>
                </div>
                <p className="text-white font-semibold text-sm">Buy & Sell</p>
              </Link>
            </div>
          </div>
        </div>

        {/* Tab Section */}
        <div className="homeTab pt-8 px-6">
          <ul className="tab-button flex justify-between items-center text-lg font-semibold">
            <li id="tabOne" onClick={() => setActiveTab('tokens')} className={`tabButton w-full text-center pb-2 border-b-2 border-n700 ${activeTab === 'tokens' ? 'activeTabButton' : ''}`}>
              Tokens
            </li>
            <li id="tabTwo" onClick={() => setActiveTab('nft')}  className={`tabButton w-full text-center pb-2 border-b-2 border-n700 ${activeTab === 'nft' ? 'activeTabButton' : ''}`}>
              NFT
            </li>
            <li id="tabThree"  onClick={() => setActiveTab('activity')} className={`tabButton w-full text-center pb-2 border-b-2 border-n700 ${activeTab === 'activity' ? 'activeTabButton' : ''}`}>
              Activity
            </li>
          </ul>
          <div className="pt-8">
          {activeTab === 'tokens' && (
            <div className="tab-content activeTab" id="tabOne_data">
              <div className="flex justify-between items-center">
                <p className="text-xl font-semibold">Tokens</p>
                <p className="text-sm text-g300">View All</p>
              </div>
              <div className="flex flex-col gap-3 pt-5">
                <div className="flex justify-between items-center p-4 rounded-xl bg-white bg-opacity-5">
                  <div className="flex justify-start items-start gap-3">
                    <div className="p-2 rounded-full bg-white bg-opacity-5 flex justify-center items-center size-12">
                      <img src="assets/images/Ethereum_ETH.png" alt="Ethereum" />
                    </div>
                    <div>
                      <p className="font-semibold pb-2">Ether</p>
                      <p className="text-sm text-n70">0.01564 ETH</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold">$120.00 USD</p>
                    <p className="text-sm text-g300 pt-2">+$44.00 USD</p>
                  </div>
                </div>
                <div className="flex justify-between items-center p-4 rounded-xl bg-white bg-opacity-5">
                  <div className="flex justify-start items-start gap-3">
                    <div className="p-2 rounded-full bg-white bg-opacity-5 flex justify-center items-center size-12">
                      <img src="assets/images/Bitcoin_icon.png" alt="Bitcoin" />
                    </div>
                    <div>
                      <p className="font-semibold pb-2">Bitcoin</p>
                      <p className="text-sm text-n70">0.01564 BTC</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold">$140.00 USD</p>
                    <p className="text-sm text-g300 pt-2">+$42.00 USD</p>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <Link
                  to="/add-token"
                  className="p-3 border border-dashed border-g300 rounded-xl w-full flex justify-center items-center gap-3 text-g300 font-medium"
                >
                  <span className="flex justify-center items-center p-1 text-n900 bg-g300 rounded-full">
                    <i className="ph ph-sliders-horizontal"></i>
                  </span>
                  Add Custom Token
                </Link>
              </div>
            </div>
              )}
            {activeTab === 'nft' && (
            <div className="tab-content " id="tabTwo_data">
              <ul className="flex justify-start items-center gap-3 overflow-y-auto">
                <li className="flex justify-center items-center gap-1 py-2 px-4 rounded-md text-n900 bg-g300 border border-g300">
                  All <i className="ph ph-caret-right"></i>
                </li>
                <li className="flex justify-center items-center gap-1 py-2 px-4 rounded-md border border-g300">
                  All <i className="ph ph-caret-right"></i>
                </li>
              </ul>
              <div className="flex justify-between items-center pt-8">
                <p className="text-xl font-semibold">Popular Collection</p>
                <p className="text-sm text-g300">View All</p>
              </div>
              <div className="flex justify-between items-center gap-5 pt-5">
                <div className="rounded-xl overflow-hidden">
                  <img src="assets/images/nft-tab-img-1.png" alt="NFT 1" />
                  <div className="bg-white bg-opacity-5 p-3 flex justify-between items-start">
                    <div className="flex justify-start items-start flex-col gap-2">
                      <p className="text-sm font-semibold">Abstract Lava</p>
                      <div className="flex justify-center items-center bg-white bg-opacity-5 py-1 px-2 rounded-md gap-1">
                        <img src="assets/images/Ethereum_ETH.png" alt="Ethereum" className="h-4" />
                        <p className="text-xs text-n70 font-medium">148.50k</p>
                      </div>
                    </div>
                    <button>
                      <i className="ph ph-dots-three-vertical"></i>
                    </button>
                  </div>
                </div>
                <div className="rounded-xl overflow-hidden">
                  <img src="assets/images/nft-tab-img-2.png" alt="NFT 2" />
                  <div className="bg-white bg-opacity-5 p-3 flex justify-between items-start">
                    <div className="flex justify-start items-start flex-col gap-2">
                      <p className="text-sm font-semibold">ArtVibes NFT</p>
                      <div className="flex justify-center items-center bg-white bg-opacity-5 py-1 px-2 rounded-md gap-1">
                        <img src="assets/images/Bitcoin_icon.png" alt="Bitcoin" className="h-4" />
                        <p className="text-xs text-n70 font-medium">164.44k</p>
                      </div>
                    </div>
                    <button>
                      <i className="ph ph-dots-three-vertical"></i>
                    </button>
                  </div>
                </div>
                {/* <div className="rounded-xl overflow-hidden">
                  <img src="assets/images/nft-tab-img-3.png" alt="NFT 3" />
                  <div className="bg-white bg-opacity-5 p-3 flex justify-between items-start">
                    <div className="flex justify-start items-start flex-col gap-2">
                      <p className="text-sm font-semibold">Crypto Punk</p>
                      <div className="flex justify-center items-center bg-white bg-opacity-5 py-1 px-2 rounded-md gap-1">
                        <img src="assets/images/Ethereum_ETH.png" alt="Ethereum" className="h-4" />
                        <p className="text-xs text-n70 font-medium">99.10k</p>
                      </div>
                    </div>
                    <button>
                      <i className="ph ph-dots-three-vertical"></i>
                    </button>
                  </div>
                </div> */}
              </div>
            </div>
             )}
              {activeTab === 'activity' && (
            <div className="tab-content " id="tabThree_data">
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center border-b border-white border-opacity-5 pb-4">
                  <div className="flex justify-start items-center gap-2">
                    <div className="text-g300 flex justify-center items-center p-2 rounded-full text-xl bg-white bg-opacity-5">
                      <i className="ph ph-arrow-up"></i>
                    </div>
                    <p className="font-semibold">0.01564 ETH</p>
                  </div>
                  <div className="flex flex-col justify-end items-end">
                    <p className="font-semibold">Top up</p>
                    <p className="text-g300 text-sm">1 hour ago</p>
                  </div>
                </div>
                <div className="flex justify-between items-center border-b border-white border-opacity-5 pb-4">
                  <div className="flex justify-start items-center gap-2">
                    <div className="text-g300 flex justify-center items-center p-2 rounded-full text-xl bg-white bg-opacity-5">
                      <i className="ph ph-arrow-up-right"></i>
                    </div>
                    <p className="font-semibold">0.01564 BTC</p>
                  </div>
                  <div className="flex flex-col justify-end items-end">
                    <p className="font-semibold">Send</p>
                    <p className="text-g300 text-sm">1 hour ago</p>
                  </div>
                </div>
                <div className="flex justify-between items-center border-b border-white border-opacity-5 pb-4">
                  <div className="flex justify-start items-center gap-2">
                    <div className="text-g300 flex justify-center items-center p-2 rounded-full text-xl bg-white bg-opacity-5">
                      <i className="ph ph-arrow-down"></i>
                    </div>
                    <p className="font-semibold">0.01564 NEO</p>
                  </div>
                  <div className="flex flex-col justify-end items-end">
                    <p className="font-semibold">Receive</p>
                    <p className="text-g300 text-sm">1 hour ago</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex justify-start items-center gap-2">
                    <div className="text-g300 flex justify-center items-center p-2 rounded-full text-xl bg-white bg-opacity-5">
                      <i className="ph ph-arrow-up"></i>
                    </div>
                    <p className="font-semibold">0.01564 EOS</p>
                  </div>
                  <div className="flex flex-col justify-end items-end">
                    <p className="font-semibold">Top up</p>
                    <p className="text-g300 text-sm">1 hour ago</p>
                  </div>
                </div>
              </div>
            </div>
            )}
          </div>
        </div>

       

        {/* Invite Section */}
        <div className="px-6 pt-8">
          <div className="w-full bg-g300 p-5 flex justify-between items-center rounded-xl relative bg-opacity-20 overflow-hidden">
            <img
              src="assets/images/invite_bg.png"
              alt="Invite Background"
              className="absolute top-0 right-0 bottom-0 h-full"
            />
            <div className="max-w-[200px]">
              <p className="text-xl font-semibold">
                Invite a friends and get <span className="text-g300">$</span>20
              </p>
              <p className="text-n70 pt-4 text-xs">
                This section can be used as an Advertisement or a Call to Action
              </p>
            </div>
            <div>
              <img src="assets/images/invite_img.png" alt="Invite" />
            </div>
          </div>
        </div>

        {/* Top Gainers */}
        <div className="px-6 pt-8">
          <div className="flex justify-between items-center">
            <p className="text-xl font-semibold">Top Gainers</p>
            <Link to="/top-gainers" className="text-sm text-g300">
              View All
            </Link>
          </div>
          <div className="flex flex-col gap-2 pt-5">
            <div className="flex justify-between items-center bg-white bg-opacity-5 p-4 rounded-xl">
              <div className="flex justify-start items-center gap-2">
                <p className="text-sm text-n70">#01</p>
                <div className="text-g300 flex justify-center items-center size-10 rounded-full text-xl bg-white bg-opacity-5">
                  <img src="assets/images/Ethereum_ETH.png" alt="Ethereum" />
                </div>
                <p className="font-semibold">Ethereum</p>
              </div>
              <div className="flex flex-col justify-end items-end">
                <p className="font-semibold">$0.272889</p>
                <p className="text-g300 text-sm">+8.00%</p>
              </div>
            </div>
            <div className="flex justify-between items-center bg-white bg-opacity-5 p-4 rounded-xl">
              <div className="flex justify-start items-center gap-2">
                <p className="text-sm text-n70">#02</p>
                <div className="text-g300 flex justify-center items-center size-10 rounded-full text-xl bg-white bg-opacity-5">
                  <img src="assets/images/Bitcoin_icon.png" alt="Bitcoin" />
                </div>
                <p className="font-semibold">Bitcoin</p>
              </div>
              <div className="flex flex-col justify-end items-end">
                <p className="font-semibold">$0.432586</p>
                <p className="text-g300 text-sm">+3.00%</p>
              </div>
            </div>
            <div className="flex justify-between items-center bg-white bg-opacity-5 p-4 rounded-xl">
              <div className="flex justify-start items-center gap-2">
                <p className="text-sm text-n70">#03</p>
                <div className="text-g300 flex justify-center items-center size-10 rounded-full text-xl bg-white bg-opacity-5">
                  <img src="assets/images/Litecoin.png" alt="Litecoin" />
                </div>
                <p className="font-semibold">Litecoin</p>
              </div>
              <div className="flex flex-col justify-end items-end">
                <p className="font-semibold">$0.692657</p>
                <p className="text-g300 text-sm">+2.00%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Top Losers */}
        <div className="px-6 pt-8">
          <div className="flex justify-between items-center">
            <p className="text-xl font-semibold">Top Losers</p>
            <Link to="/top-losers" className="text-sm text-g300">
              View All
            </Link>
          </div>
          <div className="flex flex-col gap-2 pt-5">
            <div className="flex justify-between items-center bg-white bg-opacity-5 p-4 rounded-xl">
              <div className="flex justify-start items-center gap-2">
                <p className="text-sm text-n70">#01</p>
                <div className="text-g300 flex justify-center items-center size-10 rounded-full text-xl bg-white bg-opacity-5">
                  <img src="assets/images/Stellar.png" alt="Stellar" />
                </div>
                <p className="font-semibold">Steller</p>
              </div>
              <div className="flex flex-col justify-end items-end">
                <p className="font-semibold">$0.413953</p>
                <p className="text-red-400 text-sm">-9.00%</p>
              </div>
            </div>
            <div className="flex justify-between items-center bg-white bg-opacity-5 p-4 rounded-xl">
              <div className="flex justify-start items-center gap-2">
                <p className="text-sm text-n70">#02</p>
                <div className="text-g300 flex justify-center items-center size-10 rounded-full text-xl bg-white bg-opacity-5">
                  <img src="assets/images/NEO.png" alt="NEO" />
                </div>
                <p className="font-semibold">NEO</p>
              </div>
              <div className="flex flex-col justify-end items-end">
                <p className="font-semibold">$0.528384</p>
                <p className="text-red-400 text-sm">-1.00%</p>
              </div>
            </div>
            <div className="flex justify-between items-center bg-white bg-opacity-5 p-4 rounded-xl">
              <div className="flex justify-start items-center gap-2">
                <p className="text-sm text-n70">#03</p>
                <div className="text-g300 flex justify-center items-center size-10 rounded-full text-xl bg-white bg-opacity-5">
                  <img src="assets/images/Zcash.png" alt="Zcash" />
                </div>
                <p className="font-semibold">Zcash</p>
              </div>
              <div className="flex flex-col justify-end items-end">
                <p className="font-semibold">$0.690803</p>
                <p className="text-red-400 text-sm">-3.00%</p>
              </div>
            </div>
          </div>
        </div>
        
         {/* Trending Token Section */}
         <div className="px-6 pt-8">
          <h1 className="text-xl font-semibold">Trending News</h1>
          <div className="flex justify-start items-center gap-4 pt-5 overflow-x-auto vertical-scrollbar pb-3">
            <div className="bg-white bg-opacity-5 rounded-xl p-3">
              <div className="flex justify-between items-center gap-6">
                <div className="p-3 bg-g300 rounded-md">
                  <img src="assets/images/trending-token-logo1.png" alt="Trending Token 1" />
                </div>
                <div className="flex justify-start items-center text-g300 text-xs">
                  <i className="ph ph-arrow-up"></i>
                  <span>10.5%</span>
                </div>
              </div>
              <div className="flex justify-between items-center gap-6 pt-3">
                <div>
                  <p className="font-semibold uppercase">USDT</p>
                  <p className="font-medium text-n70">148.50k</p>
                </div>
                <div className="w-12">
                  <img src="assets/images/trend-graph.png" alt="Trend Graph" />
                </div>
              </div>
            </div>
            <div className="bg-white bg-opacity-5 rounded-xl p-3">
              <div className="flex justify-between items-center gap-6">
                <div className="p-3 bg-g300 rounded-md">
                  <img src="assets/images/trending-token-logo3.png" alt="Trending Token 3" />
                </div>
                <div className="flex justify-start items-center text-g300 text-xs">
                  <i className="ph ph-arrow-up"></i>
                  <span>7.5%</span>
                </div>
              </div>
              <div className="flex justify-between items-center gap-6 pt-3">
                <div>
                  <p className="font-semibold uppercase">BIT</p>
                  <p className="font-medium text-n70">148.50k</p>
                </div>
                <div className="w-12">
                  <img src="assets/images/trend-graph.png" alt="Trend Graph" />
                </div>
              </div>
            </div>
            <div className="bg-white bg-opacity-5 rounded-xl p-3">
              <div className="flex justify-between items-center gap-6">
                <div className="p-3 bg-g300 rounded-md">
                  <img src="assets/images/trending-token-logo2.png" alt="Trending Token 2" />
                </div>
                <div className="flex justify-start items-center text-g300 text-xs">
                  <i className="ph ph-arrow-up"></i>
                  <span>4.9%</span>
                </div>
              </div>
              <div className="flex justify-between items-center gap-6 pt-3">
                <div>
                  <p className="font-semibold uppercase">USDT</p>
                  <p className="font-medium text-n70">148.50k</p>
                </div>
                <div className="w-12">
                  <img src="assets/images/trend-graph.png" alt="Trend Graph" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Tab Area Start */}
        <Footer />
        {/* Tab Area End */}
      </div>
    </div>
  );
}

export default Home;
