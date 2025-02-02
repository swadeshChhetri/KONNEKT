"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Slider from "@/components/Slider";
import CategorySlider from "@/components/CategorySlider";

function Shop() {
  // Capitalized "Shop"
  const [hovered, setHovered] = useState(null);

  const fashionCategories = [
    { name: "Men's Clothing", image: "/images/mens-clothing.png" },
    { name: "Women's Clothing", image: "/images/womens-clothing.png" },
    { name: "Shoes", image: "/images/shoes.png" },
    { name: "Accessories", image: "/images/accessories.png" },
  ];

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

    // {/* <div className="relative w-full px-6">
    //     <h2 className="text-lg font-bold mb-4">Trending Categories</h2>
    //     <CategorySlider categories={fashionCategories}/>
    // </div>

    // <div className="relative w-full px-6">
    //     <h2 className="text-lg font-bold mb-4">Trending Categories</h2>
    //     <CategorySlider categories={fashionCategories}/>
    // </div>

    // <div className="relative w-full px-6">
    //     <h2 className="text-lg font-bold mb-4">Trending Categories</h2>
    //     <CategorySlider categories={fashionCategories}/>
    // </div> */}
  );
}

export default Shop; // Capitalized "Shop"
