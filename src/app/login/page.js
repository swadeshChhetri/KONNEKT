"use client";
import { useState } from "react";
import { Mail, Lock } from "lucide-react";
import { motion } from "framer-motion";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-sm"
      >
        <h2 className="text-2xl font-semibold text-center mb-2">
          <span className="text-blue-600">Log In</span> to Konnekt
        </h2>
        <p className="text-gray-500 text-center mb-4">
          Let’s schedule with confidence
        </p>

        <button className="w-full flex items-center justify-center gap-2 bg-white border py-2 rounded-lg shadow-sm hover:shadow-md transition">
          <img src="/google-icon.svg" alt="Google" className="w-5 h-5" />
          Log In with Google
        </button>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="text-gray-500 mx-2 text-sm">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <div className="mb-3">
          <label className="text-gray-700 text-sm">Email or Username</label>
          <div className="flex items-center border rounded-lg p-2 mt-1 bg-gray-50">
            <Mail className="w-5 h-5 text-gray-400" />
            <input
              type="email"
              placeholder="name@gmail.com"
              className="w-full bg-transparent outline-none ml-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-3">
          <label className="text-gray-700 text-sm">Password</label>
          <div className="flex items-center border rounded-lg p-2 mt-1 bg-gray-50">
            <Lock className="w-5 h-5 text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              className="w-full bg-transparent outline-none ml-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <div className="text-right text-sm text-blue-600 mb-4 cursor-pointer">
          Forgot Password?
        </div>

        <motion.button
          whileTap={{ scale: 0.95 }}
          className="w-full bg-blue-600 text-white py-2 rounded-lg text-lg shadow-md hover:bg-blue-700 transition"
        >
          Log In
        </motion.button>

        <p className="text-sm text-center text-gray-500 mt-4">
          Don’t have an account?{" "}
          <span className="text-blue-600 cursor-pointer">Sign Up</span>
        </p>
      </motion.div>
    </div>
  );
}
