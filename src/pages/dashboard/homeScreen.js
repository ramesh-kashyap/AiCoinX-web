import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/footer';
import AirdropCard from '../components/airDrop';
import NewsCard from '../components/newsComponent';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import Api from '../../service/Api';
import WalletBalance from '../components/wallet';
// Connect to your backend Socket.IO server (adjust the URL/port if needed)

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('tokens');
  const [coinData, setCoinData] = useState(null);
  const [news, setNews] = useState(null);
  const [user, setUser] = useState(null);
  const [balance, setBalance] = useState(null);
   const [liveData, setLiveData] = useState({ topGainers: [], topLosers: [] });
   const fetchNewsData = async () => {  try {
    // Fetch news data (adjust the endpoint as needed)
    const newsResponse = await Api.get('/news'); 
    if(newsResponse.data.status){
    setNews(newsResponse.data.data);
    setUser(newsResponse.data.userData[0].fullname);
    console.log('News data:', newsResponse.data.userData[0].fullname);
  }else {
    console.error('Failed to fetch balance:', newsResponse.data);
}
 
  } catch (error) {
    console.error('Error fetching news data:', error);
  }
}
const fetchGetBalance = async () => {  try {
  // Fetch news data (adjust the endpoint as needed)
  const response = await Api.get('/getBalance'); 
  if(response.data.status){
    setBalance(response.data.data.
      available_balance);
    console.log('Balance data:', response.data);
  }else {
    console.error('Failed to fetch balance:', response.data);
}
 
} catch (error) {
  console.error('Error fetching news data:', error);
}
}
  useEffect(() => {
    // Function to fetch data from the backend
    const fetchData = async () => {
      try {
        const response = await Api.get('/live-data'); // or the full URL if needed
        setLiveData(response.data);
        console.log('data:', response.data);
      } catch (error) {
        console.error('Error fetching live data:', error);
      }
    };
    fetchGetBalance();
    fetchData();
    fetchNewsData();
    // Optional: Refresh data every 10 seconds
    const interval = setInterval(fetchData, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container bg-n900 relative overflow-hidden flex justify-start items-start text-white pb-36">
      <div className="w-[582px] h-[582px] rounded-full bg-g300/10 absolute -top-48 -left-20 blur-[575px]"></div>
      <div className="relative z-20 w-full">
        {/* Header Card */}
        <div className="bg-white bg-opacity-5 py-8 px-6 rounded-b-3xl">
          <div className="flex justify-between items-center">
            <div className="flex justify-start items-center gap-2">
               <Link to="/currency">
              <img src="\assets\images\userIcon.edc1c75ce595e5bb3b239b6d69ec9cf4.svg" alt="Account" />
              </Link>
              <p className="text-sm">Welcome Back, <br />{user 
    ? user.charAt(0).toUpperCase() + user.slice(1) 
    : "Guest"}</p> 
              
            </div>
            <div className="flex justify-start items-center gap-2">
                     <Link to="/security/refferals-user" 
             
                className="flex justify-center items-center text-xl p-2 text-g100 rounded-full bg-white bg-opacity-5"   style={{
                  background: "linear-gradient(to bottom, #9583ff 0%, #bbaaff 30%, #bbaaff 30%)",


                  color: '#fff'
                }}
              >
                <i className="ph ph-gift" style={{ marginRight: "8px" }}></i> <p className="text-sm" style={{ fontWeight: 'bold' }}> For friends</p>
              </Link>
              <Link
                to="/notification"
                className="flex justify-center items-center text-xl p-2 text-g300 rounded-full bg-white bg-opacity-5" 
              >
                <i className="ph ph-bell" style={{colo:'#fff' }}></i>
              </Link>
            </div>
          </div>
          <AirdropCard/>
          <div className="py-8">
            {/* <p className="text-n70 text-sm">Your available balance</p>
            <div className="flex justify-start items-center gap-2">
              <img src="assets/images/ok3d.png" alt="ok3d"  style={{ maxWidth: "12%" }} />
              <p className="text-[32px] font-bold text-white relative">
            {balance}
                <span className="text-sm font-normal text-g300 absolute top-1 -right-14">
                 
                </span>
              </p>
            </div> */}
            <WalletBalance balance={balance} />
            <p className="text-sm text-n70">
              {/* <span className="text-g300">$</span>210.44 (USD) */}
            </p>
            <div className="my-6 w-full border border-white border-opacity-5 border-dashed"></div>
            <div className="flex justify-around items-center">
            <Link
                  to={`https://thirdparty.com/invest/swaps?userid=12&amount=12`}
                  target="_blank"
                className="flex flex-col justify-center items-center gap-2"
              >
                <div className="flex justify-center items-center p-4 text-xl bg-white bg-opacity-5 rounded-full text-g300">
                <i className="ph-fill ph-swap"></i>
                </div>
                <p className="text-white font-semibold text-sm">Swap</p>
              </Link>

              <Link
                to="/withdraw"
                className="flex flex-col justify-center items-center gap-2"
              >
                <div className="flex justify-center items-center p-4 text-xl bg-white bg-opacity-5 rounded-full text-g300">
                <i className="ph-fill ph-currency-dollar"></i>
                </div>
                <p className="text-white font-semibold text-sm">Withdraw</p>
              </Link>
             
              <Link
                to="/invest"
                className="flex flex-col justify-center items-center gap-2"
              >
                <div className="flex justify-center items-center p-4 text-xl bg-white bg-opacity-5 rounded-full text-g300">
                <i className="ph-fill ph-wallet"></i> 
                </div>
                <p className="text-white font-semibold text-sm">Stake</p>
              </Link>
              <Link
                to="/invest/Depositreport"
                className="flex flex-col justify-center items-center gap-2"
              >
                <div className="flex justify-center items-center p-4 text-xl bg-white bg-opacity-5 rounded-full text-g300">
               <i className="fas fa-history"></i>
                </div>
                <p className="text-white font-semibold text-sm">History</p>
              </Link>
            </div>
          </div>
        </div>

        {/* Tab Section */}
      

       

        {/* Invite Section */}
        <Link to='/security/refferals-user'>
        <div className="px-6 pt-8" style={{ paddingTop: "1rem" }} >
          <div className="w-full  p-5 flex justify-between items-center rounded-xl relative bg-opacity-20 overflow-hidden" style={{
           color: '#fff',
          // backgroundColor: 'rgba(255,255,255,0.9)', // White bg with 5% opacity
        }}>
            <img
              src="assets/images/invite_bg.png"
              alt="Invite Background"
              className="absolute top-0 right-0 bottom-0 h-full"
            />
            <div className="max-w-[200px]">
              <p className="text-xl font-semibold">
                Invite a friends and get <span className="text-g300">5%</span>
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
        </Link>
        <div className="homeTab pt-8 px-6" style={{ paddingTop: "1rem" }}>
          <ul className="tab-button flex justify-between items-center text-lg font-semibold">
            <li id="tabOne" onClick={() => setActiveTab('tokens')} className={`tabButton w-full text-center pb-2 border-b-2 border-n700 ${activeTab === 'tokens' ? 'activeTabButton' : ''}`}>
            Top Gainers
            </li>
            <li id="tabTwo" onClick={() => setActiveTab('nft')}  className={`tabButton w-full text-center pb-2 border-b-2 border-n700 ${activeTab === 'nft' ? 'activeTabButton' : ''}`}>
            Top Losers
            </li>
           
          </ul>
          {liveData ? (
          <div className="pt-8">
          {activeTab === 'tokens' && (
         <div className="flex flex-col gap-2 pt-5">

{liveData.topGainers.map((coin, index) => (
         <div className="flex justify-between items-center bg-white bg-opacity-5 p-4 rounded-xl" style={{ paddingTop: "1rem" }}>
           <div className="flex justify-start items-center gap-2">
             {/* <p className="text-sm text-n70">#01</p> */}
             <div className="text-g300 flex justify-center items-center size-10 rounded-full text-xl bg-white bg-opacity-5">
               <img src={coin.icon} alt={coin.name} />
             </div>
             <p className="font-semibold">{coin.name}</p>
           </div>
           <div className="flex flex-col justify-end items-end">
             <p className="font-semibold">${coin.price.toFixed(2)}</p>
             <p className="text-g300 text-sm">+{coin.percentage.toFixed(2)}%</p>
           </div>
         </div>
          ))}
      
        
       </div>
              )}
            {activeTab === 'nft' && (
             <div className="flex flex-col gap-2 pt-5">
            {liveData.topLosers.map((coin, index) => (
         <div className="flex justify-between items-center bg-white bg-opacity-5 rounded-xl" style={{ paddingTop: "1rem" }}>
           <div className="flex justify-start items-center gap-2">
             {/* <p className="text-sm text-n70">#01</p> */}
             <div className="text-g300 flex justify-center items-center size-10 rounded-full text-xl bg-white bg-opacity-5">
               <img src={coin.icon} alt={coin.name} />
             </div>
             <p className="font-semibold">{coin.name}</p>
           </div>
           <div className="flex flex-col justify-end items-end">
             <p className="font-semibold">${coin.price.toFixed(2)}</p>
             <p className="text-red-400 text-sm">{coin.percentage.toFixed(2)}%</p>
           </div>
         </div>
          ))}
          
        
           </div>
             )}
              
          </div>
           ) : (
            <p>Loading coin data...</p>
          )}
        </div>
       

       
        
         {/* Trending Token Section */}
         <div className="px-6 pt-8" style={{ paddingTop: "1rem" }}>
      <h1 className="text-xl font-semibold">Trending News</h1>

      <Swiper
        slidesPerView={"auto"}
        spaceBetween={20}
     
        pagination={{ clickable: true , el: ".swiper-pagination",}}
        autoplay={{
          delay: 3000, // 3 seconds delay
          disableOnInteraction: false, // Keeps autoplay even after user interaction
        }}
        loop={true} // Infinite looping
        modules={[FreeMode, Pagination, Autoplay]}
        className="pt-5 pb-3"
        style={{ position: "relative" }}
      >
        {news?.length > 0 ? (
          news.map((item) => (
            <SwiperSlide key={item.id} style={{ width: "180px" }}>
              <NewsCard
                image={item.image}
                title={item.title}
                paragraph={item.paragraph}
                created_at={item.created_at}
              />
            </SwiperSlide>
          ))
        ) : (
          <p>No news available.</p>
        )}
        <div
    className="swiper-pagination"
    style={{
      position: "absolute",
      bottom: "100px", // Adjust for spacing
      left: "92%",
      transform: "translateX(-50%)",
      textAlign: "center",
      zIndex: 10,
    }}
  ></div>
      </Swiper>
    </div>
        {/* Tab Area Start */}
        <Footer />
        {/* Tab Area End */}
      </div>
    </div>
  );
}

export default Home;
