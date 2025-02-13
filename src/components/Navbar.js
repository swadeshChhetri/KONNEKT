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
import Link from "next/link";

export default function Header() {
  const pathname = usePathname();
  const isTradePage = pathname === "/BusinessProducts"; // Store condition in a variable
  const [locationOpen, setLocationOpen] = useState(false);

  return (
    <header className="bg-background w-full text-light fixed shadow-md z-50">
      <nav className="flex items-center justify-between bg-dark text-light px-6 py-3 border-b shadow-sm">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <h4 className="font-semibold text-light">KONNEKT.com</h4>
        </div>

        {/* Show extra content only on Trade page */}
        {isTradePage && (
          <div className="relative">
            <button
              onClick={() => setLocationOpen(!locationOpen)}
              className="flex items-center space-x-1 text-gray-600 "
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
                  <li className="p-2 hover:bg-gray-100 cursor-pointer">
                    Delhi
                  </li>
                  <li className="p-2 hover:bg-gray-100 cursor-pointer">
                    Mumbai
                  </li>
                  <li className="p-2 hover:bg-gray-100 cursor-pointer">
                    Bengaluru
                  </li>
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Search Bar */}
        <div className="flex items-center border rounded-full px-4 py-2 w-1/2">
          {!isTradePage && (
            <select className="text-sm text-light bg-dark focus:outline-none">
              <option>Products</option>
              <option>Company</option>
            </select>
          )}
          <input
            type="text"
            placeholder="tactical vest"
            className="flex-grow px-2 text-sm focus:outline-none text-light bg-dark"
          />
          <button className="ml-2 hover:bg-red-700 rounded-md">
            <Search className="" size={20} />
          </button>
        </div>

        {/* Icons and Buttons */}
        <div className="flex items-center space-x-4">
              <Link href="/cart">
                <ShoppingCart size={20} className="" />
              </Link>
      
          {/* Sign Up Button */}
          <button className="font-semibold flex  hover:bg-red-700 rounded-xl p-1">
            <Link href="/checkout">
              <User size={20} className="" />
            </Link>
            <Link href="/signup">
            Sign Up
            </Link>
          </button>
          <button className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-red-700">
            <Link href="/login">
            Sign In
            </Link>
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
