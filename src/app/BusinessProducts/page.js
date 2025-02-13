// src/app/products/page.js (Server Component)

"use client";
import Image from "next/image";
import { products } from "@/data/products";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, ChevronLeft, Mic, ArrowRight } from "lucide-react";
import CategorySlider from "@/components/CategorySlider";
import ProductCard from "@/components/ProductCard";
import ResponsiveSlider from "@/components/Slider";
import {
  User,
  Shirt,
  Home,
  FlaskConical,
  Package,
  Gem,
  ShoppingBag,
  Leaf,
  Headphones,
  Dumbbell,
  Briefcase,
  Baby,
  Car,
  Box,
} from "lucide-react";



const testimonials = [
  {
    id: 1,
    name: "Mr. Ankur Aggarwal",
    company: "Wound Component Pvt. Ltd., Delhi, India",
    review:
      "We have been associated with TradeIndia for 13 years now. We got a good number of inquiries through TradeIndia which helped double our turnover and fortunately the customers we got through the portal are still connected with us.",
    image: "/B2B/connect.png",
  },
  // Add more testimonial data here
];

const valueAdds = [
  { title: "Catalogs", desc: "TradeIndia Catalogs" },
  { title: "Buy Leads", desc: "TradeIndia Buy Leads" },
  { title: "Book Domain", desc: "TradeIndia Book Domain" },
  { title: "Membership Plans", desc: "TradeIndia Membership Plans" },
  { title: "For Business", desc: "Google Workspace" },
];

const categories1 = [
  { name: "Health & Beauty", content: "Various beauty products & services." },
  { name: "Apparel & Fashion", content: "Trendy clothing and fashion items." },
  { name: "Chemicals", content: "Industrial and household chemicals." },
  { name: "Machinery", content: "Heavy and light machinery." },
  {
    name: "Electronics & Electricals",
    content: "Electronic gadgets & components.",
  },
  { name: "Health & Beauty", content: "Various beauty products & services." },
  { name: "Apparel & Fashion", content: "Trendy clothing and fashion items." },
  { name: "Apparel & Fashion", content: "Trendy clothing and fashion items." },
];

const homeCategories = [
  { name: "Common Medicines", image: "/B2B/15.jpg" },
  { name: "Medical & Diagnostic", image: "/B2B/16.jpg" },
  { name: "Personal Care Products", image: "/B2B/17.jpg" },
  { name: "Solar Panels", image: "/B2B/18.jpg" },
  { name: "Human Hair & Accessories", image: "/B2B/19.jpg" },
  { name: "Jackets", image: "/B2B/20.jpg" },
  { name: "Common Medicines", image: "/B2B/21.jpg" },
  { name: "Medical & Diagnostic", image: "/B2B/22.jpg" },
  { name: "Personal Care Products", image: "/B2B/23.jpg" },
  { name: "Solar Panels", image: "/B2B/24.jpg" },
  { name: "Human Hair & Accessories", image: "/B2B/25.jpg" },
  { name: "Jackets", image: "/B2B/14.jpg" },
];

