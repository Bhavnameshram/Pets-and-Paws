import React, { useState } from "react";
import { Link } from "react-router-dom";
import bgImage from "../assets/bgImage.jpg";

function Login() {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  // handle input change
  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  // handle login
  const handleLogin = () => {
    if (!loginData.password) {
      alert("❌ Password is required");
      return;
    }

    // success
    alert("✅ Login successfully");

    // reset form
    setLoginData({
      username: "",
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
      <div className="bg-[#CFF5EF] border-[3px] border-black rounded-xl w-[520px] p-4 shadow-lg">
        <h2 className="text-xl font-semibold mb-1">Log in</h2>
        <p className="text-sm mb-5 text-gray-700">
          Welcome back! Please login
        </p>

        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={loginData.username}
            onChange={handleChange}
            className="px-4 py-3 bg-[#FFF1C1] border-[3px] border-black rounded-md outline-none"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={loginData.password}
            onChange={handleChange}
            className="px-4 py-3 bg-[#FFF1C1] border-[3px] border-black rounded-md outline-none"
          />

          <button
            onClick={handleLogin}
            className="self-center mt-1 bg-[#8FE3D4] border-[3px] border-black px-6 py-2 rounded-md font-semibold hover:bg-[#7bd6c6]"
          >
            Enter
          </button>
        </div>

        <p className="mt-6 text-sm text-gray-800">
          Don’t have an account?{" "}
          <Link to="/signup" className="font-semibold underline cursor-pointer">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
