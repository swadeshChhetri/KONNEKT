"use client";
import { useState } from "react";
import { ShoppingCart, Bolt } from "lucide-react";

export default function ProductDetails({ product }) {
  const { name, price, originalPrice, discount, images, rating, reviews } =
    product;
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="container mx-auto px-4 py-8 grid md:grid-cols-2 gap-8 p-16">
      {/* Left Side - Product Images */}
      <div>
        <img
          src={selectedImage}
          alt={name}
          className="w-full h-auto rounded-lg shadow-lg"
        />
        <div className="flex gap-2 mt-4">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="Thumbnail"
              className={`w-20 h-20 rounded-lg cursor-pointer border-2 ${
                selectedImage === img ? "border-blue-500" : "border-gray-300"
              }`}
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
      </div>

      {/* Right Side - Product Info */}
      <div>
        <h1 className="text-2xl font-bold">{name}</h1>
        <p className="text-green-600 text-lg font-semibold">Special Price</p>
        <p className="text-3xl font-bold">
          {price}{" "}
          <span className="text-gray-500 line-through text-lg">
            {originalPrice}
          </span>
          <span className="text-green-500 text-lg ml-2">{discount}</span>
        </p>
        <p className="mt-2 text-gray-600">
          ⭐ {rating} ({reviews} reviews)
        </p>

        {/* Offers Section */}
        <div className="mt-4">
          <p className="font-semibold">Coupons for you:</p>
          <ul className="list-disc ml-5 text-gray-600">
            <li>Extra 10% off up to ₹100</li>
            <li>Bank Offer: 5% Unlimited Cashback</li>
            <li>Combo Offer: Buy 2 items & save ₹50</li>
          </ul>
        </div>

        {/* Action Buttons */}
        {/* <div className="mt-6 flex gap-4">
          <button className="bg-orange-500 text-white px-6 py-3 w-1/2 rounded-lg text-lg font-semibold shadow-md inline-flex items-center justify-center gap-2">
            <ShoppingCart size={20} />
            <span>ADD TO CART</span>
          </button>
          <button className="bg-orange-600 text-white px-6 py-3 w-1/2 rounded-lg text-lg font-semibold shadow-md">
            <div>
              <div>
                <Bolt size={20} />
                <span className="mt-56">BUY NOW</span>
              </div>
            </div>
          </button>
        </div> */}

        {/* Action Buttons */}
        <div className="mt-6 flex gap-4">
          <button className="bg-orange-500 text-white px-6 py-3 w-1/2 rounded-lg text-lg font-semibold shadow-md">
            ADD TO CART
          </button>
          <button className="bg-orange-600 text-white px-6 py-3 w-1/2 rounded-lg text-lg font-semibold shadow-md">
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
}
