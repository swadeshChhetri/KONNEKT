"use client";
import { useState, useEffect } from "react";

export default function CheckoutPage() {
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState(""); // ✅ Define paymentMethod state
  const [upiOption, setUpiOption] = useState("");
  const [showQR, setShowQR] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes countdown
  const [captcha, setCaptcha] = useState("1234"); 
  const [inputCaptcha, setInputCaptcha] = useState("");

   // Start countdown when QR is displayed
   useEffect(() => {
    if (showQR) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [showQR]);

  return (
    <div className="min-h-screen bg-gray-100 p-4 pt-20">
      <div className="max-w-4xl mx-auto bg-white shadow-md p-6 rounded-lg">
        <h1 className="text-2xl font-bold text-blue-600">KONNKT Checkout</h1>

        {/* Step 1: Login */}
        <div
          className={`mt-4 p-4 border ${
            step >= 1 ? "bg-blue-50" : "bg-gray-200"
          }`}
        >
          <h2 className="text-lg font-semibold flex justify-between">
            1. LOGIN {step > 1 && <span className="text-green-500">✔</span>}
          </h2>
          {step === 1 && (
            <div>
              <p className="mt-2">Swadesh Chhetri +918597079194</p>
              <button
                onClick={() => setStep(2)}
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
              >
                Continue
              </button>
            </div>
          )}
        </div>

        {/* Step 2: Delivery Address */}
        <div
          className={`mt-4 p-4 border ${
            step >= 2 ? "bg-blue-50" : "bg-gray-200"
          }`}
        >
          <h2 className="text-lg font-semibold">2. DELIVERY ADDRESS</h2>
          {step === 2 && (
            <div className="space-y-4">
              {/* Section 1: Name & Mobile */}
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value="Swadesh Chhetri"
                    className="mt-1 p-2 w-full border rounded"
                    readOnly
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Mobile Number
                  </label>
                  <input
                    type="text"
                    value="+91 8597079194"
                    className="mt-1 p-2 w-full border rounded"
                    readOnly
                  />
                </div>
              </div>

              {/* Section 2: Address */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Address
                </label>
                <textarea
                  rows="2"
                  value="123, Near IT Park, Electronic City, Bangalore"
                  className="mt-1 p-2 w-full border rounded"
                  readOnly
                />
              </div>

              {/* Section 3: City, State & Pincode */}
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700">
                    City
                  </label>
                  <input
                    type="text"
                    value="Bangalore"
                    className="mt-1 p-2 w-full border rounded"
                    readOnly
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700">
                    State
                  </label>
                  <input
                    type="text"
                    value="Karnataka"
                    className="mt-1 p-2 w-full border rounded"
                    readOnly
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Pincode
                  </label>
                  <input
                    type="text"
                    value="560100"
                    className="mt-1 p-2 w-full border rounded"
                    readOnly
                  />
                </div>
              </div>

              {/* Section 4: Deliver Here Button */}
              <button
                onClick={() => setStep(3)}
                className="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded font-semibold"
              >
                DELIVER HERE
              </button>
            </div>
          )}
        </div>

        {/* Step 3: Order Summary */}
        <div
          className={`mt-4 p-4 border ${
            step >= 3 ? "bg-blue-50" : "bg-gray-200"
          }`}
        >
          <h2 className="text-lg font-semibold flex items-center gap-2 text-white bg-blue-600 px-4 py-2 rounded-md">
            3 ORDER SUMMARY
          </h2>

          {step === 3 && (
            <div className="bg-white p-4 rounded-lg shadow-md">
              {/* Product Item */}
              <div className="flex items-start gap-4">
                {/* Product Image */}
                <img
                  src="https://via.placeholder.com/100"
                  alt="Product Image"
                  className="w-24 h-24 rounded-md"
                />

                {/* Product Details */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">
                    BOLDFIT Yoga Mat for Men Women 4mm Exercise Mat
                  </h3>
                  <p className="text-sm text-gray-500">
                    Seller: BTPLD{" "}
                    <span className="text-blue-600 font-semibold">
                      ✔ Assured
                    </span>
                  </p>

                  {/* Price & Offers */}
                  <div className="mt-2 text-lg font-bold text-green-600">
                    ₹349{" "}
                    <span className="text-sm text-gray-500 line-through">
                      ₹599
                    </span>{" "}
                    <span className="text-sm text-green-500">41% Off</span>
                  </div>

                  <p className="text-sm text-green-600">4 offers available</p>
                </div>

                {/* Delivery Details */}
                <div className="text-right">
                  <p className="text-sm text-gray-500">
                    Delivery by{" "}
                    <span className="font-semibold">Tomorrow, Wed</span>
                  </p>
                  <p className="text-green-600 text-sm">₹40 Free</p>
                </div>
              </div>

              {/* Quantity & Remove */}
              <div className="flex items-center justify-between mt-4">
                {/* Quantity Controls */}
                <div className="flex items-center border rounded-md">
                  <button className="px-3 py-1 bg-gray-200 text-xl">-</button>
                  <span className="px-4">1</span>
                  <button className="px-3 py-1 bg-gray-200 text-xl">+</button>
                </div>

                {/* Remove Option */}
                <button className="text-red-600 font-semibold">REMOVE</button>
              </div>

              {/* Continue Button */}
              <button
                onClick={() => setStep(4)}
                className="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded-md font-semibold"
              >
                Continue
              </button>
            </div>
          )}
        </div>

        {/* Step 4: Payment Options */}
       {/* Payment Methods */}
       {/* Payment Methods */}
       <div className="space-y-3">
        <label className="flex items-center gap-2 border p-3 rounded cursor-pointer">
          <input
            type="radio"
            name="payment"
            value="UPI"
            onChange={() => setPaymentMethod("UPI")}
            className="accent-blue-500"
          />
          <span>UPI</span>
        </label>

        {paymentMethod === "UPI" && (
          <div className="ml-5 space-y-2">
            {["PhonePe", "Google Pay", "Paytm"].map((option) => (
              <label key={option} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="upiOption"
                  value={option}
                  onChange={() => {
                    setUpiOption(option);
                    setShowQR(true);
                  }}
                  className="accent-blue-500"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        )}

        {showQR && (
          <div className="mt-4 border p-4 rounded text-center">
            <p>Scan & Pay</p>
            <img src="/path/to/dummy-qr.png" alt="QR Code" className="mx-auto" />
            <p>Time Left: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</p>
            <button className="mt-2 bg-blue-500 text-white p-2 rounded">Continue</button>
          </div>
        )}

        <label className="flex items-center gap-2 border p-3 rounded cursor-pointer">
          <input
            type="radio"
            name="payment"
            value="COD"
            onChange={() => setPaymentMethod("COD")}
            className="accent-blue-500"
          />
          <span>Cash on Delivery</span>
        </label>

        {paymentMethod === "COD" && (
          <div className="mt-4 border p-4 rounded text-center">
            <p>Enter the CAPTCHA Code:</p>
            <p className="font-bold text-lg">{captcha}</p>
            <input
              type="text"
              value={inputCaptcha}
              onChange={(e) => setInputCaptcha(e.target.value)}
              className="border p-2 rounded w-1/2 text-center"
            />
            <button
              className="mt-2 bg-green-500 text-white p-2 rounded"
              disabled={inputCaptcha !== captcha}
            >
              Confirm Order
            </button>
          </div>
        )}
      </div>
      </div>
    </div>
  );
}
