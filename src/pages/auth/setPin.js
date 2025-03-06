import React, { useState , useEffect  } from "react";
import Api from "../../service/Api";
import { useLocation,useNavigate } from "react-router-dom";

function SetPin() {
  const location = useLocation();
  const [step, setStep] = useState("setPin"); // 'setPin' -> Set PIN, 'confirmPin' -> Confirm PIN
  const [pin, setPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");
  const navigate = useNavigate();
  const email = location.state?.email || "";
  useEffect(() => {
    if (!email) {
      navigate("/register"); // Agar email nahi mili to register page bhejo
    }
  }, [email, navigate]);
  // ✅ Handle PIN Entry
  const handleDigitClick = (digit) => {
    if (step === "setPin") {
      if (pin.length < 4) {
        const newPin = pin + digit.toString();
        setPin(newPin);
        if (newPin.length === 4) {
          setStep("confirmPin"); // Move to confirm step
        }
      }
    } else {
      if (confirmPin.length < 4) {
        const newConfirmPin = confirmPin + digit.toString();
        setConfirmPin(newConfirmPin);
        if (newConfirmPin.length === 4) {
          verifyPin(pin, newConfirmPin); // Call API once both PINs are entered
        }
      }
    }
  };

  // ✅ Remove Last PIN Digit
  const handleBackspace = () => {
    if (step === "setPin") {
      setPin((prevPin) => prevPin.slice(0, -1));
    } else {
      setConfirmPin((prevPin) => prevPin.slice(0, -1));
    }
  };

  // ✅ Verify PINs and Call API
  const verifyPin = async (enteredPin, confirmedPin) => {
    if (enteredPin !== confirmedPin) {
      alert("PINs do not match! Try again.");
      setPin("");
      setConfirmPin("");
      setStep("setPin");
      return;
    }

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
        <h1 style={styles.title}>{step === "setPin" ? "Set PIN" : "Confirm PIN"}</h1>
        <p style={styles.subtitle}>
          {step === "setPin" ? "Enter a 4-digit PIN" : "Confirm your 4-digit PIN"}
        </p>

        {/* PIN Dots */}
        <div style={styles.pinDisplay}>
          {[0, 1, 2, 3].map((i) => (
            <div key={i} style={styles.pinDot}>
              {(step === "setPin" ? pin[i] : confirmPin[i]) ? <div style={styles.filledDot} /> : null}
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
    BorderColor: "#fff",
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
    width: "18px",
    height: "18px",
    borderRadius: "50%",
    backgroundColor: "#fff",
  },
  keypad: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 60px)",
    gridGap: "3rem",
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
    position: "relative", // ✅ Ensure button is not blocked
    zIndex: 10,
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
export default SetPin;