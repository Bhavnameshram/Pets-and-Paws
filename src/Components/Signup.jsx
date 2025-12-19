import React, { useState } from "react";
import { Link } from "react-router-dom";
import bgImage from "../assets/bgImage.jpg";

function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // handle signup
  const handleSignup = () => {
    if (!formData.email) {
      alert("❌ Email is required");
      return;
    }

    // ONLY @ check
    if (!formData.email.includes("@")) {
      alert("❌ Valid email dalo");
      return;
    }

    if (!formData.password) {
      alert("❌ Password is required");
      return;
    }

    // success
    alert("✅ Account created successfully");

    // reset form
    setFormData({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-[#CFF5EF] border-[3px] border-black rounded-xl w-[450px] p-8 shadow-lg">
        <h2 className="text-xl font-semibold mb-1">Sign up</h2>
        <p className="text-sm mb-5 text-gray-700">
          Create your new account
        </p>

        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="px-4 py-3 bg-[#FFF1C1] border-[3px] border-black rounded-md outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="px-4 py-3 bg-[#FFF1C1] border-[3px] border-black rounded-md outline-none"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="px-4 py-3 bg-[#FFF1C1] border-[3px] border-black rounded-md outline-none"
          />

          <button
            onClick={handleSignup}
            className="self-start mt-1 bg-[#8FE3D4] border-[3px] border-black px-6 py-2 rounded-md font-semibold hover:bg-[#7bd6c6]"
          >
            Create Account
          </button>
        </div>

        <p className="mt-6 text-sm text-gray-800">
          Already have an account?{" "}
          <Link to="/login" className="font-semibold underline cursor-pointer">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
