"use client";
import React, { useState } from "react";
import Link from "next/link";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 md:p-0 p-4">
      <div className="bg-white   shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Log in</h2>

        <input
          type="email"
          placeholder="Email Address"
          className="w-full px-4 py-3 bg-white bg-opacity-30 backdrop-blur-md rounded-full border-none shadow-inner text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300 mb-6"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-3 bg-white bg-opacity-30 backdrop-blur-md rounded-full border-none shadow-inner text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 mb-6"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full px-4 py-3 bg-[#FF4C00] text-white font-semibold rounded-full flex items-center justify-center gap-2 shadow-lg hover:bg-red-700">
          <i className="ri-lock-fill"></i> Log in
        </button>

        <p className="text-center text-sm text-gray-600 mt-4">
          Don't have an account?{" "}
          <Link href="/signup" className="text-blue-600 font-medium">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
