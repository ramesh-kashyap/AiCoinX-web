import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/footer';
function Account() {
  return (
    <div className="container bg-n900 min-h-dvh relative overflow-hidden flex justify-start items-start text-white pb-28">
      {/* Background Circle */}
      <div className="w-[582px] h-[582px] rounded-full bg-g300 absolute -top-32 -left-20 blur-[575px]"></div>

      <div className="relative z-20 p-6 w-full">
        {/* Header */}
        <div className="flex justify-between items-center">
          <p className="text-2xl font-semibold">ChainMaster</p>
          <div className="flex justify-start items-center gap-3">
            <div className="p-2 rounded-full flex justify-center items-center bg-n700 text-g300">
              <i className="ph ph-headset"></i>
            </div>
            <div className="p-2 rounded-full flex justify-center items-center bg-n700 text-g300">
              <i className="ph ph-bell"></i>
            </div>
          </div>
        </div>

        {/* Account Card */}
        <div className="py-8">
          <a className="w-full flex justify-between items-center gap-6 bg-white bg-opacity-5 p-4 rounded-xl">
            <div className="flex justify-start items-center gap-3">
              <img src="assets/images/account-img-1.png" alt="DigitalNomad" />
              <div>
                <p className="font-semibold">DigitalNomad</p>
                <p className="text-n70 text-sm">digital_nomad456@example.com</p>
              </div>
            </div>
            <i className="ph ph-caret-right text-g300"></i>
          </a>
        </div>

        {/* Wallet Section */}
        <div>
          <p className="text-n70 font-semibold pb-5">Wallet</p>
          <div className="flex flex-col gap-5">
            <Link
              to="/send-to"
              className="rounded-lg p-3 border border-white border-opacity-5 flex justify-between items-center hover:bg-white hover:bg-opacity-5 duration-300 group"
            >
              <div className="flex justify-start items-center gap-3">
                <div className="p-2.5 bg-white bg-opacity-5 flex justify-center items-center rounded-full text-g300 text-xl group-hover:bg-g300 group-hover:text-white group-hover:bg-opacity-100 duration-300">
                  <i className="ph ph-paper-plane-tilt"></i>
                </div>
                <p className="font-semibold">Send</p>
              </div>
              <i className="ph ph-caret-right text-g300"></i>
            </Link>
            <Link
              to="/received"
              className="rounded-lg p-3 border border-white border-opacity-5 flex justify-between items-center hover:bg-white hover:bg-opacity-5 duration-300 group"
            >
              <div className="flex justify-start items-center gap-3">
                <div className="p-2.5 bg-white bg-opacity-5 flex justify-center items-center rounded-full text-g300 text-xl group-hover:bg-g300 group-hover:text-white group-hover:bg-opacity-100 duration-300">
                  <i className="ph ph-download-simple"></i>
                </div>
                <p className="font-semibold">Receive</p>
              </div>
              <i className="ph ph-caret-right text-g300"></i>
            </Link>
            <Link
              to="/swap"
              className="rounded-lg p-3 border border-white border-opacity-5 flex justify-between items-center hover:bg-white hover:bg-opacity-5 duration-300 group"
            >
              <div className="flex justify-start items-center gap-3">
                <div className="p-2.5 bg-white bg-opacity-5 flex justify-center items-center rounded-full text-g300 text-xl group-hover:bg-g300 group-hover:text-white group-hover:bg-opacity-100 duration-300">
                  <i className="ph ph-swap"></i>
                </div>
                <p className="font-semibold">Swap</p>
              </div>
              <i className="ph ph-caret-right text-g300"></i>
            </Link>
            <Link
              to="/buy-sell"
              className="rounded-lg p-3 border border-white border-opacity-5 flex justify-between items-center hover:bg-white hover:bg-opacity-5 duration-300 group"
            >
              <div className="flex justify-start items-center gap-3">
                <div className="p-2.5 bg-white bg-opacity-5 flex justify-center items-center rounded-full text-g300 text-xl group-hover:bg-g300 group-hover:text-white group-hover:bg-opacity-100 duration-300">
                  <i className="ph ph-text-strikethrough"></i>
                </div>
                <p className="font-semibold">Buy & Sell Crypto</p>
              </div>
              <i className="ph ph-caret-right text-g300"></i>
            </Link>
            <Link
              to="/rewards"
              className="rounded-lg p-3 border border-white border-opacity-5 flex justify-between items-center hover:bg-white hover:bg-opacity-5 duration-300 group"
            >
              <div className="flex justify-start items-center gap-3">
                <div className="p-2.5 bg-white bg-opacity-5 flex justify-center items-center rounded-full text-g300 text-xl group-hover:bg-g300 group-hover:text-white group-hover:bg-opacity-100 duration-300">
                  <i className="ph ph-gift"></i>
                </div>
                <p className="font-semibold">Rewards</p>
              </div>
              <i className="ph ph-caret-right text-g300"></i>
            </Link>
            <Link
              to="/pay"
              className="rounded-lg p-3 border border-white border-opacity-5 flex justify-between items-center hover:bg-white hover:bg-opacity-5 duration-300 group"
            >
              <div className="flex justify-start items-center gap-3">
                <div className="p-2.5 bg-white bg-opacity-5 flex justify-center items-center rounded-full text-g300 text-xl group-hover:bg-g300 group-hover:text-white group-hover:bg-opacity-100 duration-300">
                  <i className="ph ph-hand-coins"></i>
                </div>
                <p className="font-semibold">Pay</p>
              </div>
              <i className="ph ph-caret-right text-g300"></i>
            </Link>
            <Link
              to="/address-book"
              className="rounded-lg p-3 border border-white border-opacity-5 flex justify-between items-center hover:bg-white hover:bg-opacity-5 duration-300 group"
            >
              <div className="flex justify-start items-center gap-3">
                <div className="p-2.5 bg-white bg-opacity-5 flex justify-center items-center rounded-full text-g300 text-xl group-hover:bg-g300 group-hover:text-white group-hover:bg-opacity-100 duration-300">
                  <i className="ph ph-address-book"></i>
                </div>
                <p className="font-semibold">Address Book</p>
              </div>
              <i className="ph ph-caret-right text-g300"></i>
            </Link>
            <Link
              to="/custom-tokens"
              className="rounded-lg p-3 border border-white border-opacity-5 flex justify-between items-center hover:bg-white hover:bg-opacity-5 duration-300 group"
            >
              <div className="flex justify-start items-center gap-3">
                <div className="p-2.5 bg-white bg-opacity-5 flex justify-center items-center rounded-full text-g300 text-xl group-hover:bg-g300 group-hover:text-white group-hover:bg-opacity-100 duration-300">
                  <i className="ph ph-file-plus"></i>
                </div>
                <p className="font-semibold">Custom Tokens</p>
              </div>
              <i className="ph ph-caret-right text-g300"></i>
            </Link>
            <Link
              to="/custom-network"
              className="rounded-lg p-3 border border-white border-opacity-5 flex justify-between items-center hover:bg-white hover:bg-opacity-5 duration-300 group"
            >
              <div className="flex justify-start items-center gap-3">
                <div className="p-2.5 bg-white bg-opacity-5 flex justify-center items-center rounded-full text-g300 text-xl group-hover:bg-g300 group-hover:text-white group-hover:bg-opacity-100 duration-300">
                  <i className="ph ph-globe"></i>
                </div>
                <p className="font-semibold">Custom Networks</p>
              </div>
              <i className="ph ph-caret-right text-g300"></i>
            </Link>
          </div>
        </div>

        {/* KleverSafe Section */}
        <div className="pt-8">
          <p className="text-n70 font-semibold pb-5">KleverSafe</p>
          <div className="flex flex-col gap-5">
            <Link
              to="/connect-kleversafe"
              className="rounded-lg p-3 border border-white border-opacity-5 flex justify-between items-center hover:bg-white hover:bg-opacity-5 duration-300 group"
            >
              <div className="flex justify-start items-center gap-3">
                <div className="p-2.5 bg-white bg-opacity-5 flex justify-center items-center rounded-full text-g300 text-xl group-hover:bg-g300 group-hover:text-white group-hover:bg-opacity-100 duration-300">
                  <i className="ph ph-plus-square"></i>
                </div>
                <p className="font-semibold">Connect KleverSafe</p>
              </div>
              <div className="toggle connect-kleversave">
                <div className="circle"></div>
              </div>
            </Link>
            <Link
              to="/hide-accounts"
              className="rounded-lg p-3 border border-white border-opacity-5 flex justify-between items-center hover:bg-white hover:bg-opacity-5 duration-300 group"
            >
              <div className="flex justify-start items-center gap-3">
                <div className="p-2.5 bg-white bg-opacity-5 flex justify-center items-center rounded-full text-g300 text-xl group-hover:bg-g300 group-hover:text-white group-hover:bg-opacity-100 duration-300">
                  <i className="ph ph-eye-slash"></i>
                </div>
                <p className="font-semibold">Hide Accounts</p>
              </div>
              <div className="toggle active hide-account">
                <div className="circle"></div>
              </div>
            </Link>
          </div>
        </div>

        {/* Language and Localization Section */}
        <div className="pt-8">
          <p className="text-n70 font-semibold pb-5">Language and Localization</p>
          <div className="flex flex-col gap-5">
            <Link
              to="/language"
              className="rounded-lg p-3 border border-white border-opacity-5 flex justify-between items-center hover:bg-white hover:bg-opacity-5 duration-300 group"
            >
              <div className="flex justify-start items-center gap-3">
                <div className="p-2.5 bg-white bg-opacity-5 flex justify-center items-center rounded-full text-g300 text-xl group-hover:bg-g300 group-hover:text-white group-hover:bg-opacity-100 duration-300">
                  <i className="ph ph-translate"></i>
                </div>
                <p className="font-semibold">Language</p>
              </div>
              <div className="flex justify-start items-center gap-2">
                <p className="text-n70 text-sm">English</p>
                <i className="ph ph-caret-right text-g300"></i>
              </div>
            </Link>
            <Link
              to="/currency"
              className="rounded-lg p-3 border border-white border-opacity-5 flex justify-between items-center hover:bg-white hover:bg-opacity-5 duration-300 group"
            >
              <div className="flex justify-start items-center gap-3">
                <div className="p-2.5 bg-white bg-opacity-5 flex justify-center items-center rounded-full text-g300 text-xl group-hover:bg-g300 group-hover:text-white group-hover:bg-opacity-100 duration-300">
                  <i className="ph ph-coins"></i>
                </div>
                <p className="font-semibold">Currency</p>
              </div>
              <div className="flex justify-start items-center gap-2">
                <p className="text-n70 text-sm">USD</p>
                <i className="ph ph-caret-right text-g300"></i>
              </div>
            </Link>
          </div>
        </div>

        {/* Security Section */}
        <div className="pt-8">
          <p className="text-n70 font-semibold pb-5">Security</p>
          <div className="flex flex-col gap-5">
            <Link
              to="/security/change-password"
              className="rounded-lg p-3 border border-white border-opacity-5 flex justify-between items-center hover:bg-white hover:bg-opacity-5 duration-300 group"
            >
              <div className="flex justify-start items-center gap-3">
                <div className="p-2.5 bg-white bg-opacity-5 flex justify-center items-center rounded-full text-g300 text-xl group-hover:bg-g300 group-hover:text-white group-hover:bg-opacity-100 duration-300">
                  <i className="ph ph-cardholder"></i>
                </div>
                <p className="font-semibold">Change Password</p>
              </div>
              <i className="ph ph-caret-right text-g300"></i>
            </Link>
            <Link
              to="/backup-wallet"
              className="rounded-lg p-3 border border-white border-opacity-5 flex justify-between items-center hover:bg-white hover:bg-opacity-5 duration-300 group"
            >
              <div className="flex justify-start items-center gap-3">
                <div className="p-2.5 bg-white bg-opacity-5 flex justify-center items-center rounded-full text-g300 text-xl group-hover:bg-g300 group-hover:text-white group-hover:bg-opacity-100 duration-300">
                  <i className="ph ph-wallet"></i>
                </div>
                <p className="font-semibold">Backup Wallet</p>
              </div>
              <i className="ph ph-caret-right text-g300"></i>
            </Link>
            <Link
              to="/secure-wallet"
              className="rounded-lg p-3 border border-white border-opacity-5 flex justify-between items-center hover:bg-white hover:bg-opacity-5 duration-300 group"
            >
              <div className="flex justify-start items-center gap-3">
                <div className="p-2.5 bg-white bg-opacity-5 flex justify-center items-center rounded-full text-g300 text-xl group-hover:bg-g300 group-hover:text-white group-hover:bg-opacity-100 duration-300">
                  <i className="ph ph-trash-simple"></i>
                </div>
                <p className="font-semibold">Reset Wallet</p>
              </div>
              <i className="ph ph-caret-right text-g300"></i>
            </Link>
            <Link
              to="/auto-lock"
              className="rounded-lg p-3 border border-white border-opacity-5 flex justify-between items-center hover:bg-white hover:bg-opacity-5 duration-300 group"
            >
              <div className="flex justify-start items-center gap-3">
                <div className="p-2.5 bg-white bg-opacity-5 flex justify-center items-center rounded-full text-g300 text-xl group-hover:bg-g300 group-hover:text-white group-hover:bg-opacity-100 duration-300">
                  <i className="ph ph-lock"></i>
                </div>
                <p className="font-semibold">Auto Lock</p>
              </div>
              <div className="flex justify-start items-center gap-2">
                <p className="text-n70 text-sm">1 Minute</p>
                <i className="ph ph-caret-right text-g300"></i>
              </div>
            </Link>
            <div
              className="rounded-lg p-3 border border-white border-opacity-5 flex justify-between items-center hover:bg-white hover:bg-opacity-5 duration-300 group cursor-pointer checkBiometricsOpenButton"
            >
              <div className="flex justify-start items-center gap-3">
                <div className="p-2.5 bg-white bg-opacity-5 flex justify-center items-center rounded-full text-g300 text-xl group-hover:bg-g300 group-hover:text-white group-hover:bg-opacity-100 duration-300">
                  <i className="ph ph-fingerprint"></i>
                </div>
                <p className="font-semibold">Active Biometrics</p>
              </div>
              <button>
                <i className="ph ph-caret-right text-g300"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Marketplace Section */}
        <div className="pt-8">
          <p className="text-n70 font-semibold pb-5">Marketplace</p>
          <div className="flex flex-col gap-5">
            <Link
              to="/rewards"
              className="rounded-lg p-3 border border-white border-opacity-5 flex justify-between items-center hover:bg-white hover:bg-opacity-5 duration-300 group"
            >
              <div className="flex justify-start items-center gap-3">
                <div className="p-2.5 bg-white bg-opacity-5 flex justify-center items-center rounded-full text-g300 text-xl group-hover:bg-g300 group-hover:text-white group-hover:bg-opacity-100 duration-300">
                  <i className="ph ph-gift"></i>
                </div>
                <p className="font-semibold">Rewards</p>
              </div>
              <i className="ph ph-caret-right text-g300"></i>
            </Link>
            <Link
              to="/zilliqa"
              className="rounded-lg p-3 border border-white border-opacity-5 flex justify-between items-center hover:bg-white hover:bg-opacity-5 duration-300 group"
            >
              <div className="flex justify-start items-center gap-3">
                <div className="p-2.5 bg-white bg-opacity-5 flex justify-center items-center rounded-full text-g300 text-xl group-hover:bg-g300 group-hover:text-white group-hover:bg-opacity-100 duration-300">
                  <i className="ph ph-coins"></i>
                </div>
                <p className="font-semibold">Zilliqa</p>
              </div>
              <i className="ph ph-caret-right text-g300"></i>
            </Link>
          </div>
        </div>

        {/* User Experience Section */}
        <div className="pt-8">
          <p className="text-n70 font-semibold pb-5">User Experience</p>
          <div className="flex flex-col gap-5">
            <Link
              to="/feature-suggestion"
              className="rounded-lg p-3 border border-white border-opacity-5 flex justify-between items-center hover:bg-white hover:bg-opacity-5 duration-300 group"
            >
              <div className="flex justify-start items-center gap-3">
                <div className="p-2.5 bg-white bg-opacity-5 flex justify-center items-center rounded-full text-g300 text-xl group-hover:bg-g300 group-hover:text-white group-hover:bg-opacity-100 duration-300">
                  <i className="ph ph-gift"></i>
                </div>
                <p className="font-semibold">Feature Suggestion</p>
              </div>
              <div className="flex justify-start items-center gap-2">
                <p className="text-n70 text-sm">English</p>
                <i className="ph ph-caret-right text-g300"></i>
              </div>
            </Link>
          </div>
        </div>

        {/* Support Section */}
        <div className="pt-8">
          <p className="text-n70 font-semibold pb-5">Support</p>
          <div className="flex flex-col gap-5">
            <Link
              to="/help-center"
              className="rounded-lg p-3 border border-white border-opacity-5 flex justify-between items-center hover:bg-white hover:bg-opacity-5 duration-300 group"
            >
              <div className="flex justify-start items-center gap-3">
                <div className="p-2.5 bg-white bg-opacity-5 flex justify-center items-center rounded-full text-g300 text-xl group-hover:bg-g300 group-hover:text-white group-hover:bg-opacity-100 duration-300">
                  <i className="ph ph-question"></i>
                </div>
                <p className="font-semibold">Help Center</p>
              </div>
              <i className="ph ph-caret-right text-g300"></i>
            </Link>
            <Link
              to="/privacy-policy"
              className="rounded-lg p-3 border border-white border-opacity-5 flex justify-between items-center hover:bg-white hover:bg-opacity-5 duration-300 group"
            >
              <div className="flex justify-start items-center gap-3">
                <div className="p-2.5 bg-white bg-opacity-5 flex justify-center items-center rounded-full text-g300 text-xl group-hover:bg-g300 group-hover:text-white group-hover:bg-opacity-100 duration-300">
                  <i className="ph ph-file-lock"></i>
                </div>
                <p className="font-semibold">Privacy Policy</p>
              </div>
              <i className="ph ph-caret-right text-g300"></i>
            </Link>
            <Link
              to="/about"
              className="rounded-lg p-3 border border-white border-opacity-5 flex justify-between items-center hover:bg-white hover:bg-opacity-5 duration-300 group"
            >
              <div className="flex justify-start items-center gap-3">
                <div className="p-2.5 bg-white bg-opacity-5 flex justify-center items-center rounded-full text-g300 text-xl group-hover:bg-g300 group-hover:text-white group-hover:bg-opacity-100 duration-300">
                  <i className="ph ph-paper-plane-tilt"></i>
                </div>
                <p className="font-semibold">About</p>
              </div>
              <i className="ph ph-caret-right text-g300"></i>
            </Link>
          </div>
        </div>

        {/* Social Section */}
        <div className="pt-8">
          <p className="text-n70 font-semibold pb-5">Social</p>
          <div className="flex flex-col gap-5">
            <Link
              to="/telegram"
              className="rounded-lg p-3 border border-white border-opacity-5 flex justify-between items-center hover:bg-white hover:bg-opacity-5 duration-300 group"
            >
              <div className="flex justify-start items-center gap-3">
                <div className="p-2.5 bg-white bg-opacity-5 flex justify-center items-center rounded-full text-g300 text-xl group-hover:bg-g300 group-hover:text-white group-hover:bg-opacity-100 duration-300">
                  <i className="ph ph-telegram-logo"></i>
                </div>
                <p className="font-semibold">Telegram</p>
              </div>
              <i className="ph ph-caret-right text-g300"></i>
            </Link>
            <Link
              to="/youtube"
              className="rounded-lg p-3 border border-white border-opacity-5 flex justify-between items-center hover:bg-white hover:bg-opacity-5 duration-300 group"
            >
              <div className="flex justify-start items-center gap-3">
                <div className="p-2.5 bg-white bg-opacity-5 flex justify-center items-center rounded-full text-g300 text-xl group-hover:bg-g300 group-hover:text-white group-hover:bg-opacity-100 duration-300">
                  <i className="ph ph-youtube-logo"></i>
                </div>
                <p className="font-semibold">YouTube</p>
              </div>
              <i className="ph ph-caret-right text-g300"></i>
            </Link>
            <Link
              to="/linkedin"
              className="rounded-lg p-3 border border-white border-opacity-5 flex justify-between items-center hover:bg-white hover:bg-opacity-5 duration-300 group"
            >
              <div className="flex justify-start items-center gap-3">
                <div className="p-2.5 bg-white bg-opacity-5 flex justify-center items-center rounded-full text-g300 text-xl group-hover:bg-g300 group-hover:text-white group-hover:bg-opacity-100 duration-300">
                  <i className="ph ph-linkedin-logo"></i>
                </div>
                <p className="font-semibold">LinkedIn</p>
              </div>
              <i className="ph ph-caret-right text-g300"></i>
            </Link>
            <Link
              to="/facebook"
              className="rounded-lg p-3 border border-white border-opacity-5 flex justify-between items-center hover:bg-white hover:bg-opacity-5 duration-300 group"
            >
              <div className="flex justify-start items-center gap-3">
                <div className="p-2.5 bg-white bg-opacity-5 flex justify-center items-center rounded-full text-g300 text-xl group-hover:bg-g300 group-hover:text-white group-hover:bg-opacity-100 duration-300">
                  <i className="ph ph-facebook-logo"></i>
                </div>
                <p className="font-semibold">Facebook</p>
              </div>
              <i className="ph ph-caret-right text-g300"></i>
            </Link>
            <Link
              to="/instagram"
              className="rounded-lg p-3 border border-white border-opacity-5 flex justify-between items-center hover:bg-white hover:bg-opacity-5 duration-300 group"
            >
              <div className="flex justify-start items-center gap-3">
                <div className="p-2.5 bg-white bg-opacity-5 flex justify-center items-center rounded-full text-g300 text-xl group-hover:bg-g300 group-hover:text-white group-hover:bg-opacity-100 duration-300">
                  <i className="ph ph-instagram-logo"></i>
                </div>
                <p className="font-semibold">Instagram</p>
              </div>
              <i className="ph ph-caret-right text-g300"></i>
            </Link>
            <Link
              to="/twitter"
              className="rounded-lg p-3 border border-white border-opacity-5 flex justify-between items-center hover:bg-white hover:bg-opacity-5 duration-300 group"
            >
              <div className="flex justify-start items-center gap-3">
                <div className="p-2.5 bg-white bg-opacity-5 flex justify-center items-center rounded-full text-g300 text-xl group-hover:bg-g300 group-hover:text-white group-hover:bg-opacity-100 duration-300">
                  <i className="ph ph-twitter-logo"></i>
                </div>
                <p className="font-semibold">Twitter</p>
              </div>
              <i className="ph ph-caret-right text-g300"></i>
            </Link>
            <Link
              to="/discord"
              className="rounded-lg p-3 border border-white border-opacity-5 flex justify-between items-center hover:bg-white hover:bg-opacity-5 duration-300 group"
            >
              <div className="flex justify-start items-center gap-3">
                <div className="p-2.5 bg-white bg-opacity-5 flex justify-center items-center rounded-full text-g300 text-xl group-hover:bg-g300 group-hover:text-white group-hover:bg-opacity-100 duration-300">
                  <i className="ph ph-discord-logo"></i>
                </div>
                <p className="font-semibold">Discord</p>
              </div>
              <i className="ph ph-caret-right text-g300"></i>
            </Link>
            <Link
              to="/newsletter"
              className="rounded-lg p-3 border border-white border-opacity-5 flex justify-between items-center hover:bg-white hover:bg-opacity-5 duration-300 group"
            >
              <div className="flex justify-start items-center gap-3">
                <div className="p-2.5 bg-white bg-opacity-5 flex justify-center items-center rounded-full text-g300 text-xl group-hover:bg-g300 group-hover:text-white group-hover:bg-opacity-100 duration-300">
                  <i className="ph ph-bookmark-simple"></i>
                </div>
                <p className="font-semibold">Newsletter</p>
              </div>
              <i className="ph ph-caret-right text-g300"></i>
            </Link>
            <button className="rounded-lg p-3 border border-white border-opacity-5 flex justify-between items-center hover:bg-white hover:bg-opacity-5 duration-300 group logoutModalOpenButton">
              <div className="flex justify-start items-center gap-3">
                <div className="p-2.5 bg-white bg-opacity-5 flex justify-center items-center rounded-full text-g300 text-xl group-hover:bg-g300 group-hover:text-white group-hover:bg-opacity-100 duration-300">
                  <i className="ph ph-arrows-down-up"></i>
                </div>
                <p className="font-semibold">Logout</p>
              </div>
            </button>
          </div>
        </div>

        {/* Tab Area (Footer Navigation) */}
        <Footer />
        {/* End Tab Area */}

        {/* Hidden Modals */}
        <div className="hidden inset-0 z-40 checkBiometrics">
          <div className="container bg-white bg-opacity-10 flex justify-end items-end h-full">
            <div className="bg-n900 px-6 pt-3 pb-6 w-full rounded-t-[31px] relative">
              <div className="flex justify-center items-center">
                <div className="w-16 h-1 bg-white bg-opacity-5 rounded-full"></div>
              </div>
              <h2 className="text-xl font-semibold text-center pt-8">
                Check your biometrics
              </h2>
              <button className="absolute top-4 right-4 text-2xl text-g300 checkBiometricsCloseButton">
                <i className="ph ph-x-circle"></i>
              </button>
              <div className="flex flex-col gap-4 pt-8">
                <div className="text-[100px] text-g300 flex justify-center items-center">
                  <i className="ph ph-fingerprint"></i>
                </div>
                <div className="text-center">
                  <p className="text-xs text-n70">Touch the fingerprint sensor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden inset-0 z-40 logoutModal">
          <div className="container bg-white bg-opacity-10 flex justify-end items-end h-full">
            <div className="bg-n900 px-6 pt-3 pb-6 w-full rounded-t-[31px] relative">
              <div className="flex justify-center items-center">
                <div className="w-16 h-1 bg-white bg-opacity-5 rounded-full"></div>
              </div>
              <h2 className="text-2xl font-semibold text-center pt-8 text-g300 pb-5">
                Logout
              </h2>
              <div className="pt-5 border-t border-dashed border-white border-opacity-10">
                <p className="text-n70 text-center">
                  Are you sure you want to log out of your account?
                </p>
              </div>
              <div className="w-full pt-12 flex justify-between items-center gap-3">
                <button className="block text-g300 border border-g300 bg-white bg-opacity-5 font-semibold text-center py-3 rounded-lg w-full logoutModalCloseButton">
                  Cancel
                </button>
                <a href="" className="block bg-g300 font-semibold text-center py-3 rounded-lg w-full">
                  Yes, Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
