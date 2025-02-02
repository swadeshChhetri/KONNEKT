"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Search,
  ShoppingCart,
  User,
  Globe,
  MapPin,
  ChevronDown,
} from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const isTradePage = pathname === "/BusinessProducts"; // Store condition in a variable
  const [locationOpen, setLocationOpen] = useState(false);

  return (
    <header className="bg-blue-600 w-full text-white fixed shadow-md z-50">
      <nav className="flex items-center justify-between bg-white px-6 py-3 border-b shadow-sm">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <h4 className="font-semibold text-black">KONNEKT.com</h4>
        </div>

        {/* Show extra content only on Trade page */}
        {isTradePage && (
          <div className="relative">
            <button
              onClick={() => setLocationOpen(!locationOpen)}
              className="flex items-center space-x-1 text-gray-600"
            >
              <MapPin className="w-5 h-5" />
              <span>All Cities</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            {locationOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white border shadow-lg p-2 rounded-md">
                <input
                  type="text"
                  placeholder="Search city..."
                  className="w-full p-2 border rounded-md text-sm"
                />
                <ul className="mt-2 text-sm">
                  <li className="p-2 hover:bg-gray-100 cursor-pointer">Delhi</li>
                  <li className="p-2 hover:bg-gray-100 cursor-pointer">Mumbai</li>
                  <li className="p-2 hover:bg-gray-100 cursor-pointer">Bengaluru</li>
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Search Bar */}
        <div className="flex items-center border rounded-full px-4 py-2 w-1/2">
          {!isTradePage && (
          <select className="text-sm text-gray-600 bg-transparent focus:outline-none">
            <option>Products</option>
            <option>Suppliers</option>
            <option>Categories</option>
          </select>
          )}
          <input
            type="text"
            placeholder="tactical vest"
            className="flex-grow px-2 text-sm focus:outline-none"
          />
          <button className="ml-2">
            <Search className="text-gray-600" size={20} />
          </button>
        </div>

        {/* Icons and Buttons */}
        <div className="flex items-center space-x-4">
          {!isTradePage && (
            <>
              <div className="flex items-center space-x-1 text-sm mr-4">
                <Globe size={20} className="text-gray-600" />
                <span className="text-gray-600">Deliver to:</span>
                <span className="font-semibold text-gray-900">US</span>
              </div>

              <ShoppingCart size={20} className="text-gray-600" />
            </>
          )}

          {/* Sign Up Button */}
          <button className="text-black font-semibold flex">
            <User size={20} className="text-gray-600" />
            Sign Up
          </button>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-orange-600">
            Sign In
          </button>

          {isTradePage && (
          <div className="bg-blue-100 px-2 py-2 rounded-md text-blue-800 text-xs w-32">
            Registered Users <br />
            <span className="text-sm">1,11,01,168</span>
          </div>
        )}
        </div>
      </nav>
    </header>
  );
}
