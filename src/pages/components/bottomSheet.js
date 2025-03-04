import zIndex from "@mui/material/styles/zIndex";
import React , { useState,useEffect }from "react";
import { FaCreditCard, FaArrowDown, FaExchangeAlt, FaArrowUp } from "react-icons/fa";

const BottomSheet = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const styles = {
    overlay: {
      position: "fixed",
      zIndex:10,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.3)",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center",
    },
    sheet: {
      width: "425px",
    
      backgroundColor: "rgb(32, 35, 56)",
      borderRadius: "20px 20px 0 0",
      padding: "20px",
      boxShadow: "0px -4px 10px rgba(0,0,0,0.1)",
      
    },
    handle: {
      width: "50px",
      height: "5px",
      backgroundColor: "#ccc",
      borderRadius: "10px",
      margin: "auto",
    },
    option: {
      display: "flex",
      alignItems: "center",
      padding: "15px",
      borderBottom: "1px solid #eee",
      cursor: "pointer",
      fontSize: "16px",
    },
    icon: {
      marginRight: "15px",
      color: "#6a0dad",
      fontSize: "20px",
    },
    arrow: {
      marginLeft: "auto",
      color: "#999",
    },
  };

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.sheet} onClick={(e) => e.stopPropagation()}>
        {/* Handle Bar */}
        <div style={styles.handle}></div>

        {/* Options */}
        <div style={styles.option}>
          <FaCreditCard style={styles.icon} />
          <div>
            <strong>Buy</strong>
            <p style={{ margin: "0", fontSize: "12px", color: "#fff" }}>
              Buy crypto with card or bank transfer
            </p>
          </div>
          <span style={styles.arrow}>›</span>
        </div>

        <div style={styles.option}>
          <FaArrowDown style={styles.icon} />
          <div>
            <strong>Deposit</strong>
            <p style={{ margin: "0", fontSize: "12px", color: "#fff" }}>
              Deposit tokens from other wallets
            </p>
          </div>
          <span style={styles.arrow}>›</span>
        </div>

        <div style={styles.option}>
          <FaExchangeAlt style={styles.icon} />
          <div>
            <strong>Swap</strong>
            <p style={{ margin: "0", fontSize: "12px", color: "#fff" }}>
              Exchange one token for another
            </p>
          </div>
          <span style={styles.arrow}>›</span>
        </div>

        <div style={styles.option}>
          <FaArrowUp style={styles.icon} />
          <div>
            <strong>Send</strong>
            <p style={{ margin: "0", fontSize: "12px", color: "#fff" }}>
              Transfer tokens to other wallets
            </p>
          </div>
          <span style={styles.arrow}>›</span>
        </div>
      </div>
    </div>
  );
};

export default BottomSheet;
