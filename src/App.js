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
      <Route path="/" element={<Register />} />
      
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
