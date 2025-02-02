"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import TradePage from "../trade/page";
import Slider from "@/components/Slider";

export default function ProductsClient({ products }) {
  const [hovered, setHovered] = useState(null);

  const categories = [
    { name: "Kilos", subcategories: ["Groceries", "Cleaning", "Household"] },
    { name: "Mobiles", subcategories: ["Smartphones", "Accessories"] },
    { name: "Fashion", subcategories: ["Men", "Women", "Kids"] },
    {
      name: "Electronics",
      subcategories: ["Laptops", "Headphones", "Cameras"],
    },
    { name: "Home & Furniture", subcategories: ["Sofas", "Beds", "Decor"] },
    {
      name: "Appliances",
      subcategories: ["TVs", "Refrigerators", "Washing Machines"],
    },
    { name: "Flight Bookings", subcategories: ["Domestic", "International"] },
    {
      name: "Beauty, Toys & More",
      subcategories: ["Makeup", "Toys", "Wellness"],
    },
    { name: "Two Wheelers", subcategories: ["Bikes", "Scooters"] },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="pt-20">
        <nav className="flex justify-center gap-8 bg-white p-4 shadow-md">
          {categories.map((category, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <button className="flex items-center gap-1 text-gray-700 hover:text-blue-600">
                {category.name}
                <ChevronDown
                  className={`transition-transform ${
                    hovered === index ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              {hovered === index && (
                <div className="absolute left-0 mt-2 w-40 rounded-lg bg-white shadow-lg">
                  {category.subcategories.map((sub, i) => (
                    <a
                      key={i}
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                    >
                      {sub}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <Slider />
      </div>

      <h1 className="text-2xl font-bold mb-6">Women's Heels Collection</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
      ))}
      </div>


    </div>
  );
}
