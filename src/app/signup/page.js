"use client"

import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-center min-h-screen bg-gray-900"
    >
      <div className="bg-white p-6 rounded-2xl shadow-lg w-96 mt-16">
        <h2 className="text-2xl font-bold text-center mb-4">
          <span className="text-blue-600">Sign Up</span> to Join Zonely
        </h2>
        <p className="text-gray-500 text-center mb-4">
          Ease of scheduling across the globe
        </p>
        <button className="w-full flex items-center justify-center border py-2 px-4 rounded-lg mb-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="Google Logo"
            className="h-5 w-5 mr-2"
          />
          Sign Up with Google
        </button>
        <div className="relative text-center my-4">
          <span className="bg-white px-2 text-gray-500">OR</span>
        </div>
        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email or Username"
            className="w-full p-2 border rounded-lg"
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full p-2 border rounded-lg"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              className="w-full p-2 border rounded-lg"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-3"
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-blue-600 text-white py-2 rounded-lg mt-2"
          >
            Sign Up
          </motion.button>
        </div>
        <p className="text-xs text-center text-gray-500 mt-4">
          By clicking “Sign Up”, you acknowledge that you have read and
          understood, and agree to Zonely’s
          <a href="#" className="text-blue-600"> Terms and Conditions </a>
          and
          <a href="#" className="text-blue-600"> Privacy Policy</a>
        </p>
        <p className="text-center mt-4">
          Already have an account?
          <a href="#" className="text-blue-600"> Log In</a>
        </p>
      </div>
    </motion.div>
  );
}
