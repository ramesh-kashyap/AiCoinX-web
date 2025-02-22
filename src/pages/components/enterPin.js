import React, { useState } from "react";
import { startAuthentication } from "@simplewebauthn/browser";

function EnterPin() {
  const [pin, setPin] = useState("");

  // Add a digit if the PIN has less than 4 digits.
  const handleDigitClick = (digit) => {
    if (pin.length < 4) {
      setPin(pin + digit);
    }
  };

  // Remove the last digit.
  const handleBackspace = () => {
    setPin(pin.slice(0, -1));
  };

  // Use WebAuthn for fingerprint/biometric authentication.
  const handleFingerprintAuth = async () => {
    try {
      // Fetch the authentication options from your server.
      const optionsResponse = await fetch("/auth/generate-authentication-options");
      const options = await optionsResponse.json();

      // Initiate the authentication ceremony.
      const authResponse = await startAuthentication(options);

      // Send the response to your server for verification.
      const verificationResponse = await fetch("/auth/verify-authentication", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(authResponse),
      });

      if (verificationResponse.ok) {
        alert("Fingerprint authentication successful");
      } else {
        alert("Fingerprint authentication failed");
      }
    } catch (error) {
      console.error(error);
      alert("Fingerprint authentication failed");
    }
  };

  // Render four circles, filling in a dot if a digit is present.
  const renderPinDots = () => {
    return (
      <div style={styles.pinDisplay}>
        {[0, 1, 2, 3].map((i) => (
          <div key={i} style={styles.pinDot}>
            {pin[i] ? <div style={styles.filledDot} /> : null}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="container relative overflow-hidden justify-start items-start text-white">
      <div className="w-[582px] h-[582px] rounded-full bg-g300 absolute -top-48 -left-20 blur-[575px]"></div>
      <div style={styles.container}  className="bg-n900">
        {/* Top Logo (Placeholder) */}
        <div style={styles.logoContainer}>
          {/* Replace this with your actual logo/image */}
          <svg width="50" height="50" viewBox="0 0 50 50">
            <circle cx="25" cy="25" r="25" fill="#000" />
            <circle cx="35" cy="15" r="8" fill="#6f49ed" />
          </svg>
        </div>

        {/* Title & Subtitle */}
        <h1 style={styles.title}>Enter Pin!</h1>
        <p style={styles.subtitle}>
          Enter your four digit Pin to create a new Pin
        </p>

        {/* PIN Dots */}
        {renderPinDots()}

        {/* Keypad */}
        <div style={styles.keypad}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button
              key={num}
              style={styles.keyButton}
              onClick={() => handleDigitClick(num.toString())}
            >
              {num}
            </button>
          ))}

          {/* Spacer */}
          <div />

          <button style={styles.keyButton} onClick={() => handleDigitClick("0")}>
            0
          </button>

          <button style={styles.keyButton} onClick={handleBackspace}>
            ✕
          </button>
        </div>

        {/* Fingerprint Authentication Button */}
        <button
          style={styles.fingerprintButton}
          onClick={handleFingerprintAuth}
        >
          <svg width="30" height="30" viewBox="0 0 24 24">
            <path
              fill="#6f49ed"
              d="M12,12C15.31,12 18,9.31 18,6C18,2.69 15.31,0 12,0C8.69,0 6,2.69 6,6C6,9.31 8.69,12 12,12M12,14C7.03,14 2.84,17.11 1,22H23C21.16,17.11 17,14 12,14Z"
            />
          </svg>
          <span style={styles.fingerprintText}>Use Fingerprint</span>
        </button>

        {/* Forgot Pin link */}
        <a href="#!" style={styles.forgotPin}>
          Forgot Pin?
        </a>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: 'rgb(17 22 27)',
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2rem 1rem",
    fontFamily: "sans-serif",
    color: "#000",
 
  },
  logoContainer: {
    marginBottom: "1.5rem",
    marginTop: "2rem",
  },
  title: {
    margin: 0,
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#fff",
  },
  subtitle: {
    margin: "0.5rem 0 2rem 0",
    fontSize: "0.95rem",
    color: "#fff",
    textAlign: "center",
    maxWidth: "300px",
  },
  pinDisplay: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "1.5rem",
  },
  pinDot: {
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    border: "2px solid #ccc",
    margin: "0 5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  filledDot: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor: "#000",
  },
  keypad: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 60px)",
    gridGap: "1rem",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "1.5rem",
  },
  keyButton: {
    width: "60px",
    height: "60px",
    fontSize: "1.5rem",
    borderRadius: "50%",
    border: "1px solid #ccc",
    backgroundColor: "#fff",
    cursor: "pointer",
    outline: "none",
  },
  fingerprintButton: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#fff",
    border: "1px solid #6f49ed",
    padding: "0.5rem 1rem",
    borderRadius: "8px",
    cursor: "pointer",
    outline: "none",
    marginBottom: "1rem",
  },
  fingerprintText: {
    marginLeft: "0.5rem",
    color: "#6f49ed",
    fontSize: "1rem",
    fontWeight: "500",
  },
  forgotPin: {
    marginTop: "auto",
    color: "#6f49ed",
    textDecoration: "none",
    fontWeight: "500",
  },
};

export default EnterPin;
