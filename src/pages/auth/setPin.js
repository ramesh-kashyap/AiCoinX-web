import React, { useState, useEffect } from "react";
import Api from "../../service/Api";
import { useLocation,useNavigate } from "react-router-dom";


function SetPin() {
  const location = useLocation();
  const [step, setStep] = useState("setPin"); // 'setPin' -> Set PIN, 'confirmPin' -> Confirm PIN
  const [pin, setPin] = useState("");
  const navigate = useNavigate();
  const email = location.state?.email || "";
  useEffect(() => {
    if (!email) {
      navigate("/register"); // Agar email nahi mili to register page bhejo
    }
  }, [email, navigate]);

  // ✅ Handle PIN Entry
  const handleDigitClick = (digit) => {
    if (pin.length < 4) {
      const newPin = pin + digit.toString();
      setPin(newPin);
      if (newPin.length === 4) {
        verifyPin(newPin); // PIN complete hone ke baad API call
      }
    }
  };
  
  // ✅ Remove Last PIN Digit
  const handleBackspace = () => {
    setPin((prevPin) => prevPin.slice(0, -1));
  };

  const verifyPin = async (pin) => {
    console.log("Email being sent to backend:", email);  // Debug Email being sent
    try {
      const response = await Api.post("/set-pin", { email, pin });
      console.log("API Response:", response.data); // Debug API Response
      if (response.data.status) {
        const { token } = response.data;
      localStorage.setItem("authToken", token);
      navigate("/home");
      } else {
        alert("Error setting PIN.");
      }
    } catch (error) {
      console.error("API Error:", error.response?.data?.error || "Unknown Error");
    }
};

  

  return (
    <div className="container relative overflow-hidden justify-start items-start text-white">
      <div className="w-[582px] h-[582px] rounded-full bg-g300 absolute -top-48 -left-20 blur-[575px]"></div>
      <div style={styles.container} className="bg-n900">
        
        {/* Logo */}
        <div style={{marginBottom:"20px"}}>
          <img style={{width:"70px"}} alt="Profile picture of a person with sunglasses" className="w-12 h-12 rounded-full" height="50" src="\assets\images\userIcon.edc1c75ce595e5bb3b239b6d69ec9cf4.svg" width="50"/>

        </div>

        {/* Title & Subtitle */}
        <h1 style={styles.title}>Set PIN</h1>
        <p style={styles.subtitle}>Enter a 4-digit PIN</p>

        {/* PIN Dots */}
        <div style={styles.pinDisplay}>
          {[0, 1, 2, 3].map((i) => (
            <div key={i} style={styles.pinDot}>
              {pin[i] ? <div style={styles.filledDot} /> : null}
            </div>
          ))}
        </div>

        {/* Keypad */}
        <div style={styles.keypad}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button key={num} style={styles.keyButton} onClick={() => handleDigitClick(num)}>
              {num}
            </button>
          ))}

          {/* Empty Space for Layout */}
          <div />

          {/* Zero Button */}
          <button style={styles.keyButton} onClick={() => handleDigitClick(0)}>
            0
          </button>

          {/* Backspace Button */}
          <button style={styles.keyButton} onClick={handleBackspace}>
            ✕
          </button>
        </div>

        {/* Forgot PIN Link */}
        <a href="#!" style={styles.forgotPin}>Forgot PIN?</a>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "rgb(17 22 27)",
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
    backgroundColor: "#fff",
  },
  keypad: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",  // Ensures uniform spacing
    gridTemplateRows: "repeat(4, 60px)",   // Ensures correct layout
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
    position: "relative",  // Ensure it's not hidden behind other elements
    zIndex: 10,  // Bring buttons to the front
},
  forgotPin: {
    marginTop: "auto",
    color: "#6f49ed",
    textDecoration: "none",
    fontWeight: "500",
  },
};

export default SetPin;
