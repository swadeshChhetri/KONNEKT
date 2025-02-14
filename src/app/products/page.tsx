"use client";
import React from "react";
import Link from "next/link";

// Define TypeScript interface for a product
interface Product {
  id : number;
  name: string;
  price: number;
  image: string;
}

const Products: React.FC = () => {
  // Define the product list with proper typing
  const products: Product[] = [
    { id: 1, name: "Disposable Shoe Cover", price: 2.5, image: "/B2B/1.jpg" },
    { id: 2, name: "Ultrasonic Cleaners", price: 2500, image: "https://via.placeholder.com/150" },
    { id: 3, name: "Polished Acoustic Chair", price: 4300, image: "https://via.placeholder.com/150" },
    { id: 4, name: "Copper Pooja Kalash", price: 500, image: "https://via.placeholder.com/150" },
    { id: 5, name: "Printed Promotion Umbrella", price: 163, image: "https://via.placeholder.com/150" },
    { id: 6, name: "Cotton Printed Dupatta", price: 120, image: "https://via.placeholder.com/150" },
    { id: 7, name: "Disposable Shoe Cover", price: 2.5, image: "/B2B/1.jpg" },
    { id: 8, name: "Ultrasonic Cleaners", price: 2500, image: "https://via.placeholder.com/150" },
    { id: 9, name: "Polished Acoustic Chair", price: 4300, image: "https://via.placeholder.com/150" },
    { id: 10, name: "Copper Pooja Kalash", price: 500, image: "https://via.placeholder.com/150" },
    { id: 11, name: "Printed Promotion Umbrella", price: 163, image: "https://via.placeholder.com/150" },
    { id: 12, name: "Cotton Printed Dupatta", price: 120, image: "https://via.placeholder.com/150" },
    { id: 13, name: "Disposable Shoe Cover", price: 2.5, image: "/B2B/1.jpg" },
    { id: 14, name: "Ultrasonic Cleaners", price: 2500, image: "https://via.placeholder.com/150" },
    { id: 15, name: "Polished Acoustic Chair", price: 4300, image: "https://via.placeholder.com/150" },
    { id: 16, name: "Copper Pooja Kalash", price: 500, image: "https://via.placeholder.com/150" },
    { id: 17, name: "Printed Promotion Umbrella", price: 163, image: "https://via.placeholder.com/150" },
    { id: 18, name: "Cotton Printed Dupatta", price: 120, image: "https://via.placeholder.com/150" },
    { id: 19, name: "Disposable Shoe Cover", price: 2.5, image: "/B2B/1.jpg" },
    { id: 20, name: "Ultrasonic Cleaners", price: 2500, image: "https://via.placeholder.com/150" },
    { id: 21, name: "Polished Acoustic Chair", price: 4300, image: "https://via.placeholder.com/150" },
    { id: 22, name: "Copper Pooja Kalash", price: 500, image: "https://via.placeholder.com/150" },
    { id: 23, name: "Printed Promotion Umbrella", price: 163, image: "https://via.placeholder.com/150" },
    { id: 24, name: "Cotton Printed Dupatta", price: 120, image: "https://via.placeholder.com/150" },
    { id: 25, name: "Disposable Shoe Cover", price: 2.5, image: "/B2B/1.jpg" },
    { id: 26, name: "Ultrasonic Cleaners", price: 2500, image: "https://via.placeholder.com/150" },
    { id: 27, name: "Polished Acoustic Chair", price: 4300, image: "https://via.placeholder.com/150" },
    { id: 28, name: "Copper Pooja Kalash", price: 500, image: "https://via.placeholder.com/150" },
    { id: 29, name: "Printed Promotion Umbrella", price: 163, image: "https://via.placeholder.com/150" },
    { id: 30, name: "Cotton Printed Dupatta", price: 120, image: "https://via.placeholder.com/150" },
    { id: 31, name: "Printed Promotion Umbrella", price: 163, image: "https://via.placeholder.com/150" },
    { id: 32, name: "Cotton Printed Dupatta", price: 120, image: "https://via.placeholder.com/150" },
  ];
  

  return (
    <div className="pt-24 px-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product: Product) => (
          <div key={product.id} className="border p-4 rounded shadow-sm bg-white">
             <Link href={`/product/${product.id}`}>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-32 object-cover mb-2"
            />
            </Link>
            <p className="font-semibold text-sm mb-1">{product.name}</p>
            <p className="text-gray-600 text-sm">₹ {product.price} / Piece</p>
            
            {/* Buttons */}
            <div className="mt-3 flex gap-2 w-full">
              <button className="flex-1 bg-gray-200 text-gray-800 px-3 py-2 text-sm rounded-md">
                View Number
              </button>
              <button className="flex-1 bg-blue-600 text-white px-3 py-2 text-sm rounded-md">
                Contact Supplier
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
