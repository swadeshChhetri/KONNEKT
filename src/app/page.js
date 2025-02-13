// src/app/products/page.js (Server Component)

"use client";
import Image from "next/image";
// import { products } from "@/data/products";
import { useEffect, useState, useRef } from "react";
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
import { Landmark } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

const products = [
  {
    name: "Disposable Shoe Cover",
    price: 2.5,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Ultrasonic Cleaners",
    price: 2500,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Polished Acoustic Chair",
    price: 4300,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Copper Pooja Kalash",
    price: 500,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Printed Promotion Umbrella",
    price: 163,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Cotton Printed Dupatta",
    price: 120,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Sample Product 7",
    price: 999,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Sample Product 8",
    price: 799,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Disposable Shoe Cover",
    price: 2.5,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Ultrasonic Cleaners",
    price: 2500,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Polished Acoustic Chair",
    price: 4300,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Copper Pooja Kalash",
    price: 500,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Printed Promotion Umbrella",
    price: 163,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Cotton Printed Dupatta",
    price: 120,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Sample Product 7",
    price: 999,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Sample Product 8",
    price: 799,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Disposable Shoe Cover",
    price: 2.5,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Ultrasonic Cleaners",
    price: 2500,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Polished Acoustic Chair",
    price: 4300,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Copper Pooja Kalash",
    price: 500,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Printed Promotion Umbrella",
    price: 163,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Cotton Printed Dupatta",
    price: 120,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Sample Product 7",
    price: 999,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Sample Product 8",
    price: 799,
    image: "https://via.placeholder.com/150",
  },
  // Add more products as needed...
];

