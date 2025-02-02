// "use client";
// import Image from "next/image";

// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { ChevronRight, ChevronLeft, Mic, ArrowRight } from "lucide-react";
// import Slider from "@/components/Slider";
// import CategorySlider from "@/components/CategorySlider";
// import ProductCard from "@/components/ProductCard";

// const products = [
//   {
//     image: "/images/product1.png",
//     name: "C Type Power Press Machine",
//     price: "300000.00 INR (Approx.)",
//     company: "JAY SHAKTI MACHINE",
//   },
//   {
//     image: "/images/product2.png",
//     name: "Designer Printed Bandhani Suit Material",
//     price: "500 INR (Approx.)",
//     company: "JAYSHREE BANDHEJ",
//   },
//   {
//     image: "/images/product3.png",
//     name: "High Performance Automatic Potato Planter",
//     price: "Unit/Units",
//     company: "M/S JANDU",
//   },
//   {
//     image: "/images/product4.png",
//     name: "Top Rated Epoxy Hardener",
//     price: "-",
//     company: "NOVEL CHEM",
//   },
//   {
//     image: "/images/product5.png",
//     name: "Eco-Friendly 99.9% Pure A Grade Chemical",
//     price: "33 INR (Approx.)",
//     company: "DESTINY CHEMICALS",
//   },
//   {
//     image: "/images/product6.png",
//     name: "Briquette Crusher",
//     price: "1100000 INR (Approx.)",
//     company: "ECOMAN",
//   },
// ];

// const testimonials = [
//   {
//     id: 1,
//     name: "Mr. Ankur Aggarwal",
//     company: "Wound Component Pvt. Ltd., Delhi, India",
//     review:
//       "We have been associated with TradeIndia for 13 years now. We got a good number of inquiries through TradeIndia which helped double our turnover and fortunately the customers we got through the portal are still connected with us.",
//     image: "/path-to-ankur-image.jpg",
//   },
//   // Add more testimonial data here
// ];

// const valueAdds = [
//   { title: "Catalogs", desc: "TradeIndia Catalogs" },
//   { title: "Buy Leads", desc: "TradeIndia Buy Leads" },
//   { title: "Book Domain", desc: "TradeIndia Book Domain" },
//   { title: "Membership Plans", desc: "TradeIndia Membership Plans" },
//   { title: "For Business", desc: "Google Workspace" },
// ];

// const categories = [
//   { name: "Health & Beauty", content: "Various beauty products & services." },
//   { name: "Apparel & Fashion", content: "Trendy clothing and fashion items." },
//   { name: "Chemicals", content: "Industrial and household chemicals." },
//   { name: "Machinery", content: "Heavy and light machinery." },
//   {
//     name: "Electronics & Electricals",
//     content: "Electronic gadgets & components.",
//   },
//   { name: "Health & Beauty", content: "Various beauty products & services." },
//   { name: "Apparel & Fashion", content: "Trendy clothing and fashion items." },
//   { name: "Apparel & Fashion", content: "Trendy clothing and fashion items." },
// ];

// const homeCategories = [
//   { name: "Common Medicines", image: "/images/medicine.png" },
//   { name: "Medical & Diagnostic", image: "/images/diagnostic.png" },
//   { name: "Personal Care Products", image: "/images/personal-care.png" },
//   { name: "Solar Panels", image: "/images/solar-panel.png" },
//   { name: "Human Hair & Accessories", image: "/images/hair-accessories.png" },
//   { name: "Jackets", image: "/images/jacket.png" },
// ];

// export default function TradePage({ products }) {
//   console.log(products);
//   const [hoveredCategory, setHoveredCategory] = useState(null);
//   const [index, setIndex] = useState(0);
//   const [isRecording, setIsRecording] = useState(false);

//   const cards2 = [
//     {
//       img: "/b2b.jpg", // Replace with actual image paths
//       title: "Business-to-Business",
//       link: "/trade",
//       linkText: "View more",
//     },
//     {
//       img: "/b2c.jpg",
//       title: "Business-to-Consumer",
//       link: "#",
//       linkText: "View more",
//     },
//   ];

//   // Move the slider left
//   const slideLeft = () => {
//     setIndex((prev) => Math.max(prev - 1, 0));
//   };

//   // Move the slider right
//   const slideRight = () => {
//     setIndex((prev) => Math.min(prev + 1, categories.length - 3));
//   };

