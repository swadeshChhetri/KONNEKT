// src/app/products/page.js (Server Component)
"use client";
import { useState } from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { ChevronDown, Divide } from "lucide-react";
import ResponsiveSlider from "@/components/Slider";

export default function ProductsPageWrapper() {
  const [hovered, setHovered] = useState(null);

  const categories = [
    { name: "content", subcategories: ["Groceries", "Cleaning", "Household"] },
    { name: "content", subcategories: ["Smartphones", "Accessories"] },
    { name: "content", subcategories: ["Men", "Women", "Kids"] },
    {
      name: "content",
      subcategories: ["Laptops", "Headphones", "Cameras"],
    },
    { name: "content", subcategories: ["Sofas", "Beds", "Decor"] },
    {
      name: "content",
      subcategories: ["TVs", "Refrigerators", "Washing Machines"],
    },
    { name: "content", subcategories: ["Domestic", "International"] },
    {
      name: "content",
      subcategories: ["Makeup", "Toys", "Wellness"],
    },
    { name: "content", subcategories: ["Bikes", "Scooters"] },
  ];

  return (
    <>
      <div className="">
        <nav className="flex justify-center gap-8 bg-white p-4 shadow-md pt-20">
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

        <div className="">
          <section className="bg-gray-200">
            <ResponsiveSlider 
            images={["/B2B/slide3.webp", "/B2B/slide2.jpeg", "/B2B/slide3.webp"]} 
            height="h-96" 
            objectFit="object-contain" 
            />
          </section>
        </div>

        <h1 className="text-2xl font-bold mb-6">Women's Heels Collection</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} section="ConsumerProducts" />
          ))}
        </div>
      </div>
    </>
  );
}