const testimonials2 = [
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

const testimonials = [
  {
    name: "Mr. Patel Hiren",
    company: "Spice Villa Export, India",
    feedback:
      "ExportersIndia portal is quite effective. I am getting a lot of orders throughout the world. I am one happy client...",
  },
  {
    name: "Shelly Luo",
    company: "Viss Lighting, China",
    feedback:
      "Viss Lighting is one of the top manufacturers in the LED display & lighting industry with over 7 years of experience...",
  },
  {
    name: "Jalpenkumar",
    company: "Bhrza Technologies Company, India",
    feedback:
      "I want to thank my Relationship Manager for his support and guidance. I believed in him and the services of your portal...",
  },
];

function HomePage() {
//   const categories = [
//     { icon: User, label: "" },
//     { icon: Shirt, label: "" },
//     { icon: Home, label: "" },
//     { icon: FlaskConical, label: "" },
//     { icon: Package, label: "" },
//     { icon: Gem, label: "" },
//     { icon: ShoppingBag, label: "" },
//     { icon: Leaf, label: "" },
//     { icon: Headphones, label: "" },
//     { icon: Dumbbell, label: "" },
//     { icon: Briefcase, label: "" },
//     { icon: Baby, label: "" },
//     { icon: Car, label: "" },
//     { icon: Box, label: "" },
//     { icon: Car, label: "" },
//     { icon: Box, label: "" },
//   ];

//   const cards1 = [
//     {
//       img: "/B2B/18.jpg", // Replace with actual image paths
//       title: "Connect with Top-Ranking Manufacturers",
//       link: "#",
//       linkText: "View more",
//     },
//     {
//       img: "/B2B/16.jpg",
//       title: "Request Samples with Ease",
//       link: "#",
//       linkText: "View more",
//     },
//     {
//       img: "/B2B/24.jpg",
//       title: "Experience Live Factory Tours",
//       link: "#",
//       linkText: "View LIVE",
//     },
//   ];

//   const features = [
//     {
//       icon: <Grid size={40} className="text-white" />,
//       title: "Explore Millions of Business Offerings",
//       description:
//         "Discover a vast selection of products and suppliers from around the world, tailored to your business needs.",
//     },
//     {
//       icon: <ShieldCheck size={40} className="text-white" />,
//       title: "Assured Quality & Secure Transactions",
//       description:
//         "Source confidently from verified suppliers with guaranteed production quality and end-to-end order protection—from payment to delivery.",
//     },
//     {
//       icon: <Repeat size={40} className="text-white" />,
//       title: "Your All-in-One Trading Solution",
//       description:
//         "Seamlessly manage everything from product discovery to order placement, payment, and fulfillment—all in one platform.",
//     },
//     {
//       icon: <Layers size={40} className="text-white" />,
//       title: "A Trading Experience Tailored for You",
//       description:
//         "Enjoy exclusive perks, including special discounts, enhanced security, and dedicated support to help scale your business effortlessly.",
//     },
//   ];

//   const cards2 = [
//     {
//       img: "/b2b.jpg", // Replace with actual image paths
//       title: "Business-to-Business",
//       link: "/BusinessProducts",
//       linkText: "Register To B2B",
//     },
//     {
//       img: "/b2c.jpg",
//       title: "Business-to-Consumer",
//       link: "/ConsumerProducts",
//       linkText: "Register To B2C",
//     },
//   ];

//   const steps = [
//     {
//       icon: <Search className="w-8 h-8 text-orange-500" />,
//       title: "Find the Perfect Match",
//       description:
//         "Search and filter from millions of product and supplier offerings to find the matching ones for your business.",
//       highlighted: true,
//     },
//     {
//       icon: <CheckCircle className="w-6 h-6 text-gray-600" />,
//       title: "Choose with Confidence",
//     },
//     {
//       icon: <DollarSign className="w-6 h-6 text-gray-600" />,
//       title: "Secure & Seamless Payments",
//     },
//     {
//       icon: <Globe className="w-6 h-6 text-gray-600" />,
//       title: "Transparent Fulfillment",
//     },
//     {
//       icon: <UserCheck className="w-6 h-6 text-gray-600" />,
//       title: "Effortless Management",
//     },
//   ];

//   // const sections = [
//   //   {
//   //     title: "Top ranking",
//   //     link: "#",
//   //     items: [
//   //       {
//   //         title: "Most popular",
//   //         subtitle: "Men's Printed T-shirts",
//   //         image: "/popular-tshirts.jpg", // Replace with actual images
//   //       },
//   //     ],
//   //   },
//   //   {
//   //     title: "New arrivals",
//   //     link: "#",
//   //     items: [
//   //       { title: "96,500+ products added today", image: "/new-products.jpg" },
//   //       // { image: "/headphones.jpg" },
//   //       // { image: "/wallpaper.jpg" },
//   //       // { image: "/drone.jpg" },
//   //     ],
//   //   },
//   //   {
//   //     title: "Top deals",
//   //     link: "#",
//   //     items: [
//   //       { title: "180-day lowest price", image: "/electric-toothbrush.jpg" },
//   //       // {
//   //       //   title: "Deals on best sellers",
//   //       //   image: "/earbuds.jpg",
//   //       //   discount: "40% OFF",
//   //       // },
//   //     ],
//   //   },
//   // ];

//   return (
//     <>
//       <section className="py-10 pt-24">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 m-4">
//           {cards2.map((card, index) => (
//             <div key={index} className="relative rounded-lg overflow-hidden">
//               <Image
//                 src={card.img}
//                 alt={card.title}
//                 width={500}
//                 height={300}
//                 className="w-full h-64 object-cover"
//               />
//               <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 flex flex-col justify-between p-4">
//                 <h3 className="text-white text-lg font-semibold">
//                   {card.title}
//                 </h3>
//                 <a
//                   href={card.link}
//                   className="text-white text-sm rounded-[5rem] w-[150px] p-4 bg-primary text-center"
//                 >
//                   {/*      margin: 7rem 4%;
    
//      */}

//                   {card.linkText}
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       <div className="bg-[#ebe5e4] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-8">
//         {features.map((feature, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-start bg-[#271f1e] text-white p-6 rounded-2xl shadow-md"
//           >
//             <div className="p-4 rounded-full mb-4 bg-primary">
//               {feature.icon}
//             </div>
//             <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
//             <p className="text-sm text-gray-200">{feature.description}</p>
//           </div>
//         ))}
//       </div>

//       <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-10">
//         <div className="max-w-lg">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
//             Discover millions of products and services, perfectly matched to
//             help your business thrive and grow.
//           </h2>
//         </div>

//         <div className="grid grid-cols-2 gap-6 mt-6 md:mt-0 text-gray-900">
//           <div className="border-r-2 pl-4">
//             <p className="text-5xl font-bold text-orange-500">200M+</p>
//             <p className="text-2xl text-gray-700">products</p>
//           </div>
//           <div className="border-r-2 pl-4">
//             <p className="text-5xl font-bold text-orange-500">200K+</p>
//             <p className="text-2xl text-gray-700">suppliers</p>
//           </div>
//           <div className="border-r-2 pl-4">
//             <p className="text-5xl font-bold text-orange-500">5,900</p>
//             <p className="text-2xl text-gray-700">product categories</p>
//           </div>
//           <div className="border-r-2 pl-4">
//             <p className="text-5xl font-bold text-orange-500">200+</p>
//             <p className="text-2xl text-gray-700">countries and regions</p>
//           </div>
//         </div>
//       </section>

//       <section className="flex flex-wrap justify-center gap-6 p-6">
//         {categories.map(({ icon: Icon, label }, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-center justify-center w-32 h-32 border-2 border-gray-200 rounded-full hover:shadow-lg transition"
//           >
//             <Icon className="w-8 h-8 text-gray-700" />
//             <p className="text-sm text-center mt-2 text-gray-700">{label}</p>
//           </div>
//         ))}
//       </section>

//       <section className="p-6">
//         <div className="grid grid-cols-3 gap-6">
//           <div>
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-lg font-bold text-gray-900">
//                 {/* {section.title} */} Braking
//               </h2>
//               <a
//                 // href={section.link}
//                 href="#"
//                 className="text-blue-500 text-sm hover:underline"
//               >
//                 View more
//               </a>
//             </div>

//             <div className="bg-white p-4 rounded-xl shadow-md">
//               <div className="flex-1">
//                 <ResponsiveSlider
//                   images={["/B2B/slide1.webp", "/B2B/slide2.jpeg", "/B2B/slide3.webp"]}
//                   height="h-64"
//                   objectFit="object-contain"
//                 />
//               </div>
//             </div>
//           </div>

//           <div>
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-lg font-bold text-gray-900">
//                 {/* {section.title} */} Braking
//               </h2>
//               <a
//                 // href={section.link}
//                 href="#"
//                 className="text-blue-500 text-sm hover:underline"
//               >
//                 View more
//               </a>
//             </div>

//             <div className="bg-white p-4 rounded-lg shadow-md">
//               <p className="text-gray-600 font-semibold mb-4">
//                 99,300+ products added today
//               </p>

//               {/* First section with grid images */}
//               <div className="grid grid-cols-2 gap-4">
//                 <img
//                   src="/B2B/15.jpg"
//                   alt="Jacket"
//                   className="rounded-lg w-full h-auto"
//                 />
//                 <img
//                   src="/B2B/16.jpg"
//                   alt="Earbuds"
//                   className="rounded-lg w-full h-auto"
//                 />
//                 <img
//                   src="/B2B/17.jpg"
//                   alt="Headphones"
//                   className="rounded-lg w-full h-auto"
//                 />
//                 <img
//                   src="/B2B/18.jpg"
//                   alt="Bottles"
//                   className="rounded-lg w-full h-auto"
//                 />
//               </div>

//               {/* Second section with an image and text */}
//               <div className="bg-gray-50 p-4 mt-6 rounded-lg flex items-center gap-4">
//                 <img
//                   src="/B2B/19.jpg"
//                   alt="Batteries"
//                   className="w-24 h-24 rounded-lg"
//                 />
//                 <div>
//                   <h3 className="text-lg font-bold">New this week</h3>
//                   <p className="text-gray-500">
//                     Exclusive Products from Verified Suppliers
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div>
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-lg font-bold text-gray-900">
//                 {/* {section.title} */} Braking
//               </h2>
//               <a
//                 // href={section.link}
//                 href="#"
//                 className="text-blue-500 text-sm hover:underline"
//               >
//                 View more
//               </a>
//             </div>

//             {/* Section Title */}
//             {/* <div className="bg-white p-4 rounded-xl shadow-md"> */}

//             {/* <div className="bg-gray-100 p-6 rounded-lg"> */}

//             <div className="bg-white p-2 rounded-lg shadow-md">
//               {/* First section with grid images */}

//               <div className="bg-gray-50 p-2 mt-2 rounded-lg flex items-center gap-4">
//                 <img
//                   src="/B2B/19.jpg"
//                   alt="Batteries"
//                   className="w-24 h-24 rounded-lg"
//                 />
//                 <div>
//                   <h3 className="text-lg font-bold">New this week</h3>
//                   <p className="text-gray-500">
//                     Exclusive Products from Verified Suppliers
//                   </p>
//                 </div>
//               </div>

//               <div>
//                 <img
//                   src="/B2B/20.jpg"
//                   alt="Jacket"
//                   className="rounded-lg w-full h-auto"
//                 />
//               </div>

//               {/* Second section with an image and text */}
//             </div>
//             {/* </div> */}
//           </div>
//         </div>
//       </section>

//       <section className="py-10 p-8">
//         <h2 className="text-3xl font-semibold mb-6">
//           Source direct-from-factory
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {cards1.map((card, index) => (
//             <div key={index} className="relative rounded-lg overflow-hidden">
//               <Image
//                 src={card.img}
//                 alt={card.title}
//                 width={500}
//                 height={300}
//                 className="w-full h-64 object-cover"
//               />
//               <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 flex flex-col justify-between p-4">
//                 <h3 className="text-white text-lg font-semibold">
//                   {card.title}
//                 </h3>
//                 <a href={card.link} className="text-white underline text-sm">
//                   {card.linkText}
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       <section className="py-12">
//         {/* Heading Section */}
//         <h2 className="text-3xl font-semibold text-gray-900 mb-6 max-w-2xl">
//           Streamline ordering from search to fulfillment, all in one place
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//           {/* Progress Section */}
//           <div className="relative">
//             {steps.map((step, index) => (
//               <div key={index} className="flex items-start space-x-4">
//                 {/* Progress Line */}
//                 <div className="flex flex-col items-center">
//                   <div className="relative flex items-center justify-center w-12 h-12 bg-white">
//                     {step.icon}
//                   </div>
//                   {index !== steps.length - 1 && (
//                     <div className="w-1 h-12 bg-gray-300"></div>
//                   )}
//                 </div>

//                 {/* Step Content */}
//                 <div className="pb-6">
//                   <h3
//                     className={`text-lg font-semibold ${
//                       step.highlighted ? "text-orange-700" : "text-gray-800"
//                     }`}
//                   >
//                     {step.title}
//                   </h3>
//                   {step.description && (
//                     <p className="text-gray-600 text-sm">{step.description}</p>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Image Section */}
//           <div className="relative">
//             <Image
//               src="/B2B/21.jpg" // Replace with actual image
//               alt="Product Search"
//               width={500}
//               height={400}
//               className="rounded-lg shadow-lg"
//             />
//           </div>
//         </div>
//       </section>

//       <section>
//         <div className="bg-[#ebe5e4] text-black py-12 px-6 lg:px-20">
//           {/* Title and Description */}
//           <div className="max-w-3xl mx-auto text-center mb-10">
//             <h2 className="text-3xl font-bold">
//               Trade with confidence—ensuring top-notch production quality and
//               secure purchase protection
//             </h2>
//           </div>

//           {/* Two Cards Section */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
//             {/* First Card */}
//             <div className="bg-white bg-opacity-10 p-6 rounded-lg border border-black">
//               <h3 className="text-lg text-black mb-2">
//                 Ensure Production Quality with
//               </h3>
//               <h2 className="text-2xl font-bold flex items-center">
//                 <span className="text-blue-500">Verified</span> Supplier
//               </h2>
//               <p className="text-black-300 mt-3">
//                 Connect with a network of trusted suppliers, each with
//                 third-party-verified credentials and capabilities. Look for the
//                 "Verified" badge to source confidently from experienced
//                 suppliers your business can rely on.
//               </p>
//               <div className="mt-5 flex items-center gap-4">
//                 <button className="bg-white text-black px-4 py-2 rounded-full flex items-center">
//                   ⏺ Watch video
//                 </button>
//                 <a href="#" className="text-black underline">
//                   Learn more
//                 </a>
//               </div>
//             </div>

//             {/* Second Card */}
//             <div className="bg-white bg-opacity-10 p-6 rounded-lg border border-black">
//               <h3 className="text-lg text-black mb-2">
//                 Secure Your Purchase with
//               </h3>
//               <h2 className="text-2xl font-bold flex items-center">
//                 <span className="bg-yellow-500 text-black px-2 py-1 rounded mr-2">
//                   💰
//                 </span>
//                 Trade Assurance
//               </h2>
//               <p className="text-black-300 mt-3">
//                 Source confidently with access to secure payment options,
//                 protection against product or shipping issues, and mediation
//                 support for any purchase-related concerns when you order and pay
//                 on KONNEKT.com.
//               </p>
//               <div className="mt-5 flex items-center gap-4">
//                 <button className="bg-white text-black px-4 py-2 rounded-full flex items-center">
//                   ⏺ Watch video
//                 </button>
//                 <a href="#" className="text-black underline">
//                   Learn more
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

const [hoveredCategory, setHoveredCategory] = useState(null);
const [index, setIndex] = useState(0);
const [isRecording, setIsRecording] = useState(false);
const [direction, setDirection] = useState(1);

useEffect(() => {
  const interval = setInterval(() => {
    setDirection(1);
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, 5000);

  return () => clearInterval(interval);
}, []);

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

const cities = [
  { name: "Delhi", icon: <Landmark size={40} /> },
  { name: "Gurugram", icon: <Landmark size={40} /> },
  { name: "Noida", icon: <Landmark size={40} /> },
  { name: "Bengaluru", icon: <Landmark size={40} /> },
  { name: "Chennai", icon: <Landmark size={40} /> },
  { name: "Mumbai", icon: <Landmark size={40} /> },
  { name: "Ahmedabad", icon: <Landmark size={40} /> },
  { name: "Kolkata", icon: <Landmark size={40} /> },
  { name: "Pune", icon: <Landmark size={40} /> },
  { name: "Surat", icon: <Landmark size={40} /> },
  { name: "Hyderabad", icon: <Landmark size={40} /> },
  { name: "More Cities", icon: <Landmark size={40} /> },
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

const scrollContainerRef = useRef(null);
const [canScrollLeft, setCanScrollLeft] = useState(false);

// Scroll 300px to the right
const handleScrollRight = () => {
  if (scrollContainerRef.current) {
    scrollContainerRef.current.scrollLeft += 300;
  }
};

// Scroll 300px to the left
const handleScrollLeft = () => {
  if (scrollContainerRef.current) {
    scrollContainerRef.current.scrollLeft -= 300;
  }
};

// Show/hide left arrow based on scroll position
const handleScroll = (e) => {
  const scrollLeft = e.currentTarget.scrollLeft;
  setCanScrollLeft(scrollLeft > 0);
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
          className="flex flex-col items-center justify-center w-32 h-32 border-2 border-gray-200 rounded-full transition"
        >
          <Icon className="w-8 h-8 text-gray-700 transition-transform duration-200 hover:scale-110" />
          <p className="text-sm text-center mt-2 text-gray-700 transition-colors duration-200 hover:text-blue-600">
            {label}
          </p>
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

    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-center mb-4">
        Find Suppliers from Top Cities
      </h2>
      <div className="grid grid-cols-4 gap-6 justify-items-center">
        {cities.map((city, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1, borderColor: "#007BFF" }}
            className="flex flex-col items-center justify-center w-24 h-24 border-2 border-gray-300 rounded-full cursor-pointer transition-all duration-200 ease-in-out"
          >
            {city.icon}
            <span className="text-sm font-medium mt-2">{city.name}</span>
          </motion.div>
        ))}
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

    <div className="bg-gray-100 p-10 rounded-lg shadow-md text-center">
      <h2 className="text-2xl font-bold mb-6">CLIENT TESTIMONIAL</h2>
      <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
        <div className="w-full flex items-center justify-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              initial={{ x: direction === 1 ? "100%" : "-100%", opacity: 0 }}
              animate={{ x: "0%", opacity: 1 }}
              exit={{ x: direction === 1 ? "-100%" : "100%", opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="bg-white p-6 rounded-lg shadow-md w-full"
            >
              <Quote className="text-orange-500 w-8 h-8 mb-4" />
              <p className="text-gray-700 text-lg">
                {testimonials[index].feedback}
              </p>
              <p className="font-bold mt-4">{testimonials[index].name}</p>
              <p className="text-gray-500">{testimonials[index].company}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {testimonials.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition-all ${
              i === index ? "bg-orange-500" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>

    <main className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">POPULAR PRODUCTS</h1>
      <div className="relative bg-white p-4 rounded shadow">
        {/* Left Arrow: Only shows when user has scrolled right */}
        {canScrollLeft && (
          <button
            onClick={handleScrollLeft}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow hidden md:block"
          >
            <ChevronLeft size={20} />
          </button>
        )}

        {/* Scrollable Container */}
        <div className="overflow-hidden">
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="grid grid-flow-col grid-rows-2 gap-4 auto-cols-[200px] overflow-x-scroll scroll-smooth"
          >
            {products.map((product, index) => (
              <div key={index} className="border p-2 rounded shadow-sm">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-32 object-cover mb-2"
                />
                <p className="font-semibold text-sm mb-1">{product.name}</p>
                <p className="text-gray-600 text-sm">
                  ₹ {product.price} / Piece
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow: Always shown (you can add logic to hide it if needed) */}
        <button
          onClick={handleScrollRight}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow hidden md:block"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </main>
  </div>
)
            };

export default HomePage;
