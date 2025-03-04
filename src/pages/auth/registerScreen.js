import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
// import countryList from "react-select-country-list";
import { FaRegCalendarAlt } from "react-icons/fa";
import Api from "../../service/Api";
import { Toaster, toast } from "react-hot-toast";

function Register() {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);
  // const [selectedCountry, setSelectedCountry] = useState(null);
  // const options = countryList().getData();

  const initialState = {
    fullname: "",
    lastname: "",
    email: "",
    date: "",
    password: "",
    repeatPassword: "",
    referralCode: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false); // Track success state

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // Form Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false); // Hide success message before new submission
    const {
      fullname,
      lastname,
      email,
      password,
      repeatPassword,
      referralCode,
    } = formData;
    // Basic validation

    try {
      const response = await Api.post("/register", {
        fullname,
        lastname,
        date_of_birth: selectedDate,
        email,
        password,
        referralCode,
      });
      if (response.data.status) {
        // Reset form after successful registration
        setFormData(initialState);
        setSuccess(true); // Show success message
        // toast.success("✅ Registration successful!");
        navigate("/set-pin", { state: { email } });

      } else {
        toast.error(response.data.message || "Login failed");
      }
    } catch (error) {
      toast.error(`❌ ${error.message || "Registration failed"}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container bg-n900 h-dvh relative overflow-hidden flex justify-start items-start text-white">
      <div className="w-[582px] h-[582px] rounded-full bg-g300 absolute -top-32 -left-20 blur-[575px]"></div>
      <div className="relative z-20 px-6">
        <div className="flex justify-center items-center flex-col gap-3 pt-8">
          <h1 className="text-2xl font-semibold">Sign Up </h1>
          <p className="text-n70 text-sm text-center">
            please Fill in the form to Continue
          </p>
        </div>

        <form onSubmit={handleSubmit} className="pt-8 flex flex-col gap-4">
          <div className="flex gap-4">
            {/* First Name */}
            <div className="w-1/2">
              <p className="text-sm font-semibold pb-2">First Name</p>
              <div className="flex justify-between items-center gap-3 p-4 bg-white bg-opacity-5 rounded-lg text-n70 text-xl">
                <input
                  type="text"
                  name="fullname"
                  placeholder="Enter Full Name"
                  value={formData.fullname}
                  onChange={handleChange}
                  className="bg-transparent outline-none placeholder:text-sm text-sm w-full"
                />
              </div>
            </div>

            {/* Last Name */}
            <div className="w-1/2">
              <p className="text-sm font-semibold pb-2">Last Name</p>
              <div className="flex justify-between items-center gap-3 p-4 bg-white bg-opacity-5 rounded-lg text-n70 text-xl">
                <input
                  type="text"
                  name="lastname"
                  placeholder="Enter Full Name"
                  value={formData.lastname}
                  onChange={handleChange}
                  className="bg-transparent outline-none placeholder:text-sm text-sm w-full"
                />
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold pb-2">Email</p>
            <div className="flex justify-between items-center gap-3 p-4 bg-white bg-opacity-5 rounded-lg text-n70 text-xl">
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleChange}
                className="bg-transparent outline-none placeholder:text-sm text-sm w-full"
              />
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold pb-2">Date of Birth</p>
            <div className="flex justify-between items-center gap-3 p-4 bg-white bg-opacity-5 rounded-lg text-n70 text-xl">
              <DatePicker
                name="date"
                type="text"
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="dd/MM/yyyy"
                placeholderText="Select Date of Birth"
                className="bg-transparent outline-none placeholder:text-sm text-sm w-full"
              />
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold pb-2">Referral Code</p>
            <div className="flex justify-between items-center gap-3 p-4 bg-white bg-opacity-5 rounded-lg text-n70 text-xl">
              <input
                type="text"
                name="referralCode"
                placeholder="Referral Code "
                value={formData.referralCode}
                onChange={handleChange}
                className="bg-transparent outline-none placeholder:text-sm text-sm w-full"
              />
            </div>
          </div>

          <div className="flex gap-4">
            {/* First Name */}
            <div className="w-1/2">
              <p className="text-sm font-semibold pb-2">New Password</p>
              <div className="flex justify-between items-center gap-3 p-4 bg-white bg-opacity-5 rounded-lg text-n70 text-xl">
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="bg-transparent outline-none placeholder:text-sm text-sm w-full"
                />
                <div className="flex justify-start items-center gap-1">
                  <i className="ph ph-eye-closed cursor-pointer confirmPasswordShow"></i>
                </div>
              </div>
            </div>

            {/* Last Name */}
            <div className="w-1/2">
              <p className="text-sm font-semibold pb-2">Confirm Password</p>
              <div className="flex justify-between items-center gap-3 p-4 bg-white bg-opacity-5 rounded-lg text-n70 text-xl">
                <input
                  type="password"
                  name="repeatPassword"
                  placeholder="Repeat Password"
                  value={formData.repeatPassword}
                  onChange={handleChange}
                  className="bg-transparent outline-none placeholder:text-sm text-sm w-full"
                />
                <div className="flex justify-start items-center gap-1">
                  <i className="ph ph-eye-closed cursor-pointer passwordShow"></i>
                </div>
              </div>
            </div>
          </div>
        </form>

        <div className="w-full pt-20">
          <a
            onClick={handleSubmit}
           className="block bg-g300 font-semibold text-center py-3 rounded-lg"
          >
            Register
          </a>
        </div>
      </div>
    </div>
  );
}

export default Register;