export default function ProductsPageWrapper() {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [index, setIndex] = useState(0);
  const [isRecording, setIsRecording] = useState(false);

  const categories2 = [
    { icon: User, label: "" },
    { icon: Shirt, label: "" },
    { icon: Home, label: "" },
    { icon: FlaskConical, label: "" },
    { icon: Package, label: "" },
    { icon: Gem, label: "" },
    { icon: ShoppingBag, label: "" },
    { icon: Leaf, label: "" },
    { icon: Headphones, label: "" },
    { icon: Dumbbell, label: "" },
    { icon: Briefcase, label: "" },
    { icon: Baby, label: "" },
    { icon: Car, label: "" },
    { icon: Box, label: "" },
    { icon: Car, label: "" },
    { icon: Box, label: "" },
  ];

  const categories3 = [
    {
      title: "Prefabricated & Portable Build...",
      links: [
        "Office Container",
        "Portable Cabins",
        "Mobile Cabins",
        "Security Cabins",
      ],
      image: "/prefab.png",
    },
    {
      title: "Hardware Fittings and Access...",
      links: ["Steel Angles", "MS Channel", "Ferrules", "Brackets"],
      image: "/hardware.png",
    },
    {
      title: "Door & Window Fittings",
      links: [
        "Stainless Steel Door Hardware",
        "Door Handles",
        "Brass Handles",
        "Door Hardware",
      ],
      image: "/door.png",
    },
    {
      title: "Paints, Varnishes & Wall Putty",
      links: ["Paints", "Special Purpose Paints", "Primer Paint", "Wall Putty"],
      image: "/paints.png",
    },
    {
      title: "Sanitary Ware & Fittings",
      links: [
        "Bathroom Sanitary Ware",
        "Water Closet",
        "Pedestal Wash Basin",
        "Kitchen Sink",
      ],
      image: "/sanitary.png",
    },
    {
      title: "Pipe & Tube Fittings",
      links: [
        "Industrial Coupler",
        "Forged Pipe Fittings",
        "Forged Steel Fittings",
        "Thermowell",
      ],
      image: "/pipe.png",
    },
    
  ];

  const categories4 = [
    {
      title: "Prefabricated & Portable Build...",
      links: [
        "Office Container",
        "Portable Cabins",
        "Mobile Cabins",
        "Security Cabins",
      ],
      image: "/prefab.png",
    },
    {
      title: "Hardware Fittings and Access...",
      links: ["Steel Angles", "MS Channel", "Ferrules", "Brackets"],
      image: "/hardware.png",
    },
    {
      title: "Door & Window Fittings",
      links: [
        "Stainless Steel Door Hardware",
        "Door Handles",
        "Brass Handles",
        "Door Hardware",
      ],
      image: "/door.png",
    },
    {
      title: "Paints, Varnishes & Wall Putty",
      links: ["Paints", "Special Purpose Paints", "Primer Paint", "Wall Putty"],
      image: "/paints.png",
    },
    {
      title: "Sanitary Ware & Fittings",
      links: [
        "Bathroom Sanitary Ware",
        "Water Closet",
        "Pedestal Wash Basin",
        "Kitchen Sink",
      ],
      image: "/sanitary.png",
    },
    {
      title: "Pipe & Tube Fittings",
      links: [
        "Industrial Coupler",
        "Forged Pipe Fittings",
        "Forged Steel Fittings",
        "Thermowell",
      ],
      image: "/pipe.png",
    },
    
  ];

  const categories5 = [
    {
      title: "Prefabricated & Portable Build...",
      links: [
        "Office Container",
        "Portable Cabins",
        "Mobile Cabins",
        "Security Cabins",
      ],
      image: "/prefab.png",
    },
    {
      title: "Hardware Fittings and Access...",
      links: ["Steel Angles", "MS Channel", "Ferrules", "Brackets"],
      image: "/hardware.png",
    },
    {
      title: "Door & Window Fittings",
      links: [
        "Stainless Steel Door Hardware",
        "Door Handles",
        "Brass Handles",
        "Door Hardware",
      ],
      image: "/door.png",
    },
    {
      title: "Paints, Varnishes & Wall Putty",
      links: ["Paints", "Special Purpose Paints", "Primer Paint", "Wall Putty"],
      image: "/paints.png",
    },
    {
      title: "Sanitary Ware & Fittings",
      links: [
        "Bathroom Sanitary Ware",
        "Water Closet",
        "Pedestal Wash Basin",
        "Kitchen Sink",
      ],
      image: "/sanitary.png",
    },
    {
      title: "Pipe & Tube Fittings",
      links: [
        "Industrial Coupler",
        "Forged Pipe Fittings",
        "Forged Steel Fittings",
        "Thermowell",
      ],
      image: "/pipe.png",
    },
    
  ];

  

  const cards2 = [
    {
      img: "/b2b.jpg", // Replace with actual image paths
      title: "Business-to-Business",
      link: "/trade",
      linkText: "View more",
    },
    {
      img: "/b2c.jpg",
      title: "Business-to-Consumer",
      link: "#",
      linkText: "View more",
    },
  ];

  // Move the slider left
  const slideLeft = () => {
    setIndex((prev) => Math.max(prev - 1, 0));
  };

  // Move the slider right
  const slideRight = () => {
    setIndex((prev) => Math.min(prev + 1, categories.length - 3));
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-24 ">
        <section className="text-center relative">
          <div
            className="relative inline-flex"
            onMouseEnter={() => setHoveredCategory(hoveredCategory)} // Keep content open
            onMouseLeave={() => setHoveredCategory(null)} // Close when leaving
          >
            {/* Sidebar */}
            <div className="bg-white shadow-md p-4">
              <h2 className="text-lg font-bold mb-4">Top Categories</h2>
              <ul className="space-y-2">
                {categories1.map((category, index) => (
                  <li
                    key={index}
                    className="flex items-center p-2 rounded-md cursor-pointer hover:bg-gray-100 transition"
                    onMouseEnter={() => setHoveredCategory(category.name)}
                  >
                    <span>{category.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hover Content Panel */}
            {hoveredCategory && (
              <div
                className="absolute left-56 top-0 w-72 bg-gray-50 shadow-lg pl-4 z-10 mt-4 p-4 h-96"
                onMouseEnter={() => setHoveredCategory(hoveredCategory)} // Keep content open
                onMouseLeave={() => setHoveredCategory(null)} // Close when leaving
              >
                <h3 className="text-lg font-semibold">{hoveredCategory}</h3>
                <p className="text-sm text-gray-600">
                  {
                    categories1.find((cat) => cat.name === hoveredCategory)
                      ?.content
                  }
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="hover:text-blue-600 cursor-pointer">
                    Subcategory 1
                  </li>
                  <li className="hover:text-blue-600 cursor-pointer">
                    Subcategory 2
                  </li>
                  <li className="hover:text-blue-600 cursor-pointer">
                    Subcategory 3
                  </li>
                </ul>
              </div>
            )}
          </div>
        </section>

        <section className="col-span-2 ">
          <ResponsiveSlider
            images={[
              "/B2B/slide3.webp",
              "/B2B/slide2.jpeg",
              "/B2B/slide3.webp",
            ]}
            height="h-[29rem]"
            objectFit="object-contain"
          />
        </section>

        <section className="text-center">
          <div className="grid grid-cols-1 gap-6 m-4">
            {cards2.map((card, index) => (
              <div key={index} className="relative rounded-lg overflow-hidden">
                <Image
                  src={card.img}
                  alt={card.title}
                  width={500}
                  height={300}
                  className="w-full h-[12rem] object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 flex flex-col justify-between p-4">
                  <h3 className="text-white text-lg font-semibold">
                    {card.title}
                  </h3>
                  <a href={card.link} className="text-white underline text-sm">
                    {card.linkText}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="flex flex-wrap justify-center gap-6 p-6">
        {categories2.map(({ icon: Icon, label }, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center w-32 h-32 border-2 border-gray-200 rounded-full hover:shadow-lg transition"
          >
            <Icon className="w-8 h-8 text-gray-700" />
            <p className="text-sm text-center mt-2 text-gray-700">{label}</p>
          </div>
        ))}
      </section>

 

      <div className="relative w-full px-6">
        <h2 className="text-lg font-bold mb-4">Trending Categories</h2>
        <CategorySlider categories={homeCategories} />
      </div>

      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-4">
          Realestate, Building & Construction
        </h2>
        <div className="border border-gray-300 rounded-lg p-4 grid md:grid-cols-3 gap-4">
          <motion.div
            className="relative col-span-1 bg-cover bg-center text-white p-6 rounded-lg flex flex-col justify-end"
            style={{ backgroundImage: "url('/construction-bg.jpg')" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg font-semibold">Wood and Lumber</p>
            <p>Cladding Materials and Building Panels</p>
            <p>Bricks & Construction Materials</p>
            <p>Doors & Windows</p>
            <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg">
              View All
            </button>
          </motion.div>

          <div className="col-span-2 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {categories3.map((category, index) => (
              <motion.div
                key={index}
                className="border p-4 rounded-lg flex justify-between items-center"
                whileHover={{ scale: 1.05 }}
              >
                <div>
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                  {category.links.map((link, i) => (
                    <p key={i} className="text-blue-500 text-sm cursor-pointer">
                      {link}
                    </p>
                  ))}
                </div>
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-16 h-16 object-cover"
                />
                <ArrowRight className="text-blue-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-4">
          Realestate, Building & Construction
        </h2>
        <div className="border border-gray-300 rounded-lg p-4 grid md:grid-cols-3 gap-4">
          <motion.div
            className="relative col-span-1 bg-cover bg-center text-white p-6 rounded-lg flex flex-col justify-end"
            style={{ backgroundImage: "url('/construction-bg.jpg')" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg font-semibold">Wood and Lumber</p>
            <p>Cladding Materials and Building Panels</p>
            <p>Bricks & Construction Materials</p>
            <p>Doors & Windows</p>
            <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg">
              View All
            </button>
          </motion.div>

          <div className="col-span-2 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {categories4.map((category, index) => (
              <motion.div
                key={index}
                className="border p-4 rounded-lg flex justify-between items-center"
                whileHover={{ scale: 1.05 }}
              >
                <div>
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                  {category.links.map((link, i) => (
                    <p key={i} className="text-blue-500 text-sm cursor-pointer">
                      {link}
                    </p>
                  ))}
                </div>
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-16 h-16 object-cover"
                />
                <ArrowRight className="text-blue-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-4">
          Realestate, Building & Construction
        </h2>
        <div className="border border-gray-300 rounded-lg p-4 grid md:grid-cols-3 gap-4">
          <motion.div
            className="relative col-span-1 bg-cover bg-center text-white p-6 rounded-lg flex flex-col justify-end"
            style={{ backgroundImage: "url('/construction-bg.jpg')" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg font-semibold">Wood and Lumber</p>
            <p>Cladding Materials and Building Panels</p>
            <p>Bricks & Construction Materials</p>
            <p>Doors & Windows</p>
            <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg">
              View All
            </button>
          </motion.div>

          <div className="col-span-2 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {categories5.map((category, index) => (
              <motion.div
                key={index}
                className="border p-4 rounded-lg flex justify-between items-center"
                whileHover={{ scale: 1.05 }}
              >
                <div>
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                  {category.links.map((link, i) => (
                    <p key={i} className="text-blue-500 text-sm cursor-pointer">
                      {link}
                    </p>
                  ))}
                </div>
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-16 h-16 object-cover"
                />
                <ArrowRight className="text-blue-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-20">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} section="BusinessProducts" />
        ))}
      </div> */}

      <div className="flex items-center justify-center min-h-screen bg-[#fdfbf5] px-6 py-12">
        <div className="bg-white shadow-lg rounded-2xl flex max-w-5xl w-full overflow-hidden">
          {/* Left Side - Image & Animation */}
          <div className="w-1/2 relative p-6 flex items-center justify-center">
            <div className="relative">
              <Image
                src="/B2B/connect.png"
                alt="User"
                width={300}
                height={300}
                className="rounded-full"
              />
              {/* Floating Icons */}
              <div className="absolute top-6 left-[-30px] bg-white p-2 rounded-lg shadow-md text-xs">
                Great deals with Incredible Sellers all over India
              </div>
              <div className="absolute bottom-6 left-[-40px] bg-white p-2 rounded-lg shadow-md text-xs">
                Your order is on the way <br /> 2:00pm
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="w-1/2 p-10">
            <h2 className="text-xl font-bold">Post Buy Requirement</h2>
            <p className="text-sm text-gray-500 mb-4">
              Tell us what you need, and we'll help you get quotes
            </p>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 h-1 rounded-full mb-4">
              <div className="w-1/4 bg-orange-400 h-1 rounded-full"></div>
            </div>

            {/* Input Fields */}
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Enter the product you are looking for..."
                className="w-full p-3 border rounded-lg focus:ring focus:ring-orange-300"
              />
              <div className="flex gap-2">
                <select className="border p-3 rounded-lg">
                  <option>+91</option>
                </select>
                <input
                  type="tel"
                  placeholder="Enter Mobile Number"
                  className="w-full p-3 border rounded-lg"
                />
              </div>
            </div>

            {/* Voice Recording */}
            <div
              className={`mt-6 p-4 border rounded-lg flex items-center gap-3 ${
                isRecording ? "bg-red-100" : "bg-gray-100"
              }`}
              onClick={() => setIsRecording(!isRecording)}
            >
              <Mic className="text-red-500" />
              <span>
                {isRecording ? "Recording..." : "Click here to record"}
              </span>
            </div>

            {/* Checkbox */}
            <div className="mt-4 flex items-center gap-2">
              <input type="checkbox" id="loan" className="w-4 h-4" />
              <label htmlFor="loan">Looking for a loan.</label>
            </div>

            {/* Submit Button */}
            <button className="mt-6 w-full bg-blue-500 text-white py-3 rounded-lg flex items-center justify-center gap-2">
              Continue <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
