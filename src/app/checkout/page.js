"use client"
import { useState } from "react";

export default function CheckoutPage() {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen bg-gray-100 p-4 pt-20">
      <div className="max-w-4xl mx-auto bg-white shadow-md p-6 rounded-lg">
        <h1 className="text-2xl font-bold text-blue-600">Flipkart Checkout</h1>

        {/* Step 1: Login */}
        <div className={`mt-4 p-4 border ${step >= 1 ? "bg-blue-50" : "bg-gray-200"}`}>
          <h2 className="text-lg font-semibold flex justify-between">
            1. LOGIN {step > 1 && <span className="text-green-500">✔</span>}
          </h2>
          {step === 1 && (
            <div>
              <p className="mt-2">Swadesh Chhetri +918597079194</p>
              <button onClick={() => setStep(2)} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
                Continue
              </button>
            </div>
          )}
        </div>

        {/* Step 2: Delivery Address */}
        <div className={`mt-4 p-4 border ${step >= 2 ? "bg-blue-50" : "bg-gray-200"}`}>
          <h2 className="text-lg font-semibold">2. DELIVERY ADDRESS</h2>
          {step === 2 && (
            <div>
              <p className="mt-2">Select or add a delivery address.</p>
              <button onClick={() => setStep(3)} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
                Continue
              </button>
            </div>
          )}
        </div>

        {/* Step 3: Order Summary */}
        <div className={`mt-4 p-4 border ${step >= 3 ? "bg-blue-50" : "bg-gray-200"}`}>
          <h2 className="text-lg font-semibold">3. ORDER SUMMARY</h2>
          {step === 3 && (
            <div>
              <p className="mt-2">Review your items and pricing.</p>
              <button onClick={() => setStep(4)} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
                Continue
              </button>
            </div>
          )}
        </div>

        {/* Step 4: Payment Options */}
        <div className={`mt-4 p-4 border ${step >= 4 ? "bg-blue-50" : "bg-gray-200"}`}>
          <h2 className="text-lg font-semibold">4. PAYMENT OPTIONS</h2>
          {step === 4 && (
            <div>
              <p className="mt-2">Choose a payment method to complete your order.</p>
              <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded">Place Order</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
