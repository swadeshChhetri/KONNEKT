"use client";
import { useParams } from "next/navigation";
// import { products } from "../../data/products"; // Import product data
import {products} from "../../../data/products";
import { useState } from "react";
import { useRouter } from "next/navigation"; 
import { motion } from "framer-motion";
import { ShoppingCart, MessageCircle } from "lucide-react";

const ProductDetails = () => {
  const params = useParams();
  // const [selectedImage, setSelectedImage] = useState("/B2B/1.jpg");
  const [count, setCount] = useState(1); // Initial count value
  const router = useRouter(); // Initialize the router

  // const images = [
  //   "/B2B/1.jpg",
  //   "/B2B/2.jpg",
  //   "/B2B/3.jpg",
  //   "/B2B/4.jpg",
  //   "/B2B/5.jpg",
  // ];
  const id = Number(params?.id); // Convert param to number

  const product = products.find((p) => p.id === id); // Find product by ID

  if (!product) return <p className="text-center mt-10">Product not found</p>;

  return (
    <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-6 pt-24">
    {/* Left Section: Product Images */}
    <div className="sticky top-4 space-y-6">
      <img
        src={product.image}
        alt="Product Image"
        className="w-full h-96 object-cover rounded-lg shadow"
      />
      <div className="flex gap-2">
        {/* {images.map((img, index) => (
          <img
            key={index}
            src={img}
            className="w-16 h-16 rounded-lg shadow cursor-pointer"
            onClick={() => setSelectedImage(img)}
          />
        ))} */}
      </div>
    </div>

    {/* Middle Section: Product Details */}
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">
        Semi-Automatic Stack Chimney Emission System
      </h1>
      <p className="text-lg font-semibold text-gray-600">₹33,040.00 INR</p>

      {/* Buttons */}
      <div className="flex gap-3 mt-4">
        {/* Quantity Counter */}
        <div className="flex items-center border rounded-lg">
          <button
            className="px-2 py-1 text-lg bg-gray-200 hover:bg-gray-300 rounded-l-lg"
            onClick={() => setCount((prev) => Math.max(1, prev - 1))} // Ensure count doesn't go below 1
          >
            -
          </button>
          <span className="px-3 text-lg font-semibold">{count}</span>
          <button
            className="px-2 py-1 text-lg bg-gray-200 hover:bg-gray-300 rounded-r-lg"
            onClick={() => setCount((prev) => prev + 1)}
          >
            +
          </button>
        </div>

        <button className="btn btn-primary flex items-center">
          <ShoppingCart className="w-5 h-5 mr-2" />
          Buy Now
        </button>
        <button className="btn btn-outline flex items-center">
          <MessageCircle className="w-5 h-5 mr-2" />
          Send Inquiry
        </button>
      </div>

      {/* Product Details Table */}
      <div className="overflow-x-auto mt-6">
        <table className="table w-full border">
          <tbody>
            <tr>
              <td className="font-semibold">Material</td>
              <td>Ozone Generator</td>
            </tr>
            <tr>
              <td className="font-semibold">Automatic Grade</td>
              <td>Semi-Automatic</td>
            </tr>
            <tr>
              <td className="font-semibold">Voltage</td>
              <td>220-440V</td>
            </tr>
            <tr>
              <td className="font-semibold">Warranty</td>
              <td>1 Year</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    {/* Right Section: Seller Details */}
    <div className="space-y-4 p-4 border rounded-lg shadow">
      <h2 className="text-xl font-semibold">Seller Details</h2>
      <p className="text-gray-600">Aeolus Sustainable Bioenergy Pvt. Ltd.</p>
      <p className="text-gray-500">Location: Surat, Gujarat</p>
      <div className="flex gap-4">
        <button className="btn btn-primary">View Number</button>
        <button className="btn btn-outline">Contact Seller</button>
      </div>
    </div>
  </div>
  );
};

export default ProductDetails;
