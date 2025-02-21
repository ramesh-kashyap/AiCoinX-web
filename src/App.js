import logo from './logo.svg';
import './App.css';
import { BrowserRouter  as Router, Route, Routes, Navigate } from 'react-router-dom';
// import Splash from './pages';


import Register from './pages/auth/registerScreen';
import CreatePassword from './pages/auth/createPasswordScreen';
import SecureWallet from './pages/auth/secureWalletScreen';
import SeedPhrase from './pages/auth/seedPharseScreen';
import ConfirmSeedPhrase from './pages/auth/confirmseedPharseScreen';
import ChooseAccount from './pages/auth/chooseAccountScreen';
import Home from './pages/dashboard/homeScreen';
import Browser from './pages/dashboard/browerScreen';
import Marketplace from './pages/dashboard/marketScreen';
import Account from './pages/dashboard/profileScreen';
import SendTo from './pages/profile/wallet/send';
import Received from './pages/profile/wallet/recieved';
import Swap from './pages/profile/wallet/swap';
import About from './pages/support/about';
import PrivacyPolicy from './pages/support/privacy-policy';
import Language from './pages/profile/language/language';
import Currency from './pages/profile/language/currency';
import AddToken from './pages/dashboard/home/addToken';
import TopGainers from './pages/dashboard/home/topGainers';
import TopLosers from './pages/dashboard/home/topLosers';
import Notification from './pages/components/notofications';
import Splash from './pages/splash';
import Tokentransaction from './pages/invest/Tokentransaction';
import Receiveds from './pages/invest/Receiveds';
import Swaps from './pages/invest/Swaps';
import Buysells from './pages/invest/Buysells';
import Fromswap from './pages/invest/Fromswap';

function App() {
  return (
    <Router>
         
    <Routes>
      {/* Home Routes */}
        <Route path="/" element={<Splash />} />
      
        <Route path="/register" element={<Register />} />
        <Route path="/create-password" element={<CreatePassword />} />
        <Route path="/secure-wallet" element={<SecureWallet />} />
        <Route path="/seed-phrase" element={<SeedPhrase />} />
        <Route path="/confirm-seed-phrase" element={<ConfirmSeedPhrase />} />
        <Route path="/choose-account" element={<ChooseAccount />} />
        <Route path="/home" element={<Home />} />
        <Route path="/browser" element={<Browser />} />
        <Route path="/market" element={<Marketplace />} />
        <Route path="/account" element={<Account />} />
        <Route path="/sent-to" element={<SendTo />} />
        <Route path="/received" element={<Received />} />
        <Route path="/swap" element={<Swap />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/language" element={<Language />} />
        <Route path="/currency" element={<Currency />} />
        <Route path="/add-token" element={<AddToken />} />
        <Route path="/top-gainers" element={<TopGainers />} />
        <Route path="/top-losers" element={<TopLosers />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/token-transaction" element={<Tokentransaction />} />
        <Route path="/invest/received" element={<Receiveds/>} />
        <Route path="/invest/swaps" element={<Swaps/>} />
        <Route path="/invest/buysells" element={<Buysells/>} />
        <Route path="/invest/swap-from" element={<Fromswap/>} />





    </Routes>
  </Router>
  );
}


export default App;
