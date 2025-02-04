"use client";

import Image from "next/image";
// import { ChevronDown, Globe, Search, ShoppingCart, User } from "lucide-react";
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

import {
  Search,
  CheckCircle,
  DollarSign,
  Globe,
  UserCheck,
} from "lucide-react";

import { Grid, ShieldCheck, Repeat, Layers } from "lucide-react";

import { ChevronDown, ShoppingCart } from "lucide-react";
import Slider from "@/components/Slider";

function HomePage() {
  const categories = [
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

  const cards1 = [
    {
      img: "/factory.jpg", // Replace with actual image paths
      title: "Connect with Top-Ranking Manufacturers",
      link: "#",
      linkText: "View more",
    },
    {
      img: "/samples.jpg",
      title: "Request Samples with Ease",
      link: "#",
      linkText: "View more",
    },
    {
      img: "/live-tour.jpg",
      title: "Experience Live Factory Tours",
      link: "#",
      linkText: "View LIVE",
    },
  ];

  const features = [
    {
      icon: <Grid size={40} className="text-white" />,
      title: "Explore Millions of Business Offerings",
      description:
        "Discover a vast selection of products and suppliers from around the world, tailored to your business needs.",
    },
    {
      icon: <ShieldCheck size={40} className="text-white" />,
      title: "Assured Quality & Secure Transactions",
      description:
        "Source confidently from verified suppliers with guaranteed production quality and end-to-end order protection—from payment to delivery.",
    },
    {
      icon: <Repeat size={40} className="text-white" />,
      title: "Your All-in-One Trading Solution",
      description:
        "Seamlessly manage everything from product discovery to order placement, payment, and fulfillment—all in one platform.",
    },
    {
      icon: <Layers size={40} className="text-white" />,
      title: "A Trading Experience Tailored for You",
      description:
        "Enjoy exclusive perks, including special discounts, enhanced security, and dedicated support to help scale your business effortlessly.",
    },
  ];

  const cards2 = [
    {
      img: "/b2b.jpg", // Replace with actual image paths
      title: "Business-to-Business",
      link: "/BusinessProducts",
      linkText: "Register To B2B",
    },
    {
      img: "/b2c.jpg",
      title: "Business-to-Consumer",
      link: "/ConsumerProducts",
      linkText: "Register To B2C",
    },
  ];

  const steps = [
    {
      icon: <Search className="w-8 h-8 text-orange-500" />,
      title: "Find the Perfect Match",
      description:
        "Search and filter from millions of product and supplier offerings to find the matching ones for your business.",
      highlighted: true,
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-gray-600" />,
      title: "Choose with Confidence",
    },
    {
      icon: <DollarSign className="w-6 h-6 text-gray-600" />,
      title: "Secure & Seamless Payments",
    },
    {
      icon: <Globe className="w-6 h-6 text-gray-600" />,
      title: "Transparent Fulfillment",
    },
    {
      icon: <UserCheck className="w-6 h-6 text-gray-600" />,
      title: "Effortless Management",
    },
  ];

  // const sections = [
  //   {
  //     title: "Top ranking",
  //     link: "#",
  //     items: [
  //       {
  //         title: "Most popular",
  //         subtitle: "Men's Printed T-shirts",
  //         image: "/popular-tshirts.jpg", // Replace with actual images
  //       },
  //     ],
  //   },
  //   {
  //     title: "New arrivals",
  //     link: "#",
  //     items: [
  //       { title: "96,500+ products added today", image: "/new-products.jpg" },
  //       // { image: "/headphones.jpg" },
  //       // { image: "/wallpaper.jpg" },
  //       // { image: "/drone.jpg" },
  //     ],
  //   },
  //   {
  //     title: "Top deals",
  //     link: "#",
  //     items: [
  //       { title: "180-day lowest price", image: "/electric-toothbrush.jpg" },
  //       // {
  //       //   title: "Deals on best sellers",
  //       //   image: "/earbuds.jpg",
  //       //   discount: "40% OFF",
  //       // },
  //     ],
  //   },
  // ];

  return (
    <>
      <section className="py-10 pt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 m-4">
          {cards2.map((card, index) => (
            <div key={index} className="relative rounded-lg overflow-hidden">
              <Image
                src={card.img}
                alt={card.title}
                width={500}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 flex flex-col justify-between p-4">
                <h3 className="text-white text-lg font-semibold">
                  {card.title}
                </h3>
                <a href={card.link} className="text-white text-sm rounded-[5rem] w-[150px] p-2 bg-primary text-center">
           {/*      margin: 7rem 4%;
    
     */}




                  {card.linkText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="bg-[#ebe5e4] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-start bg-[#271f1e] text-white p-6 rounded-2xl shadow-md"
          >
            <div className="p-4 rounded-full mb-4 bg-primary">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-200">{feature.description}</p>
          </div>
        ))}
      </div>

      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-10">

      <div className="max-w-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Discover millions of products and services, perfectly matched to
            help your business thrive and grow.
          </h2>
        </div>

      <div className="grid grid-cols-2 gap-6 mt-6 md:mt-0 text-gray-900">
          <div className="border-r-2 pl-4">
            <p className="text-5xl font-bold text-orange-500">200M+</p>
            <p className="text-2xl text-gray-700">products</p>
          </div>
          <div className="border-r-2 pl-4">
            <p className="text-5xl font-bold text-orange-500">200K+</p>
            <p className="text-2xl text-gray-700">suppliers</p>
          </div>
          <div className="border-r-2 pl-4">
            <p className="text-5xl font-bold text-orange-500">5,900</p>
            <p className="text-2xl text-gray-700">product categories</p>
          </div>
          <div className="border-r-2 pl-4">
            <p className="text-5xl font-bold text-orange-500">200+</p>
            <p className="text-2xl text-gray-700">countries and regions</p>
          </div>
      </div>

      </section>

      <section className="flex flex-wrap justify-center gap-6 p-6">
        {categories.map(({ icon: Icon, label }, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center w-32 h-32 border-2 border-gray-200 rounded-full hover:shadow-lg transition"
          >
            <Icon className="w-8 h-8 text-gray-700" />
            <p className="text-sm text-center mt-2 text-gray-700">{label}</p>
          </div>
        ))}
      </section>

      <section className="p-6">
        <div className="grid grid-cols-3 gap-6">
          {/* {sections.map((section, idx) => ( */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-gray-900">
                {/* {section.title} */} Braking
              </h2>
              <a
                // href={section.link}
                href="#"
                className="text-blue-500 text-sm hover:underline"
              >
                View more
              </a>
            </div>
            {/* Section Title */}
            <div className="bg-white p-4 rounded-xl shadow-md">
              <div className="flex-1">
                <Slider />
              </div>
            </div>

            {/* Product Cards 
              <div className="grid gap-4">
                {section.items.map((item, index) => (
                  <div
                    key={index}
                    className="relative bg-gray-100 rounded-lg overflow-hidden p-4"
                  >
                    {item.image && (
                      <Image
                        src={item.image}
                        alt={item.title || "Product"}
                        width={300}
                        height={200}
                        className="rounded-lg"
                      />
                    )}
                    {item.discount && (
                      <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                        {item.discount}
                      </span>
                    )}
                    {item.title && (
                      <h3 className="text-sm font-semibold mt-2">
                        {item.title}
                      </h3>
                    )}
                    {item.subtitle && (
                      <p className="text-xs text-gray-600">{item.subtitle}</p>
                    )}
                  </div>
                ))}
              </div>*/}
          </div>

          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-gray-900">
                {/* {section.title} */} Braking
              </h2>
              <a
                // href={section.link}
                href="#"
                className="text-blue-500 text-sm hover:underline"
              >
                View more
              </a>
            </div>

            {/* Section Title */}
            {/* <div className="bg-white p-4 rounded-xl shadow-md"> */}

            {/* <div className="bg-gray-100 p-6 rounded-lg"> */}

            <div className="bg-white p-4 rounded-lg shadow-md">
              <p className="text-gray-600 font-semibold mb-4">
                99,300+ products added today
              </p>

              {/* First section with grid images */}
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/images/jacket.png"
                  alt="Jacket"
                  className="rounded-lg w-full h-auto"
                />
                <img
                  src="/images/earbuds.png"
                  alt="Earbuds"
                  className="rounded-lg w-full h-auto"
                />
                <img
                  src="/images/headphones.png"
                  alt="Headphones"
                  className="rounded-lg w-full h-auto"
                />
                <img
                  src="/images/bottles.png"
                  alt="Bottles"
                  className="rounded-lg w-full h-auto"
                />
              </div>

              {/* Second section with an image and text */}
              <div className="bg-gray-50 p-4 mt-6 rounded-lg flex items-center gap-4">
                <img
                  src="/images/batteries.png"
                  alt="Batteries"
                  className="w-24 h-24 rounded-lg"
                />
                <div>
                  <h3 className="text-lg font-bold">New this week</h3>
                  <p className="text-gray-500">
                  Exclusive Products from Verified Suppliers
                  </p>
                </div>
              </div>
            </div>
            {/* </div> */}
          </div>

          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-gray-900">
                {/* {section.title} */} Braking
              </h2>
              <a
                // href={section.link}
                href="#"
                className="text-blue-500 text-sm hover:underline"
              >
                View more
              </a>
            </div>

            {/* Section Title */}
            {/* <div className="bg-white p-4 rounded-xl shadow-md"> */}

            {/* <div className="bg-gray-100 p-6 rounded-lg"> */}

            <div className="bg-white p-2 rounded-lg shadow-md">
              {/* First section with grid images */}

              <div className="bg-gray-50 p-2 mt-2 rounded-lg flex items-center gap-4">
                <img
                  src="/images/batteries.png"
                  alt="Batteries"
                  className="w-24 h-24 rounded-lg"
                />
                <div>
                  <h3 className="text-lg font-bold">New this week</h3>
                  <p className="text-gray-500">
                  Exclusive Products from Verified Suppliers
                  </p>
                </div>
              </div>

              <div>
                <img
                  src="/images/jacket.png"
                  alt="Jacket"
                  className="rounded-lg w-full h-auto"
                />
              </div>

              {/* Second section with an image and text */}
            </div>
            {/* </div> */}
          </div>

          {/* ))} */}
        </div>
      </section>

      <section className="py-10 p-8">
        <h2 className="text-3xl font-semibold mb-6">
          Source direct-from-factory
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards1.map((card, index) => (
            <div key={index} className="relative rounded-lg overflow-hidden">
              <Image
                src={card.img}
                alt={card.title}
                width={500}
                height={300}
                className="w-full h-64 object-cover"
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

      <section className="py-12">
        {/* Heading Section */}
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 max-w-2xl">
          Streamline ordering from search to fulfillment, all in one place
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Progress Section */}
          <div className="relative">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-4">
                {/* Progress Line */}
                <div className="flex flex-col items-center">
                  <div className="relative flex items-center justify-center w-12 h-12 bg-white">
                    {step.icon}
                  </div>
                  {index !== steps.length - 1 && (
                    <div className="w-1 h-12 bg-gray-300"></div>
                  )}
                </div>

                {/* Step Content */}
                <div className="pb-6">
                  <h3
                    className={`text-lg font-semibold ${
                      step.highlighted ? "text-orange-700" : "text-gray-800"
                    }`}
                  >
                    {step.title}
                  </h3>
                  {step.description && (
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Image Section */}
          <div className="relative">
            <Image
              src="/search-products.jpg" // Replace with actual image
              alt="Product Search"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="bg-[#ebe5e4] text-black py-12 px-6 lg:px-20">
          {/* Title and Description */}
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold">
            Trade with confidence—ensuring top-notch production quality and secure purchase protection
            </h2>
          </div>

          {/* Two Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* First Card */}
            <div className="bg-white bg-opacity-10 p-6 rounded-lg border border-black">
              <h3 className="text-lg text-black mb-2">
              Ensure Production Quality with
              </h3>
              <h2 className="text-2xl font-bold flex items-center">
                <span className="text-blue-500">Verified</span> Supplier
              </h2>
              <p className="text-black-300 mt-3">
              Connect with a network of trusted suppliers, each with third-party-verified credentials and capabilities. Look for the "Verified" badge to source confidently from experienced suppliers your business can rely on.
              </p>
              <div className="mt-5 flex items-center gap-4">
                <button className="bg-white text-black px-4 py-2 rounded-full flex items-center">
                  ⏺ Watch video
                </button>
                <a href="#" className="text-black underline">
                  Learn more
                </a>
              </div>
            </div>

            {/* Second Card */}
            <div className="bg-white bg-opacity-10 p-6 rounded-lg border border-black">
              <h3 className="text-lg text-black mb-2">
              Secure Your Purchase with
              </h3>
              <h2 className="text-2xl font-bold flex items-center">
                <span className="bg-yellow-500 text-black px-2 py-1 rounded mr-2">
                  💰
                </span>
                Trade Assurance
              </h2>
              <p className="text-black-300 mt-3">
                Source confidently with access to secure payment options,
                protection against product or shipping issues, and mediation
                support for any purchase-related concerns when you order and pay
                on KONNEKT.com.
              </p>
              <div className="mt-5 flex items-center gap-4">
                <button className="bg-white text-black px-4 py-2 rounded-full flex items-center">
                  ⏺ Watch video
                </button>
                <a href="#" className="text-black underline">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