//   return (
//     <div>
//       <h2>Hello</h2>
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-14 ">
//         <section className="bg-gray-200  text-center">
//           <div>
//             {/* Sidebar */}
//             <div className="bg-white shadow-md p-4">
//               <h2 className="text-lg font-bold mb-4">Top Categories</h2>
//               <ul className="space-y-2">
//                 {categories.map((category, index) => (
//                   <li
//                     key={index}
//                     className="flex items-center p-2 rounded-md cursor-pointer hover:bg-gray-100 transition"
//                     onMouseEnter={() => setHoveredCategory(category.name)}
//                     onMouseLeave={() => setHoveredCategory(null)}
//                   >
//                     {category.name}
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Hover Content Panel */}
//             {hoveredCategory && (
//               <div className="absolute left-64 top-0 h-screen w-72 bg-gray-50 shadow-lg p-4">
//                 <h3 className="text-lg font-semibold">{hoveredCategory}</h3>
//                 <p className="text-sm text-gray-600">
//                   {
//                     categories.find((cat) => cat.name === hoveredCategory)
//                       ?.content
//                   }
//                 </p>
//                 <ul className="mt-4 space-y-2">
//                   <li className="hover:text-blue-600 cursor-pointer">
//                     Subcategory 1
//                   </li>
//                   <li className="hover:text-blue-600 cursor-pointer">
//                     Subcategory 2
//                   </li>
//                   <li className="hover:text-blue-600 cursor-pointer">
//                     Subcategory 3
//                   </li>
//                 </ul>
//               </div>
//             )}
//           </div>
//         </section>

//         <section className="bg-gray-200 col-span-2 ">
//           <Slider />
//         </section>

//         <section className="bg-gray-400  text-center">
//           <div className="grid grid-cols-1 gap-6 m-4">
//             {cards2.map((card, index) => (
//               <div key={index} className="relative rounded-lg overflow-hidden">
//                 <Image
//                   src={card.img}
//                   alt={card.title}
//                   width={500}
//                   height={300}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 flex flex-col justify-between p-4">
//                   <h3 className="text-white text-lg font-semibold">
//                     {card.title}
//                   </h3>
//                   <a href={card.link} className="text-white underline text-sm">
//                     {card.linkText}
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>
//       </div>

//       <div className="relative w-full px-6">
//         <h2 className="text-lg font-bold mb-4">Trending Categories</h2>
//         <CategorySlider categories={homeCategories} />
//       </div>


//       <div className="flex items-center justify-center min-h-screen bg-[#fdfbf5] px-6 py-12">
//         <div className="bg-white shadow-lg rounded-2xl flex max-w-5xl w-full overflow-hidden">
//           {/* Left Side - Image & Animation */}
//           <div className="w-1/2 relative p-6 flex items-center justify-center">
//             <div className="relative">
//               <Image
//                 src="/images/man-holding-phone.png"
//                 alt="User"
//                 width={300}
//                 height={300}
//                 className="rounded-full"
//               />
//               {/* Floating Icons */}
//               <div className="absolute top-6 left-[-30px] bg-white p-2 rounded-lg shadow-md text-xs">
//                 Great deals with Incredible Sellers all over India
//               </div>
//               <div className="absolute bottom-6 left-[-40px] bg-white p-2 rounded-lg shadow-md text-xs">
//                 Your order is on the way <br /> 2:00pm
//               </div>
//             </div>
//           </div>

//           {/* Right Side - Form */}
//           <div className="w-1/2 p-10">
//             <h2 className="text-xl font-bold">Post Buy Requirement</h2>
//             <p className="text-sm text-gray-500 mb-4">
//               Tell us what you need, and we'll help you get quotes
//             </p>

//             {/* Progress Bar */}
//             <div className="w-full bg-gray-200 h-1 rounded-full mb-4">
//               <div className="w-1/4 bg-orange-400 h-1 rounded-full"></div>
//             </div>

//             {/* Input Fields */}
//             <div className="space-y-4">
//               <input
//                 type="text"
//                 placeholder="Enter the product you are looking for..."
//                 className="w-full p-3 border rounded-lg focus:ring focus:ring-orange-300"
//               />
//               <div className="flex gap-2">
//                 <select className="border p-3 rounded-lg">
//                   <option>+91</option>
//                 </select>
//                 <input
//                   type="tel"
//                   placeholder="Enter Mobile Number"
//                   className="w-full p-3 border rounded-lg"
//                 />
//               </div>
//             </div>

//             {/* Voice Recording */}
//             <div
//               className={`mt-6 p-4 border rounded-lg flex items-center gap-3 ${
//                 isRecording ? "bg-red-100" : "bg-gray-100"
//               }`}
//               onClick={() => setIsRecording(!isRecording)}
//             >
//               <Mic className="text-red-500" />
//               <span>
//                 {isRecording ? "Recording..." : "Click here to record"}
//               </span>
//             </div>

//             {/* Checkbox */}
//             <div className="mt-4 flex items-center gap-2">
//               <input type="checkbox" id="loan" className="w-4 h-4" />
//               <label htmlFor="loan">Looking for a loan.</label>
//             </div>

//             {/* Submit Button */}
//             <button className="mt-6 w-full bg-blue-500 text-white py-3 rounded-lg flex items-center justify-center gap-2">
//               Continue <ArrowRight />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TradePage;
