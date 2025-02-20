import logo from './logo.svg';
import './App.css';
import { BrowserRouter  as Router, Route, Routes, Navigate } from 'react-router-dom';
import Splash from './pages/splash/splash';
import Register from './pages/splash/auth/registerScreen';
import CreatePassword from './pages/splash/auth/createPasswordScreen';
import SecureWallet from './pages/splash/auth/secureWalletScreen';
import SeedPhrase from './pages/splash/auth/seedPharseScreen';
import ConfirmSeedPhrase from './pages/splash/auth/confirmseedPharseScreen';
import ChooseAccount from './pages/splash/auth/chooseAccountScreen';
import Home from './pages/splash/dashboard/homeScreen';
import Browser from './pages/splash/dashboard/browerScreen';
import Marketplace from './pages/splash/dashboard/marketScreen';
import Account from './pages/splash/dashboard/profileScreen';
import SendTo from './pages/splash/profile/wallet/send';
import Received from './pages/splash/profile/wallet/recieved';
import Swap from './pages/splash/profile/wallet/swap';
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
    </Routes>
  </Router>
  );
}

export default App;
